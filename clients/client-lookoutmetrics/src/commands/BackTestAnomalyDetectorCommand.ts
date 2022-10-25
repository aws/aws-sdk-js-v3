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
  BackTestAnomalyDetectorRequest,
  BackTestAnomalyDetectorRequestFilterSensitiveLog,
  BackTestAnomalyDetectorResponse,
  BackTestAnomalyDetectorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BackTestAnomalyDetectorCommand,
  serializeAws_restJson1BackTestAnomalyDetectorCommand,
} from "../protocols/Aws_restJson1";

export interface BackTestAnomalyDetectorCommandInput extends BackTestAnomalyDetectorRequest {}
export interface BackTestAnomalyDetectorCommandOutput extends BackTestAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Runs a backtest for anomaly detection for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, BackTestAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, BackTestAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new BackTestAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BackTestAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link BackTestAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 */
export class BackTestAnomalyDetectorCommand extends $Command<
  BackTestAnomalyDetectorCommandInput,
  BackTestAnomalyDetectorCommandOutput,
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

  constructor(readonly input: BackTestAnomalyDetectorCommandInput) {
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
  ): Handler<BackTestAnomalyDetectorCommandInput, BackTestAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BackTestAnomalyDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "BackTestAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BackTestAnomalyDetectorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BackTestAnomalyDetectorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BackTestAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BackTestAnomalyDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BackTestAnomalyDetectorCommandOutput> {
    return deserializeAws_restJson1BackTestAnomalyDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
