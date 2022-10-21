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
  DetectStackDriftInput,
  DetectStackDriftInputFilterSensitiveLog,
  DetectStackDriftOutput,
  DetectStackDriftOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDetectStackDriftCommand,
  serializeAws_queryDetectStackDriftCommand,
} from "../protocols/Aws_query";

export interface DetectStackDriftCommandInput extends DetectStackDriftInput {}
export interface DetectStackDriftCommandOutput extends DetectStackDriftOutput, __MetadataBearer {}

/**
 * <p>Detects whether a stack's actual configuration differs, or has
 *             <i>drifted</i>, from it's expected configuration, as defined in the stack
 *          template and any values specified as template parameters. For each resource in the stack
 *          that supports drift detection, CloudFormation compares the actual configuration of the resource with
 *          its expected template configuration. Only resource properties explicitly defined in the
 *          stack template are checked for drift. A stack is considered to have drifted if one or more
 *          of its resources differ from their expected template configurations. For more information,
 *          see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given
 *          stack, or <a>DetectStackResourceDrift</a> to detect drift on individual
 *          resources.</p>
 *          <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 *          <p>
 *             <code>DetectStackDrift</code> can take up to several minutes, depending on the number of
 *          resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection
 *          operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift
 *          information about the stack and its resources.</p>
 *          <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks
 *          belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack
 *          itself.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DetectStackDriftCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DetectStackDriftCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DetectStackDriftCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectStackDriftCommandInput} for command's `input` shape.
 * @see {@link DetectStackDriftCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DetectStackDriftCommand extends $Command<
  DetectStackDriftCommandInput,
  DetectStackDriftCommandOutput,
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

  constructor(readonly input: DetectStackDriftCommandInput) {
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
  ): Handler<DetectStackDriftCommandInput, DetectStackDriftCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectStackDriftCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DetectStackDriftCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectStackDriftInputFilterSensitiveLog,
      outputFilterSensitiveLog: DetectStackDriftOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectStackDriftCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetectStackDriftCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectStackDriftCommandOutput> {
    return deserializeAws_queryDetectStackDriftCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
