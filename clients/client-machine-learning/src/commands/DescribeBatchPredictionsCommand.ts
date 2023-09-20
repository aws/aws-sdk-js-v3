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
import { DescribeBatchPredictionsInput, DescribeBatchPredictionsOutput } from "../models/models_0";
import { de_DescribeBatchPredictionsCommand, se_DescribeBatchPredictionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBatchPredictionsCommand}.
 */
export interface DescribeBatchPredictionsCommandInput extends DescribeBatchPredictionsInput {}
/**
 * @public
 *
 * The output of {@link DescribeBatchPredictionsCommand}.
 */
export interface DescribeBatchPredictionsCommandOutput extends DescribeBatchPredictionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeBatchPredictionsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeBatchPredictionsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // DescribeBatchPredictionsInput
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
 * const command = new DescribeBatchPredictionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBatchPredictionsOutput
 * //   Results: [ // BatchPredictions
 * //     { // BatchPrediction
 * //       BatchPredictionId: "STRING_VALUE",
 * //       MLModelId: "STRING_VALUE",
 * //       BatchPredictionDataSourceId: "STRING_VALUE",
 * //       InputDataLocationS3: "STRING_VALUE",
 * //       CreatedByIamUser: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //       OutputUri: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       ComputeTime: Number("long"),
 * //       FinishedAt: new Date("TIMESTAMP"),
 * //       StartedAt: new Date("TIMESTAMP"),
 * //       TotalRecordCount: Number("long"),
 * //       InvalidRecordCount: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBatchPredictionsCommandInput - {@link DescribeBatchPredictionsCommandInput}
 * @returns {@link DescribeBatchPredictionsCommandOutput}
 * @see {@link DescribeBatchPredictionsCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchPredictionsCommandOutput} for command's `response` shape.
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
export class DescribeBatchPredictionsCommand extends $Command<
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput,
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
  constructor(readonly input: DescribeBatchPredictionsCommandInput) {
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
  ): Handler<DescribeBatchPredictionsCommandInput, DescribeBatchPredictionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBatchPredictionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "DescribeBatchPredictionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonML_20141212",
        operation: "DescribeBatchPredictions",
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
  private serialize(input: DescribeBatchPredictionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBatchPredictionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBatchPredictionsCommandOutput> {
    return de_DescribeBatchPredictionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
