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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetQueryRuntimeStatisticsInput, GetQueryRuntimeStatisticsOutput } from "../models/models_0";
import { de_GetQueryRuntimeStatisticsCommand, se_GetQueryRuntimeStatisticsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetQueryRuntimeStatisticsCommand}.
 */
export interface GetQueryRuntimeStatisticsCommandInput extends GetQueryRuntimeStatisticsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryRuntimeStatisticsCommand}.
 */
export interface GetQueryRuntimeStatisticsCommandOutput extends GetQueryRuntimeStatisticsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns query execution runtime statistics related to a single execution of a query if
 *             you have access to the workgroup in which the query ran. Query execution runtime
 *             statistics are returned only when <a>QueryExecutionStatus$State</a> is in a
 *             SUCCEEDED or FAILED state. Stage-level input and output row count and data size
 *             statistics are not shown when a query has row-level filters defined in Lake
 *             Formation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetQueryRuntimeStatisticsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetQueryRuntimeStatisticsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetQueryRuntimeStatisticsInput
 *   QueryExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryRuntimeStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryRuntimeStatisticsOutput
 * //   QueryRuntimeStatistics: { // QueryRuntimeStatistics
 * //     Timeline: { // QueryRuntimeStatisticsTimeline
 * //       QueryQueueTimeInMillis: Number("long"),
 * //       QueryPlanningTimeInMillis: Number("long"),
 * //       EngineExecutionTimeInMillis: Number("long"),
 * //       ServiceProcessingTimeInMillis: Number("long"),
 * //       TotalExecutionTimeInMillis: Number("long"),
 * //     },
 * //     Rows: { // QueryRuntimeStatisticsRows
 * //       InputRows: Number("long"),
 * //       InputBytes: Number("long"),
 * //       OutputBytes: Number("long"),
 * //       OutputRows: Number("long"),
 * //     },
 * //     OutputStage: { // QueryStage
 * //       StageId: Number("long"),
 * //       State: "STRING_VALUE",
 * //       OutputBytes: Number("long"),
 * //       OutputRows: Number("long"),
 * //       InputBytes: Number("long"),
 * //       InputRows: Number("long"),
 * //       ExecutionTime: Number("long"),
 * //       QueryStagePlan: { // QueryStagePlanNode
 * //         Name: "STRING_VALUE",
 * //         Identifier: "STRING_VALUE",
 * //         Children: [ // QueryStagePlanNodes
 * //           {
 * //             Name: "STRING_VALUE",
 * //             Identifier: "STRING_VALUE",
 * //             Children: [
 * //               "<QueryStagePlanNode>",
 * //             ],
 * //             RemoteSources: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         RemoteSources: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       SubStages: [ // QueryStages
 * //         {
 * //           StageId: Number("long"),
 * //           State: "STRING_VALUE",
 * //           OutputBytes: Number("long"),
 * //           OutputRows: Number("long"),
 * //           InputBytes: Number("long"),
 * //           InputRows: Number("long"),
 * //           ExecutionTime: Number("long"),
 * //           QueryStagePlan: "<QueryStagePlanNode>",
 * //           SubStages: [
 * //             "<QueryStage>",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQueryRuntimeStatisticsCommandInput - {@link GetQueryRuntimeStatisticsCommandInput}
 * @returns {@link GetQueryRuntimeStatisticsCommandOutput}
 * @see {@link GetQueryRuntimeStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetQueryRuntimeStatisticsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class GetQueryRuntimeStatisticsCommand extends $Command<
  GetQueryRuntimeStatisticsCommandInput,
  GetQueryRuntimeStatisticsCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: GetQueryRuntimeStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryRuntimeStatisticsCommandInput, GetQueryRuntimeStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQueryRuntimeStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetQueryRuntimeStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "GetQueryRuntimeStatistics",
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
  private serialize(input: GetQueryRuntimeStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetQueryRuntimeStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetQueryRuntimeStatisticsCommandOutput> {
    return de_GetQueryRuntimeStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
