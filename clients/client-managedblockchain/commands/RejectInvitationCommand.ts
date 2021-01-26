import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { RejectInvitationInput, RejectInvitationOutput } from "../models/models_0";
import {
  deserializeAws_restJson1RejectInvitationCommand,
  serializeAws_restJson1RejectInvitationCommand,
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

export type RejectInvitationCommandInput = RejectInvitationInput;
export type RejectInvitationCommandOutput = RejectInvitationOutput & __MetadataBearer;

/**
 * <p>Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network.</p>
 */
export class RejectInvitationCommand extends $Command<
  RejectInvitationCommandInput,
  RejectInvitationCommandOutput,
  ManagedBlockchainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectInvitationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectInvitationCommandInput, RejectInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "RejectInvitationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectInvitationInput.filterSensitiveLog,
      outputFilterSensitiveLog: RejectInvitationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RejectInvitationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RejectInvitationCommandOutput> {
    return deserializeAws_restJson1RejectInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
