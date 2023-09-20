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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { ListRecipesRequest, ListRecipesResponse } from "../models/models_0";
import { de_ListRecipesCommand, se_ListRecipesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecipesCommand}.
 */
export interface ListRecipesCommandInput extends ListRecipesRequest {}
/**
 * @public
 *
 * The output of {@link ListRecipesCommand}.
 */
export interface ListRecipesCommandOutput extends ListRecipesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the DataBrew recipes that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListRecipesCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListRecipesCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // ListRecipesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RecipeVersion: "STRING_VALUE",
 * };
 * const command = new ListRecipesCommand(input);
 * const response = await client.send(command);
 * // { // ListRecipesResponse
 * //   Recipes: [ // RecipeList // required
 * //     { // Recipe
 * //       CreatedBy: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       LastModifiedBy: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       ProjectName: "STRING_VALUE",
 * //       PublishedBy: "STRING_VALUE",
 * //       PublishedDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       ResourceArn: "STRING_VALUE",
 * //       Steps: [ // RecipeStepList
 * //         { // RecipeStep
 * //           Action: { // RecipeAction
 * //             Operation: "STRING_VALUE", // required
 * //             Parameters: { // ParameterMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           ConditionExpressions: [ // ConditionExpressionList
 * //             { // ConditionExpression
 * //               Condition: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE",
 * //               TargetColumn: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       RecipeVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecipesCommandInput - {@link ListRecipesCommandInput}
 * @returns {@link ListRecipesCommandOutput}
 * @see {@link ListRecipesCommandInput} for command's `input` shape.
 * @see {@link ListRecipesCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 */
export class ListRecipesCommand extends $Command<
  ListRecipesCommandInput,
  ListRecipesCommandOutput,
  DataBrewClientResolvedConfig
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
  constructor(readonly input: ListRecipesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecipesCommandInput, ListRecipesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListRecipesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "ListRecipesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlueDataBrew",
        operation: "ListRecipes",
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
  private serialize(input: ListRecipesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecipesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecipesCommandOutput> {
    return de_ListRecipesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
