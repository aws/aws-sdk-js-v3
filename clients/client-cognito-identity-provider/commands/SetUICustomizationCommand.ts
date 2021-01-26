import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { SetUICustomizationRequest, SetUICustomizationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SetUICustomizationCommand,
  serializeAws_json1_1SetUICustomizationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export type SetUICustomizationCommandInput = SetUICustomizationRequest;
export type SetUICustomizationCommandOutput = SetUICustomizationResponse & __MetadataBearer;

/**
 * <p>Sets the UI customization information for a user pool's built-in app UI.</p>
 *         <p>You can specify app UI customization settings for a single client (with a specific
 *                 <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to
 *                 <code>ALL</code>). If you specify <code>ALL</code>, the default configuration will
 *             be used for every client that has no UI customization set previously. If you specify UI
 *             customization settings for a particular client, it will no longer fall back to the
 *                 <code>ALL</code> configuration. </p>
 *         <note>
 *             <p>To use this API, your user pool must have a domain associated with it. Otherwise,
 *                 there is no place to host the app's pages, and the service will throw an
 *                 error.</p>
 *         </note>
 */
export class SetUICustomizationCommand extends $Command<
  SetUICustomizationCommandInput,
  SetUICustomizationCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetUICustomizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetUICustomizationCommandInput, SetUICustomizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "SetUICustomizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetUICustomizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetUICustomizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetUICustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetUICustomizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetUICustomizationCommandOutput> {
    return deserializeAws_json1_1SetUICustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
