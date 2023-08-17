// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { TagResourcesInput, TagResourcesOutput } from "../models/models_0";
import { de_TagResourcesCommand, se_TagResourcesCommand } from "../protocols/Aws_json1_1";
import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TagResourcesCommand}.
 */
export interface TagResourcesCommandInput extends TagResourcesInput {}
/**
 * @public
 *
 * The output of {@link TagResourcesCommand}.
 */
export interface TagResourcesCommandOutput extends TagResourcesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Applies one or more tags to the specified resources. Note the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Not all resources can have tags. For a list of services with resources that
 *                     support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the
 *                         Resource Groups Tagging API</a>. If the resource doesn't yet support
 *                     this operation, the resource's service might support tagging using its own API
 *                     operations. For more information, refer to the documentation for that
 *                     service.</p>
 *             </li>
 *             <li>
 *                 <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>Amazon Web Services General
 *                         Reference.</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>You can only tag resources that are located in the specified Amazon Web Services Region for
 *                     the Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                 <p>To add tags to a resource, you need the necessary permissions for the service
 *                     that the resource belongs to as well as permissions for adding tags. For more
 *                     information, see the documentation for each service.</p>
 *             </li>
 *          </ul>
 *         <important>
 *             <p>Do not store personally identifiable information (PII) or other confidential or
 *                 sensitive information in tags. We use tags to provide you with billing and
 *                 administration services. Tags are not intended to be used for private or sensitive
 *                 data.</p>
 *         </important>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *         <p>In addition to the <code>tag:TagResources</code> permission required by this
 *             operation, you must also have the tagging permission defined by the service that created
 *             the resource. For example, to tag an Amazon EC2 instance using the <code>TagResources</code>
 *             operation, you must have both of the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>tag:TagResource</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ec2:CreateTags</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, TagResourcesCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, TagResourcesCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // TagResourcesInput
 *   ResourceARNList: [ // ResourceARNListForTagUntag // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // TagMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagResourcesCommand(input);
 * const response = await client.send(command);
 * // { // TagResourcesOutput
 * //   FailedResourcesMap: { // FailedResourcesMap
 * //     "<keys>": { // FailureInfo
 * //       StatusCode: Number("int"),
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param TagResourcesCommandInput - {@link TagResourcesCommandInput}
 * @returns {@link TagResourcesCommandOutput}
 * @see {@link TagResourcesCommandInput} for command's `input` shape.
 * @see {@link TagResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. You
 *             can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This error indicates one of the following:</p>
 *         <ul>
 *             <li>
 *                 <p>A parameter is missing.</p>
 *             </li>
 *             <li>
 *                 <p>A malformed string was supplied for the request parameter.</p>
 *             </li>
 *             <li>
 *                 <p>An out-of-range value was supplied for the request parameter.</p>
 *             </li>
 *             <li>
 *                 <p>The target ID is invalid, unsupported, or doesn't exist.</p>
 *             </li>
 *             <li>
 *                 <p>You can't access the Amazon S3 bucket for report storage. For more information, see
 *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-prereqs.html#bucket-policies-org-report">Additional Requirements for Organization-wide Tag Compliance
 *                         Reports</a> in the <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request was denied to limit the frequency of submitted requests.</p>
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.</p>
 *
 */
export class TagResourcesCommand extends $Command<
  TagResourcesCommandInput,
  TagResourcesCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: TagResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsTaggingAPIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagResourcesCommandInput, TagResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TagResourcesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "TagResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: TagResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TagResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagResourcesCommandOutput> {
    return de_TagResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
