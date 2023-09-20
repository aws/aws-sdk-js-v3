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

import { DescribeRecipeRequest, DescribeRecipeResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeRecipeCommand, se_DescribeRecipeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecipeCommand}.
 */
export interface DescribeRecipeCommandInput extends DescribeRecipeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecipeCommand}.
 */
export interface DescribeRecipeCommandOutput extends DescribeRecipeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a recipe.</p>
 *          <p>A recipe contains three items:</p>
 *          <ul>
 *             <li>
 *                <p>An algorithm that trains a model.</p>
 *             </li>
 *             <li>
 *                <p>Hyperparameters that govern the training.</p>
 *             </li>
 *             <li>
 *                <p>Feature transformation information for modifying the input data before training.</p>
 *             </li>
 *          </ul>
 *          <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a
 *       solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API.
 *       <code>CreateSolution</code> trains a model by using the algorithm
 *       in the specified recipe and a training dataset. The solution, when deployed as a campaign,
 *       can provide recommendations using the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeRecipeCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeRecipeCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeRecipeRequest
 *   recipeArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeRecipeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecipeResponse
 * //   recipe: { // Recipe
 * //     name: "STRING_VALUE",
 * //     recipeArn: "STRING_VALUE",
 * //     algorithmArn: "STRING_VALUE",
 * //     featureTransformationArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     recipeType: "STRING_VALUE",
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRecipeCommandInput - {@link DescribeRecipeCommandInput}
 * @returns {@link DescribeRecipeCommandOutput}
 * @see {@link DescribeRecipeCommandInput} for command's `input` shape.
 * @see {@link DescribeRecipeCommandOutput} for command's `response` shape.
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
export class DescribeRecipeCommand extends $Command<
  DescribeRecipeCommandInput,
  DescribeRecipeCommandOutput,
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
  constructor(readonly input: DescribeRecipeCommandInput) {
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
  ): Handler<DescribeRecipeCommandInput, DescribeRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRecipeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeRecipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPersonalize",
        operation: "DescribeRecipe",
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
  private serialize(input: DescribeRecipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRecipeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRecipeCommandOutput> {
    return de_DescribeRecipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
