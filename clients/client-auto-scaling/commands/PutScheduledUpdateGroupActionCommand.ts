import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { PutScheduledUpdateGroupActionType } from "../models/models_0";
import {
  deserializeAws_queryPutScheduledUpdateGroupActionCommand,
  serializeAws_queryPutScheduledUpdateGroupActionCommand,
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

export type PutScheduledUpdateGroupActionCommandInput = PutScheduledUpdateGroupActionType;
export type PutScheduledUpdateGroupActionCommandOutput = __MetadataBearer;

/**
 * <p>Creates or updates a scheduled scaling action for an Auto Scaling group. If you leave a
 *             parameter unspecified when updating a scheduled scaling action, the corresponding value
 *             remains unchanged.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class PutScheduledUpdateGroupActionCommand extends $Command<
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutScheduledUpdateGroupActionCommandInput) {
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
  ): Handler<PutScheduledUpdateGroupActionCommandInput, PutScheduledUpdateGroupActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "PutScheduledUpdateGroupActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutScheduledUpdateGroupActionType.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutScheduledUpdateGroupActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutScheduledUpdateGroupActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutScheduledUpdateGroupActionCommandOutput> {
    return deserializeAws_queryPutScheduledUpdateGroupActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
