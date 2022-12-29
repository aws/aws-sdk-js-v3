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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import {
  AddJobFlowStepsInput,
  AddJobFlowStepsInputFilterSensitiveLog,
  AddJobFlowStepsOutput,
  AddJobFlowStepsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AddJobFlowStepsCommand,
  serializeAws_json1_1AddJobFlowStepsCommand,
} from "../protocols/Aws_json1_1";

export interface AddJobFlowStepsCommandInput extends AddJobFlowStepsInput {}
export interface AddJobFlowStepsCommandOutput extends AddJobFlowStepsOutput, __MetadataBearer {}

/**
 * <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed
 *          in each job flow.</p>
 *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may
 *          require more than 256 steps to process your data. You can bypass the 256-step limitation in
 *          various ways, including using SSH to connect to the master node and submitting queries
 *          directly to the software running on the master node, such as Hive and Hadoop.</p>
 *          <p>A step specifies the location of a JAR file stored either on the master node of the
 *          cluster or in Amazon S3. Each step is performed by the main function of the main
 *          class of the JAR file. The main class can be specified either in the manifest of the JAR or
 *          by using the MainFunction parameter of the step.</p>
 *          <p>Amazon EMR executes each step in the order listed. For a step to be considered
 *          complete, the main function must exit with a zero exit code and all Hadoop jobs started
 *          while the step was running must have completed and run successfully.</p>
 *          <p>You can only add steps to a cluster that is in one of the following states: STARTING,
 *          BOOTSTRAPPING, RUNNING, or WAITING.</p>
 *          <note>
 *             <p>The string values passed into <code>HadoopJarStep</code> object cannot exceed a total
 *             of 10240 characters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddJobFlowStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddJobFlowStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new AddJobFlowStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddJobFlowStepsCommandInput} for command's `input` shape.
 * @see {@link AddJobFlowStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class AddJobFlowStepsCommand extends $Command<
  AddJobFlowStepsCommandInput,
  AddJobFlowStepsCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: AddJobFlowStepsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddJobFlowStepsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "AddJobFlowStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddJobFlowStepsInputFilterSensitiveLog,
      outputFilterSensitiveLog: AddJobFlowStepsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddJobFlowStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddJobFlowStepsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddJobFlowStepsCommandOutput> {
    return deserializeAws_json1_1AddJobFlowStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
