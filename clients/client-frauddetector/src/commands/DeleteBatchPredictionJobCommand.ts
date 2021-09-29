import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteBatchPredictionJobRequest, DeleteBatchPredictionJobResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBatchPredictionJobCommand,
  serializeAws_json1_1DeleteBatchPredictionJobCommand,
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

export interface DeleteBatchPredictionJobCommandInput extends DeleteBatchPredictionJobRequest {}
export interface DeleteBatchPredictionJobCommandOutput extends DeleteBatchPredictionJobResult, __MetadataBearer {}

/**
 * <p>Deletes a batch prediction job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteBatchPredictionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBatchPredictionJobCommandInput} for command's `input` shape.
 * @see {@link DeleteBatchPredictionJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBatchPredictionJobCommand extends $Command<
  DeleteBatchPredictionJobCommandInput,
  DeleteBatchPredictionJobCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBatchPredictionJobCommandInput) {
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
  ): Handler<DeleteBatchPredictionJobCommandInput, DeleteBatchPredictionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DeleteBatchPredictionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBatchPredictionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBatchPredictionJobResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBatchPredictionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteBatchPredictionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBatchPredictionJobCommandOutput> {
    return deserializeAws_json1_1DeleteBatchPredictionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
