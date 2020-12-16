import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { UpdateResourceServerRequest, UpdateResourceServerResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateResourceServerCommand,
  serializeAws_json1_1UpdateResourceServerCommand,
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

export type UpdateResourceServerCommandInput = UpdateResourceServerRequest;
export type UpdateResourceServerCommandOutput = UpdateResourceServerResponse & __MetadataBearer;

/**
 * <p>Updates the name and scopes of resource server. All other fields are read-only.</p>
 *         <important>
 *             <p>If you don't provide a value for an attribute, it will be set to the default
 *                 value.</p>
 *         </important>
 */
export class UpdateResourceServerCommand extends $Command<
  UpdateResourceServerCommandInput,
  UpdateResourceServerCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateResourceServerCommandInput) {
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
  ): Handler<UpdateResourceServerCommandInput, UpdateResourceServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "UpdateResourceServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResourceServerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateResourceServerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResourceServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateResourceServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceServerCommandOutput> {
    return deserializeAws_json1_1UpdateResourceServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
