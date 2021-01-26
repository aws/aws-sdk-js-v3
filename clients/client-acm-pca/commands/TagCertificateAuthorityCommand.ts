import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { TagCertificateAuthorityRequest } from "../models/models_0";
import {
  deserializeAws_json1_1TagCertificateAuthorityCommand,
  serializeAws_json1_1TagCertificateAuthorityCommand,
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

export type TagCertificateAuthorityCommandInput = TagCertificateAuthorityRequest;
export type TagCertificateAuthorityCommandOutput = __MetadataBearer;

/**
 * <p>Adds one or more tags to your private CA. Tags are labels that you can use to identify
 * 			and organize your AWS resources. Each tag consists of a key and an optional value. You
 * 			specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag
 * 			by using a key-value pair. You can apply a tag to just one private CA if you want to
 * 			identify a specific characteristic of that CA, or you can apply the same tag to multiple
 * 			private CAs if you want to filter for a common relationship among those CAs. To remove
 * 			one or more tags, use the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are
 * 			associated with your CA. </p>
 */
export class TagCertificateAuthorityCommand extends $Command<
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagCertificateAuthorityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagCertificateAuthorityCommandInput, TagCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "TagCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TagCertificateAuthorityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagCertificateAuthorityCommandOutput> {
    return deserializeAws_json1_1TagCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
