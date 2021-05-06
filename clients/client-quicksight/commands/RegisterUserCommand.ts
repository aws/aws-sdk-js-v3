import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { RegisterUserRequest, RegisterUserResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RegisterUserCommand,
  serializeAws_restJson1RegisterUserCommand,
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

export interface RegisterUserCommandInput extends RegisterUserRequest {}
export interface RegisterUserCommandOutput extends RegisterUserResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity
 * 			and Access Management (IAM) identity or role specified in the request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, RegisterUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, RegisterUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new RegisterUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterUserCommandInput} for command's `input` shape.
 * @see {@link RegisterUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RegisterUserCommand extends $Command<
  RegisterUserCommandInput,
  RegisterUserCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterUserCommandInput, RegisterUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "RegisterUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterUserCommandOutput> {
    return deserializeAws_restJson1RegisterUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
