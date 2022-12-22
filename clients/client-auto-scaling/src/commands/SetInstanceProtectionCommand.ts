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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import {
  SetInstanceProtectionAnswer,
  SetInstanceProtectionAnswerFilterSensitiveLog,
  SetInstanceProtectionQuery,
  SetInstanceProtectionQueryFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_querySetInstanceProtectionCommand,
  serializeAws_querySetInstanceProtectionCommand,
} from "../protocols/Aws_query";

export interface SetInstanceProtectionCommandInput extends SetInstanceProtectionQuery {}
export interface SetInstanceProtectionCommandOutput extends SetInstanceProtectionAnswer, __MetadataBearer {}

/**
 * <p>Updates the instance protection settings of the specified instances. This operation
 *             cannot be called on instances in a warm pool.</p>
 *          <p>For more information about preventing instances that are part of an Auto Scaling group from
 *             terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using
 *                 instance scale-in protection</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call
 *             fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SetInstanceProtectionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SetInstanceProtectionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new SetInstanceProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetInstanceProtectionCommandInput} for command's `input` shape.
 * @see {@link SetInstanceProtectionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class SetInstanceProtectionCommand extends $Command<
  SetInstanceProtectionCommandInput,
  SetInstanceProtectionCommandOutput,
  AutoScalingClientResolvedConfig
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

  constructor(readonly input: SetInstanceProtectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetInstanceProtectionCommandInput, SetInstanceProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetInstanceProtectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "SetInstanceProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetInstanceProtectionQueryFilterSensitiveLog,
      outputFilterSensitiveLog: SetInstanceProtectionAnswerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetInstanceProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetInstanceProtectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetInstanceProtectionCommandOutput> {
    return deserializeAws_querySetInstanceProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
