import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateRobotApplicationRequest, CreateRobotApplicationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRobotApplicationCommand,
  serializeAws_restJson1CreateRobotApplicationCommand,
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

export interface CreateRobotApplicationCommandInput extends CreateRobotApplicationRequest {}
export interface CreateRobotApplicationCommandOutput extends CreateRobotApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates a robot application. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateRobotApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateRobotApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateRobotApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRobotApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateRobotApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRobotApplicationCommand extends $Command<
  CreateRobotApplicationCommandInput,
  CreateRobotApplicationCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRobotApplicationCommandInput) {
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
  ): Handler<CreateRobotApplicationCommandInput, CreateRobotApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CreateRobotApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRobotApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRobotApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRobotApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRobotApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRobotApplicationCommandOutput> {
    return deserializeAws_restJson1CreateRobotApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
