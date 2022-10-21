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
  CreateDataSourceFromS3Input,
  CreateDataSourceFromS3InputFilterSensitiveLog,
  CreateDataSourceFromS3Output,
  CreateDataSourceFromS3OutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDataSourceFromS3Command,
  serializeAws_json1_1CreateDataSourceFromS3Command,
} from "../protocols/Aws_json1_1";

export interface CreateDataSourceFromS3CommandInput extends CreateDataSourceFromS3Input {}
export interface CreateDataSourceFromS3CommandOutput extends CreateDataSourceFromS3Output, __MetadataBearer {}

/**
 * <p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that
 *           can be used to perform  <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or
 *           <code>CreateBatchPrediction</code> operations.</p>
 *
 *         <p>
 *             <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to
 *                 <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately
 *             returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the
 *                 <code>DataSource</code> has been created and is ready for use, Amazon ML sets the
 *                 <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in
 *             the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only
 *                 <code>CreateMLModel</code>, <code>CreateEvaluation</code> or
 *                 <code>CreateBatchPrediction</code> operations. </p>
 *
 *         <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to
 *                 <code>FAILED</code> and includes an error message in the <code>Message</code>
 *             attribute of the <code>GetDataSource</code> operation response. </p>
 *
 *         <p>The observation data used in a <code>DataSource</code> should be ready to use; that is,
 *             it should have a consistent structure, and missing data values should be kept to a
 *             minimum. The observation data must reside in one or more .csv files in an Amazon Simple
 *             Storage Service (Amazon S3) location, along with a schema that describes the data items
 *             by name and type. The same schema must be used for all of the data files referenced by
 *             the <code>DataSource</code>. </p>
 *         <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and
 *             batch predictions. If you plan to use the <code>DataSource</code> to train an
 *                 <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe
 *             describes how each input variable will be used in training an <code>MLModel</code>. Will
 *             the variable be included or excluded from training? Will the variable be manipulated;
 *             for example, will it be combined with another variable or will it be split apart into
 *             word combinations? The recipe provides answers to these questions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateDataSourceFromS3Command } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateDataSourceFromS3Command } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateDataSourceFromS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceFromS3CommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceFromS3CommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 */
export class CreateDataSourceFromS3Command extends $Command<
  CreateDataSourceFromS3CommandInput,
  CreateDataSourceFromS3CommandOutput,
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

  constructor(readonly input: CreateDataSourceFromS3CommandInput) {
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
  ): Handler<CreateDataSourceFromS3CommandInput, CreateDataSourceFromS3CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataSourceFromS3Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "CreateDataSourceFromS3Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataSourceFromS3InputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDataSourceFromS3OutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataSourceFromS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataSourceFromS3Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSourceFromS3CommandOutput> {
    return deserializeAws_json1_1CreateDataSourceFromS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
