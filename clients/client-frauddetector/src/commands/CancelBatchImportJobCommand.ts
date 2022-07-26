// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import {
  CancelBatchImportJobRequest,
  CancelBatchImportJobRequestFilterSensitiveLog,
  CancelBatchImportJobResult,
  CancelBatchImportJobResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelBatchImportJobCommand,
  serializeAws_json1_1CancelBatchImportJobCommand,
} from "../protocols/Aws_json1_1";

export interface CancelBatchImportJobCommandInput extends CancelBatchImportJobRequest {}
export interface CancelBatchImportJobCommandOutput extends CancelBatchImportJobResult, __MetadataBearer {}

/**
 * <p> Cancels an in-progress batch import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CancelBatchImportJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CancelBatchImportJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CancelBatchImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelBatchImportJobCommandInput} for command's `input` shape.
 * @see {@link CancelBatchImportJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 */
export class CancelBatchImportJobCommand extends $Command<
  CancelBatchImportJobCommandInput,
  CancelBatchImportJobCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelBatchImportJobCommandInput) {
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
  ): Handler<CancelBatchImportJobCommandInput, CancelBatchImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "CancelBatchImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelBatchImportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelBatchImportJobResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelBatchImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelBatchImportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelBatchImportJobCommandOutput> {
    return deserializeAws_json1_1CancelBatchImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
