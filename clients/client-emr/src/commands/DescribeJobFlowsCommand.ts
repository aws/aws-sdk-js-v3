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
  DescribeJobFlowsInput,
  DescribeJobFlowsInputFilterSensitiveLog,
  DescribeJobFlowsOutput,
  DescribeJobFlowsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeJobFlowsCommand,
  serializeAws_json1_1DescribeJobFlowsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeJobFlowsCommandInput extends DescribeJobFlowsInput {}
export interface DescribeJobFlowsCommandOutput extends DescribeJobFlowsOutput, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>This API is no longer supported and will eventually be removed. We recommend you use
 *             <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p>
 *          <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters.
 *          The parameters can include a list of job flow IDs, job flow states, and restrictions on job
 *          flow creation date and time.</p>
 *          <p>Regardless of supplied parameters, only job flows created within the last two months are
 *          returned.</p>
 *          <p>If no parameters are supplied, then job flows matching either of the following criteria
 *          are returned:</p>
 *          <ul>
 *             <li>
 *                <p>Job flows created and completed in the last two weeks</p>
 *             </li>
 *             <li>
 *                <p> Job flows created within the last two months that are in one of the following
 *                states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>,
 *                   <code>STARTING</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeJobFlowsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeJobFlowsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DescribeJobFlowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobFlowsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobFlowsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class DescribeJobFlowsCommand extends $Command<
  DescribeJobFlowsCommandInput,
  DescribeJobFlowsCommandOutput,
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

  constructor(readonly input: DescribeJobFlowsCommandInput) {
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
  ): Handler<DescribeJobFlowsCommandInput, DescribeJobFlowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobFlowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DescribeJobFlowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJobFlowsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobFlowsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJobFlowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeJobFlowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobFlowsCommandOutput> {
    return deserializeAws_json1_1DescribeJobFlowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
