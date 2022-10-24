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
import { TerminateJobFlowsInput, TerminateJobFlowsInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1TerminateJobFlowsCommand,
  serializeAws_json1_1TerminateJobFlowsCommand,
} from "../protocols/Aws_json1_1";

export interface TerminateJobFlowsCommandInput extends TerminateJobFlowsInput {}
export interface TerminateJobFlowsCommandOutput extends __MetadataBearer {}

/**
 * <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut
 *          down, any step not yet completed is canceled and the EC2 instances on which the cluster is
 *          running are stopped. Any log files not already saved are uploaded to Amazon S3 if a
 *          LogUri was specified when the cluster was created.</p>
 *          <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code>
 *          is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5
 *          minutes for the cluster to completely terminate and release allocated resources, such as
 *             Amazon EC2 instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, TerminateJobFlowsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, TerminateJobFlowsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new TerminateJobFlowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateJobFlowsCommandInput} for command's `input` shape.
 * @see {@link TerminateJobFlowsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class TerminateJobFlowsCommand extends $Command<
  TerminateJobFlowsCommandInput,
  TerminateJobFlowsCommandOutput,
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

  constructor(readonly input: TerminateJobFlowsCommandInput) {
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
  ): Handler<TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateJobFlowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "TerminateJobFlowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateJobFlowsInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateJobFlowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TerminateJobFlowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateJobFlowsCommandOutput> {
    return deserializeAws_json1_1TerminateJobFlowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
