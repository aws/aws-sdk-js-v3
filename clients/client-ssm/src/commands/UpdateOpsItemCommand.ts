// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { UpdateOpsItemRequest, UpdateOpsItemResponse } from "../models/models_2";
import {
  deserializeAws_json1_1UpdateOpsItemCommand,
  serializeAws_json1_1UpdateOpsItemCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 *
 * The input for {@link UpdateOpsItemCommand}.
 */
export interface UpdateOpsItemCommandInput extends UpdateOpsItemRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOpsItemCommand}.
 */
export interface UpdateOpsItemCommandOutput extends UpdateOpsItemResponse, __MetadataBearer {}

/**
 * @public
 * <p>Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
 *     OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 *    remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateOpsItemRequest
 *   Description: "STRING_VALUE",
 *   OperationalData: { // OpsItemOperationalData
 *     "<keys>": { // OpsItemDataValue
 *       Value: "STRING_VALUE",
 *       Type: "SearchableString" || "String",
 *     },
 *   },
 *   OperationalDataToDelete: [ // OpsItemOpsDataKeysList
 *     "STRING_VALUE",
 *   ],
 *   Notifications: [ // OpsItemNotifications
 *     { // OpsItemNotification
 *       Arn: "STRING_VALUE",
 *     },
 *   ],
 *   Priority: Number("int"),
 *   RelatedOpsItems: [ // RelatedOpsItems
 *     { // RelatedOpsItem
 *       OpsItemId: "STRING_VALUE", // required
 *     },
 *   ],
 *   Status: "Open" || "InProgress" || "Resolved" || "Pending" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "CompletedWithSuccess" || "CompletedWithFailure" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "PendingApproval" || "Approved" || "Rejected" || "Closed",
 *   OpsItemId: "STRING_VALUE", // required
 *   Title: "STRING_VALUE",
 *   Category: "STRING_VALUE",
 *   Severity: "STRING_VALUE",
 *   ActualStartTime: new Date("TIMESTAMP"),
 *   ActualEndTime: new Date("TIMESTAMP"),
 *   PlannedStartTime: new Date("TIMESTAMP"),
 *   PlannedEndTime: new Date("TIMESTAMP"),
 *   OpsItemArn: "STRING_VALUE",
 * };
 * const command = new UpdateOpsItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateOpsItemCommandInput - {@link UpdateOpsItemCommandInput}
 * @returns {@link UpdateOpsItemCommandOutput}
 * @see {@link UpdateOpsItemCommandInput} for command's `input` shape.
 * @see {@link UpdateOpsItemCommandOutput} for command's `response` shape.
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
 * @throws {@link OpsItemAlreadyExistsException} (client fault)
 *  <p>The OpsItem already exists.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link OpsItemLimitExceededException} (client fault)
 *  <p>The request caused OpsItems to exceed one or more quotas. For information about OpsItem
 *    quotas, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-learn-more.html#OpsCenter-learn-more-limits">What are the resource limits for OpsCenter?</a>.</p>
 *
 * @throws {@link OpsItemNotFoundException} (client fault)
 *  <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 *
 *
 */
export class UpdateOpsItemCommand extends $Command<
  UpdateOpsItemCommandInput,
  UpdateOpsItemCommandOutput,
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
  constructor(readonly input: UpdateOpsItemCommandInput) {
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
  ): Handler<UpdateOpsItemCommandInput, UpdateOpsItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateOpsItemCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateOpsItemCommand";
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
  private serialize(input: UpdateOpsItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateOpsItemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateOpsItemCommandOutput> {
    return deserializeAws_json1_1UpdateOpsItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
