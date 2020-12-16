import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DisassociateMembersRequest, DisassociateMembersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateMembersCommand,
  serializeAws_restJson1DisassociateMembersCommand,
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

export type DisassociateMembersCommandInput = DisassociateMembersRequest;
export type DisassociateMembersCommandOutput = DisassociateMembersResponse & __MetadataBearer;

/**
 * <p>Disassociates GuardDuty member accounts (to the current GuardDuty administrator account)
 *       specified by the account IDs.</p>
 */
export class DisassociateMembersCommand extends $Command<
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateMembersCommandInput) {
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
  ): Handler<DisassociateMembersCommandInput, DisassociateMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "DisassociateMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateMembersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateMembersCommandOutput> {
    return deserializeAws_restJson1DisassociateMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
