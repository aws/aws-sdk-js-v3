import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { PublishMetricsInput, PublishMetricsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1PublishMetricsCommand,
  serializeAws_restJson1PublishMetricsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface PublishMetricsCommandInput extends PublishMetricsInput {}
export interface PublishMetricsCommandOutput extends PublishMetricsOutput, __MetadataBearer {}

/**
 * An operation for publishing metrics from the customers to the Ops plane.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, PublishMetricsCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, PublishMetricsCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new PublishMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishMetricsCommandInput} for command's `input` shape.
 * @see {@link PublishMetricsCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PublishMetricsCommand extends $Command<
  PublishMetricsCommandInput,
  PublishMetricsCommandOutput,
  MWAAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PublishMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MWAAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishMetricsCommandInput, PublishMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MWAAClient";
    const commandName = "PublishMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishMetricsInput.filterSensitiveLog,
      outputFilterSensitiveLog: PublishMetricsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PublishMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishMetricsCommandOutput> {
    return deserializeAws_restJson1PublishMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
