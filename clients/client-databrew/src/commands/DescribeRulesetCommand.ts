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
import { DescribeRulesetRequest, DescribeRulesetResponse } from "../models/models_0";
import { de_DescribeRulesetCommand, se_DescribeRulesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRulesetCommand}.
 */
export interface DescribeRulesetCommandInput extends DescribeRulesetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRulesetCommand}.
 */
export interface DescribeRulesetCommandOutput extends DescribeRulesetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves detailed information about the ruleset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeRulesetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeRulesetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // DescribeRulesetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeRulesetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRulesetResponse
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   TargetArn: "STRING_VALUE",
 * //   Rules: [ // RuleList
 * //     { // Rule
 * //       Name: "STRING_VALUE", // required
 * //       Disabled: true || false,
 * //       CheckExpression: "STRING_VALUE", // required
 * //       SubstitutionMap: { // ValuesMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Threshold: { // Threshold
 * //         Value: Number("double"), // required
 * //         Type: "GREATER_THAN_OR_EQUAL" || "LESS_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN",
 * //         Unit: "COUNT" || "PERCENTAGE",
 * //       },
 * //       ColumnSelectors: [ // ColumnSelectorList
 * //         { // ColumnSelector
 * //           Regex: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   CreateDate: new Date("TIMESTAMP"),
 * //   CreatedBy: "STRING_VALUE",
 * //   LastModifiedBy: "STRING_VALUE",
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   ResourceArn: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRulesetCommandInput - {@link DescribeRulesetCommandInput}
 * @returns {@link DescribeRulesetCommandOutput}
 * @see {@link DescribeRulesetCommandInput} for command's `input` shape.
 * @see {@link DescribeRulesetCommandOutput} for command's `response` shape.
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
export class DescribeRulesetCommand extends $Command<
  DescribeRulesetCommandInput,
  DescribeRulesetCommandOutput,
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
  constructor(readonly input: DescribeRulesetCommandInput) {
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
  ): Handler<DescribeRulesetCommandInput, DescribeRulesetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRulesetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "DescribeRulesetCommand";
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
  private serialize(input: DescribeRulesetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRulesetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRulesetCommandOutput> {
    return de_DescribeRulesetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
