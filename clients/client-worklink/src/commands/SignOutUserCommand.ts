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
  SignOutUserRequest,
  SignOutUserRequestFilterSensitiveLog,
  SignOutUserResponse,
  SignOutUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SignOutUserCommand,
  serializeAws_restJson1SignOutUserCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

export interface SignOutUserCommandInput extends SignOutUserRequest {}
export interface SignOutUserCommandOutput extends SignOutUserResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Signs the user out from all of their devices. The user can sign in again if they have
 *             valid credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, SignOutUserCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, SignOutUserCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new SignOutUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignOutUserCommandInput} for command's `input` shape.
 * @see {@link SignOutUserCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 */
export class SignOutUserCommand extends $Command<
  SignOutUserCommandInput,
  SignOutUserCommandOutput,
  WorkLinkClientResolvedConfig
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

  constructor(readonly input: SignOutUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SignOutUserCommandInput, SignOutUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SignOutUserCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "SignOutUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SignOutUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SignOutUserResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SignOutUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SignOutUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SignOutUserCommandOutput> {
    return deserializeAws_restJson1SignOutUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
