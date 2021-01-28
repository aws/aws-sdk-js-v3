import {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";
import { GetRecordRequest, GetRecordResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRecordCommand,
  serializeAws_restJson1GetRecordCommand,
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

export type GetRecordCommandInput = GetRecordRequest;
export type GetRecordCommandOutput = GetRecordResponse & __MetadataBearer;

/**
 * <p>Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the
 *          latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with
 *             <code>RecordIdentifierValue</code> is found, then an empty result is returned. </p>
 */
export class GetRecordCommand extends $Command<
  GetRecordCommandInput,
  GetRecordCommandOutput,
  SageMakerFeatureStoreRuntimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRecordCommandInput) {
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
  ): Handler<GetRecordCommandInput, GetRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerFeatureStoreRuntimeClient";
    const commandName = "GetRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRecordRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRecordResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRecordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRecordCommandOutput> {
    return deserializeAws_restJson1GetRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
