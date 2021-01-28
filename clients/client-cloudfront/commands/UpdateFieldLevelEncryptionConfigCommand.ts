import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateFieldLevelEncryptionConfigRequest, UpdateFieldLevelEncryptionConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand,
  serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand,
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

export type UpdateFieldLevelEncryptionConfigCommandInput = UpdateFieldLevelEncryptionConfigRequest;
export type UpdateFieldLevelEncryptionConfigCommandOutput = UpdateFieldLevelEncryptionConfigResult & __MetadataBearer;

/**
 * <p>Update a field-level encryption configuration. </p>
 */
export class UpdateFieldLevelEncryptionConfigCommand extends $Command<
  UpdateFieldLevelEncryptionConfigCommandInput,
  UpdateFieldLevelEncryptionConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFieldLevelEncryptionConfigCommandInput) {
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
  ): Handler<UpdateFieldLevelEncryptionConfigCommandInput, UpdateFieldLevelEncryptionConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateFieldLevelEncryptionConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFieldLevelEncryptionConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFieldLevelEncryptionConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateFieldLevelEncryptionConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFieldLevelEncryptionConfigCommandOutput> {
    return deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
