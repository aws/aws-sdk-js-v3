import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { VerifyDomainIdentityRequest, VerifyDomainIdentityResponse } from "../models/models_0";
import {
  deserializeAws_queryVerifyDomainIdentityCommand,
  serializeAws_queryVerifyDomainIdentityCommand,
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

export interface VerifyDomainIdentityCommandInput extends VerifyDomainIdentityRequest {}
export interface VerifyDomainIdentityCommandOutput extends VerifyDomainIdentityResponse, __MetadataBearer {}

/**
 * <p>Adds a domain to the list of identities for your Amazon SES account in the current AWS
 *             Region and attempts to verify it. For more information about verifying domains, see
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email
 *                 Addresses and Domains</a> in the <i>Amazon SES Developer
 *             Guide.</i>
 *          </p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyDomainIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyDomainIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new VerifyDomainIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyDomainIdentityCommandInput} for command's `input` shape.
 * @see {@link VerifyDomainIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class VerifyDomainIdentityCommand extends $Command<
  VerifyDomainIdentityCommandInput,
  VerifyDomainIdentityCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: VerifyDomainIdentityCommandInput) {
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
  ): Handler<VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "VerifyDomainIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyDomainIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VerifyDomainIdentityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyDomainIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryVerifyDomainIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyDomainIdentityCommandOutput> {
    return deserializeAws_queryVerifyDomainIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
