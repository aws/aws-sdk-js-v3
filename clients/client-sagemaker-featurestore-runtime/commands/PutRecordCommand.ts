import {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";
import { PutRecordRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutRecordCommand,
  serializeAws_restJson1PutRecordCommand,
} from "../protocols/Aws_restJson1";
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

export type PutRecordCommandInput = PutRecordRequest;
export type PutRecordCommandOutput = __MetadataBearer;

/**
 * <p>Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code>
 *          API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the
 *          record is the latest record for the <code>recordIdentifier</code>, the record is written to
 *          both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a
 *          historic record, it is written only to the <code>OfflineStore</code>.</p>
 */
export class PutRecordCommand extends $Command<
  PutRecordCommandInput,
  PutRecordCommandOutput,
  SageMakerFeatureStoreRuntimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutRecordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerFeatureStoreRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRecordCommandInput, PutRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerFeatureStoreRuntimeClient";
    const commandName = "PutRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRecordRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRecordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRecordCommandOutput> {
    return deserializeAws_restJson1PutRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
