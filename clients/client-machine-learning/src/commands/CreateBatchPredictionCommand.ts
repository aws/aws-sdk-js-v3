// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import {
  CreateBatchPredictionInput,
  CreateBatchPredictionInputFilterSensitiveLog,
  CreateBatchPredictionOutput,
  CreateBatchPredictionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateBatchPredictionCommand,
  serializeAws_json1_1CreateBatchPredictionCommand,
} from "../protocols/Aws_json1_1";

export interface CreateBatchPredictionCommandInput extends CreateBatchPredictionInput {}
export interface CreateBatchPredictionCommandOutput extends CreateBatchPredictionOutput, __MetadataBearer {}

/**
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
 * const command = new CreateBatchPredictionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link CreateBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
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
      inputFilterSensitiveLog: CreateBatchPredictionInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateBatchPredictionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBatchPredictionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBatchPredictionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBatchPredictionCommandOutput> {
    return deserializeAws_json1_1CreateBatchPredictionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
