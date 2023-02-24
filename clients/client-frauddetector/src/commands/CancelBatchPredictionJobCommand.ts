// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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
  CancelBatchPredictionJobRequest,
  CancelBatchPredictionJobRequestFilterSensitiveLog,
  CancelBatchPredictionJobResult,
  CancelBatchPredictionJobResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelBatchPredictionJobCommand,
  serializeAws_json1_1CancelBatchPredictionJobCommand,
} from "../protocols/Aws_json1_1";

export interface CancelBatchPredictionJobCommandInput extends CancelBatchPredictionJobRequest {}
export interface CancelBatchPredictionJobCommandOutput extends CancelBatchPredictionJobResult, __MetadataBearer {}

/**
 * <p>Cancels the specified batch prediction job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CancelBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CancelBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CancelBatchPredictionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelBatchPredictionJobCommandInput} for command's `input` shape.
 * @see {@link CancelBatchPredictionJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 */
export class CancelBatchPredictionJobCommand extends $Command<
  CancelBatchPredictionJobCommandInput,
  CancelBatchPredictionJobCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CancelBatchPredictionJobCommandInput) {
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
  ): Handler<CancelBatchPredictionJobCommandInput, CancelBatchPredictionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelBatchPredictionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "CancelBatchPredictionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelBatchPredictionJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelBatchPredictionJobResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelBatchPredictionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelBatchPredictionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelBatchPredictionJobCommandOutput> {
    return deserializeAws_json1_1CancelBatchPredictionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
