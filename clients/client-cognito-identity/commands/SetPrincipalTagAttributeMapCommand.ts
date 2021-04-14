import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { SetPrincipalTagAttributeMapInput, SetPrincipalTagAttributeMapResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SetPrincipalTagAttributeMapCommand,
  serializeAws_json1_1SetPrincipalTagAttributeMapCommand,
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

export type SetPrincipalTagAttributeMapCommandInput = SetPrincipalTagAttributeMapInput;
export type SetPrincipalTagAttributeMapCommandOutput = SetPrincipalTagAttributeMapResponse & __MetadataBearer;

/**
 * <p>You can use this operation to use default (username and clientID) attribute or custom attribute mappings.</p>
 */
export class SetPrincipalTagAttributeMapCommand extends $Command<
  SetPrincipalTagAttributeMapCommandInput,
  SetPrincipalTagAttributeMapCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetPrincipalTagAttributeMapCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetPrincipalTagAttributeMapCommandInput, SetPrincipalTagAttributeMapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "SetPrincipalTagAttributeMapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetPrincipalTagAttributeMapInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetPrincipalTagAttributeMapResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetPrincipalTagAttributeMapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetPrincipalTagAttributeMapCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetPrincipalTagAttributeMapCommandOutput> {
    return deserializeAws_json1_1SetPrincipalTagAttributeMapCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
