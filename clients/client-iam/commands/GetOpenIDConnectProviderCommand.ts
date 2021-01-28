import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetOpenIDConnectProviderRequest, GetOpenIDConnectProviderResponse } from "../models/models_0";
import {
  deserializeAws_queryGetOpenIDConnectProviderCommand,
  serializeAws_queryGetOpenIDConnectProviderCommand,
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

export type GetOpenIDConnectProviderCommandInput = GetOpenIDConnectProviderRequest;
export type GetOpenIDConnectProviderCommandOutput = GetOpenIDConnectProviderResponse & __MetadataBearer;

/**
 * <p>Returns information about the specified OpenID Connect (OIDC) provider resource object
 *          in IAM.</p>
 */
export class GetOpenIDConnectProviderCommand extends $Command<
  GetOpenIDConnectProviderCommandInput,
  GetOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOpenIDConnectProviderCommandInput) {
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
  ): Handler<GetOpenIDConnectProviderCommandInput, GetOpenIDConnectProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetOpenIDConnectProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOpenIDConnectProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOpenIDConnectProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOpenIDConnectProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetOpenIDConnectProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOpenIDConnectProviderCommandOutput> {
    return deserializeAws_queryGetOpenIDConnectProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
