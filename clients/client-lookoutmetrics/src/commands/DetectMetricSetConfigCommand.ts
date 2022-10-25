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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import {
  DetectMetricSetConfigRequest,
  DetectMetricSetConfigRequestFilterSensitiveLog,
  DetectMetricSetConfigResponse,
  DetectMetricSetConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DetectMetricSetConfigCommand,
  serializeAws_restJson1DetectMetricSetConfigCommand,
} from "../protocols/Aws_restJson1";

export interface DetectMetricSetConfigCommandInput extends DetectMetricSetConfigRequest {}
export interface DetectMetricSetConfigCommandOutput extends DetectMetricSetConfigResponse, __MetadataBearer {}

/**
 * <p>Detects an Amazon S3 dataset's file format, interval, and offset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DetectMetricSetConfigCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DetectMetricSetConfigCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new DetectMetricSetConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectMetricSetConfigCommandInput} for command's `input` shape.
 * @see {@link DetectMetricSetConfigCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 */
export class DetectMetricSetConfigCommand extends $Command<
  DetectMetricSetConfigCommandInput,
  DetectMetricSetConfigCommandOutput,
  LookoutMetricsClientResolvedConfig
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

  constructor(readonly input: DetectMetricSetConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectMetricSetConfigCommandInput, DetectMetricSetConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectMetricSetConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "DetectMetricSetConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectMetricSetConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectMetricSetConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectMetricSetConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DetectMetricSetConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectMetricSetConfigCommandOutput> {
    return deserializeAws_restJson1DetectMetricSetConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
