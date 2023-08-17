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
} from "@smithy/types";

import { CreateMetricAttributionRequest, CreateMetricAttributionResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_CreateMetricAttributionCommand, se_CreateMetricAttributionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMetricAttributionCommand}.
 */
export interface CreateMetricAttributionCommandInput extends CreateMetricAttributionRequest {}
/**
 * @public
 *
 * The output of {@link CreateMetricAttributionCommand}.
 */
export interface CreateMetricAttributionCommandOutput extends CreateMetricAttributionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a metric attribution.
 *       A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3.
 *       For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateMetricAttributionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateMetricAttributionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // CreateMetricAttributionRequest
 *   name: "STRING_VALUE", // required
 *   datasetGroupArn: "STRING_VALUE", // required
 *   metrics: [ // MetricAttributes // required
 *     { // MetricAttribute
 *       eventType: "STRING_VALUE", // required
 *       metricName: "STRING_VALUE", // required
 *       expression: "STRING_VALUE", // required
 *     },
 *   ],
 *   metricsOutputConfig: { // MetricAttributionOutput
 *     s3DataDestination: { // S3DataConfig
 *       path: "STRING_VALUE", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateMetricAttributionCommand(input);
 * const response = await client.send(command);
 * // { // CreateMetricAttributionResponse
 * //   metricAttributionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMetricAttributionCommandInput - {@link CreateMetricAttributionCommandInput}
 * @returns {@link CreateMetricAttributionCommandOutput}
 * @see {@link CreateMetricAttributionCommandInput} for command's `input` shape.
 * @see {@link CreateMetricAttributionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class CreateMetricAttributionCommand extends $Command<
  CreateMetricAttributionCommandInput,
  CreateMetricAttributionCommandOutput,
  PersonalizeClientResolvedConfig
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
  constructor(readonly input: CreateMetricAttributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMetricAttributionCommandInput, CreateMetricAttributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMetricAttributionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateMetricAttributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateMetricAttributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMetricAttributionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMetricAttributionCommandOutput> {
    return de_CreateMetricAttributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
