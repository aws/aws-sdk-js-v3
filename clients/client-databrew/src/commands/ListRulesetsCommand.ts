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
import { ListRulesetsRequest, ListRulesetsResponse } from "../models/models_0";
import { de_ListRulesetsCommand, se_ListRulesetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRulesetsCommand}.
 */
export interface ListRulesetsCommandInput extends ListRulesetsRequest {}
/**
 * @public
 *
 * The output of {@link ListRulesetsCommand}.
 */
export interface ListRulesetsCommandOutput extends ListRulesetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List all rulesets available in the current account or rulesets associated
 *             with a specific resource (dataset).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListRulesetsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListRulesetsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // ListRulesetsRequest
 *   TargetArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRulesetsCommand(input);
 * const response = await client.send(command);
 * // { // ListRulesetsResponse
 * //   Rulesets: [ // RulesetItemList // required
 * //     { // RulesetItem
 * //       AccountId: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       LastModifiedBy: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE", // required
 * //       ResourceArn: "STRING_VALUE",
 * //       RuleCount: Number("int"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       TargetArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRulesetsCommandInput - {@link ListRulesetsCommandInput}
 * @returns {@link ListRulesetsCommandOutput}
 * @see {@link ListRulesetsCommandInput} for command's `input` shape.
 * @see {@link ListRulesetsCommandOutput} for command's `response` shape.
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
export class ListRulesetsCommand extends $Command<
  ListRulesetsCommandInput,
  ListRulesetsCommandOutput,
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
  constructor(readonly input: ListRulesetsCommandInput) {
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
  ): Handler<ListRulesetsCommandInput, ListRulesetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListRulesetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "ListRulesetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlueDataBrew",
        operation: "ListRulesets",
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
  private serialize(input: ListRulesetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRulesetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRulesetsCommandOutput> {
    return de_ListRulesetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
