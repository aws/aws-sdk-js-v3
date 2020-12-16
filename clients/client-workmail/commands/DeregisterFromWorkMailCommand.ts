import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DeregisterFromWorkMailRequest, DeregisterFromWorkMailResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterFromWorkMailCommand,
  serializeAws_json1_1DeregisterFromWorkMailCommand,
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

export type DeregisterFromWorkMailCommandInput = DeregisterFromWorkMailRequest;
export type DeregisterFromWorkMailCommandOutput = DeregisterFromWorkMailResponse & __MetadataBearer;

/**
 * <p>Mark a user, group, or resource as no longer used in Amazon WorkMail. This action
 *          disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes
 *          for 30 days before they are permanently removed. The functionality in the console is
 *             <i>Disable</i>.</p>
 */
export class DeregisterFromWorkMailCommand extends $Command<
  DeregisterFromWorkMailCommandInput,
  DeregisterFromWorkMailCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterFromWorkMailCommandInput) {
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
  ): Handler<DeregisterFromWorkMailCommandInput, DeregisterFromWorkMailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "DeregisterFromWorkMailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterFromWorkMailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterFromWorkMailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterFromWorkMailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterFromWorkMailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterFromWorkMailCommandOutput> {
    return deserializeAws_json1_1DeregisterFromWorkMailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
