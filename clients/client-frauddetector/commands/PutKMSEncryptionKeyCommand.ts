import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutKMSEncryptionKeyRequest, PutKMSEncryptionKeyResult } from "../models/models_0";
import {
  deserializeAws_json1_1PutKMSEncryptionKeyCommand,
  serializeAws_json1_1PutKMSEncryptionKeyCommand,
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

export type PutKMSEncryptionKeyCommandInput = PutKMSEncryptionKeyRequest;
export type PutKMSEncryptionKeyCommandOutput = PutKMSEncryptionKeyResult & __MetadataBearer;

/**
 * <p>Specifies the Key Management Service (KMS) customer master key (CMK) to be used to encrypt content in Amazon Fraud Detector.</p>
 */
export class PutKMSEncryptionKeyCommand extends $Command<
  PutKMSEncryptionKeyCommandInput,
  PutKMSEncryptionKeyCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutKMSEncryptionKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutKMSEncryptionKeyCommandInput, PutKMSEncryptionKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "PutKMSEncryptionKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutKMSEncryptionKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutKMSEncryptionKeyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutKMSEncryptionKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutKMSEncryptionKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutKMSEncryptionKeyCommandOutput> {
    return deserializeAws_json1_1PutKMSEncryptionKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
