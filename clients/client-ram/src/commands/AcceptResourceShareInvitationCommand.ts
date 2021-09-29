import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { AcceptResourceShareInvitationRequest, AcceptResourceShareInvitationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AcceptResourceShareInvitationCommand,
  serializeAws_restJson1AcceptResourceShareInvitationCommand,
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

export interface AcceptResourceShareInvitationCommandInput extends AcceptResourceShareInvitationRequest {}
export interface AcceptResourceShareInvitationCommandOutput
  extends AcceptResourceShareInvitationResponse,
    __MetadataBearer {}

/**
 * <p>Accepts an invitation to a resource share from another Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AcceptResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AcceptResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AcceptResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptResourceShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AcceptResourceShareInvitationCommand extends $Command<
  AcceptResourceShareInvitationCommandInput,
  AcceptResourceShareInvitationCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptResourceShareInvitationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptResourceShareInvitationCommandInput, AcceptResourceShareInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "AcceptResourceShareInvitationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptResourceShareInvitationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptResourceShareInvitationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptResourceShareInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcceptResourceShareInvitationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptResourceShareInvitationCommandOutput> {
    return deserializeAws_restJson1AcceptResourceShareInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
