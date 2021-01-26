import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { SetRiskConfigurationRequest, SetRiskConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SetRiskConfigurationCommand,
  serializeAws_json1_1SetRiskConfigurationCommand,
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

export type SetRiskConfigurationCommandInput = SetRiskConfigurationRequest;
export type SetRiskConfigurationCommandOutput = SetRiskConfigurationResponse & __MetadataBearer;

/**
 * <p>Configures actions on detected risks. To delete the risk configuration for
 *                 <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four
 *             configuration types.</p>
 *         <p>To enable Amazon Cognito advanced security features, update the user pool to include
 *             the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
 */
export class SetRiskConfigurationCommand extends $Command<
  SetRiskConfigurationCommandInput,
  SetRiskConfigurationCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetRiskConfigurationCommandInput) {
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
  ): Handler<SetRiskConfigurationCommandInput, SetRiskConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "SetRiskConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetRiskConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetRiskConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetRiskConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetRiskConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetRiskConfigurationCommandOutput> {
    return deserializeAws_json1_1SetRiskConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
