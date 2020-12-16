import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ListTagsForCertificateRequest, ListTagsForCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTagsForCertificateCommand,
  serializeAws_json1_1ListTagsForCertificateCommand,
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

export type ListTagsForCertificateCommandInput = ListTagsForCertificateRequest;
export type ListTagsForCertificateCommandOutput = ListTagsForCertificateResponse & __MetadataBearer;

/**
 * <p>Lists the tags that have been applied to the ACM certificate. Use the certificate's
 *       Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate,
 *       use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. </p>
 */
export class ListTagsForCertificateCommand extends $Command<
  ListTagsForCertificateCommandInput,
  ListTagsForCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsForCertificateCommandInput) {
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
  ): Handler<ListTagsForCertificateCommandInput, ListTagsForCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "ListTagsForCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsForCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsForCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTagsForCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsForCertificateCommandOutput> {
    return deserializeAws_json1_1ListTagsForCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
