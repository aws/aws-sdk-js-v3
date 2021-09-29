import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetIdentityDkimEnabledRequest, SetIdentityDkimEnabledResponse } from "../models/models_0";
import {
  deserializeAws_querySetIdentityDkimEnabledCommand,
  serializeAws_querySetIdentityDkimEnabledCommand,
} from "../protocols/Aws_query";
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

export interface SetIdentityDkimEnabledCommandInput extends SetIdentityDkimEnabledRequest {}
export interface SetIdentityDkimEnabledCommandOutput extends SetIdentityDkimEnabledResponse, __MetadataBearer {}

/**
 * <p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM
 *             signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends
 *             from addresses on that domain. If Easy DKIM signing is enabled for an email address,
 *             then Amazon SES uses DKIM to sign all email it sends from that address.</p>
 *         <note>
 *             <p>For email addresses (for example, <code>user@example.com</code>), you can only
 *                 enable DKIM signing if the corresponding domain (in this case,
 *                     <code>example.com</code>) has been set up to use Easy DKIM.</p>
 *         </note>
 *         <p>You can enable DKIM signing for an identity at any time after you start the
 *             verification process for the identity, even if the verification process isn't complete. </p>
 *         <p>You can execute this operation no more than once per second.</p>
 *         <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityDkimEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityDkimEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new SetIdentityDkimEnabledCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIdentityDkimEnabledCommandInput} for command's `input` shape.
 * @see {@link SetIdentityDkimEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SetIdentityDkimEnabledCommand extends $Command<
  SetIdentityDkimEnabledCommandInput,
  SetIdentityDkimEnabledCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetIdentityDkimEnabledCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetIdentityDkimEnabledCommandInput, SetIdentityDkimEnabledCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetIdentityDkimEnabledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetIdentityDkimEnabledRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetIdentityDkimEnabledResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetIdentityDkimEnabledCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetIdentityDkimEnabledCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetIdentityDkimEnabledCommandOutput> {
    return deserializeAws_querySetIdentityDkimEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
