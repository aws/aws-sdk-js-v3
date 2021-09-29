import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { DisassociateMembershipRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateMembershipCommand,
  serializeAws_restJson1DisassociateMembershipCommand,
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

export interface DisassociateMembershipCommandInput extends DisassociateMembershipRequest {}
export interface DisassociateMembershipCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the member account from the specified behavior graph. This operation can only be
 *          called by a member account that has the <code>ENABLED</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DisassociateMembershipCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DisassociateMembershipCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new DisassociateMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMembershipCommandInput} for command's `input` shape.
 * @see {@link DisassociateMembershipCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateMembershipCommand extends $Command<
  DisassociateMembershipCommandInput,
  DisassociateMembershipCommandOutput,
  DetectiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateMembershipCommandInput, DisassociateMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "DisassociateMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateMembershipCommandOutput> {
    return deserializeAws_restJson1DisassociateMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
