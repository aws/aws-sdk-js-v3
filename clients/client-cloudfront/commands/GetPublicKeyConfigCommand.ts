import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetPublicKeyConfigRequest, GetPublicKeyConfigResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetPublicKeyConfigCommand,
  serializeAws_restXmlGetPublicKeyConfigCommand,
} from "../protocols/Aws_restXml";
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

export type GetPublicKeyConfigCommandInput = GetPublicKeyConfigRequest;
export type GetPublicKeyConfigCommandOutput = GetPublicKeyConfigResult & __MetadataBearer;

/**
 * <p>Gets a public key configuration.</p>
 */
export class GetPublicKeyConfigCommand extends $Command<
  GetPublicKeyConfigCommandInput,
  GetPublicKeyConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPublicKeyConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPublicKeyConfigCommandInput, GetPublicKeyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetPublicKeyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPublicKeyConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPublicKeyConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPublicKeyConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetPublicKeyConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPublicKeyConfigCommandOutput> {
    return deserializeAws_restXmlGetPublicKeyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
