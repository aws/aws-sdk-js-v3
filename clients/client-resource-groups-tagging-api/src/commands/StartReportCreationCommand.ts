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

import { StartReportCreationInput, StartReportCreationOutput } from "../models/models_0";
import { de_StartReportCreationCommand, se_StartReportCreationCommand } from "../protocols/Aws_json1_1";
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
 * The input for {@link StartReportCreationCommand}.
 */
export interface StartReportCreationCommandInput extends StartReportCreationInput {}
/**
 * @public
 *
 * The output of {@link StartReportCreationCommand}.
 */
export interface StartReportCreationCommandOutput extends StartReportCreationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Generates a report that lists all tagged resources in the accounts across your
 *             organization and tells whether each resource is compliant with the effective tag policy.
 *             Compliance data is refreshed daily. The report is generated asynchronously.</p>
 *         <p>The generated report is saved to the following location:</p>
 *         <p>
 *             <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code>
 *          </p>
 *         <p>You can call this operation only from the organization's
 *     management account and from the us-east-1 Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, StartReportCreationCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, StartReportCreationCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // StartReportCreationInput
 *   S3Bucket: "STRING_VALUE", // required
 * };
 * const command = new StartReportCreationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartReportCreationCommandInput - {@link StartReportCreationCommandInput}
 * @returns {@link StartReportCreationCommandOutput}
 * @see {@link StartReportCreationCommandInput} for command's `input` shape.
 * @see {@link StartReportCreationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>The request was denied because performing this operation violates a constraint. </p>
 *         <p>Some of the reasons in the following list might not apply to this specific
 *             operation.</p>
 *         <ul>
 *             <li>
 *                 <p>You must meet the prerequisites for using tag policies. For information, see
 *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-prereqs.html">Prerequisites and Permissions for Using Tag Policies</a> in the
 *                         <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>You must enable the tag policies service principal
 *                         (<code>tagpolicies.tag.amazonaws.com</code>) to integrate with Organizations For
 *                     information, see <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html">EnableAWSServiceAccess</a>.</p>
 *             </li>
 *             <li>
 *                 <p>You must have a tag policy attached to the organization root, an OU, or an
 *                     account.</p>
 *             </li>
 *          </ul>
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
export class StartReportCreationCommand extends $Command<
  StartReportCreationCommandInput,
  StartReportCreationCommandOutput,
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
  constructor(readonly input: StartReportCreationCommandInput) {
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
  ): Handler<StartReportCreationCommandInput, StartReportCreationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartReportCreationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "StartReportCreationCommand";
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
  private serialize(input: StartReportCreationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartReportCreationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartReportCreationCommandOutput> {
    return de_StartReportCreationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
