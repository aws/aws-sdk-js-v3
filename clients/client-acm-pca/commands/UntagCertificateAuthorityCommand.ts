import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { UntagCertificateAuthorityRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UntagCertificateAuthorityCommand,
  serializeAws_json1_1UntagCertificateAuthorityCommand,
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

export type UntagCertificateAuthorityCommandInput = UntagCertificateAuthorityRequest;
export type UntagCertificateAuthorityCommandOutput = __MetadataBearer;

/**
 * <p>Remove one or more tags from your private CA. A tag consists of a key-value pair. If
 * 			you do not specify the value portion of the tag when calling this action, the tag will
 * 			be removed regardless of value. If you specify a value, the tag is removed only if it is
 * 			associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are
 * 			associated with your CA. </p>
 */
export class UntagCertificateAuthorityCommand extends $Command<
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UntagCertificateAuthorityCommandInput) {
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
  ): Handler<UntagCertificateAuthorityCommandInput, UntagCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "UntagCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UntagCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UntagCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UntagCertificateAuthorityCommandOutput> {
    return deserializeAws_json1_1UntagCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
