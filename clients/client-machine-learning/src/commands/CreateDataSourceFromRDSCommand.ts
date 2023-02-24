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
  CreateDataSourceFromRDSInput,
  CreateDataSourceFromRDSInputFilterSensitiveLog,
  CreateDataSourceFromRDSOutput,
  CreateDataSourceFromRDSOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDataSourceFromRDSCommand,
  serializeAws_json1_1CreateDataSourceFromRDSCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDataSourceFromRDSCommandInput extends CreateDataSourceFromRDSInput {}
export interface CreateDataSourceFromRDSCommandOutput extends CreateDataSourceFromRDSOutput, __MetadataBearer {}

/**
 * <p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p>
 *
 *         <p>
 *             <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>,
 *          Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>.
 *             After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>.
 *             <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can
 *           be used only to perform <code>>CreateMLModel</code>>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.
 *         </p>
 *         <p>
 *           If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateDataSourceFromRDSCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateDataSourceFromRDSCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateDataSourceFromRDSCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceFromRDSCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceFromRDSCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 */
export class CreateDataSourceFromRDSCommand extends $Command<
  CreateDataSourceFromRDSCommandInput,
  CreateDataSourceFromRDSCommandOutput,
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

  constructor(readonly input: CreateDataSourceFromRDSCommandInput) {
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
  ): Handler<CreateDataSourceFromRDSCommandInput, CreateDataSourceFromRDSCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataSourceFromRDSCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "CreateDataSourceFromRDSCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataSourceFromRDSInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDataSourceFromRDSOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataSourceFromRDSCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataSourceFromRDSCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSourceFromRDSCommandOutput> {
    return deserializeAws_json1_1CreateDataSourceFromRDSCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
