// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotDatafeedSubscriptionRequest, DescribeSpotDatafeedSubscriptionResult } from "../models/models_4";
import {
  de_DescribeSpotDatafeedSubscriptionCommand,
  se_DescribeSpotDatafeedSubscriptionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSpotDatafeedSubscriptionCommand}.
 */
export interface DescribeSpotDatafeedSubscriptionCommandInput extends DescribeSpotDatafeedSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpotDatafeedSubscriptionCommand}.
 */
export interface DescribeSpotDatafeedSubscriptionCommandOutput
  extends DescribeSpotDatafeedSubscriptionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the data feed for Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot
 *             Instance data feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotDatafeedSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotDatafeedSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSpotDatafeedSubscriptionRequest
 *   DryRun: true || false,
 * };
 * const command = new DescribeSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpotDatafeedSubscriptionResult
 * //   SpotDatafeedSubscription: { // SpotDatafeedSubscription
 * //     Bucket: "STRING_VALUE",
 * //     Fault: { // SpotInstanceStateFault
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     OwnerId: "STRING_VALUE",
 * //     Prefix: "STRING_VALUE",
 * //     State: "Active" || "Inactive",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSpotDatafeedSubscriptionCommandInput - {@link DescribeSpotDatafeedSubscriptionCommandInput}
 * @returns {@link DescribeSpotDatafeedSubscriptionCommandOutput}
 * @see {@link DescribeSpotDatafeedSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotDatafeedSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe the datafeed for your AWS account
 * ```javascript
 * // This example describes the Spot Instance datafeed subscription for your AWS account.
 * const input = undefined;
 * const command = new DescribeSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SpotDatafeedSubscription": {
 *     "Bucket": "my-s3-bucket",
 *     "OwnerId": "123456789012",
 *     "Prefix": "spotdata",
 *     "State": "Active"
 *   }
 * }
 * *\/
 * // example id: ec2-describe-spot-datafeed-subscription-1
 * ```
 *
 */
export class DescribeSpotDatafeedSubscriptionCommand extends $Command<
  DescribeSpotDatafeedSubscriptionCommandInput,
  DescribeSpotDatafeedSubscriptionCommandOutput,
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
  constructor(readonly input: DescribeSpotDatafeedSubscriptionCommandInput) {
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
  ): Handler<DescribeSpotDatafeedSubscriptionCommandInput, DescribeSpotDatafeedSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSpotDatafeedSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotDatafeedSubscriptionCommand";
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
    input: DescribeSpotDatafeedSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeSpotDatafeedSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotDatafeedSubscriptionCommandOutput> {
    return de_DescribeSpotDatafeedSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
