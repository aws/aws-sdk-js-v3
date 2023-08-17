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
import { CreateBatchPredictionInput, CreateBatchPredictionOutput } from "../models/models_0";
import { de_CreateBatchPredictionCommand, se_CreateBatchPredictionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBatchPredictionCommand}.
 */
export interface CreateBatchPredictionCommandInput extends CreateBatchPredictionInput {}
/**
 * @public
 *
 * The output of {@link CreateBatchPredictionCommand}.
 */
export interface CreateBatchPredictionCommandOutput extends CreateBatchPredictionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced
 *             by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data
 *             files referenced by the <code>DataSource</code> as information sources.
 *         </p>
 *
 *         <p>
 *             <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>,
 *         Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>.
 *         After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>.
 *         </p>
 *         <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears,
 *             the results are available in the location specified by the <code>OutputUri</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // CreateBatchPredictionInput
 *   BatchPredictionId: "STRING_VALUE", // required
 *   BatchPredictionName: "STRING_VALUE",
 *   MLModelId: "STRING_VALUE", // required
 *   BatchPredictionDataSourceId: "STRING_VALUE", // required
 *   OutputUri: "STRING_VALUE", // required
 * };
 * const command = new CreateBatchPredictionCommand(input);
 * const response = await client.send(command);
 * // { // CreateBatchPredictionOutput
 * //   BatchPredictionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBatchPredictionCommandInput - {@link CreateBatchPredictionCommandInput}
 * @returns {@link CreateBatchPredictionCommandOutput}
 * @see {@link CreateBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link CreateBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
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
export class CreateBatchPredictionCommand extends $Command<
  CreateBatchPredictionCommandInput,
  CreateBatchPredictionCommandOutput,
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
  constructor(readonly input: CreateBatchPredictionCommandInput) {
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
  ): Handler<CreateBatchPredictionCommandInput, CreateBatchPredictionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBatchPredictionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "CreateBatchPredictionCommand";
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
  private serialize(input: CreateBatchPredictionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBatchPredictionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBatchPredictionCommandOutput> {
    return de_CreateBatchPredictionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
