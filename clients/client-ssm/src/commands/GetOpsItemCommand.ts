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

import { GetOpsItemRequest, GetOpsItemResponse } from "../models/models_1";
import { de_GetOpsItemCommand, se_GetOpsItemCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOpsItemCommand}.
 */
export interface GetOpsItemCommandInput extends GetOpsItemRequest {}
/**
 * @public
 *
 * The output of {@link GetOpsItemCommand}.
 */
export interface GetOpsItemCommandOutput extends GetOpsItemResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information,
 *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set
 *     up OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 *    remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetOpsItemRequest
 *   OpsItemId: "STRING_VALUE", // required
 *   OpsItemArn: "STRING_VALUE",
 * };
 * const command = new GetOpsItemCommand(input);
 * const response = await client.send(command);
 * // { // GetOpsItemResponse
 * //   OpsItem: { // OpsItem
 * //     CreatedBy: "STRING_VALUE",
 * //     OpsItemType: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     Description: "STRING_VALUE",
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     Notifications: [ // OpsItemNotifications
 * //       { // OpsItemNotification
 * //         Arn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Priority: Number("int"),
 * //     RelatedOpsItems: [ // RelatedOpsItems
 * //       { // RelatedOpsItem
 * //         OpsItemId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Status: "Open" || "InProgress" || "Resolved" || "Pending" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "CompletedWithSuccess" || "CompletedWithFailure" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "PendingApproval" || "Approved" || "Rejected" || "Closed",
 * //     OpsItemId: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     Title: "STRING_VALUE",
 * //     Source: "STRING_VALUE",
 * //     OperationalData: { // OpsItemOperationalData
 * //       "<keys>": { // OpsItemDataValue
 * //         Value: "STRING_VALUE",
 * //         Type: "SearchableString" || "String",
 * //       },
 * //     },
 * //     Category: "STRING_VALUE",
 * //     Severity: "STRING_VALUE",
 * //     ActualStartTime: new Date("TIMESTAMP"),
 * //     ActualEndTime: new Date("TIMESTAMP"),
 * //     PlannedStartTime: new Date("TIMESTAMP"),
 * //     PlannedEndTime: new Date("TIMESTAMP"),
 * //     OpsItemArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOpsItemCommandInput - {@link GetOpsItemCommandInput}
 * @returns {@link GetOpsItemCommandOutput}
 * @see {@link GetOpsItemCommandInput} for command's `input` shape.
 * @see {@link GetOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemAccessDeniedException} (client fault)
 *  <p>You don't have permission to view OpsItems in the specified account. Verify that your account
 *    is configured either as a Systems Manager delegated administrator or that you are logged into the Organizations
 *    management account.</p>
 *
 * @throws {@link OpsItemNotFoundException} (client fault)
 *  <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetOpsItemCommand extends $Command<
  GetOpsItemCommandInput,
  GetOpsItemCommandOutput,
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
  constructor(readonly input: GetOpsItemCommandInput) {
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
  ): Handler<GetOpsItemCommandInput, GetOpsItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetOpsItemCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetOpsItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "GetOpsItem",
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
  private serialize(input: GetOpsItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOpsItemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOpsItemCommandOutput> {
    return de_GetOpsItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
