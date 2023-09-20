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
import { UpdateRulesetRequest, UpdateRulesetResponse } from "../models/models_0";
import { de_UpdateRulesetCommand, se_UpdateRulesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRulesetCommand}.
 */
export interface UpdateRulesetCommandInput extends UpdateRulesetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRulesetCommand}.
 */
export interface UpdateRulesetCommandOutput extends UpdateRulesetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates specified ruleset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateRulesetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateRulesetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // UpdateRulesetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
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
 * };
 * const command = new UpdateRulesetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRulesetResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateRulesetCommandInput - {@link UpdateRulesetCommandInput}
 * @returns {@link UpdateRulesetCommandOutput}
 * @see {@link UpdateRulesetCommandInput} for command's `input` shape.
 * @see {@link UpdateRulesetCommandOutput} for command's `response` shape.
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
export class UpdateRulesetCommand extends $Command<
  UpdateRulesetCommandInput,
  UpdateRulesetCommandOutput,
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
  constructor(readonly input: UpdateRulesetCommandInput) {
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
  ): Handler<UpdateRulesetCommandInput, UpdateRulesetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateRulesetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "UpdateRulesetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlueDataBrew",
        operation: "UpdateRuleset",
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
  private serialize(input: UpdateRulesetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRulesetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRulesetCommandOutput> {
    return de_UpdateRulesetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
