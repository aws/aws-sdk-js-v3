import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteFieldLevelEncryptionProfileRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand,
  serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand,
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

export type DeleteFieldLevelEncryptionProfileCommandInput = DeleteFieldLevelEncryptionProfileRequest;
export type DeleteFieldLevelEncryptionProfileCommandOutput = __MetadataBearer;

/**
 * <p>Remove a field-level encryption profile.</p>
 */
export class DeleteFieldLevelEncryptionProfileCommand extends $Command<
  DeleteFieldLevelEncryptionProfileCommandInput,
  DeleteFieldLevelEncryptionProfileCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFieldLevelEncryptionProfileCommandInput) {
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
  ): Handler<DeleteFieldLevelEncryptionProfileCommandInput, DeleteFieldLevelEncryptionProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteFieldLevelEncryptionProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFieldLevelEncryptionProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteFieldLevelEncryptionProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteFieldLevelEncryptionProfileCommandOutput> {
    return deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
