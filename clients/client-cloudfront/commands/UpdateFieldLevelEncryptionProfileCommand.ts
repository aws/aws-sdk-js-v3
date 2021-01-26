import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateFieldLevelEncryptionProfileRequest, UpdateFieldLevelEncryptionProfileResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand,
  serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand,
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

export type UpdateFieldLevelEncryptionProfileCommandInput = UpdateFieldLevelEncryptionProfileRequest;
export type UpdateFieldLevelEncryptionProfileCommandOutput = UpdateFieldLevelEncryptionProfileResult & __MetadataBearer;

/**
 * <p>Update a field-level encryption profile. </p>
 */
export class UpdateFieldLevelEncryptionProfileCommand extends $Command<
  UpdateFieldLevelEncryptionProfileCommandInput,
  UpdateFieldLevelEncryptionProfileCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFieldLevelEncryptionProfileCommandInput) {
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
  ): Handler<UpdateFieldLevelEncryptionProfileCommandInput, UpdateFieldLevelEncryptionProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateFieldLevelEncryptionProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFieldLevelEncryptionProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFieldLevelEncryptionProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateFieldLevelEncryptionProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFieldLevelEncryptionProfileCommandOutput> {
    return deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
