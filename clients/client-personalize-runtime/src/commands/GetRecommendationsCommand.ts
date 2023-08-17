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

import {
  GetRecommendationsRequest,
  GetRecommendationsRequestFilterSensitiveLog,
  GetRecommendationsResponse,
} from "../models/models_0";
import {
  PersonalizeRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeRuntimeClient";
import { de_GetRecommendationsCommand, se_GetRecommendationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandInput extends GetRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandOutput extends GetRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to
 *       create the solution backing the campaign as follows:</p>
 *          <ul>
 *             <li>
 *                <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p>
 *             </li>
 *             <li>
 *                <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Campaigns that are backed by a solution created using a recipe of type
 *         PERSONALIZED_RANKING use the  API.</p>
 *          </note>
 *          <p>
 *       For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender.
 *       For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetRecommendationsCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetRecommendationsCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const input = { // GetRecommendationsRequest
 *   campaignArn: "STRING_VALUE",
 *   itemId: "STRING_VALUE",
 *   userId: "STRING_VALUE",
 *   numResults: Number("int"),
 *   context: { // Context
 *     "<keys>": "STRING_VALUE",
 *   },
 *   filterArn: "STRING_VALUE",
 *   filterValues: { // FilterValues
 *     "<keys>": "STRING_VALUE",
 *   },
 *   recommenderArn: "STRING_VALUE",
 *   promotions: [ // PromotionList
 *     { // Promotion
 *       name: "STRING_VALUE",
 *       percentPromotedItems: Number("int"),
 *       filterArn: "STRING_VALUE",
 *       filterValues: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationsResponse
 * //   itemList: [ // ItemList
 * //     { // PredictedItem
 * //       itemId: "STRING_VALUE",
 * //       score: Number("double"),
 * //       promotionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   recommendationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRecommendationsCommandInput - {@link GetRecommendationsCommandInput}
 * @returns {@link GetRecommendationsCommandOutput}
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeRuntimeClientResolvedConfig | config} for PersonalizeRuntimeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link PersonalizeRuntimeServiceException}
 * <p>Base exception class for all service exceptions from PersonalizeRuntime service.</p>
 *
 */
export class GetRecommendationsCommand extends $Command<
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput,
  PersonalizeRuntimeClientResolvedConfig
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
  constructor(readonly input: GetRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecommendationsCommandInput, GetRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeRuntimeClient";
    const commandName = "GetRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRecommendationsRequestFilterSensitiveLog,
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
  private serialize(input: GetRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRecommendationsCommandOutput> {
    return de_GetRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
