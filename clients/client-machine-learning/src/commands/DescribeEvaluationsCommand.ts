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

import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeEvaluationsInput, DescribeEvaluationsOutput } from "../models/models_0";
import { de_DescribeEvaluationsCommand, se_DescribeEvaluationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEvaluationsCommand}.
 */
export interface DescribeEvaluationsCommandInput extends DescribeEvaluationsInput {}
/**
 * @public
 *
 * The output of {@link DescribeEvaluationsCommand}.
 */
export interface DescribeEvaluationsCommandOutput extends DescribeEvaluationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeEvaluationsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeEvaluationsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // DescribeEvaluationsInput
 *   FilterVariable: "CreatedAt" || "LastUpdatedAt" || "Status" || "Name" || "IAMUser" || "MLModelId" || "DataSourceId" || "DataURI",
 *   EQ: "STRING_VALUE",
 *   GT: "STRING_VALUE",
 *   LT: "STRING_VALUE",
 *   GE: "STRING_VALUE",
 *   LE: "STRING_VALUE",
 *   NE: "STRING_VALUE",
 *   Prefix: "STRING_VALUE",
 *   SortOrder: "asc" || "dsc",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEvaluationsOutput
 * //   Results: [ // Evaluations
 * //     { // Evaluation
 * //       EvaluationId: "STRING_VALUE",
 * //       MLModelId: "STRING_VALUE",
 * //       EvaluationDataSourceId: "STRING_VALUE",
 * //       InputDataLocationS3: "STRING_VALUE",
 * //       CreatedByIamUser: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //       PerformanceMetrics: { // PerformanceMetrics
 * //         Properties: { // PerformanceMetricsProperties
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       Message: "STRING_VALUE",
 * //       ComputeTime: Number("long"),
 * //       FinishedAt: new Date("TIMESTAMP"),
 * //       StartedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEvaluationsCommandInput - {@link DescribeEvaluationsCommandInput}
 * @returns {@link DescribeEvaluationsCommandOutput}
 * @see {@link DescribeEvaluationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 */
export class DescribeEvaluationsCommand extends $Command<
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput,
  MachineLearningClientResolvedConfig
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
  constructor(readonly input: DescribeEvaluationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEvaluationsCommandInput, DescribeEvaluationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEvaluationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "DescribeEvaluationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonML_20141212",
        operation: "DescribeEvaluations",
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
  private serialize(input: DescribeEvaluationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEvaluationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEvaluationsCommandOutput> {
    return de_DescribeEvaluationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
