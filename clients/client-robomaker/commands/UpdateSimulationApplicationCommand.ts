import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { UpdateSimulationApplicationRequest, UpdateSimulationApplicationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateSimulationApplicationCommand,
  serializeAws_restJson1UpdateSimulationApplicationCommand,
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

export interface UpdateSimulationApplicationCommandInput extends UpdateSimulationApplicationRequest {}
export interface UpdateSimulationApplicationCommandOutput
  extends UpdateSimulationApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, UpdateSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, UpdateSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new UpdateSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateSimulationApplicationCommand extends $Command<
  UpdateSimulationApplicationCommandInput,
  UpdateSimulationApplicationCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSimulationApplicationCommandInput) {
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
  ): Handler<UpdateSimulationApplicationCommandInput, UpdateSimulationApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "UpdateSimulationApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSimulationApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSimulationApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSimulationApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSimulationApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSimulationApplicationCommandOutput> {
    return deserializeAws_restJson1UpdateSimulationApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
