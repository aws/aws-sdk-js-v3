import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListIdentityPoliciesRequest, ListIdentityPoliciesResponse } from "../models/models_0";
import {
  deserializeAws_queryListIdentityPoliciesCommand,
  serializeAws_queryListIdentityPoliciesCommand,
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

export interface ListIdentityPoliciesCommandInput extends ListIdentityPoliciesRequest {}
export interface ListIdentityPoliciesCommandOutput extends ListIdentityPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of sending authorization policies that are attached to the given
 *             identity (an email address or a domain). This API returns only a list. If you want the
 *             actual policy content, you can use <code>GetIdentityPolicies</code>.</p>
 *         <note>
 *             <p>This API is for the identity owner only. If you have not verified the identity,
 *                 this API will return an error.</p>
 *         </note>
 *         <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListIdentityPoliciesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListIdentityPoliciesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new ListIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentityPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListIdentityPoliciesCommand extends $Command<
  ListIdentityPoliciesCommandInput,
  ListIdentityPoliciesCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIdentityPoliciesCommandInput) {
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
  ): Handler<ListIdentityPoliciesCommandInput, ListIdentityPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListIdentityPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIdentityPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListIdentityPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIdentityPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListIdentityPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIdentityPoliciesCommandOutput> {
    return deserializeAws_queryListIdentityPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
