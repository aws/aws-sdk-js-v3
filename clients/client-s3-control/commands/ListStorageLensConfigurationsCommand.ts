import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListStorageLensConfigurationsRequest, ListStorageLensConfigurationsResult } from "../models/models_0";
import {
  deserializeAws_restXmlListStorageLensConfigurationsCommand,
  serializeAws_restXmlListStorageLensConfigurationsCommand,
} from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

export type ListStorageLensConfigurationsCommandInput = ListStorageLensConfigurationsRequest;
export type ListStorageLensConfigurationsCommandOutput = ListStorageLensConfigurationsResult & __MetadataBearer;

/**
 * <p>Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see
 *          <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Working with Amazon S3 Storage Lens</a> in the
 *          <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:ListStorageLensConfigurations</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html#storage_lens_IAM">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *          </note>
 */
export class ListStorageLensConfigurationsCommand extends $Command<
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStorageLensConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStorageLensConfigurationsCommandInput, ListStorageLensConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "ListStorageLensConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStorageLensConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStorageLensConfigurationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStorageLensConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListStorageLensConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStorageLensConfigurationsCommandOutput> {
    return deserializeAws_restXmlListStorageLensConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
