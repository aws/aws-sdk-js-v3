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
import { CreateRulesetRequest, CreateRulesetResponse } from "../models/models_0";
import { de_CreateRulesetCommand, se_CreateRulesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRulesetCommand}.
 */
export interface CreateRulesetCommandInput extends CreateRulesetRequest {}
/**
 * @public
 *
 * The output of {@link CreateRulesetCommand}.
 */
export interface CreateRulesetCommandOutput extends CreateRulesetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new ruleset that can be used in a profile job to validate
 *             the data quality of a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateRulesetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateRulesetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // CreateRulesetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TargetArn: "STRING_VALUE", // required
 *   Rules: [ // RuleList // required
 *     { // Rule
 *       Name: "STRING_VALUE", // required
 *       Disabled: true || false,
 *       CheckExpression: "STRING_VALUE", // required
 *       SubstitutionMap: { // ValuesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       Threshold: { // Threshold
 *         Value: Number("double"), // required
 *         Type: "GREATER_THAN_OR_EQUAL" || "LESS_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN",
 *         Unit: "COUNT" || "PERCENTAGE",
 *       },
 *       ColumnSelectors: [ // ColumnSelectorList
 *         { // ColumnSelector
 *           Regex: "STRING_VALUE",
 *           Name: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRulesetCommand(input);
 * const response = await client.send(command);
 * // { // CreateRulesetResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRulesetCommandInput - {@link CreateRulesetCommandInput}
 * @returns {@link CreateRulesetCommandOutput}
 * @see {@link CreateRulesetCommandInput} for command's `input` shape.
 * @see {@link CreateRulesetCommandOutput} for command's `response` shape.
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
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 */
export class CreateRulesetCommand extends $Command<
  CreateRulesetCommandInput,
  CreateRulesetCommandOutput,
  DataBrewClientResolvedConfig
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
  constructor(readonly input: CreateRulesetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRulesetCommandInput, CreateRulesetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRulesetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "CreateRulesetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlueDataBrew",
        operation: "CreateRuleset",
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
  private serialize(input: CreateRulesetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRulesetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRulesetCommandOutput> {
    return de_CreateRulesetCommand(output, context);
  }
}
