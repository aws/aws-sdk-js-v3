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
  DescribeLifecycleHooksAnswer,
  DescribeLifecycleHooksAnswerFilterSensitiveLog,
  DescribeLifecycleHooksType,
  DescribeLifecycleHooksTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeLifecycleHooksCommand,
  serializeAws_queryDescribeLifecycleHooksCommand,
} from "../protocols/Aws_query";

export interface DescribeLifecycleHooksCommandInput extends DescribeLifecycleHooksType {}
export interface DescribeLifecycleHooksCommandOutput extends DescribeLifecycleHooksAnswer, __MetadataBearer {}

/**
 * <p>Gets information about the lifecycle hooks for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLifecycleHooksCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLifecycleHooksCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLifecycleHooksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLifecycleHooksCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleHooksCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DescribeLifecycleHooksCommand extends $Command<
  DescribeLifecycleHooksCommandInput,
  DescribeLifecycleHooksCommandOutput,
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

  constructor(readonly input: DescribeLifecycleHooksCommandInput) {
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
  ): Handler<DescribeLifecycleHooksCommandInput, DescribeLifecycleHooksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLifecycleHooksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeLifecycleHooksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLifecycleHooksTypeFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeLifecycleHooksAnswerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLifecycleHooksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLifecycleHooksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLifecycleHooksCommandOutput> {
    return deserializeAws_queryDescribeLifecycleHooksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
