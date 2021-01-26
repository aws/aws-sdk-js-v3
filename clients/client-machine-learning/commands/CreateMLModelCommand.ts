import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateMLModelInput, CreateMLModelOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateMLModelCommand,
  serializeAws_json1_1CreateMLModelCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateMLModelCommandInput = CreateMLModelInput;
export type CreateMLModelCommandOutput = CreateMLModelOutput & __MetadataBearer;

/**
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
 */
export class CreateMLModelCommand extends $Command<
  CreateMLModelCommandInput,
  CreateMLModelCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "CreateMLModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMLModelInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMLModelOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMLModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMLModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMLModelCommandOutput> {
    return deserializeAws_json1_1CreateMLModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
