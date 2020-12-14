import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteAlarmsInput } from "../models/models_0";
import { deserializeAws_queryDeleteAlarmsCommand, serializeAws_queryDeleteAlarmsCommand } from "../protocols/Aws_query";
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

export type DeleteAlarmsCommandInput = DeleteAlarmsInput;
export type DeleteAlarmsCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more
 * 			than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't
 * 			delete two composite alarms with one operation.</p>
 * 		       <p>
 * 			In the event of an error, no alarms are
 * 			deleted.</p>
 * 		       <note>
 *             <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and
 * 			composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle
 * 			because there is always still a composite alarm that depends on that alarm that you want to delete.</p>
 * 			         <p>To get out of such a situation, you must
 * 				break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest
 * 				change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>False</code>. </p>
 * 			         <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path.
 * 			</p>
 *          </note>
 */
export class DeleteAlarmsCommand extends $Command<
  DeleteAlarmsCommandInput,
  DeleteAlarmsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAlarmsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DeleteAlarmsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAlarmsInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAlarmsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteAlarmsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAlarmsCommandOutput> {
    return deserializeAws_queryDeleteAlarmsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
