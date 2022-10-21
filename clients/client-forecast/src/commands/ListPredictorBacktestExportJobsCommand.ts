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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  ListPredictorBacktestExportJobsRequest,
  ListPredictorBacktestExportJobsRequestFilterSensitiveLog,
  ListPredictorBacktestExportJobsResponse,
  ListPredictorBacktestExportJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListPredictorBacktestExportJobsCommand,
  serializeAws_json1_1ListPredictorBacktestExportJobsCommand,
} from "../protocols/Aws_json1_1";

export interface ListPredictorBacktestExportJobsCommandInput extends ListPredictorBacktestExportJobsRequest {}
export interface ListPredictorBacktestExportJobsCommandOutput
  extends ListPredictorBacktestExportJobsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a
 *             summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p>
 *         <p>To retrieve the complete set of properties for a particular backtest export job, use
 *             the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListPredictorBacktestExportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListPredictorBacktestExportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListPredictorBacktestExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPredictorBacktestExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListPredictorBacktestExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class ListPredictorBacktestExportJobsCommand extends $Command<
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput,
  ForecastClientResolvedConfig
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

  constructor(readonly input: ListPredictorBacktestExportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPredictorBacktestExportJobsCommandInput, ListPredictorBacktestExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPredictorBacktestExportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListPredictorBacktestExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPredictorBacktestExportJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPredictorBacktestExportJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPredictorBacktestExportJobsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPredictorBacktestExportJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPredictorBacktestExportJobsCommandOutput> {
    return deserializeAws_json1_1ListPredictorBacktestExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
