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

import { CreateRecommenderRequest, CreateRecommenderResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_CreateRecommenderCommand, se_CreateRecommenderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRecommenderCommand}.
 */
export interface CreateRecommenderCommandInput extends CreateRecommenderRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecommenderCommand}.
 */
export interface CreateRecommenderCommandOutput extends CreateRecommenderResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a recommender with the recipe (a Domain dataset group use case) you specify.
 *       You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
 *       request.
 *      </p>
 *          <p>
 *             <b>Minimum recommendation requests per second</b>
 *          </p>
 *          <important>
 *             <p>A high <code>minRecommendationRequestsPerSecond</code> will increase your bill. We recommend starting with 1 for <code>minRecommendationRequestsPerSecond</code> (the default). Track
 *         your usage using Amazon CloudWatch metrics, and increase the <code>minRecommendationRequestsPerSecond</code>
 *         as necessary.</p>
 *          </important>
 *          <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second
 *       (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by
 *       Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation.
 *       Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive
 *       your requests per hour and the price of your recommender usage.
 *     </p>
 *          <p>
 *       If your requests per second increases beyond
 *       <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down,
 *       but never below <code>minRecommendationRequestsPerSecond</code>.
 *       There's a short time delay while the capacity is increased that might cause loss of
 *       requests.</p>
 *          <p>
 *       Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond)
 *       or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window.
 *
 *       We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track
 *       your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code>
 *       as necessary.
 *     </p>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A recommender can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p>
 *          <note>
 *             <p>Wait until the <code>status</code> of the recommender
 *         is <code>ACTIVE</code> before asking the recommender for recommendations.</p>
 *          </note>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateRecommenderCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateRecommenderCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // CreateRecommenderRequest
 *   name: "STRING_VALUE", // required
 *   datasetGroupArn: "STRING_VALUE", // required
 *   recipeArn: "STRING_VALUE", // required
 *   recommenderConfig: { // RecommenderConfig
 *     itemExplorationConfig: { // HyperParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     minRecommendationRequestsPerSecond: Number("int"),
 *     trainingDataConfig: { // TrainingDataConfig
 *       excludedDatasetColumns: { // ExcludedDatasetColumns
 *         "<keys>": [ // ColumnNamesList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRecommenderCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecommenderResponse
 * //   recommenderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRecommenderCommandInput - {@link CreateRecommenderCommandInput}
 * @returns {@link CreateRecommenderCommandOutput}
 * @see {@link CreateRecommenderCommandInput} for command's `input` shape.
 * @see {@link CreateRecommenderCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have exceeded the maximum number of tags you can apply to this resource. </p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class CreateRecommenderCommand extends $Command<
  CreateRecommenderCommandInput,
  CreateRecommenderCommandOutput,
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
  constructor(readonly input: CreateRecommenderCommandInput) {
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
  ): Handler<CreateRecommenderCommandInput, CreateRecommenderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRecommenderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateRecommenderCommand";
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
  private serialize(input: CreateRecommenderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRecommenderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRecommenderCommandOutput> {
    return de_CreateRecommenderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
