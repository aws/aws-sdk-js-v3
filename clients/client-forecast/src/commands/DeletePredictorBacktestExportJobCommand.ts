// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeletePredictorBacktestExportJobRequest } from "../models/models_0";
import {
  de_DeletePredictorBacktestExportJobCommand,
  se_DeletePredictorBacktestExportJobCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePredictorBacktestExportJobCommand}.
 */
export interface DeletePredictorBacktestExportJobCommandInput extends DeletePredictorBacktestExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DeletePredictorBacktestExportJobCommand}.
 */
export interface DeletePredictorBacktestExportJobCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a predictor backtest export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeletePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeletePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DeletePredictorBacktestExportJobRequest
 *   PredictorBacktestExportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DeletePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePredictorBacktestExportJobCommandInput - {@link DeletePredictorBacktestExportJobCommandInput}
 * @returns {@link DeletePredictorBacktestExportJobCommandOutput}
 * @see {@link DeletePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link DeletePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class DeletePredictorBacktestExportJobCommand extends $Command<
  DeletePredictorBacktestExportJobCommandInput,
  DeletePredictorBacktestExportJobCommandOutput,
  ForecastClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeletePredictorBacktestExportJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePredictorBacktestExportJobCommandInput, DeletePredictorBacktestExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePredictorBacktestExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DeletePredictorBacktestExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "DeletePredictorBacktestExportJob",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DeletePredictorBacktestExportJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeletePredictorBacktestExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePredictorBacktestExportJobCommandOutput> {
    return de_DeletePredictorBacktestExportJobCommand(output, context);
  }
}
