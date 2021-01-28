import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { SetInstanceHealthQuery } from "../models/models_0";
import {
  deserializeAws_querySetInstanceHealthCommand,
  serializeAws_querySetInstanceHealthCommand,
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

export type SetInstanceHealthCommandInput = SetInstanceHealthQuery;
export type SetInstanceHealthCommandOutput = __MetadataBearer;

/**
 * <p>Sets the health status of the specified instance.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling
 *                 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class SetInstanceHealthCommand extends $Command<
  SetInstanceHealthCommandInput,
  SetInstanceHealthCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetInstanceHealthCommandInput) {
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
  ): Handler<SetInstanceHealthCommandInput, SetInstanceHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "SetInstanceHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetInstanceHealthQuery.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetInstanceHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetInstanceHealthCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetInstanceHealthCommandOutput> {
    return deserializeAws_querySetInstanceHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
