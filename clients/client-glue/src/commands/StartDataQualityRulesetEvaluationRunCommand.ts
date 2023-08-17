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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  StartDataQualityRulesetEvaluationRunRequest,
  StartDataQualityRulesetEvaluationRunResponse,
} from "../models/models_2";
import {
  de_StartDataQualityRulesetEvaluationRunCommand,
  se_StartDataQualityRulesetEvaluationRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartDataQualityRulesetEvaluationRunCommand}.
 */
export interface StartDataQualityRulesetEvaluationRunCommandInput extends StartDataQualityRulesetEvaluationRunRequest {}
/**
 * @public
 *
 * The output of {@link StartDataQualityRulesetEvaluationRunCommand}.
 */
export interface StartDataQualityRulesetEvaluationRunCommandOutput
  extends StartDataQualityRulesetEvaluationRunResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the <code>GetDataQualityResult</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartDataQualityRulesetEvaluationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartDataQualityRulesetEvaluationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // StartDataQualityRulesetEvaluationRunRequest
 *   DataSource: { // DataSource
 *     GlueTable: { // GlueTable
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *       CatalogId: "STRING_VALUE",
 *       ConnectionName: "STRING_VALUE",
 *       AdditionalOptions: { // GlueTableAdditionalOptions
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   Role: "STRING_VALUE", // required
 *   NumberOfWorkers: Number("int"),
 *   Timeout: Number("int"),
 *   ClientToken: "STRING_VALUE",
 *   AdditionalRunOptions: { // DataQualityEvaluationRunAdditionalRunOptions
 *     CloudWatchMetricsEnabled: true || false,
 *     ResultsS3Prefix: "STRING_VALUE",
 *   },
 *   RulesetNames: [ // RulesetNames // required
 *     "STRING_VALUE",
 *   ],
 *   AdditionalDataSources: { // DataSourceMap
 *     "<keys>": {
 *       GlueTable: {
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CatalogId: "STRING_VALUE",
 *         ConnectionName: "STRING_VALUE",
 *         AdditionalOptions: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new StartDataQualityRulesetEvaluationRunCommand(input);
 * const response = await client.send(command);
 * // { // StartDataQualityRulesetEvaluationRunResponse
 * //   RunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDataQualityRulesetEvaluationRunCommandInput - {@link StartDataQualityRulesetEvaluationRunCommandInput}
 * @returns {@link StartDataQualityRulesetEvaluationRunCommandOutput}
 * @see {@link StartDataQualityRulesetEvaluationRunCommandInput} for command's `input` shape.
 * @see {@link StartDataQualityRulesetEvaluationRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
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
export class StartDataQualityRulesetEvaluationRunCommand extends $Command<
  StartDataQualityRulesetEvaluationRunCommandInput,
  StartDataQualityRulesetEvaluationRunCommandOutput,
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
  constructor(readonly input: StartDataQualityRulesetEvaluationRunCommandInput) {
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
  ): Handler<StartDataQualityRulesetEvaluationRunCommandInput, StartDataQualityRulesetEvaluationRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDataQualityRulesetEvaluationRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartDataQualityRulesetEvaluationRunCommand";
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
  private serialize(
    input: StartDataQualityRulesetEvaluationRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartDataQualityRulesetEvaluationRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDataQualityRulesetEvaluationRunCommandOutput> {
    return de_StartDataQualityRulesetEvaluationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
