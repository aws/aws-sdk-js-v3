import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { SetUserPoolMfaConfigRequest, SetUserPoolMfaConfigResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SetUserPoolMfaConfigCommand,
  serializeAws_json1_1SetUserPoolMfaConfigCommand,
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

export type SetUserPoolMfaConfigCommandInput = SetUserPoolMfaConfigRequest;
export type SetUserPoolMfaConfigCommandOutput = SetUserPoolMfaConfigResponse & __MetadataBearer;

/**
 * <p>Set the user pool multi-factor authentication (MFA) configuration.</p>
 */
export class SetUserPoolMfaConfigCommand extends $Command<
  SetUserPoolMfaConfigCommandInput,
  SetUserPoolMfaConfigCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetUserPoolMfaConfigCommandInput) {
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
  ): Handler<SetUserPoolMfaConfigCommandInput, SetUserPoolMfaConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "SetUserPoolMfaConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetUserPoolMfaConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetUserPoolMfaConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetUserPoolMfaConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetUserPoolMfaConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetUserPoolMfaConfigCommandOutput> {
    return deserializeAws_json1_1SetUserPoolMfaConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
