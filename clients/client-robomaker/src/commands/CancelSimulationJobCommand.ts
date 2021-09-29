import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CancelSimulationJobRequest, CancelSimulationJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelSimulationJobCommand,
  serializeAws_restJson1CancelSimulationJobCommand,
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

export interface CancelSimulationJobCommandInput extends CancelSimulationJobRequest {}
export interface CancelSimulationJobCommandOutput extends CancelSimulationJobResponse, __MetadataBearer {}

/**
 * <p>Cancels the specified simulation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelSimulationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSimulationJobCommandInput} for command's `input` shape.
 * @see {@link CancelSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelSimulationJobCommand extends $Command<
  CancelSimulationJobCommandInput,
  CancelSimulationJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelSimulationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelSimulationJobCommandInput, CancelSimulationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CancelSimulationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelSimulationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelSimulationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelSimulationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelSimulationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelSimulationJobCommandOutput> {
    return deserializeAws_restJson1CancelSimulationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
