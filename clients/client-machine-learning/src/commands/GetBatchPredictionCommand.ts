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

import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetBatchPredictionInput, GetBatchPredictionOutput } from "../models/models_0";
import { de_GetBatchPredictionCommand, se_GetBatchPredictionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBatchPredictionCommand}.
 */
export interface GetBatchPredictionCommandInput extends GetBatchPredictionInput {}
/**
 * @public
 *
 * The output of {@link GetBatchPredictionCommand}.
 */
export interface GetBatchPredictionCommandOutput extends GetBatchPredictionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a
 *             <code>Batch Prediction</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // GetBatchPredictionInput
 *   BatchPredictionId: "STRING_VALUE", // required
 * };
 * const command = new GetBatchPredictionCommand(input);
 * const response = await client.send(command);
 * // { // GetBatchPredictionOutput
 * //   BatchPredictionId: "STRING_VALUE",
 * //   MLModelId: "STRING_VALUE",
 * //   BatchPredictionDataSourceId: "STRING_VALUE",
 * //   InputDataLocationS3: "STRING_VALUE",
 * //   CreatedByIamUser: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   OutputUri: "STRING_VALUE",
 * //   LogUri: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   ComputeTime: Number("long"),
 * //   FinishedAt: new Date("TIMESTAMP"),
 * //   StartedAt: new Date("TIMESTAMP"),
 * //   TotalRecordCount: Number("long"),
 * //   InvalidRecordCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetBatchPredictionCommandInput - {@link GetBatchPredictionCommandInput}
 * @returns {@link GetBatchPredictionCommandOutput}
 * @see {@link GetBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link GetBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource cannot be located.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 */
export class GetBatchPredictionCommand extends $Command<
  GetBatchPredictionCommandInput,
  GetBatchPredictionCommandOutput,
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
  constructor(readonly input: GetBatchPredictionCommandInput) {
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
  ): Handler<GetBatchPredictionCommandInput, GetBatchPredictionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBatchPredictionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "GetBatchPredictionCommand";
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
  private serialize(input: GetBatchPredictionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBatchPredictionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBatchPredictionCommandOutput> {
    return de_GetBatchPredictionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
