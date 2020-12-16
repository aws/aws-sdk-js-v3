import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreatePublicKeyRequest, CreatePublicKeyResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreatePublicKeyCommand,
  serializeAws_restXmlCreatePublicKeyCommand,
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

export type CreatePublicKeyCommandInput = CreatePublicKeyRequest;
export type CreatePublicKeyCommandOutput = CreatePublicKeyResult & __MetadataBearer;

/**
 * <p>Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
 */
export class CreatePublicKeyCommand extends $Command<
  CreatePublicKeyCommandInput,
  CreatePublicKeyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePublicKeyCommandInput) {
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
  ): Handler<CreatePublicKeyCommandInput, CreatePublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreatePublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePublicKeyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreatePublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePublicKeyCommandOutput> {
    return deserializeAws_restXmlCreatePublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
