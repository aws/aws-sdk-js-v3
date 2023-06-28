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
  DeleteBudgetActionRequest,
  DeleteBudgetActionResponse,
  DeleteBudgetActionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DeleteBudgetActionCommand, se_DeleteBudgetActionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBudgetActionCommand}.
 */
export interface DeleteBudgetActionCommandInput extends DeleteBudgetActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBudgetActionCommand}.
 */
export interface DeleteBudgetActionCommandOutput extends DeleteBudgetActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Deletes a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // DeleteBudgetActionRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   ActionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBudgetActionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBudgetActionResponse
 * //   AccountId: "STRING_VALUE", // required
 * //   BudgetName: "STRING_VALUE", // required
 * //   Action: { // Action
 * //     ActionId: "STRING_VALUE", // required
 * //     BudgetName: "STRING_VALUE", // required
 * //     NotificationType: "STRING_VALUE", // required
 * //     ActionType: "STRING_VALUE", // required
 * //     ActionThreshold: { // ActionThreshold
 * //       ActionThresholdValue: Number("double"), // required
 * //       ActionThresholdType: "STRING_VALUE", // required
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
 * //         ActionSubType: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE", // required
 * //         InstanceIds: [ // InstanceIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     ExecutionRoleArn: "STRING_VALUE", // required
 * //     ApprovalModel: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     Subscribers: [ // Subscribers // required
 * //       { // Subscriber
 * //         SubscriptionType: "STRING_VALUE", // required
 * //         Address: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteBudgetActionCommandInput - {@link DeleteBudgetActionCommandInput}
 * @returns {@link DeleteBudgetActionCommandOutput}
 * @see {@link DeleteBudgetActionCommandInput} for command's `input` shape.
 * @see {@link DeleteBudgetActionCommandOutput} for command's `response` shape.
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
 *  <p>
 *       The number of API requests has exceeded the maximum allowed API request throttling limit for the account.
 *     </p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
 *
 */
export class DeleteBudgetActionCommand extends $Command<
  DeleteBudgetActionCommandInput,
  DeleteBudgetActionCommandOutput,
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
  constructor(readonly input: DeleteBudgetActionCommandInput) {
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
  ): Handler<DeleteBudgetActionCommandInput, DeleteBudgetActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBudgetActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DeleteBudgetActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DeleteBudgetActionResponseFilterSensitiveLog,
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
  private serialize(input: DeleteBudgetActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteBudgetActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBudgetActionCommandOutput> {
    return de_DeleteBudgetActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
