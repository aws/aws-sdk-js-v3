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
import { ListWhatIfForecastExportsRequest, ListWhatIfForecastExportsResponse } from "../models/models_0";
import { de_ListWhatIfForecastExportsCommand, se_ListWhatIfForecastExportsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWhatIfForecastExportsCommand}.
 */
export interface ListWhatIfForecastExportsCommandInput extends ListWhatIfForecastExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListWhatIfForecastExportsCommand}.
 */
export interface ListWhatIfForecastExportsCommandOutput extends ListWhatIfForecastExportsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListWhatIfForecastExportsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListWhatIfForecastExportsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // ListWhatIfForecastExportsRequest
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
 * const command = new ListWhatIfForecastExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListWhatIfForecastExportsResponse
 * //   WhatIfForecastExports: [ // WhatIfForecastExports
 * //     { // WhatIfForecastExportSummary
 * //       WhatIfForecastExportArn: "STRING_VALUE",
 * //       WhatIfForecastArns: [ // WhatIfForecastArnListForExport
 * //         "STRING_VALUE",
 * //       ],
 * //       WhatIfForecastExportName: "STRING_VALUE",
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
 * @param ListWhatIfForecastExportsCommandInput - {@link ListWhatIfForecastExportsCommandInput}
 * @returns {@link ListWhatIfForecastExportsCommandOutput}
 * @see {@link ListWhatIfForecastExportsCommandInput} for command's `input` shape.
 * @see {@link ListWhatIfForecastExportsCommandOutput} for command's `response` shape.
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
export class ListWhatIfForecastExportsCommand extends $Command<
  ListWhatIfForecastExportsCommandInput,
  ListWhatIfForecastExportsCommandOutput,
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
  constructor(readonly input: ListWhatIfForecastExportsCommandInput) {
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
  ): Handler<ListWhatIfForecastExportsCommandInput, ListWhatIfForecastExportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWhatIfForecastExportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListWhatIfForecastExportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "ListWhatIfForecastExports",
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
  private serialize(input: ListWhatIfForecastExportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWhatIfForecastExportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWhatIfForecastExportsCommandOutput> {
    return de_ListWhatIfForecastExportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
