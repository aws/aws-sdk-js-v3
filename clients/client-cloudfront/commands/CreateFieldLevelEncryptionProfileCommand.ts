import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateFieldLevelEncryptionProfileRequest, CreateFieldLevelEncryptionProfileResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand,
  serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand,
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

export type CreateFieldLevelEncryptionProfileCommandInput = CreateFieldLevelEncryptionProfileRequest;
export type CreateFieldLevelEncryptionProfileCommandOutput = CreateFieldLevelEncryptionProfileResult & __MetadataBearer;

/**
 * <p>Create a field-level encryption profile.</p>
 */
export class CreateFieldLevelEncryptionProfileCommand extends $Command<
  CreateFieldLevelEncryptionProfileCommandInput,
  CreateFieldLevelEncryptionProfileCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFieldLevelEncryptionProfileCommandInput) {
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
  ): Handler<CreateFieldLevelEncryptionProfileCommandInput, CreateFieldLevelEncryptionProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateFieldLevelEncryptionProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFieldLevelEncryptionProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFieldLevelEncryptionProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateFieldLevelEncryptionProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFieldLevelEncryptionProfileCommandOutput> {
    return deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
