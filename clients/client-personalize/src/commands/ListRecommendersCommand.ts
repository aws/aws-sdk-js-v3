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

import { ListRecommendersRequest, ListRecommendersResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_ListRecommendersCommand, se_ListRecommendersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendersCommand}.
 */
export interface ListRecommendersCommandInput extends ListRecommendersRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendersCommand}.
 */
export interface ListRecommendersCommandOutput extends ListRecommendersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of recommenders in a given Domain dataset group.
 *       When a Domain dataset group is not specified, all the recommenders associated with the account are listed.
 *       The response provides the properties for each recommender, including the Amazon Resource Name (ARN).
 *       For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListRecommendersCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListRecommendersCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // ListRecommendersRequest
 *   datasetGroupArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRecommendersCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendersResponse
 * //   recommenders: [ // Recommenders
 * //     { // RecommenderSummary
 * //       name: "STRING_VALUE",
 * //       recommenderArn: "STRING_VALUE",
 * //       datasetGroupArn: "STRING_VALUE",
 * //       recipeArn: "STRING_VALUE",
 * //       recommenderConfig: { // RecommenderConfig
 * //         itemExplorationConfig: { // HyperParameters
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         minRecommendationRequestsPerSecond: Number("int"),
 * //         trainingDataConfig: { // TrainingDataConfig
 * //           excludedDatasetColumns: { // ExcludedDatasetColumns
 * //             "<keys>": [ // ColumnNamesList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendersCommandInput - {@link ListRecommendersCommandInput}
 * @returns {@link ListRecommendersCommandOutput}
 * @see {@link ListRecommendersCommandInput} for command's `input` shape.
 * @see {@link ListRecommendersCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class ListRecommendersCommand extends $Command<
  ListRecommendersCommandInput,
  ListRecommendersCommandOutput,
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
  constructor(readonly input: ListRecommendersCommandInput) {
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
  ): Handler<ListRecommendersCommandInput, ListRecommendersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecommendersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "ListRecommendersCommand";
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
  private serialize(input: ListRecommendersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecommendersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecommendersCommandOutput> {
    return de_ListRecommendersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
