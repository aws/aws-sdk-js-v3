import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { RunJobFlowInput, RunJobFlowOutput } from "../models/models_0";
import {
  deserializeAws_json1_1RunJobFlowCommand,
  serializeAws_json1_1RunJobFlowCommand,
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

export type RunJobFlowCommandInput = RunJobFlowInput;
export type RunJobFlowCommandOutput = RunJobFlowOutput & __MetadataBearer;

/**
 * <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the
 *          steps specified. After the steps complete, the cluster stops and the HDFS partition is
 *          lost. To prevent loss of data, configure the last step of the job flow to store results in
 *          Amazon S3. If the <a>JobFlowInstancesConfig</a>
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
 *          queries directly to the software running on the master node, such as Hive and Hadoop. For
 *          more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a
 *             Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p>
 *          <p>For long running clusters, we recommend that you periodically store your results.</p>
 *          <note>
 *             <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets
 *             parameters or InstanceGroups parameters, but not both.</p>
 *          </note>
 */
export class RunJobFlowCommand extends $Command<
  RunJobFlowCommandInput,
  RunJobFlowCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "RunJobFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RunJobFlowInput.filterSensitiveLog,
      outputFilterSensitiveLog: RunJobFlowOutput.filterSensitiveLog,
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
