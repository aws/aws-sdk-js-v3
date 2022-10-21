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
  DescribeNotificationConfigurationsAnswer,
  DescribeNotificationConfigurationsAnswerFilterSensitiveLog,
  DescribeNotificationConfigurationsType,
  DescribeNotificationConfigurationsTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeNotificationConfigurationsCommand,
  serializeAws_queryDescribeNotificationConfigurationsCommand,
} from "../protocols/Aws_query";

export interface DescribeNotificationConfigurationsCommandInput extends DescribeNotificationConfigurationsType {}
export interface DescribeNotificationConfigurationsCommandOutput
  extends DescribeNotificationConfigurationsAnswer,
    __MetadataBearer {}

/**
 * <p>Gets information about the Amazon SNS notifications that are configured for one or more
 *             Auto Scaling groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeNotificationConfigurationsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeNotificationConfigurationsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotificationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DescribeNotificationConfigurationsCommand extends $Command<
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
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

  constructor(readonly input: DescribeNotificationConfigurationsCommandInput) {
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
  ): Handler<DescribeNotificationConfigurationsCommandInput, DescribeNotificationConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNotificationConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeNotificationConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNotificationConfigurationsTypeFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeNotificationConfigurationsAnswerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeNotificationConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeNotificationConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNotificationConfigurationsCommandOutput> {
    return deserializeAws_queryDescribeNotificationConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
