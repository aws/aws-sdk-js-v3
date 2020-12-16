import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeScheduledActionsType, ScheduledActionsType } from "../models/models_0";
import {
  deserializeAws_queryDescribeScheduledActionsCommand,
  serializeAws_queryDescribeScheduledActionsCommand,
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

export type DescribeScheduledActionsCommandInput = DescribeScheduledActionsType;
export type DescribeScheduledActionsCommandOutput = ScheduledActionsType & __MetadataBearer;

/**
 * <p>Describes the actions scheduled for your Auto Scaling group that haven't run or that have not
 *             reached their end time. To describe the actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>
 */
export class DescribeScheduledActionsCommand extends $Command<
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScheduledActionsCommandInput) {
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
  ): Handler<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeScheduledActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScheduledActionsType.filterSensitiveLog,
      outputFilterSensitiveLog: ScheduledActionsType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScheduledActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeScheduledActionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScheduledActionsCommandOutput> {
    return deserializeAws_queryDescribeScheduledActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
