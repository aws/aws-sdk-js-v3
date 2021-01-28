import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetSAMLProviderRequest, GetSAMLProviderResponse } from "../models/models_0";
import {
  deserializeAws_queryGetSAMLProviderCommand,
  serializeAws_queryGetSAMLProviderCommand,
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

export type GetSAMLProviderCommandInput = GetSAMLProviderRequest;
export type GetSAMLProviderCommandOutput = GetSAMLProviderResponse & __MetadataBearer;

/**
 * <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider
 *          resource object was created or updated.</p>
 *          <note>
 *             <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *          </note>
 */
export class GetSAMLProviderCommand extends $Command<
  GetSAMLProviderCommandInput,
  GetSAMLProviderCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSAMLProviderCommandInput) {
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
  ): Handler<GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetSAMLProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSAMLProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSAMLProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSAMLProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetSAMLProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSAMLProviderCommandOutput> {
    return deserializeAws_queryGetSAMLProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
