import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ExitStandbyAnswer, ExitStandbyQuery } from "../models/models_0";
import { deserializeAws_queryExitStandbyCommand, serializeAws_queryExitStandbyCommand } from "../protocols/Aws_query";
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

export type ExitStandbyCommandInput = ExitStandbyQuery;
export type ExitStandbyCommandOutput = ExitStandbyAnswer & __MetadataBearer;

/**
 * <p>Moves the specified instances out of the standby state.</p>
 *         <p>After you put the instances back in service, the desired capacity is
 *             incremented.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing
 *                 instances from your Auto Scaling group</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class ExitStandbyCommand extends $Command<
  ExitStandbyCommandInput,
  ExitStandbyCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExitStandbyCommandInput) {
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
  ): Handler<ExitStandbyCommandInput, ExitStandbyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "ExitStandbyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExitStandbyQuery.filterSensitiveLog,
      outputFilterSensitiveLog: ExitStandbyAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExitStandbyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryExitStandbyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExitStandbyCommandOutput> {
    return deserializeAws_queryExitStandbyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
