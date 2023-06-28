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
  DescribeBudgetActionHistoriesRequest,
  DescribeBudgetActionHistoriesResponse,
  DescribeBudgetActionHistoriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeBudgetActionHistoriesCommand,
  se_DescribeBudgetActionHistoriesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBudgetActionHistoriesCommand}.
 */
export interface DescribeBudgetActionHistoriesCommandInput extends DescribeBudgetActionHistoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetActionHistoriesCommand}.
 */
export interface DescribeBudgetActionHistoriesCommandOutput
  extends DescribeBudgetActionHistoriesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *          Describes a budget action history detail.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionHistoriesCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionHistoriesCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetActionHistoriesRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   ActionId: "STRING_VALUE", // required
 *   TimePeriod: { // TimePeriod
 *     Start: new Date("TIMESTAMP"),
 *     End: new Date("TIMESTAMP"),
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBudgetActionHistoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetActionHistoriesResponse
 * //   ActionHistories: [ // ActionHistories // required
 * //     { // ActionHistory
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       Status: "STRING_VALUE", // required
 * //       EventType: "STRING_VALUE", // required
 * //       ActionHistoryDetails: { // ActionHistoryDetails
 * //         Message: "STRING_VALUE", // required
 * //         Action: { // Action
 * //           ActionId: "STRING_VALUE", // required
 * //           BudgetName: "STRING_VALUE", // required
 * //           NotificationType: "STRING_VALUE", // required
 * //           ActionType: "STRING_VALUE", // required
 * //           ActionThreshold: { // ActionThreshold
 * //             ActionThresholdValue: Number("double"), // required
 * //             ActionThresholdType: "STRING_VALUE", // required
 * //           },
 * //           Definition: { // Definition
 * //             IamActionDefinition: { // IamActionDefinition
 * //               PolicyArn: "STRING_VALUE", // required
 * //               Roles: [ // Roles
 * //                 "STRING_VALUE",
 * //               ],
 * //               Groups: [ // Groups
 * //                 "STRING_VALUE",
 * //               ],
 * //               Users: [ // Users
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             ScpActionDefinition: { // ScpActionDefinition
 * //               PolicyId: "STRING_VALUE", // required
 * //               TargetIds: [ // TargetIds // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             SsmActionDefinition: { // SsmActionDefinition
 * //               ActionSubType: "STRING_VALUE", // required
 * //               Region: "STRING_VALUE", // required
 * //               InstanceIds: [ // InstanceIds // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           ExecutionRoleArn: "STRING_VALUE", // required
 * //           ApprovalModel: "STRING_VALUE", // required
 * //           Status: "STRING_VALUE", // required
 * //           Subscribers: [ // Subscribers // required
 * //             { // Subscriber
 * //               SubscriptionType: "STRING_VALUE", // required
 * //               Address: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBudgetActionHistoriesCommandInput - {@link DescribeBudgetActionHistoriesCommandInput}
 * @returns {@link DescribeBudgetActionHistoriesCommandOutput}
 * @see {@link DescribeBudgetActionHistoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionHistoriesCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can’t locate the resource that you specified.</p>
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
export class DescribeBudgetActionHistoriesCommand extends $Command<
  DescribeBudgetActionHistoriesCommandInput,
  DescribeBudgetActionHistoriesCommandOutput,
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
  constructor(readonly input: DescribeBudgetActionHistoriesCommandInput) {
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
  ): Handler<DescribeBudgetActionHistoriesCommandInput, DescribeBudgetActionHistoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBudgetActionHistoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetActionHistoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeBudgetActionHistoriesResponseFilterSensitiveLog,
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
  private serialize(input: DescribeBudgetActionHistoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBudgetActionHistoriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetActionHistoriesCommandOutput> {
    return de_DescribeBudgetActionHistoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
