import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListFieldLevelEncryptionConfigsRequest, ListFieldLevelEncryptionConfigsResult } from "../models/models_1";
import {
  deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand,
  serializeAws_restXmlListFieldLevelEncryptionConfigsCommand,
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

export type ListFieldLevelEncryptionConfigsCommandInput = ListFieldLevelEncryptionConfigsRequest;
export type ListFieldLevelEncryptionConfigsCommandOutput = ListFieldLevelEncryptionConfigsResult & __MetadataBearer;

/**
 * <p>List all field-level encryption configurations that have been created in CloudFront for this account.</p>
 */
export class ListFieldLevelEncryptionConfigsCommand extends $Command<
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFieldLevelEncryptionConfigsCommandInput) {
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
  ): Handler<ListFieldLevelEncryptionConfigsCommandInput, ListFieldLevelEncryptionConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListFieldLevelEncryptionConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFieldLevelEncryptionConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFieldLevelEncryptionConfigsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListFieldLevelEncryptionConfigsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListFieldLevelEncryptionConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFieldLevelEncryptionConfigsCommandOutput> {
    return deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
