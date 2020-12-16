import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CreatePlatformApplicationInput, CreatePlatformApplicationResponse } from "../models/models_0";
import {
  deserializeAws_queryCreatePlatformApplicationCommand,
  serializeAws_queryCreatePlatformApplicationCommand,
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

export type CreatePlatformApplicationCommandInput = CreatePlatformApplicationInput;
export type CreatePlatformApplicationCommandOutput = CreatePlatformApplicationResponse & __MetadataBearer;

/**
 * <p>Creates a platform application object for one of the supported push notification services,
 *             such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile apps may register.
 *             You must specify <code>PlatformPrincipal</code> and <code>PlatformCredential</code> attributes
 *             when using the <code>CreatePlatformApplication</code> action.</p>
 *         <p>
 *             <code>PlatformPrincipal</code> and <code>PlatformCredential</code> are received from
 *             the notification service.</p>
 *         <ul>
 *             <li>
 *                 <p>For <code>ADM</code>, <code>PlatformPrincipal</code> is <code>client id</code>
 *                     and <code>PlatformCredential</code> is <code>client secret</code>.</p>
 *             </li>
 *             <li>
 *                 <p>For <code>Baidu</code>, <code>PlatformPrincipal</code> is <code>API key</code>
 *                     and <code>PlatformCredential</code> is <code>secret key</code>.</p>
 *             </li>
 *             <li>
 *                 <p>For <code>APNS</code> and <code>APNS_SANDBOX</code>,
 *                         <code>PlatformPrincipal</code> is <code>SSL certificate</code> and
 *                         <code>PlatformCredential</code> is <code>private key</code>.</p>
 *             </li>
 *             <li>
 *                 <p>For <code>GCM</code> (Firebase Cloud Messaging), there is no
 *                         <code>PlatformPrincipal</code> and the <code>PlatformCredential</code> is
 *                         <code>API key</code>.</p>
 *             </li>
 *             <li>
 *                 <p>For <code>MPNS</code>, <code>PlatformPrincipal</code> is <code>TLS
 *                         certificate</code> and <code>PlatformCredential</code> is <code>private
 *                         key</code>.</p>
 *             </li>
 *             <li>
 *                 <p>For <code>WNS</code>, <code>PlatformPrincipal</code> is <code>Package Security
 *                         Identifier</code> and <code>PlatformCredential</code> is <code>secret
 *                         key</code>.</p>
 *             </li>
 *          </ul>
 *         <p>You can use the returned <code>PlatformApplicationArn</code> as an attribute for the
 *                 <code>CreatePlatformEndpoint</code> action.</p>
 */
export class CreatePlatformApplicationCommand extends $Command<
  CreatePlatformApplicationCommandInput,
  CreatePlatformApplicationCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePlatformApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePlatformApplicationCommandInput, CreatePlatformApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "CreatePlatformApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePlatformApplicationInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePlatformApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePlatformApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreatePlatformApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePlatformApplicationCommandOutput> {
    return deserializeAws_queryCreatePlatformApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
