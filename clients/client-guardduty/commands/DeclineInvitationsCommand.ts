import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeclineInvitationsRequest, DeclineInvitationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeclineInvitationsCommand,
  serializeAws_restJson1DeclineInvitationsCommand,
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

export type DeclineInvitationsCommandInput = DeclineInvitationsRequest;
export type DeclineInvitationsCommandOutput = DeclineInvitationsResponse & __MetadataBearer;

/**
 * <p>Declines invitations sent to the current member account by AWS accounts specified by their
 *       account IDs.</p>
 */
export class DeclineInvitationsCommand extends $Command<
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeclineInvitationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "DeclineInvitationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeclineInvitationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeclineInvitationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeclineInvitationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeclineInvitationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeclineInvitationsCommandOutput> {
    return deserializeAws_restJson1DeclineInvitationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
