import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { InitiateAuthRequest, InitiateAuthResponse } from "../models/models_0";
import {
  deserializeAws_json1_1InitiateAuthCommand,
  serializeAws_json1_1InitiateAuthCommand,
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

export type InitiateAuthCommandInput = InitiateAuthRequest;
export type InitiateAuthCommandOutput = InitiateAuthResponse & __MetadataBearer;

/**
 * <p>Initiates the authentication flow.</p>
 */
export class InitiateAuthCommand extends $Command<
  InitiateAuthCommandInput,
  InitiateAuthCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InitiateAuthCommandInput) {
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
  ): Handler<InitiateAuthCommandInput, InitiateAuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "InitiateAuthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitiateAuthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InitiateAuthResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InitiateAuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InitiateAuthCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateAuthCommandOutput> {
    return deserializeAws_json1_1InitiateAuthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
