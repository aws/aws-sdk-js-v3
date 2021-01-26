import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { GetIdentityProviderByIdentifierRequest, GetIdentityProviderByIdentifierResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetIdentityProviderByIdentifierCommand,
  serializeAws_json1_1GetIdentityProviderByIdentifierCommand,
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

export type GetIdentityProviderByIdentifierCommandInput = GetIdentityProviderByIdentifierRequest;
export type GetIdentityProviderByIdentifierCommandOutput = GetIdentityProviderByIdentifierResponse & __MetadataBearer;

/**
 * <p>Gets the specified identity provider.</p>
 */
export class GetIdentityProviderByIdentifierCommand extends $Command<
  GetIdentityProviderByIdentifierCommandInput,
  GetIdentityProviderByIdentifierCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIdentityProviderByIdentifierCommandInput) {
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
  ): Handler<GetIdentityProviderByIdentifierCommandInput, GetIdentityProviderByIdentifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "GetIdentityProviderByIdentifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdentityProviderByIdentifierRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIdentityProviderByIdentifierResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetIdentityProviderByIdentifierCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetIdentityProviderByIdentifierCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityProviderByIdentifierCommandOutput> {
    return deserializeAws_json1_1GetIdentityProviderByIdentifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
