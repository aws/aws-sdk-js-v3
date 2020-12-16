import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { GetUICustomizationRequest, GetUICustomizationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetUICustomizationCommand,
  serializeAws_json1_1GetUICustomizationCommand,
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

export type GetUICustomizationCommandInput = GetUICustomizationRequest;
export type GetUICustomizationCommandOutput = GetUICustomizationResponse & __MetadataBearer;

/**
 * <p>Gets the UI Customization information for a particular app client's app UI, if there
 *             is something set. If nothing is set for the particular client, but there is an existing
 *             pool level customization (app <code>clientId</code> will be <code>ALL</code>), then that
 *             is returned. If nothing is present, then an empty shape is returned.</p>
 */
export class GetUICustomizationCommand extends $Command<
  GetUICustomizationCommandInput,
  GetUICustomizationCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUICustomizationCommandInput) {
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
  ): Handler<GetUICustomizationCommandInput, GetUICustomizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "GetUICustomizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUICustomizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUICustomizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUICustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUICustomizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUICustomizationCommandOutput> {
    return deserializeAws_json1_1GetUICustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
