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

import { SetTimeBasedAutoScalingRequest, SetTimeBasedAutoScalingRequestFilterSensitiveLog } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  deserializeAws_json1_1SetTimeBasedAutoScalingCommand,
  serializeAws_json1_1SetTimeBasedAutoScalingCommand,
} from "../protocols/Aws_json1_1";

export interface SetTimeBasedAutoScalingCommandInput extends SetTimeBasedAutoScalingRequest {}
export interface SetTimeBasedAutoScalingCommandOutput extends __MetadataBearer {}

/**
 * <p>Specify the time-based auto scaling configuration for a specified instance. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing
 *         Load with Time-based and Load-based Instances</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, SetTimeBasedAutoScalingCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, SetTimeBasedAutoScalingCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new SetTimeBasedAutoScalingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTimeBasedAutoScalingCommandInput} for command's `input` shape.
 * @see {@link SetTimeBasedAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 */
export class SetTimeBasedAutoScalingCommand extends $Command<
  SetTimeBasedAutoScalingCommandInput,
  SetTimeBasedAutoScalingCommandOutput,
  OpsWorksClientResolvedConfig
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

  constructor(readonly input: SetTimeBasedAutoScalingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetTimeBasedAutoScalingCommandInput, SetTimeBasedAutoScalingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetTimeBasedAutoScalingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "SetTimeBasedAutoScalingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetTimeBasedAutoScalingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetTimeBasedAutoScalingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetTimeBasedAutoScalingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetTimeBasedAutoScalingCommandOutput> {
    return deserializeAws_json1_1SetTimeBasedAutoScalingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
