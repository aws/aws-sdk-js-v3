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
import { SetTerminationProtectionInput, SetTerminationProtectionInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1SetTerminationProtectionCommand,
  serializeAws_json1_1SetTerminationProtectionCommand,
} from "../protocols/Aws_json1_1";

export interface SetTerminationProtectionCommandInput extends SetTerminationProtectionInput {}
export interface SetTerminationProtectionCommandOutput extends __MetadataBearer {}

/**
 * <p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster
 *          cannot be terminated by user intervention, an API call, or in the event of a job-flow
 *          error. The cluster still terminates upon successful completion of the job flow. Calling
 *             <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2
 *          <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p>
 *          <p>
 *             <code>SetTerminationProtection</code> is used to prevent accidental termination of a
 *          cluster and to ensure that in the event of an error, the instances persist so that you can
 *          recover any data stored in their ephemeral instance storage.</p>
 *          <p> To terminate a cluster that has been locked by setting
 *             <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the
 *          job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the
 *          value to <code>false</code>. </p>
 *          <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster
 *             Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetTerminationProtectionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetTerminationProtectionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new SetTerminationProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTerminationProtectionCommandInput} for command's `input` shape.
 * @see {@link SetTerminationProtectionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class SetTerminationProtectionCommand extends $Command<
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput,
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

  constructor(readonly input: SetTerminationProtectionCommandInput) {
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
  ): Handler<SetTerminationProtectionCommandInput, SetTerminationProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetTerminationProtectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "SetTerminationProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetTerminationProtectionInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetTerminationProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetTerminationProtectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetTerminationProtectionCommandOutput> {
    return deserializeAws_json1_1SetTerminationProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
