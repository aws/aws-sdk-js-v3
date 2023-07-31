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
import { GetSchemaAnalysisRuleInput, GetSchemaAnalysisRuleOutput } from "../models/models_0";
import { de_GetSchemaAnalysisRuleCommand, se_GetSchemaAnalysisRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaAnalysisRuleCommand}.
 */
export interface GetSchemaAnalysisRuleCommandInput extends GetSchemaAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaAnalysisRuleCommand}.
 */
export interface GetSchemaAnalysisRuleCommandOutput extends GetSchemaAnalysisRuleOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a schema analysis rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetSchemaAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetSchemaAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetSchemaAnalysisRuleInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   type: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * };
 * const command = new GetSchemaAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaAnalysisRuleOutput
 * //   analysisRule: { // AnalysisRule
 * //     collaborationId: "STRING_VALUE", // required
 * //     type: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * //     name: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     policy: { // AnalysisRulePolicy Union: only one key present
 * //       v1: { // AnalysisRulePolicyV1 Union: only one key present
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
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSchemaAnalysisRuleCommandInput - {@link GetSchemaAnalysisRuleCommandInput}
 * @returns {@link GetSchemaAnalysisRuleCommandOutput}
 * @see {@link GetSchemaAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link GetSchemaAnalysisRuleCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
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
export class GetSchemaAnalysisRuleCommand extends $Command<
  GetSchemaAnalysisRuleCommandInput,
  GetSchemaAnalysisRuleCommandOutput,
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
  constructor(readonly input: GetSchemaAnalysisRuleCommandInput) {
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
  ): Handler<GetSchemaAnalysisRuleCommandInput, GetSchemaAnalysisRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSchemaAnalysisRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "GetSchemaAnalysisRuleCommand";
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
  private serialize(input: GetSchemaAnalysisRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSchemaAnalysisRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSchemaAnalysisRuleCommandOutput> {
    return de_GetSchemaAnalysisRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
