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
import { CreateMLModelInput, CreateMLModelOutput } from "../models/models_0";
import { de_CreateMLModelCommand, se_CreateMLModelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMLModelCommand}.
 */
export interface CreateMLModelCommandInput extends CreateMLModelInput {}
/**
 * @public
 *
 * The output of {@link CreateMLModelCommand}.
 */
export interface CreateMLModelCommandOutput extends CreateMLModelOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as
 *             information sources. </p>
 *         <p>An <code>MLModel</code> is nearly immutable. Users can update only the
 *                 <code>MLModelName</code> and the <code>ScoreThreshold</code> in an
 *                 <code>MLModel</code> without creating a new <code>MLModel</code>. </p>
 *         <p>
 *             <code>CreateMLModel</code> is an asynchronous operation. In response to
 *                 <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns
 *             and sets the <code>MLModel</code> status to <code>PENDING</code>. After the
 *                 <code>MLModel</code> has been created and ready is for use, Amazon ML sets the
 *             status to <code>COMPLETED</code>. </p>
 *         <p>You can use the <code>GetMLModel</code> operation to check the progress of the
 *                 <code>MLModel</code> during the creation operation.</p>
 *
 *         <p>
 *            <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics,
 *           which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in
 *           <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or
 *           <code>CreateDataSourceFromRedshift</code> operations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // CreateMLModelInput
 *   MLModelId: "STRING_VALUE", // required
 *   MLModelName: "STRING_VALUE",
 *   MLModelType: "STRING_VALUE", // required
 *   Parameters: { // TrainingParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TrainingDataSourceId: "STRING_VALUE", // required
 *   Recipe: "STRING_VALUE",
 *   RecipeUri: "STRING_VALUE",
 * };
 * const command = new CreateMLModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateMLModelOutput
 * //   MLModelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMLModelCommandInput - {@link CreateMLModelCommandInput}
 * @returns {@link CreateMLModelCommandOutput}
 * @see {@link CreateMLModelCommandInput} for command's `input` shape.
 * @see {@link CreateMLModelCommandOutput} for command's `response` shape.
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
export class CreateMLModelCommand extends $Command<
  CreateMLModelCommandInput,
  CreateMLModelCommandOutput,
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
  constructor(readonly input: CreateMLModelCommandInput) {
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
  ): Handler<CreateMLModelCommandInput, CreateMLModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateMLModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "CreateMLModelCommand";
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
  private serialize(input: CreateMLModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMLModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMLModelCommandOutput> {
    return de_CreateMLModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
