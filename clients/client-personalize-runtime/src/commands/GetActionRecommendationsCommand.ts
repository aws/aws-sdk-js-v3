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

import {
  GetActionRecommendationsRequest,
  GetActionRecommendationsRequestFilterSensitiveLog,
  GetActionRecommendationsResponse,
} from "../models/models_0";
import {
  PersonalizeRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeRuntimeClient";
import { de_GetActionRecommendationsCommand, se_GetActionRecommendationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetActionRecommendationsCommand}.
 */
export interface GetActionRecommendationsCommandInput extends GetActionRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetActionRecommendationsCommand}.
 */
export interface GetActionRecommendationsCommandOutput extends GetActionRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of recommended actions in sorted in descending order by prediction score.
 *       Use the <code>GetActionRecommendations</code> API if you have a custom
 *        campaign that deploys a solution version trained with a PERSONALIZED_ACTIONS recipe.
 *     </p>
 *          <p>For more information about PERSONALIZED_ACTIONS recipes, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/nexts-best-action-recipes.html">PERSONALIZED_ACTIONS recipes</a>.
 *       For more information about getting action recommendations, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/get-action-recommendations.html">Getting action recommendations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetActionRecommendationsCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetActionRecommendationsCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const input = { // GetActionRecommendationsRequest
 *   campaignArn: "STRING_VALUE",
 *   userId: "STRING_VALUE",
 *   numResults: Number("int"),
 *   filterArn: "STRING_VALUE",
 *   filterValues: { // FilterValues
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetActionRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetActionRecommendationsResponse
 * //   actionList: [ // ActionList
 * //     { // PredictedAction
 * //       actionId: "STRING_VALUE",
 * //       score: Number("double"),
 * //     },
 * //   ],
 * //   recommendationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetActionRecommendationsCommandInput - {@link GetActionRecommendationsCommandInput}
 * @returns {@link GetActionRecommendationsCommandOutput}
 * @see {@link GetActionRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetActionRecommendationsCommandOutput} for command's `response` shape.
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
export class GetActionRecommendationsCommand extends $Command<
  GetActionRecommendationsCommandInput,
  GetActionRecommendationsCommandOutput,
  PersonalizeRuntimeClientResolvedConfig
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
  constructor(readonly input: GetActionRecommendationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetActionRecommendationsCommandInput, GetActionRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetActionRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeRuntimeClient";
    const commandName = "GetActionRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetActionRecommendationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPersonalizeRuntime",
        operation: "GetActionRecommendations",
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
  private serialize(input: GetActionRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetActionRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetActionRecommendationsCommandOutput> {
    return de_GetActionRecommendationsCommand(output, context);
  }
}
