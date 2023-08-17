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

import { DescribeOpsItemsRequest, DescribeOpsItemsResponse } from "../models/models_1";
import { de_DescribeOpsItemsCommand, se_DescribeOpsItemsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOpsItemsCommand}.
 */
export interface DescribeOpsItemsCommandInput extends DescribeOpsItemsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOpsItemsCommand}.
 */
export interface DescribeOpsItemsCommandOutput extends DescribeOpsItemsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 *    remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeOpsItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeOpsItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeOpsItemsRequest
 *   OpsItemFilters: [ // OpsItemFilters
 *     { // OpsItemFilter
 *       Key: "Status" || "CreatedBy" || "Source" || "Priority" || "Title" || "OpsItemId" || "CreatedTime" || "LastModifiedTime" || "ActualStartTime" || "ActualEndTime" || "PlannedStartTime" || "PlannedEndTime" || "OperationalData" || "OperationalDataKey" || "OperationalDataValue" || "ResourceId" || "AutomationId" || "Category" || "Severity" || "OpsItemType" || "ChangeRequestByRequesterArn" || "ChangeRequestByRequesterName" || "ChangeRequestByApproverArn" || "ChangeRequestByApproverName" || "ChangeRequestByTemplate" || "ChangeRequestByTargetsResourceGroup" || "InsightByType" || "AccountId", // required
 *       Values: [ // OpsItemFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "Equal" || "Contains" || "GreaterThan" || "LessThan", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOpsItemsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOpsItemsResponse
 * //   NextToken: "STRING_VALUE",
 * //   OpsItemSummaries: [ // OpsItemSummaries
 * //     { // OpsItemSummary
 * //       CreatedBy: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedBy: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       Priority: Number("int"),
 * //       Source: "STRING_VALUE",
 * //       Status: "Open" || "InProgress" || "Resolved" || "Pending" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "CompletedWithSuccess" || "CompletedWithFailure" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "PendingApproval" || "Approved" || "Rejected" || "Closed",
 * //       OpsItemId: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       OperationalData: { // OpsItemOperationalData
 * //         "<keys>": { // OpsItemDataValue
 * //           Value: "STRING_VALUE",
 * //           Type: "SearchableString" || "String",
 * //         },
 * //       },
 * //       Category: "STRING_VALUE",
 * //       Severity: "STRING_VALUE",
 * //       OpsItemType: "STRING_VALUE",
 * //       ActualStartTime: new Date("TIMESTAMP"),
 * //       ActualEndTime: new Date("TIMESTAMP"),
 * //       PlannedStartTime: new Date("TIMESTAMP"),
 * //       PlannedEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeOpsItemsCommandInput - {@link DescribeOpsItemsCommandInput}
 * @returns {@link DescribeOpsItemsCommandOutput}
 * @see {@link DescribeOpsItemsCommandInput} for command's `input` shape.
 * @see {@link DescribeOpsItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeOpsItemsCommand extends $Command<
  DescribeOpsItemsCommandInput,
  DescribeOpsItemsCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: DescribeOpsItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOpsItemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeOpsItemsCommand";
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
  private serialize(input: DescribeOpsItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeOpsItemsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOpsItemsCommandOutput> {
    return de_DescribeOpsItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
