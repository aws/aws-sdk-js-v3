import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { RegisterToWorkMailRequest, RegisterToWorkMailResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterToWorkMailCommand,
  serializeAws_json1_1RegisterToWorkMailCommand,
} from "../protocols/Aws_json1_1";
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

export type RegisterToWorkMailCommandInput = RegisterToWorkMailRequest;
export type RegisterToWorkMailCommandOutput = RegisterToWorkMailResponse & __MetadataBearer;

/**
 * <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by
 *          associating a mailbox and calendaring capabilities. It performs no change if the user,
 *          group, or resource is enabled and fails if the user, group, or resource is deleted. This
 *          operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com//workmail/pricing">Pricing</a>. The equivalent console
 *          functionality for this operation is <i>Enable</i>. </p>
 *          <p>Users can either be created by calling the <a>CreateUser</a> API operation or
 *          they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
 */
export class RegisterToWorkMailCommand extends $Command<
  RegisterToWorkMailCommandInput,
  RegisterToWorkMailCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterToWorkMailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "RegisterToWorkMailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterToWorkMailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterToWorkMailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterToWorkMailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterToWorkMailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterToWorkMailCommandOutput> {
    return deserializeAws_json1_1RegisterToWorkMailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
