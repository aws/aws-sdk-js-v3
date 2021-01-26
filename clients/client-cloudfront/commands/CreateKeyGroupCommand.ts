import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateKeyGroupRequest, CreateKeyGroupResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateKeyGroupCommand,
  serializeAws_restXmlCreateKeyGroupCommand,
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

export type CreateKeyGroupCommandInput = CreateKeyGroupRequest;
export type CreateKeyGroupCommandOutput = CreateKeyGroupResult & __MetadataBearer;

/**
 * <p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
 * 		       <p>To create a key group, you must specify at least one public key for the key group. After you
 * 			create a key group, you can reference it from one or more cache behaviors. When you
 * 			reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies
 * 			for all requests that match the cache behavior. The URLs or cookies must be signed with
 * 			a private key whose corresponding public key is in the key group. The signed URL or
 * 			cookie contains information about which public key CloudFront should use to verify the
 * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class CreateKeyGroupCommand extends $Command<
  CreateKeyGroupCommandInput,
  CreateKeyGroupCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateKeyGroupCommandInput) {
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
  ): Handler<CreateKeyGroupCommandInput, CreateKeyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateKeyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateKeyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateKeyGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateKeyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateKeyGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeyGroupCommandOutput> {
    return deserializeAws_restXmlCreateKeyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
