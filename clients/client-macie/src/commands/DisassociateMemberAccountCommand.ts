import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { DisassociateMemberAccountRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateMemberAccountCommand,
  serializeAws_json1_1DisassociateMemberAccountCommand,
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

export interface DisassociateMemberAccountCommandInput extends DisassociateMemberAccountRequest {}
export interface DisassociateMemberAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified member account from Amazon Macie Classic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, DisassociateMemberAccountCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, DisassociateMemberAccountCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new DisassociateMemberAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMemberAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberAccountCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateMemberAccountCommand extends $Command<
  DisassociateMemberAccountCommandInput,
  DisassociateMemberAccountCommandOutput,
  MacieClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateMemberAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateMemberAccountCommandInput, DisassociateMemberAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "DisassociateMemberAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateMemberAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateMemberAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateMemberAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateMemberAccountCommandOutput> {
    return deserializeAws_json1_1DisassociateMemberAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
