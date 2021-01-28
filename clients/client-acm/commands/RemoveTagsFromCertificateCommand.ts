import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { RemoveTagsFromCertificateRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RemoveTagsFromCertificateCommand,
  serializeAws_json1_1RemoveTagsFromCertificateCommand,
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

export type RemoveTagsFromCertificateCommandInput = RemoveTagsFromCertificateRequest;
export type RemoveTagsFromCertificateCommandOutput = __MetadataBearer;

/**
 * <p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If
 *       you do not specify the value portion of the tag when calling this function, the tag will be
 *       removed regardless of value. If you specify a value, the tag is removed only if it is
 *       associated with the specified value. </p>
 *
 *          <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To
 *       view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>
 */
export class RemoveTagsFromCertificateCommand extends $Command<
  RemoveTagsFromCertificateCommandInput,
  RemoveTagsFromCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveTagsFromCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTagsFromCertificateCommandInput, RemoveTagsFromCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "RemoveTagsFromCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveTagsFromCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveTagsFromCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveTagsFromCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveTagsFromCertificateCommandOutput> {
    return deserializeAws_json1_1RemoveTagsFromCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
