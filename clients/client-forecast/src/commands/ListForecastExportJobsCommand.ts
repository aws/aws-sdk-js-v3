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
import { ListForecastExportJobsRequest, ListForecastExportJobsResponse } from "../models/models_0";
import { de_ListForecastExportJobsCommand, se_ListForecastExportJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListForecastExportJobsCommand}.
 */
export interface ListForecastExportJobsCommandInput extends ListForecastExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListForecastExportJobsCommand}.
 */
export interface ListForecastExportJobsCommandOutput extends ListForecastExportJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation
 *       returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the
 *       complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a>
 *       operation. You can filter the list using an array of <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListForecastExportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListForecastExportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // ListForecastExportJobsRequest
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
 * const command = new ListForecastExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListForecastExportJobsResponse
 * //   ForecastExportJobs: [ // ForecastExportJobs
 * //     { // ForecastExportJobSummary
 * //       ForecastExportJobArn: "STRING_VALUE",
 * //       ForecastExportJobName: "STRING_VALUE",
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
 * @param ListForecastExportJobsCommandInput - {@link ListForecastExportJobsCommandInput}
 * @returns {@link ListForecastExportJobsCommandOutput}
 * @see {@link ListForecastExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListForecastExportJobsCommandOutput} for command's `response` shape.
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
export class ListForecastExportJobsCommand extends $Command<
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListForecastExportJobsCommandInput) {
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
  ): Handler<ListForecastExportJobsCommandInput, ListForecastExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListForecastExportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListForecastExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "ListForecastExportJobs",
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
  private serialize(input: ListForecastExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListForecastExportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListForecastExportJobsCommandOutput> {
    return de_ListForecastExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
