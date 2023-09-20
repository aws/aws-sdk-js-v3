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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetComplianceSummaryInput, GetComplianceSummaryOutput } from "../models/models_0";
import { de_GetComplianceSummaryCommand, se_GetComplianceSummaryCommand } from "../protocols/Aws_json1_1";
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
 * The input for {@link GetComplianceSummaryCommand}.
 */
export interface GetComplianceSummaryCommandInput extends GetComplianceSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetComplianceSummaryCommand}.
 */
export interface GetComplianceSummaryCommandOutput extends GetComplianceSummaryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a table that shows counts of resources that are noncompliant with their tag
 *             policies.</p>
 *          <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in
 *             the <i>Organizations User Guide.</i>
 *          </p>
 *          <p>You can call this operation only from the organization's
 *     management account and from the us-east-1 Region.</p>
 *          <p>This operation supports pagination, where the response can be sent in
 *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
 *     if there are additional results available to return. Repeat the query, passing the
 *     <code>PaginationToken</code> response parameter value as an input to the next request until you
 *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
 *     there are no more results waiting to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, GetComplianceSummaryCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, GetComplianceSummaryCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // GetComplianceSummaryInput
 *   TargetIdFilters: [ // TargetIdFilterList
 *     "STRING_VALUE",
 *   ],
 *   RegionFilters: [ // RegionFilterList
 *     "STRING_VALUE",
 *   ],
 *   ResourceTypeFilters: [ // ResourceTypeFilterList
 *     "STRING_VALUE",
 *   ],
 *   TagKeyFilters: [ // TagKeyFilterList
 *     "STRING_VALUE",
 *   ],
 *   GroupBy: [ // GroupBy
 *     "TARGET_ID" || "REGION" || "RESOURCE_TYPE",
 *   ],
 *   MaxResults: Number("int"),
 *   PaginationToken: "STRING_VALUE",
 * };
 * const command = new GetComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetComplianceSummaryOutput
 * //   SummaryList: [ // SummaryList
 * //     { // Summary
 * //       LastUpdated: "STRING_VALUE",
 * //       TargetId: "STRING_VALUE",
 * //       TargetIdType: "ACCOUNT" || "OU" || "ROOT",
 * //       Region: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       NonCompliantResources: Number("long"),
 * //     },
 * //   ],
 * //   PaginationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetComplianceSummaryCommandInput - {@link GetComplianceSummaryCommandInput}
 * @returns {@link GetComplianceSummaryCommandOutput}
 * @see {@link GetComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>The request was denied because performing this operation violates a constraint. </p>
 *          <p>Some of the reasons in the following list might not apply to this specific
 *             operation.</p>
 *          <ul>
 *             <li>
 *                <p>You must meet the prerequisites for using tag policies. For information, see
 *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-prereqs.html">Prerequisites and Permissions for Using Tag Policies</a> in the
 *                         <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>You must enable the tag policies service principal
 *                         (<code>tagpolicies.tag.amazonaws.com</code>) to integrate with Organizations For
 *                     information, see <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html">EnableAWSServiceAccess</a>.</p>
 *             </li>
 *             <li>
 *                <p>You must have a tag policy attached to the organization root, an OU, or an
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
 *          <ul>
 *             <li>
 *                <p>A parameter is missing.</p>
 *             </li>
 *             <li>
 *                <p>A malformed string was supplied for the request parameter.</p>
 *             </li>
 *             <li>
 *                <p>An out-of-range value was supplied for the request parameter.</p>
 *             </li>
 *             <li>
 *                <p>The target ID is invalid, unsupported, or doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You can't access the Amazon S3 bucket for report storage. For more information, see
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
export class GetComplianceSummaryCommand extends $Command<
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput,
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
  constructor(readonly input: GetComplianceSummaryCommandInput) {
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
  ): Handler<GetComplianceSummaryCommandInput, GetComplianceSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComplianceSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "GetComplianceSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ResourceGroupsTaggingAPI_20170126",
        operation: "GetComplianceSummary",
      },
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
  private serialize(input: GetComplianceSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetComplianceSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComplianceSummaryCommandOutput> {
    return de_GetComplianceSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
