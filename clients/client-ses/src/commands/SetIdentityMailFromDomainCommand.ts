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

import { SetIdentityMailFromDomainRequest, SetIdentityMailFromDomainResponse } from "../models/models_0";
import {
  deserializeAws_querySetIdentityMailFromDomainCommand,
  serializeAws_querySetIdentityMailFromDomainCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 *
 * The input for {@link SetIdentityMailFromDomainCommand}.
 */
export interface SetIdentityMailFromDomainCommandInput extends SetIdentityMailFromDomainRequest {}
/**
 * @public
 *
 * The output of {@link SetIdentityMailFromDomainCommand}.
 */
export interface SetIdentityMailFromDomainCommandOutput extends SetIdentityMailFromDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an
 *             email address or a domain).</p>
 *         <important>
 *             <p>To send emails using the specified MAIL FROM domain, you must add an MX record to
 *                 your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy
 *                 Framework (SPF) checks, you must also add or update an SPF record. For more
 *                 information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         </important>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityMailFromDomainCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityMailFromDomainCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SetIdentityMailFromDomainRequest
 *   Identity: "STRING_VALUE", // required
 *   MailFromDomain: "STRING_VALUE",
 *   BehaviorOnMXFailure: "STRING_VALUE",
 * };
 * const command = new SetIdentityMailFromDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SetIdentityMailFromDomainCommandInput - {@link SetIdentityMailFromDomainCommandInput}
 * @returns {@link SetIdentityMailFromDomainCommandOutput}
 * @see {@link SetIdentityMailFromDomainCommandInput} for command's `input` shape.
 * @see {@link SetIdentityMailFromDomainCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 *
 * @example SetIdentityMailFromDomain
 * ```javascript
 * // The following example configures Amazon SES to use a custom MAIL FROM domain for an identity:
 * const input = {
 *   "BehaviorOnMXFailure": "UseDefaultValue",
 *   "Identity": "user@example.com",
 *   "MailFromDomain": "bounces.example.com"
 * };
 * const command = new SetIdentityMailFromDomainCommand(input);
 * await client.send(command);
 * // example id: setidentitymailfromdomain-1469057693908
 * ```
 *
 */
export class SetIdentityMailFromDomainCommand extends $Command<
  SetIdentityMailFromDomainCommandInput,
  SetIdentityMailFromDomainCommandOutput,
  SESClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: SetIdentityMailFromDomainCommandInput) {
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
  ): Handler<SetIdentityMailFromDomainCommandInput, SetIdentityMailFromDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetIdentityMailFromDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetIdentityMailFromDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SetIdentityMailFromDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetIdentityMailFromDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetIdentityMailFromDomainCommandOutput> {
    return deserializeAws_querySetIdentityMailFromDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
