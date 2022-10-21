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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  DescribeStackDriftDetectionStatusInput,
  DescribeStackDriftDetectionStatusInputFilterSensitiveLog,
  DescribeStackDriftDetectionStatusOutput,
  DescribeStackDriftDetectionStatusOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeStackDriftDetectionStatusCommand,
  serializeAws_queryDescribeStackDriftDetectionStatusCommand,
} from "../protocols/Aws_query";

export interface DescribeStackDriftDetectionStatusCommandInput extends DescribeStackDriftDetectionStatusInput {}
export interface DescribeStackDriftDetectionStatusCommandOutput
  extends DescribeStackDriftDetectionStatusOutput,
    __MetadataBearer {}

/**
 * <p>Returns information about a stack drift detection operation. A stack drift detection
 *          operation detects whether a stack's actual configuration differs, or has
 *             <i>drifted</i>, from it's expected configuration, as defined in the stack
 *          template and any values specified as template parameters. A stack is considered to have
 *          drifted if one or more of its resources have drifted. For more information about stack and
 *          resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation.
 *             <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use
 *          to monitor the progress of the operation using
 *             <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has
 *          completed, use <a>DescribeStackResourceDrifts</a> to return drift information
 *          about the stack and its resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackDriftDetectionStatusCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackDriftDetectionStatusCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackDriftDetectionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackDriftDetectionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeStackDriftDetectionStatusCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DescribeStackDriftDetectionStatusCommand extends $Command<
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput,
  CloudFormationClientResolvedConfig
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

  constructor(readonly input: DescribeStackDriftDetectionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackDriftDetectionStatusCommandInput, DescribeStackDriftDetectionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackDriftDetectionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackDriftDetectionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStackDriftDetectionStatusInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackDriftDetectionStatusOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeStackDriftDetectionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeStackDriftDetectionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackDriftDetectionStatusCommandOutput> {
    return deserializeAws_queryDescribeStackDriftDetectionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
