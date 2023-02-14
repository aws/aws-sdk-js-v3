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
  RunJobFlowInput,
  RunJobFlowInputFilterSensitiveLog,
  RunJobFlowOutput,
  RunJobFlowOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RunJobFlowCommand,
  serializeAws_json1_1RunJobFlowCommand,
} from "../protocols/Aws_json1_1";

export interface RunJobFlowCommandInput extends RunJobFlowInput {}
export interface RunJobFlowCommandOutput extends RunJobFlowOutput, __MetadataBearer {}

/**
 * <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the
 *          steps specified. After the steps complete, the cluster stops and the HDFS partition is
 *          lost. To prevent loss of data, configure the last step of the job flow to store results in
 *             Amazon S3. If the <a>JobFlowInstancesConfig</a>
 *             <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster
 *          transitions to the WAITING state rather than shutting down after the steps have completed. </p>
 *          <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a>
 *             <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and
 *          prevent it from being terminated by API call, user intervention, or in the event of a job
 *          flow error.</p>
 *          <p>A maximum of 256 steps are allowed in each job flow.</p>
 *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may
 *          require more than 256 steps to process your data. You can bypass the 256-step limitation in
 *          various ways, including using the SSH shell to connect to the master node and submitting
 *          queries directly to the software running on the master node, such as Hive and Hadoop.</p>
 *          <p>For long-running clusters, we recommend that you periodically store your results.</p>
 *          <note>
 *             <p>The instance fleets configuration is available only in Amazon EMR versions
 *             4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain
 *             InstanceFleets parameters or InstanceGroups parameters, but not both.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RunJobFlowCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RunJobFlowCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new RunJobFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RunJobFlowCommandInput} for command's `input` shape.
 * @see {@link RunJobFlowCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class RunJobFlowCommand extends $Command<
  RunJobFlowCommandInput,
  RunJobFlowCommandOutput,
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

  constructor(readonly input: RunJobFlowCommandInput) {
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
  ): Handler<RunJobFlowCommandInput, RunJobFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RunJobFlowCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "RunJobFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RunJobFlowInputFilterSensitiveLog,
      outputFilterSensitiveLog: RunJobFlowOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RunJobFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RunJobFlowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunJobFlowCommandOutput> {
    return deserializeAws_json1_1RunJobFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
