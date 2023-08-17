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

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import {
  UpdateBudgetActionRequest,
  UpdateBudgetActionRequestFilterSensitiveLog,
  UpdateBudgetActionResponse,
  UpdateBudgetActionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateBudgetActionCommand, se_UpdateBudgetActionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateBudgetActionCommand}.
 */
export interface UpdateBudgetActionCommandInput extends UpdateBudgetActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBudgetActionCommand}.
 */
export interface UpdateBudgetActionCommandOutput extends UpdateBudgetActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Updates a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, UpdateBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, UpdateBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // UpdateBudgetActionRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   ActionId: "STRING_VALUE", // required
 *   NotificationType: "ACTUAL" || "FORECASTED",
 *   ActionThreshold: { // ActionThreshold
 *     ActionThresholdValue: Number("double"), // required
 *     ActionThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE", // required
 *   },
 *   Definition: { // Definition
 *     IamActionDefinition: { // IamActionDefinition
 *       PolicyArn: "STRING_VALUE", // required
 *       Roles: [ // Roles
 *         "STRING_VALUE",
 *       ],
 *       Groups: [ // Groups
 *         "STRING_VALUE",
 *       ],
 *       Users: [ // Users
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ScpActionDefinition: { // ScpActionDefinition
 *       PolicyId: "STRING_VALUE", // required
 *       TargetIds: [ // TargetIds // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     SsmActionDefinition: { // SsmActionDefinition
 *       ActionSubType: "STOP_EC2_INSTANCES" || "STOP_RDS_INSTANCES", // required
 *       Region: "STRING_VALUE", // required
 *       InstanceIds: [ // InstanceIds // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   ApprovalModel: "AUTOMATIC" || "MANUAL",
 *   Subscribers: [ // Subscribers
 *     { // Subscriber
 *       SubscriptionType: "SNS" || "EMAIL", // required
 *       Address: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateBudgetActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBudgetActionResponse
 * //   AccountId: "STRING_VALUE", // required
 * //   BudgetName: "STRING_VALUE", // required
 * //   OldAction: { // Action
 * //     ActionId: "STRING_VALUE", // required
 * //     BudgetName: "STRING_VALUE", // required
 * //     NotificationType: "ACTUAL" || "FORECASTED", // required
 * //     ActionType: "APPLY_IAM_POLICY" || "APPLY_SCP_POLICY" || "RUN_SSM_DOCUMENTS", // required
 * //     ActionThreshold: { // ActionThreshold
 * //       ActionThresholdValue: Number("double"), // required
 * //       ActionThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE", // required
 * //     },
 * //     Definition: { // Definition
 * //       IamActionDefinition: { // IamActionDefinition
 * //         PolicyArn: "STRING_VALUE", // required
 * //         Roles: [ // Roles
 * //           "STRING_VALUE",
 * //         ],
 * //         Groups: [ // Groups
 * //           "STRING_VALUE",
 * //         ],
 * //         Users: [ // Users
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ScpActionDefinition: { // ScpActionDefinition
 * //         PolicyId: "STRING_VALUE", // required
 * //         TargetIds: [ // TargetIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       SsmActionDefinition: { // SsmActionDefinition
 * //         ActionSubType: "STOP_EC2_INSTANCES" || "STOP_RDS_INSTANCES", // required
 * //         Region: "STRING_VALUE", // required
 * //         InstanceIds: [ // InstanceIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     ExecutionRoleArn: "STRING_VALUE", // required
 * //     ApprovalModel: "AUTOMATIC" || "MANUAL", // required
 * //     Status: "STANDBY" || "PENDING" || "EXECUTION_IN_PROGRESS" || "EXECUTION_SUCCESS" || "EXECUTION_FAILURE" || "REVERSE_IN_PROGRESS" || "REVERSE_SUCCESS" || "REVERSE_FAILURE" || "RESET_IN_PROGRESS" || "RESET_FAILURE", // required
 * //     Subscribers: [ // Subscribers // required
 * //       { // Subscriber
 * //         SubscriptionType: "SNS" || "EMAIL", // required
 * //         Address: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   NewAction: {
 * //     ActionId: "STRING_VALUE", // required
 * //     BudgetName: "STRING_VALUE", // required
 * //     NotificationType: "ACTUAL" || "FORECASTED", // required
 * //     ActionType: "APPLY_IAM_POLICY" || "APPLY_SCP_POLICY" || "RUN_SSM_DOCUMENTS", // required
 * //     ActionThreshold: {
 * //       ActionThresholdValue: Number("double"), // required
 * //       ActionThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE", // required
 * //     },
 * //     Definition: {
 * //       IamActionDefinition: {
 * //         PolicyArn: "STRING_VALUE", // required
 * //         Roles: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Groups: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Users: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ScpActionDefinition: {
 * //         PolicyId: "STRING_VALUE", // required
 * //         TargetIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       SsmActionDefinition: {
 * //         ActionSubType: "STOP_EC2_INSTANCES" || "STOP_RDS_INSTANCES", // required
 * //         Region: "STRING_VALUE", // required
 * //         InstanceIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     ExecutionRoleArn: "STRING_VALUE", // required
 * //     ApprovalModel: "AUTOMATIC" || "MANUAL", // required
 * //     Status: "STANDBY" || "PENDING" || "EXECUTION_IN_PROGRESS" || "EXECUTION_SUCCESS" || "EXECUTION_FAILURE" || "REVERSE_IN_PROGRESS" || "REVERSE_SUCCESS" || "REVERSE_FAILURE" || "RESET_IN_PROGRESS" || "RESET_FAILURE", // required
 * //     Subscribers: [ // required
 * //       {
 * //         SubscriptionType: "SNS" || "EMAIL", // required
 * //         Address: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBudgetActionCommandInput - {@link UpdateBudgetActionCommandInput}
 * @returns {@link UpdateBudgetActionCommandOutput}
 * @see {@link UpdateBudgetActionCommandInput} for command's `input` shape.
 * @see {@link UpdateBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can’t locate the resource that you specified.</p>
 *
 * @throws {@link ResourceLockedException} (client fault)
 *  <p> The request was received and recognized by the server, but the server rejected that
 *       particular method for the requested resource. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
 *
 */
export class UpdateBudgetActionCommand extends $Command<
  UpdateBudgetActionCommandInput,
  UpdateBudgetActionCommandOutput,
  BudgetsClientResolvedConfig
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
  constructor(readonly input: UpdateBudgetActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBudgetActionCommandInput, UpdateBudgetActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBudgetActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "UpdateBudgetActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBudgetActionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateBudgetActionResponseFilterSensitiveLog,
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
  private serialize(input: UpdateBudgetActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateBudgetActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBudgetActionCommandOutput> {
    return de_UpdateBudgetActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
