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
  DetectStackResourceDriftInput,
  DetectStackResourceDriftInputFilterSensitiveLog,
  DetectStackResourceDriftOutput,
  DetectStackResourceDriftOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDetectStackResourceDriftCommand,
  serializeAws_queryDetectStackResourceDriftCommand,
} from "../protocols/Aws_query";

export interface DetectStackResourceDriftCommandInput extends DetectStackResourceDriftInput {}
export interface DetectStackResourceDriftCommandOutput extends DetectStackResourceDriftOutput, __MetadataBearer {}

/**
 * <p>Returns information about whether a resource's actual configuration differs, or has
 *             <i>drifted</i>, from it's expected configuration, as defined in the stack
 *          template and any values specified as template parameters. This information includes actual
 *          and expected property values for resources in which CloudFormation detects drift. Only resource
 *          properties explicitly defined in the stack template are checked for drift. For more
 *          information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or
 *             <a>DetectStackDrift</a> to detect drift on all resources in a given stack
 *          that support drift detection.</p>
 *          <p>Resources that don't currently support drift detection can't be checked. For a list of
 *          resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DetectStackResourceDriftCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DetectStackResourceDriftCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DetectStackResourceDriftCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectStackResourceDriftCommandInput} for command's `input` shape.
 * @see {@link DetectStackResourceDriftCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DetectStackResourceDriftCommand extends $Command<
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput,
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

  constructor(readonly input: DetectStackResourceDriftCommandInput) {
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
  ): Handler<DetectStackResourceDriftCommandInput, DetectStackResourceDriftCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectStackResourceDriftCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DetectStackResourceDriftCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectStackResourceDriftInputFilterSensitiveLog,
      outputFilterSensitiveLog: DetectStackResourceDriftOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectStackResourceDriftCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetectStackResourceDriftCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectStackResourceDriftCommandOutput> {
    return deserializeAws_queryDetectStackResourceDriftCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
