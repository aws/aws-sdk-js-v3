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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  DescribeAutoScalingConfigurationRequest,
  DescribeAutoScalingConfigurationRequestFilterSensitiveLog,
  DescribeAutoScalingConfigurationResponse,
  DescribeAutoScalingConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DescribeAutoScalingConfigurationCommand,
  serializeAws_json1_0DescribeAutoScalingConfigurationCommand,
} from "../protocols/Aws_json1_0";

export interface DescribeAutoScalingConfigurationCommandInput extends DescribeAutoScalingConfigurationRequest {}
export interface DescribeAutoScalingConfigurationCommandOutput
  extends DescribeAutoScalingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Return a full description of an App Runner automatic scaling configuration resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DescribeAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 */
export class DescribeAutoScalingConfigurationCommand extends $Command<
  DescribeAutoScalingConfigurationCommandInput,
  DescribeAutoScalingConfigurationCommandOutput,
  AppRunnerClientResolvedConfig
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

  constructor(readonly input: DescribeAutoScalingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAutoScalingConfigurationCommandInput, DescribeAutoScalingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAutoScalingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "DescribeAutoScalingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAutoScalingConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAutoScalingConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAutoScalingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeAutoScalingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAutoScalingConfigurationCommandOutput> {
    return deserializeAws_json1_0DescribeAutoScalingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
