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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetQueryStatisticsRequest, GetQueryStatisticsResponse } from "../models/models_0";
import { de_GetQueryStatisticsCommand, se_GetQueryStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetQueryStatisticsCommand}.
 */
export interface GetQueryStatisticsCommandInput extends GetQueryStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetQueryStatisticsCommand}.
 */
export interface GetQueryStatisticsCommandOutput extends GetQueryStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves statistics on the planning and execution of a query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetQueryStatisticsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetQueryStatisticsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // GetQueryStatisticsRequest
 *   QueryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryStatisticsResponse
 * //   ExecutionStatistics: { // ExecutionStatistics
 * //     AverageExecutionTimeMillis: Number("long"),
 * //     DataScannedBytes: Number("long"),
 * //     WorkUnitsExecutedCount: Number("long"),
 * //   },
 * //   PlanningStatistics: { // PlanningStatistics
 * //     EstimatedDataToScanBytes: Number("long"),
 * //     PlanningTimeMillis: Number("long"),
 * //     QueueTimeMillis: Number("long"),
 * //     WorkUnitsGeneratedCount: Number("long"),
 * //   },
 * //   QuerySubmissionTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetQueryStatisticsCommandInput - {@link GetQueryStatisticsCommandInput}
 * @returns {@link GetQueryStatisticsCommandOutput}
 * @see {@link GetQueryStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetQueryStatisticsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ExpiredException} (client fault)
 *  <p>Contains details about an error where the query request expired.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link StatisticsNotReadyYetException} (client fault)
 *  <p>Contains details about an error related to statistics not being ready.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Contains details about an error where the query request was throttled.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class GetQueryStatisticsCommand extends $Command<
  GetQueryStatisticsCommandInput,
  GetQueryStatisticsCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: GetQueryStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryStatisticsCommandInput, GetQueryStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQueryStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "GetQueryStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "GetQueryStatistics",
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
  private serialize(input: GetQueryStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetQueryStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQueryStatisticsCommandOutput> {
    return de_GetQueryStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
