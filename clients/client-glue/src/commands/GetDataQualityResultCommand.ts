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
import { GetDataQualityResultRequest, GetDataQualityResultResponse } from "../models/models_1";
import { de_GetDataQualityResultCommand, se_GetDataQualityResultCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataQualityResultCommand}.
 */
export interface GetDataQualityResultCommandInput extends GetDataQualityResultRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityResultCommand}.
 */
export interface GetDataQualityResultCommandOutput extends GetDataQualityResultResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the result of a data quality rule evaluation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityResultCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityResultCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDataQualityResultRequest
 *   ResultId: "STRING_VALUE", // required
 * };
 * const command = new GetDataQualityResultCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityResultResponse
 * //   ResultId: "STRING_VALUE",
 * //   Score: Number("double"),
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
 * //   RulesetName: "STRING_VALUE",
 * //   EvaluationContext: "STRING_VALUE",
 * //   StartedOn: new Date("TIMESTAMP"),
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   JobName: "STRING_VALUE",
 * //   JobRunId: "STRING_VALUE",
 * //   RulesetEvaluationRunId: "STRING_VALUE",
 * //   RuleResults: [ // DataQualityRuleResults
 * //     { // DataQualityRuleResult
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EvaluationMessage: "STRING_VALUE",
 * //       Result: "PASS" || "FAIL" || "ERROR",
 * //       EvaluatedMetrics: { // EvaluatedMetricsMap
 * //         "<keys>": Number("double"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDataQualityResultCommandInput - {@link GetDataQualityResultCommandInput}
 * @returns {@link GetDataQualityResultCommandOutput}
 * @see {@link GetDataQualityResultCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityResultCommandOutput} for command's `response` shape.
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
export class GetDataQualityResultCommand extends $Command<
  GetDataQualityResultCommandInput,
  GetDataQualityResultCommandOutput,
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
  constructor(readonly input: GetDataQualityResultCommandInput) {
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
  ): Handler<GetDataQualityResultCommandInput, GetDataQualityResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataQualityResultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDataQualityResultCommand";
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
  private serialize(input: GetDataQualityResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataQualityResultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataQualityResultCommandOutput> {
    return de_GetDataQualityResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
