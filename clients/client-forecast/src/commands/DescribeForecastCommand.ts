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
import { DescribeForecastRequest, DescribeForecastResponse } from "../models/models_0";
import { de_DescribeForecastCommand, se_DescribeForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeForecastCommand}.
 */
export interface DescribeForecastCommandInput extends DescribeForecastRequest {}
/**
 * @public
 *
 * The output of {@link DescribeForecastCommand}.
 */
export interface DescribeForecastCommandOutput extends DescribeForecastResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a forecast created using the <a>CreateForecast</a> operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreateForecast</code> request,
 *       this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetGroupArn</code> - The dataset group that provided the training
 *           data.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DescribeForecastRequest
 *   ForecastArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeForecastCommand(input);
 * const response = await client.send(command);
 * // { // DescribeForecastResponse
 * //   ForecastArn: "STRING_VALUE",
 * //   ForecastName: "STRING_VALUE",
 * //   ForecastTypes: [ // ForecastTypes
 * //     "STRING_VALUE",
 * //   ],
 * //   PredictorArn: "STRING_VALUE",
 * //   DatasetGroupArn: "STRING_VALUE",
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   Status: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   TimeSeriesSelector: { // TimeSeriesSelector
 * //     TimeSeriesIdentifiers: { // TimeSeriesIdentifiers
 * //       DataSource: { // DataSource
 * //         S3Config: { // S3Config
 * //           Path: "STRING_VALUE", // required
 * //           RoleArn: "STRING_VALUE", // required
 * //           KMSKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       Schema: { // Schema
 * //         Attributes: [ // SchemaAttributes
 * //           { // SchemaAttribute
 * //             AttributeName: "STRING_VALUE",
 * //             AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 * //           },
 * //         ],
 * //       },
 * //       Format: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeForecastCommandInput - {@link DescribeForecastCommandInput}
 * @returns {@link DescribeForecastCommandOutput}
 * @see {@link DescribeForecastCommandInput} for command's `input` shape.
 * @see {@link DescribeForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class DescribeForecastCommand extends $Command<
  DescribeForecastCommandInput,
  DescribeForecastCommandOutput,
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
  constructor(readonly input: DescribeForecastCommandInput) {
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
  ): Handler<DescribeForecastCommandInput, DescribeForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeForecastCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "DescribeForecast",
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
  private serialize(input: DescribeForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeForecastCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeForecastCommandOutput> {
    return de_DescribeForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
