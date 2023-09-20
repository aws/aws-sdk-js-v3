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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListDataQualityRulesetsRequest, ListDataQualityRulesetsResponse } from "../models/models_2";
import { de_ListDataQualityRulesetsCommand, se_ListDataQualityRulesetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDataQualityRulesetsCommand}.
 */
export interface ListDataQualityRulesetsCommandInput extends ListDataQualityRulesetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataQualityRulesetsCommand}.
 */
export interface ListDataQualityRulesetsCommandOutput extends ListDataQualityRulesetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of rulesets for the specified list of Glue tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityRulesetsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityRulesetsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListDataQualityRulesetsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filter: { // DataQualityRulesetFilterCriteria
 *     Name: "STRING_VALUE",
 *     Description: "STRING_VALUE",
 *     CreatedBefore: new Date("TIMESTAMP"),
 *     CreatedAfter: new Date("TIMESTAMP"),
 *     LastModifiedBefore: new Date("TIMESTAMP"),
 *     LastModifiedAfter: new Date("TIMESTAMP"),
 *     TargetTable: { // DataQualityTargetTable
 *       TableName: "STRING_VALUE", // required
 *       DatabaseName: "STRING_VALUE", // required
 *       CatalogId: "STRING_VALUE",
 *     },
 *   },
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListDataQualityRulesetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataQualityRulesetsResponse
 * //   Rulesets: [ // DataQualityRulesetList
 * //     { // DataQualityRulesetListDetails
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       TargetTable: { // DataQualityTargetTable
 * //         TableName: "STRING_VALUE", // required
 * //         DatabaseName: "STRING_VALUE", // required
 * //         CatalogId: "STRING_VALUE",
 * //       },
 * //       RecommendationRunId: "STRING_VALUE",
 * //       RuleCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityRulesetsCommandInput - {@link ListDataQualityRulesetsCommandInput}
 * @returns {@link ListDataQualityRulesetsCommandOutput}
 * @see {@link ListDataQualityRulesetsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityRulesetsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class ListDataQualityRulesetsCommand extends $Command<
  ListDataQualityRulesetsCommandInput,
  ListDataQualityRulesetsCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: ListDataQualityRulesetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataQualityRulesetsCommandInput, ListDataQualityRulesetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataQualityRulesetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListDataQualityRulesetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "ListDataQualityRulesets",
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
  private serialize(input: ListDataQualityRulesetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDataQualityRulesetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataQualityRulesetsCommandOutput> {
    return de_ListDataQualityRulesetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
