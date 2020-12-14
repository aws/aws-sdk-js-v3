import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetFieldLevelEncryptionRequest, GetFieldLevelEncryptionResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetFieldLevelEncryptionCommand,
  serializeAws_restXmlGetFieldLevelEncryptionCommand,
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

export type GetFieldLevelEncryptionCommandInput = GetFieldLevelEncryptionRequest;
export type GetFieldLevelEncryptionCommandOutput = GetFieldLevelEncryptionResult & __MetadataBearer;

/**
 * <p>Get the field-level encryption configuration information.</p>
 */
export class GetFieldLevelEncryptionCommand extends $Command<
  GetFieldLevelEncryptionCommandInput,
  GetFieldLevelEncryptionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFieldLevelEncryptionCommandInput) {
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
  ): Handler<GetFieldLevelEncryptionCommandInput, GetFieldLevelEncryptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetFieldLevelEncryptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFieldLevelEncryptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFieldLevelEncryptionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFieldLevelEncryptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetFieldLevelEncryptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFieldLevelEncryptionCommandOutput> {
    return deserializeAws_restXmlGetFieldLevelEncryptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
