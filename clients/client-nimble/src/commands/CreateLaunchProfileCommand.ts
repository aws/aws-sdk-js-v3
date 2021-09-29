import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { CreateLaunchProfileRequest, CreateLaunchProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateLaunchProfileCommand,
  serializeAws_restJson1CreateLaunchProfileCommand,
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

export interface CreateLaunchProfileCommandInput extends CreateLaunchProfileRequest {}
export interface CreateLaunchProfileCommandOutput extends CreateLaunchProfileResponse, __MetadataBearer {}

/**
 * <p>Create a launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateLaunchProfileCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateLaunchProfileCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateLaunchProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLaunchProfileCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchProfileCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateLaunchProfileCommand extends $Command<
  CreateLaunchProfileCommandInput,
  CreateLaunchProfileCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLaunchProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLaunchProfileCommandInput, CreateLaunchProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "CreateLaunchProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLaunchProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLaunchProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLaunchProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateLaunchProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLaunchProfileCommandOutput> {
    return deserializeAws_restJson1CreateLaunchProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
