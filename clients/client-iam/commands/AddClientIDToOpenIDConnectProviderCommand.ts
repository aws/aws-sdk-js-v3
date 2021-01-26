import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AddClientIDToOpenIDConnectProviderRequest } from "../models/models_0";
import {
  deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand,
  serializeAws_queryAddClientIDToOpenIDConnectProviderCommand,
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

export type AddClientIDToOpenIDConnectProviderCommandInput = AddClientIDToOpenIDConnectProviderRequest;
export type AddClientIDToOpenIDConnectProviderCommandOutput = __MetadataBearer;

/**
 * <p>Adds a new client ID (also known as audience) to the list of client IDs already
 *          registered for the specified IAM OpenID Connect (OIDC) provider resource.</p>
 *          <p>This operation is idempotent; it does not fail or return an error if you add an existing
 *          client ID to the provider.</p>
 */
export class AddClientIDToOpenIDConnectProviderCommand extends $Command<
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddClientIDToOpenIDConnectProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddClientIDToOpenIDConnectProviderCommandInput, AddClientIDToOpenIDConnectProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "AddClientIDToOpenIDConnectProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddClientIDToOpenIDConnectProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AddClientIDToOpenIDConnectProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAddClientIDToOpenIDConnectProviderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddClientIDToOpenIDConnectProviderCommandOutput> {
    return deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
