import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeLifecycleHookTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeLifecycleHookTypesCommand,
  serializeAws_queryDescribeLifecycleHookTypesCommand,
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

export type DescribeLifecycleHookTypesCommandInput = {};
export type DescribeLifecycleHookTypesCommandOutput = DescribeLifecycleHookTypesAnswer & __MetadataBearer;

/**
 * <p>Describes the available types of lifecycle hooks.</p>
 *         <p>The following hook types are supported:</p>
 *         <ul>
 *             <li>
 *                 <p>autoscaling:EC2_INSTANCE_LAUNCHING</p>
 *             </li>
 *             <li>
 *                 <p>autoscaling:EC2_INSTANCE_TERMINATING</p>
 *             </li>
 *          </ul>
 */
export class DescribeLifecycleHookTypesCommand extends $Command<
  DescribeLifecycleHookTypesCommandInput,
  DescribeLifecycleHookTypesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLifecycleHookTypesCommandInput) {
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
  ): Handler<DescribeLifecycleHookTypesCommandInput, DescribeLifecycleHookTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeLifecycleHookTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeLifecycleHookTypesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLifecycleHookTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLifecycleHookTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLifecycleHookTypesCommandOutput> {
    return deserializeAws_queryDescribeLifecycleHookTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
