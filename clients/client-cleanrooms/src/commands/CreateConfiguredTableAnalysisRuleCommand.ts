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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { CreateConfiguredTableAnalysisRuleInput, CreateConfiguredTableAnalysisRuleOutput } from "../models/models_0";
import {
  de_CreateConfiguredTableAnalysisRuleCommand,
  se_CreateConfiguredTableAnalysisRuleCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredTableAnalysisRuleCommand}.
 */
export interface CreateConfiguredTableAnalysisRuleCommandInput extends CreateConfiguredTableAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredTableAnalysisRuleCommand}.
 */
export interface CreateConfiguredTableAnalysisRuleCommandOutput
  extends CreateConfiguredTableAnalysisRuleOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new analysis rule for a configured table. Currently, only one analysis rule
 *          can be created for a given configured table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateConfiguredTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateConfiguredTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateConfiguredTableAnalysisRuleInput
 *   configuredTableIdentifier: "STRING_VALUE", // required
 *   analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM", // required
 *   analysisRulePolicy: { // ConfiguredTableAnalysisRulePolicy Union: only one key present
 *     v1: { // ConfiguredTableAnalysisRulePolicyV1 Union: only one key present
 *       list: { // AnalysisRuleList
 *         joinColumns: [ // AnalysisRuleColumnList // required
 *           "STRING_VALUE",
 *         ],
 *         allowedJoinOperators: [ // JoinOperatorsList
 *           "STRING_VALUE",
 *         ],
 *         listColumns: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       aggregation: { // AnalysisRuleAggregation
 *         aggregateColumns: [ // AggregateColumnList // required
 *           { // AggregateColumn
 *             columnNames: [ // AnalysisRuleColumnNameList // required
 *               "STRING_VALUE",
 *             ],
 *             function: "STRING_VALUE", // required
 *           },
 *         ],
 *         joinColumns: [ // required
 *           "STRING_VALUE",
 *         ],
 *         joinRequired: "STRING_VALUE",
 *         allowedJoinOperators: [
 *           "STRING_VALUE",
 *         ],
 *         dimensionColumns: [ // required
 *           "STRING_VALUE",
 *         ],
 *         scalarFunctions: [ // ScalarFunctionsList // required
 *           "STRING_VALUE",
 *         ],
 *         outputConstraints: [ // AggregationConstraints // required
 *           { // AggregationConstraint
 *             columnName: "STRING_VALUE", // required
 *             minimum: Number("int"), // required
 *             type: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       custom: { // AnalysisRuleCustom
 *         allowedAnalyses: [ // AllowedAnalysesList // required
 *           "STRING_VALUE",
 *         ],
 *         allowedAnalysisProviders: [ // AllowedAnalysisProviderList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new CreateConfiguredTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredTableAnalysisRuleOutput
 * //   analysisRule: { // ConfiguredTableAnalysisRule
 * //     configuredTableId: "STRING_VALUE", // required
 * //     configuredTableArn: "STRING_VALUE", // required
 * //     policy: { // ConfiguredTableAnalysisRulePolicy Union: only one key present
 * //       v1: { // ConfiguredTableAnalysisRulePolicyV1 Union: only one key present
 * //         list: { // AnalysisRuleList
 * //           joinColumns: [ // AnalysisRuleColumnList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedJoinOperators: [ // JoinOperatorsList
 * //             "STRING_VALUE",
 * //           ],
 * //           listColumns: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         aggregation: { // AnalysisRuleAggregation
 * //           aggregateColumns: [ // AggregateColumnList // required
 * //             { // AggregateColumn
 * //               columnNames: [ // AnalysisRuleColumnNameList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               function: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           joinColumns: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           joinRequired: "STRING_VALUE",
 * //           allowedJoinOperators: [
 * //             "STRING_VALUE",
 * //           ],
 * //           dimensionColumns: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           scalarFunctions: [ // ScalarFunctionsList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           outputConstraints: [ // AggregationConstraints // required
 * //             { // AggregationConstraint
 * //               columnName: "STRING_VALUE", // required
 * //               minimum: Number("int"), // required
 * //               type: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         custom: { // AnalysisRuleCustom
 * //           allowedAnalyses: [ // AllowedAnalysesList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAnalysisProviders: [ // AllowedAnalysisProviderList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     type: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateConfiguredTableAnalysisRuleCommandInput - {@link CreateConfiguredTableAnalysisRuleCommandInput}
 * @returns {@link CreateConfiguredTableAnalysisRuleCommandOutput}
 * @see {@link CreateConfiguredTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredTableAnalysisRuleCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 */
export class CreateConfiguredTableAnalysisRuleCommand extends $Command<
  CreateConfiguredTableAnalysisRuleCommandInput,
  CreateConfiguredTableAnalysisRuleCommandOutput,
  CleanRoomsClientResolvedConfig
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
  constructor(readonly input: CreateConfiguredTableAnalysisRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfiguredTableAnalysisRuleCommandInput, CreateConfiguredTableAnalysisRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfiguredTableAnalysisRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "CreateConfiguredTableAnalysisRuleCommand";
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
  private serialize(
    input: CreateConfiguredTableAnalysisRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateConfiguredTableAnalysisRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfiguredTableAnalysisRuleCommandOutput> {
    return de_CreateConfiguredTableAnalysisRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
