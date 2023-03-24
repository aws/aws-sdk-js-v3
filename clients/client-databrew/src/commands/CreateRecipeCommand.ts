// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { CreateRecipeRequest, CreateRecipeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRecipeCommand,
  serializeAws_restJson1CreateRecipeCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateRecipeCommand}.
 */
export interface CreateRecipeCommandInput extends CreateRecipeRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecipeCommand}.
 */
export interface CreateRecipeCommandOutput extends CreateRecipeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = {
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Steps: [ // required
 *     {
 *       Action: {
 *         Operation: "STRING_VALUE", // required
 *         Parameters: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       ConditionExpressions: [
 *         {
 *           Condition: "STRING_VALUE", // required
 *           Value: "STRING_VALUE",
 *           TargetColumn: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateRecipeCommandInput - {@link CreateRecipeCommandInput}
 * @returns {@link CreateRecipeCommandOutput}
 * @see {@link CreateRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 *
 */
export class CreateRecipeCommand extends $Command<
  CreateRecipeCommandInput,
  CreateRecipeCommandOutput,
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
  constructor(readonly input: CreateRecipeCommandInput) {
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
  ): Handler<CreateRecipeCommandInput, CreateRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRecipeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "CreateRecipeCommand";
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
  private serialize(input: CreateRecipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRecipeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRecipeCommandOutput> {
    return deserializeAws_restJson1CreateRecipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
