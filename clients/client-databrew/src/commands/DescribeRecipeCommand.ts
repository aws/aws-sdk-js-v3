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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { DescribeRecipeRequest, DescribeRecipeResponse } from "../models/models_0";
import { de_DescribeRecipeCommand, se_DescribeRecipeCommand } from "../protocols/Aws_restJson1";

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
 * <p>Returns the definition of a specific DataBrew recipe corresponding to a particular
 *             version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // DescribeRecipeRequest
 *   Name: "STRING_VALUE", // required
 *   RecipeVersion: "STRING_VALUE",
 * };
 * const command = new DescribeRecipeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecipeResponse
 * //   CreatedBy: "STRING_VALUE",
 * //   CreateDate: new Date("TIMESTAMP"),
 * //   LastModifiedBy: "STRING_VALUE",
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   ProjectName: "STRING_VALUE",
 * //   PublishedBy: "STRING_VALUE",
 * //   PublishedDate: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Name: "STRING_VALUE", // required
 * //   Steps: [ // RecipeStepList
 * //     { // RecipeStep
 * //       Action: { // RecipeAction
 * //         Operation: "STRING_VALUE", // required
 * //         Parameters: { // ParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       ConditionExpressions: [ // ConditionExpressionList
 * //         { // ConditionExpression
 * //           Condition: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //           TargetColumn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ResourceArn: "STRING_VALUE",
 * //   RecipeVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRecipeCommandInput - {@link DescribeRecipeCommandInput}
 * @returns {@link DescribeRecipeCommandOutput}
 * @see {@link DescribeRecipeCommandInput} for command's `input` shape.
 * @see {@link DescribeRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 */
export class DescribeRecipeCommand extends $Command<
  DescribeRecipeCommandInput,
  DescribeRecipeCommandOutput,
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
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecipeCommandInput, DescribeRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRecipeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "DescribeRecipeCommand";
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
