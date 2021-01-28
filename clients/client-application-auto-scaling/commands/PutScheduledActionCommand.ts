import {
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import { PutScheduledActionRequest, PutScheduledActionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutScheduledActionCommand,
  serializeAws_json1_1PutScheduledActionCommand,
} from "../protocols/Aws_json1_1";
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

export type PutScheduledActionCommandInput = PutScheduledActionRequest;
export type PutScheduledActionCommandOutput = PutScheduledActionResponse & __MetadataBearer;

/**
 * <p>Creates or updates a scheduled action for an Application Auto Scaling scalable target.</p>
 *          <p>Each scalable target is identified by a service namespace, resource ID, and scalable
 *          dimension. A scheduled action applies to the scalable target identified by those three
 *          attributes. You cannot create a scheduled action until you have registered the resource as
 *          a scalable target.</p>
 *          <p>When start and end times are specified with a recurring schedule using a cron expression
 *          or rates, they form the boundaries of when the recurring action starts and stops.</p>
 *          <p>To update a scheduled action, specify the parameters that you want to change. If you
 *          don't specify start and end times, the old values are deleted.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 *          <note>
 *             <p>If a scalable target is deregistered, the scalable target is no longer available to
 *             run scheduled actions. Any scheduled actions that were specified for the scalable target
 *             are deleted.</p>
 *          </note>
 */
export class PutScheduledActionCommand extends $Command<
  PutScheduledActionCommandInput,
  PutScheduledActionCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutScheduledActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationAutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutScheduledActionCommandInput, PutScheduledActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "PutScheduledActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutScheduledActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutScheduledActionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutScheduledActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutScheduledActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutScheduledActionCommandOutput> {
    return deserializeAws_json1_1PutScheduledActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
