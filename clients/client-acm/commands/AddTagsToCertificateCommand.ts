import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { AddTagsToCertificateRequest } from "../models/models_0";
import {
  deserializeAws_json1_1AddTagsToCertificateCommand,
  serializeAws_json1_1AddTagsToCertificateCommand,
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

export type AddTagsToCertificateCommandInput = AddTagsToCertificateRequest;
export type AddTagsToCertificateCommandOutput = __MetadataBearer;

/**
 * <p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to
 *       identify and organize your AWS resources. Each tag consists of a <code>key</code> and an
 *       optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name
 *       (ARN). You specify the tag by using a key-value pair. </p>
 *
 *          <p>You can apply a tag to just one certificate if you want to identify a specific
 *       characteristic of that certificate, or you can apply the same tag to multiple certificates if
 *       you want to filter for a common relationship among those certificates. Similarly, you can
 *       apply the same tag to multiple resources if you want to specify a relationship among those
 *       resources. For example, you can add the same tag to an ACM certificate and an Elastic Load
 *       Balancing load balancer to indicate that they are both used by the same website. For more
 *       information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM
 *         certificates</a>. </p>
 *
 *          <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To
 *       view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>
 */
export class AddTagsToCertificateCommand extends $Command<
  AddTagsToCertificateCommandInput,
  AddTagsToCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddTagsToCertificateCommandInput) {
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
  ): Handler<AddTagsToCertificateCommandInput, AddTagsToCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "AddTagsToCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsToCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsToCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddTagsToCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToCertificateCommandOutput> {
    return deserializeAws_json1_1AddTagsToCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
