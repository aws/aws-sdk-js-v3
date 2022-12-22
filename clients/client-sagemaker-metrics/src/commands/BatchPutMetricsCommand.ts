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

import {
  BatchPutMetricsRequest,
  BatchPutMetricsRequestFilterSensitiveLog,
  BatchPutMetricsResponse,
  BatchPutMetricsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchPutMetricsCommand,
  serializeAws_restJson1BatchPutMetricsCommand,
} from "../protocols/Aws_restJson1";
import { SageMakerMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerMetricsClient";

export interface BatchPutMetricsCommandInput extends BatchPutMetricsRequest {}
export interface BatchPutMetricsCommandOutput extends BatchPutMetricsResponse, __MetadataBearer {}

/**
 * <p>Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and
 *          retrieved with the <code>GetMetrics</code> API.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerMetricsClient, BatchPutMetricsCommand } from "@aws-sdk/client-sagemaker-metrics"; // ES Modules import
 * // const { SageMakerMetricsClient, BatchPutMetricsCommand } = require("@aws-sdk/client-sagemaker-metrics"); // CommonJS import
 * const client = new SageMakerMetricsClient(config);
 * const command = new BatchPutMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutMetricsCommandInput} for command's `input` shape.
 * @see {@link BatchPutMetricsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerMetricsClientResolvedConfig | config} for SageMakerMetricsClient's `config` shape.
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
      inputFilterSensitiveLog: BatchPutMetricsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchPutMetricsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchPutMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchPutMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutMetricsCommandOutput> {
    return deserializeAws_restJson1BatchPutMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
