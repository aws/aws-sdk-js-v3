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
import { DescribeExplainabilityRequest, DescribeExplainabilityResponse } from "../models/models_0";
import { de_DescribeExplainabilityCommand, se_DescribeExplainabilityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeExplainabilityCommand}.
 */
export interface DescribeExplainabilityCommandInput extends DescribeExplainabilityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExplainabilityCommand}.
 */
export interface DescribeExplainabilityCommandOutput extends DescribeExplainabilityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an Explainability resource created using the <a>CreateExplainability</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeExplainabilityCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeExplainabilityCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DescribeExplainabilityRequest
 *   ExplainabilityArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeExplainabilityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExplainabilityResponse
 * //   ExplainabilityArn: "STRING_VALUE",
 * //   ExplainabilityName: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   ExplainabilityConfig: { // ExplainabilityConfig
 * //     TimeSeriesGranularity: "ALL" || "SPECIFIC", // required
 * //     TimePointGranularity: "ALL" || "SPECIFIC", // required
 * //   },
 * //   EnableVisualization: true || false,
 * //   DataSource: { // DataSource
 * //     S3Config: { // S3Config
 * //       Path: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       KMSKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   Schema: { // Schema
 * //     Attributes: [ // SchemaAttributes
 * //       { // SchemaAttribute
 * //         AttributeName: "STRING_VALUE",
 * //         AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 * //       },
 * //     ],
 * //   },
 * //   StartDateTime: "STRING_VALUE",
 * //   EndDateTime: "STRING_VALUE",
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   Message: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeExplainabilityCommandInput - {@link DescribeExplainabilityCommandInput}
 * @returns {@link DescribeExplainabilityCommandOutput}
 * @see {@link DescribeExplainabilityCommandInput} for command's `input` shape.
 * @see {@link DescribeExplainabilityCommandOutput} for command's `response` shape.
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
export class DescribeExplainabilityCommand extends $Command<
  DescribeExplainabilityCommandInput,
  DescribeExplainabilityCommandOutput,
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
  constructor(readonly input: DescribeExplainabilityCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExplainabilityCommandInput, DescribeExplainabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeExplainabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeExplainabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "DescribeExplainability",
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
  private serialize(input: DescribeExplainabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeExplainabilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExplainabilityCommandOutput> {
    return de_DescribeExplainabilityCommand(output, context);
  }
}
