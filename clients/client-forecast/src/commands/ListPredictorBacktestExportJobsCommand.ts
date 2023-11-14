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
import { ListPredictorBacktestExportJobsRequest, ListPredictorBacktestExportJobsResponse } from "../models/models_0";
import {
  de_ListPredictorBacktestExportJobsCommand,
  se_ListPredictorBacktestExportJobsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPredictorBacktestExportJobsCommand}.
 */
export interface ListPredictorBacktestExportJobsCommandInput extends ListPredictorBacktestExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListPredictorBacktestExportJobsCommand}.
 */
export interface ListPredictorBacktestExportJobsCommandOutput
  extends ListPredictorBacktestExportJobsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a
 *             summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p>
 *          <p>To retrieve the complete set of properties for a particular backtest export job, use
 *             the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListPredictorBacktestExportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListPredictorBacktestExportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // ListPredictorBacktestExportJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListPredictorBacktestExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListPredictorBacktestExportJobsResponse
 * //   PredictorBacktestExportJobs: [ // PredictorBacktestExportJobs
 * //     { // PredictorBacktestExportJobSummary
 * //       PredictorBacktestExportJobArn: "STRING_VALUE",
 * //       PredictorBacktestExportJobName: "STRING_VALUE",
 * //       Destination: { // DataDestination
 * //         S3Config: { // S3Config
 * //           Path: "STRING_VALUE", // required
 * //           RoleArn: "STRING_VALUE", // required
 * //           KMSKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPredictorBacktestExportJobsCommandInput - {@link ListPredictorBacktestExportJobsCommandInput}
 * @returns {@link ListPredictorBacktestExportJobsCommandOutput}
 * @see {@link ListPredictorBacktestExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListPredictorBacktestExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class ListPredictorBacktestExportJobsCommand extends $Command<
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput,
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
  constructor(readonly input: ListPredictorBacktestExportJobsCommandInput) {
    super();
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "ListPredictorBacktestExportJobs",
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
    input: ListPredictorBacktestExportJobsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListPredictorBacktestExportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPredictorBacktestExportJobsCommandOutput> {
    return de_ListPredictorBacktestExportJobsCommand(output, context);
  }
}
