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
import { DescribeVpcAttributeRequest, DescribeVpcAttributeResult } from "../models/models_5";
import { de_DescribeVpcAttributeCommand, se_DescribeVpcAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcAttributeCommand}.
 */
export interface DescribeVpcAttributeCommandInput extends DescribeVpcAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcAttributeCommand}.
 */
export interface DescribeVpcAttributeCommandOutput extends DescribeVpcAttributeResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified attribute of the specified VPC. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcAttributeRequest
 *   Attribute: "enableDnsSupport" || "enableDnsHostnames" || "enableNetworkAddressUsageMetrics", // required
 *   VpcId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DescribeVpcAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcAttributeResult
 * //   VpcId: "STRING_VALUE",
 * //   EnableDnsHostnames: { // AttributeBooleanValue
 * //     Value: true || false,
 * //   },
 * //   EnableDnsSupport: {
 * //     Value: true || false,
 * //   },
 * //   EnableNetworkAddressUsageMetrics: {
 * //     Value: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeVpcAttributeCommandInput - {@link DescribeVpcAttributeCommandInput}
 * @returns {@link DescribeVpcAttributeCommandOutput}
 * @see {@link DescribeVpcAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe the enableDnsSupport attribute
 * ```javascript
 * // This example describes the enableDnsSupport attribute. This attribute indicates whether DNS resolution is enabled for the VPC. If this attribute is true, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.
 * const input = {
 *   "Attribute": "enableDnsSupport",
 *   "VpcId": "vpc-a01106c2"
 * };
 * const command = new DescribeVpcAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EnableDnsSupport": {
 *     "Value": true
 *   },
 *   "VpcId": "vpc-a01106c2"
 * }
 * *\/
 * // example id: ec2-describe-vpc-attribute-1
 * ```
 *
 * @example To describe the enableDnsHostnames attribute
 * ```javascript
 * // This example describes the enableDnsHostnames attribute. This attribute indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is true, instances in the VPC get DNS hostnames; otherwise, they do not.
 * const input = {
 *   "Attribute": "enableDnsHostnames",
 *   "VpcId": "vpc-a01106c2"
 * };
 * const command = new DescribeVpcAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EnableDnsHostnames": {
 *     "Value": true
 *   },
 *   "VpcId": "vpc-a01106c2"
 * }
 * *\/
 * // example id: ec2-describe-vpc-attribute-2
 * ```
 *
 */
export class DescribeVpcAttributeCommand extends $Command<
  DescribeVpcAttributeCommandInput,
  DescribeVpcAttributeCommandOutput,
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
  constructor(readonly input: DescribeVpcAttributeCommandInput) {
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
  ): Handler<DescribeVpcAttributeCommandInput, DescribeVpcAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpcAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcAttributeCommand";
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
  private serialize(input: DescribeVpcAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVpcAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVpcAttributeCommandOutput> {
    return de_DescribeVpcAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
