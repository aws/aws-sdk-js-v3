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
import {
  GetDataQualityRuleRecommendationRunRequest,
  GetDataQualityRuleRecommendationRunResponse,
} from "../models/models_1";
import {
  de_GetDataQualityRuleRecommendationRunCommand,
  se_GetDataQualityRuleRecommendationRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataQualityRuleRecommendationRunCommand}.
 */
export interface GetDataQualityRuleRecommendationRunCommandInput extends GetDataQualityRuleRecommendationRunRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityRuleRecommendationRunCommand}.
 */
export interface GetDataQualityRuleRecommendationRunCommandOutput
  extends GetDataQualityRuleRecommendationRunResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the specified recommendation run that was used to generate rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityRuleRecommendationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityRuleRecommendationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDataQualityRuleRecommendationRunRequest
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetDataQualityRuleRecommendationRunCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityRuleRecommendationRunResponse
 * //   RunId: "STRING_VALUE",
 * //   DataSource: { // DataSource
 * //     GlueTable: { // GlueTable
 * //       DatabaseName: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       CatalogId: "STRING_VALUE",
 * //       ConnectionName: "STRING_VALUE",
 * //       AdditionalOptions: { // GlueTableAdditionalOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   Role: "STRING_VALUE",
 * //   NumberOfWorkers: Number("int"),
 * //   Timeout: Number("int"),
 * //   Status: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //   ErrorString: "STRING_VALUE",
 * //   StartedOn: new Date("TIMESTAMP"),
 * //   LastModifiedOn: new Date("TIMESTAMP"),
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   ExecutionTime: Number("int"),
 * //   RecommendedRuleset: "STRING_VALUE",
 * //   CreatedRulesetName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataQualityRuleRecommendationRunCommandInput - {@link GetDataQualityRuleRecommendationRunCommandInput}
 * @returns {@link GetDataQualityRuleRecommendationRunCommandOutput}
 * @see {@link GetDataQualityRuleRecommendationRunCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityRuleRecommendationRunCommandOutput} for command's `response` shape.
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
export class GetDataQualityRuleRecommendationRunCommand extends $Command<
  GetDataQualityRuleRecommendationRunCommandInput,
  GetDataQualityRuleRecommendationRunCommandOutput,
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
  constructor(readonly input: GetDataQualityRuleRecommendationRunCommandInput) {
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
  ): Handler<GetDataQualityRuleRecommendationRunCommandInput, GetDataQualityRuleRecommendationRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataQualityRuleRecommendationRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDataQualityRuleRecommendationRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetDataQualityRuleRecommendationRun",
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
  private serialize(
    input: GetDataQualityRuleRecommendationRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetDataQualityRuleRecommendationRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDataQualityRuleRecommendationRunCommandOutput> {
    return de_GetDataQualityRuleRecommendationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
