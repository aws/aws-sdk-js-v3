import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { SetInstanceProtectionAnswer, SetInstanceProtectionQuery } from "../models/models_0";
import {
  deserializeAws_querySetInstanceProtectionCommand,
  serializeAws_querySetInstanceProtectionCommand,
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

export type SetInstanceProtectionCommandInput = SetInstanceProtectionQuery;
export type SetInstanceProtectionCommandOutput = SetInstanceProtectionAnswer & __MetadataBearer;

/**
 * <p>Updates the instance protection settings of the specified instances.</p>
 *         <p>For more information about preventing instances that are part of an Auto Scaling group from
 *             terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance scale-in protection</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call
 *             fails.</p>
 */
export class SetInstanceProtectionCommand extends $Command<
  SetInstanceProtectionCommandInput,
  SetInstanceProtectionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "SetInstanceProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetInstanceProtectionQuery.filterSensitiveLog,
      outputFilterSensitiveLog: SetInstanceProtectionAnswer.filterSensitiveLog,
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
