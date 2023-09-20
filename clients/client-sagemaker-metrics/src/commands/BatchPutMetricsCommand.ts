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

import { BatchPutMetricsRequest, BatchPutMetricsResponse } from "../models/models_0";
import { de_BatchPutMetricsCommand, se_BatchPutMetricsCommand } from "../protocols/Aws_restJson1";
import { SageMakerMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerMetricsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchPutMetricsCommand}.
 */
export interface BatchPutMetricsCommandInput extends BatchPutMetricsRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutMetricsCommand}.
 */
export interface BatchPutMetricsCommandOutput extends BatchPutMetricsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and
 *          retrieved with the <code>GetMetrics</code> API.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerMetricsClient, BatchPutMetricsCommand } from "@aws-sdk/client-sagemaker-metrics"; // ES Modules import
 * // const { SageMakerMetricsClient, BatchPutMetricsCommand } = require("@aws-sdk/client-sagemaker-metrics"); // CommonJS import
 * const client = new SageMakerMetricsClient(config);
 * const input = { // BatchPutMetricsRequest
 *   TrialComponentName: "STRING_VALUE", // required
 *   MetricData: [ // RawMetricDataList // required
 *     { // RawMetricData
 *       MetricName: "STRING_VALUE", // required
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       Step: Number("int"),
 *       Value: Number("double"), // required
 *     },
 *   ],
 * };
 * const command = new BatchPutMetricsCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutMetricsResponse
 * //   Errors: [ // BatchPutMetricsErrorList
 * //     { // BatchPutMetricsError
 * //       Code: "METRIC_LIMIT_EXCEEDED" || "INTERNAL_ERROR" || "VALIDATION_ERROR" || "CONFLICT_ERROR",
 * //       MetricIndex: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutMetricsCommandInput - {@link BatchPutMetricsCommandInput}
 * @returns {@link BatchPutMetricsCommandOutput}
 * @see {@link BatchPutMetricsCommandInput} for command's `input` shape.
 * @see {@link BatchPutMetricsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerMetricsClientResolvedConfig | config} for SageMakerMetricsClient's `config` shape.
 *
 * @throws {@link SageMakerMetricsServiceException}
 * <p>Base exception class for all service exceptions from SageMakerMetrics service.</p>
 *
 */
export class BatchPutMetricsCommand extends $Command<
  BatchPutMetricsCommandInput,
  BatchPutMetricsCommandOutput,
  SageMakerMetricsClientResolvedConfig
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
  constructor(readonly input: BatchPutMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchPutMetricsCommandInput, BatchPutMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchPutMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerMetricsClient";
    const commandName = "BatchPutMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMakerMetricsService",
        operation: "BatchPutMetrics",
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
  private serialize(input: BatchPutMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchPutMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutMetricsCommandOutput> {
    return de_BatchPutMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
