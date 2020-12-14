import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { SetDesiredCapacityType } from "../models/models_0";
import {
  deserializeAws_querySetDesiredCapacityCommand,
  serializeAws_querySetDesiredCapacityCommand,
} from "../protocols/Aws_query";
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

export type SetDesiredCapacityCommandInput = SetDesiredCapacityType;
export type SetDesiredCapacityCommandOutput = __MetadataBearer;

/**
 * <p>Sets the size of the specified Auto Scaling group.</p>
 *         <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value
 *             that is lower than the current size of the group, the Auto Scaling group uses its termination
 *             policy to determine which instances to terminate. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class SetDesiredCapacityCommand extends $Command<
  SetDesiredCapacityCommandInput,
  SetDesiredCapacityCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetDesiredCapacityCommandInput) {
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
  ): Handler<SetDesiredCapacityCommandInput, SetDesiredCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "SetDesiredCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetDesiredCapacityType.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetDesiredCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetDesiredCapacityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetDesiredCapacityCommandOutput> {
    return deserializeAws_querySetDesiredCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
