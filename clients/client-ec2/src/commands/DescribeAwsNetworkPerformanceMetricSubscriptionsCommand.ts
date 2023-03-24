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
  DescribeAwsNetworkPerformanceMetricSubscriptionsRequest,
  DescribeAwsNetworkPerformanceMetricSubscriptionsResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
  serializeAws_ec2DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommand}.
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput
  extends DescribeAwsNetworkPerformanceMetricSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommand}.
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput
  extends DescribeAwsNetworkPerformanceMetricSubscriptionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the current Infrastructure Performance metric subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAwsNetworkPerformanceMetricSubscriptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAwsNetworkPerformanceMetricSubscriptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = {
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [
 *     {
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeAwsNetworkPerformanceMetricSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput - {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput}
 * @returns {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput}
 * @see {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DescribeAwsNetworkPerformanceMetricSubscriptionsCommand extends $Command<
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput) {
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
    DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
    DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeAwsNetworkPerformanceMetricSubscriptionsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeAwsNetworkPerformanceMetricSubscriptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeAwsNetworkPerformanceMetricSubscriptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput> {
    return deserializeAws_ec2DescribeAwsNetworkPerformanceMetricSubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
