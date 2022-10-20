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
  PutRumMetricsDestinationRequest,
  PutRumMetricsDestinationRequestFilterSensitiveLog,
  PutRumMetricsDestinationResponse,
  PutRumMetricsDestinationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutRumMetricsDestinationCommand,
  serializeAws_restJson1PutRumMetricsDestinationCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface PutRumMetricsDestinationCommandInput extends PutRumMetricsDestinationRequest {}
export interface PutRumMetricsDestinationCommandOutput extends PutRumMetricsDestinationResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a destination to receive extended metrics from CloudWatch RUM. You can send
 *          extended metrics to CloudWatch or to a CloudWatch Evidently experiment.</p>
 *          <p>For more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_AddRumMetrics.html">AddRumMetrics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, PutRumMetricsDestinationCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, PutRumMetricsDestinationCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new PutRumMetricsDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRumMetricsDestinationCommandInput} for command's `input` shape.
 * @see {@link PutRumMetricsDestinationCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 */
export class PutRumMetricsDestinationCommand extends $Command<
  PutRumMetricsDestinationCommandInput,
  PutRumMetricsDestinationCommandOutput,
  RUMClientResolvedConfig
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

  constructor(readonly input: PutRumMetricsDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRumMetricsDestinationCommandInput, PutRumMetricsDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRumMetricsDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "PutRumMetricsDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRumMetricsDestinationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRumMetricsDestinationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRumMetricsDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRumMetricsDestinationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRumMetricsDestinationCommandOutput> {
    return deserializeAws_restJson1PutRumMetricsDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
