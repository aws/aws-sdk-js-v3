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

import { DescribeSolutionVersionRequest, DescribeSolutionVersionResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeSolutionVersionCommand, se_DescribeSolutionVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSolutionVersionCommand}.
 */
export interface DescribeSolutionVersionCommandInput extends DescribeSolutionVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSolutionVersionCommand}.
 */
export interface DescribeSolutionVersionCommandOutput extends DescribeSolutionVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeSolutionVersionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeSolutionVersionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeSolutionVersionRequest
 *   solutionVersionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeSolutionVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSolutionVersionResponse
 * //   solutionVersion: { // SolutionVersion
 * //     name: "STRING_VALUE",
 * //     solutionVersionArn: "STRING_VALUE",
 * //     solutionArn: "STRING_VALUE",
 * //     performHPO: true || false,
 * //     performAutoML: true || false,
 * //     recipeArn: "STRING_VALUE",
 * //     eventType: "STRING_VALUE",
 * //     datasetGroupArn: "STRING_VALUE",
 * //     solutionConfig: { // SolutionConfig
 * //       eventValueThreshold: "STRING_VALUE",
 * //       hpoConfig: { // HPOConfig
 * //         hpoObjective: { // HPOObjective
 * //           type: "STRING_VALUE",
 * //           metricName: "STRING_VALUE",
 * //           metricRegex: "STRING_VALUE",
 * //         },
 * //         hpoResourceConfig: { // HPOResourceConfig
 * //           maxNumberOfTrainingJobs: "STRING_VALUE",
 * //           maxParallelTrainingJobs: "STRING_VALUE",
 * //         },
 * //         algorithmHyperParameterRanges: { // HyperParameterRanges
 * //           integerHyperParameterRanges: [ // IntegerHyperParameterRanges
 * //             { // IntegerHyperParameterRange
 * //               name: "STRING_VALUE",
 * //               minValue: Number("int"),
 * //               maxValue: Number("int"),
 * //             },
 * //           ],
 * //           continuousHyperParameterRanges: [ // ContinuousHyperParameterRanges
 * //             { // ContinuousHyperParameterRange
 * //               name: "STRING_VALUE",
 * //               minValue: Number("double"),
 * //               maxValue: Number("double"),
 * //             },
 * //           ],
 * //           categoricalHyperParameterRanges: [ // CategoricalHyperParameterRanges
 * //             { // CategoricalHyperParameterRange
 * //               name: "STRING_VALUE",
 * //               values: [ // CategoricalValues
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       algorithmHyperParameters: { // HyperParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       featureTransformationParameters: { // FeatureTransformationParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       autoMLConfig: { // AutoMLConfig
 * //         metricName: "STRING_VALUE",
 * //         recipeList: [ // ArnList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       optimizationObjective: { // OptimizationObjective
 * //         itemAttribute: "STRING_VALUE",
 * //         objectiveSensitivity: "LOW" || "MEDIUM" || "HIGH" || "OFF",
 * //       },
 * //       trainingDataConfig: { // TrainingDataConfig
 * //         excludedDatasetColumns: { // ExcludedDatasetColumns
 * //           "<keys>": [ // ColumnNamesList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     trainingHours: Number("double"),
 * //     trainingMode: "FULL" || "UPDATE",
 * //     tunedHPOParams: { // TunedHPOParams
 * //       algorithmHyperParameters: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     status: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSolutionVersionCommandInput - {@link DescribeSolutionVersionCommandInput}
 * @returns {@link DescribeSolutionVersionCommandOutput}
 * @see {@link DescribeSolutionVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeSolutionVersionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class DescribeSolutionVersionCommand extends $Command<
  DescribeSolutionVersionCommandInput,
  DescribeSolutionVersionCommandOutput,
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
  constructor(readonly input: DescribeSolutionVersionCommandInput) {
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
  ): Handler<DescribeSolutionVersionCommandInput, DescribeSolutionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSolutionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeSolutionVersionCommand";
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
  private serialize(input: DescribeSolutionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSolutionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSolutionVersionCommandOutput> {
    return de_DescribeSolutionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
