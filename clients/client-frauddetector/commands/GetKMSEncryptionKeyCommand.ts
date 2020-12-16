import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetKMSEncryptionKeyResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetKMSEncryptionKeyCommand,
  serializeAws_json1_1GetKMSEncryptionKeyCommand,
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

export type GetKMSEncryptionKeyCommandInput = {};
export type GetKMSEncryptionKeyCommandOutput = GetKMSEncryptionKeyResult & __MetadataBearer;

/**
 * <p>Gets the encryption key if a Key Management Service (KMS) customer master key (CMK) has been specified to be used to encrypt content in Amazon Fraud Detector.</p>
 */
export class GetKMSEncryptionKeyCommand extends $Command<
  GetKMSEncryptionKeyCommandInput,
  GetKMSEncryptionKeyCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetKMSEncryptionKeyCommandInput) {
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
  ): Handler<GetKMSEncryptionKeyCommandInput, GetKMSEncryptionKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetKMSEncryptionKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetKMSEncryptionKeyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetKMSEncryptionKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetKMSEncryptionKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKMSEncryptionKeyCommandOutput> {
    return deserializeAws_json1_1GetKMSEncryptionKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
