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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DisableAwsNetworkPerformanceMetricSubscriptionRequest,
  DisableAwsNetworkPerformanceMetricSubscriptionRequestFilterSensitiveLog,
  DisableAwsNetworkPerformanceMetricSubscriptionResult,
  DisableAwsNetworkPerformanceMetricSubscriptionResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DisableAwsNetworkPerformanceMetricSubscriptionCommand,
  serializeAws_ec2DisableAwsNetworkPerformanceMetricSubscriptionCommand,
} from "../protocols/Aws_ec2";

export interface DisableAwsNetworkPerformanceMetricSubscriptionCommandInput
  extends DisableAwsNetworkPerformanceMetricSubscriptionRequest {}
export interface DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput
  extends DisableAwsNetworkPerformanceMetricSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Disables Infrastructure Performance metric subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableAwsNetworkPerformanceMetricSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableAwsNetworkPerformanceMetricSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableAwsNetworkPerformanceMetricSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAwsNetworkPerformanceMetricSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisableAwsNetworkPerformanceMetricSubscriptionCommand extends $Command<
  DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
  DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: DisableAwsNetworkPerformanceMetricSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisableAwsNetworkPerformanceMetricSubscriptionCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableAwsNetworkPerformanceMetricSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableAwsNetworkPerformanceMetricSubscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableAwsNetworkPerformanceMetricSubscriptionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisableAwsNetworkPerformanceMetricSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput> {
    return deserializeAws_ec2DisableAwsNetworkPerformanceMetricSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
