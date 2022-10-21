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
  DescribeStackResourceDriftsInput,
  DescribeStackResourceDriftsInputFilterSensitiveLog,
  DescribeStackResourceDriftsOutput,
  DescribeStackResourceDriftsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeStackResourceDriftsCommand,
  serializeAws_queryDescribeStackResourceDriftsCommand,
} from "../protocols/Aws_query";

export interface DescribeStackResourceDriftsCommandInput extends DescribeStackResourceDriftsInput {}
export interface DescribeStackResourceDriftsCommandOutput extends DescribeStackResourceDriftsOutput, __MetadataBearer {}

/**
 * <p>Returns drift information for the resources that have been checked for drift in the
 *          specified stack. This includes actual and expected configuration values for resources where
 *          CloudFormation detects configuration drift.</p>
 *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack
 *          resource that has been checked for drift. Resources that haven't yet been checked for drift
 *          aren't included. Resources that don't currently support drift detection aren't checked, and
 *          so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources,
 *          or <a>DetectStackDrift</a> to detect drift on all supported resources for a
 *          given stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourceDriftsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourceDriftsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackResourceDriftsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackResourceDriftsCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourceDriftsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DescribeStackResourceDriftsCommand extends $Command<
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
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

  constructor(readonly input: DescribeStackResourceDriftsCommandInput) {
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
  ): Handler<DescribeStackResourceDriftsCommandInput, DescribeStackResourceDriftsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackResourceDriftsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackResourceDriftsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStackResourceDriftsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackResourceDriftsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStackResourceDriftsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeStackResourceDriftsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackResourceDriftsCommandOutput> {
    return deserializeAws_queryDescribeStackResourceDriftsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
