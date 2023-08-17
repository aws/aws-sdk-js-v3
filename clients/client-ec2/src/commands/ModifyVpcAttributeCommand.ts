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
import { ModifyVpcAttributeRequest } from "../models/models_6";
import { de_ModifyVpcAttributeCommand, se_ModifyVpcAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcAttributeCommand}.
 */
export interface ModifyVpcAttributeCommandInput extends ModifyVpcAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcAttributeCommand}.
 */
export interface ModifyVpcAttributeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified attribute of the specified VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcAttributeRequest
 *   EnableDnsHostnames: { // AttributeBooleanValue
 *     Value: true || false,
 *   },
 *   EnableDnsSupport: {
 *     Value: true || false,
 *   },
 *   VpcId: "STRING_VALUE", // required
 *   EnableNetworkAddressUsageMetrics: {
 *     Value: true || false,
 *   },
 * };
 * const command = new ModifyVpcAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyVpcAttributeCommandInput - {@link ModifyVpcAttributeCommandInput}
 * @returns {@link ModifyVpcAttributeCommandOutput}
 * @see {@link ModifyVpcAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To modify the enableDnsSupport attribute
 * ```javascript
 * // This example modifies the enableDnsSupport attribute. This attribute indicates whether DNS resolution is enabled for the VPC. If this attribute is true, the Amazon DNS server resolves DNS hostnames for instances in the VPC to their corresponding IP addresses; otherwise, it does not.
 * const input = {
 *   "EnableDnsSupport": {
 *     "Value": false
 *   },
 *   "VpcId": "vpc-a01106c2"
 * };
 * const command = new ModifyVpcAttributeCommand(input);
 * await client.send(command);
 * // example id: ec2-modify-vpc-attribute-1
 * ```
 *
 * @example To modify the enableDnsHostnames attribute
 * ```javascript
 * // This example modifies the enableDnsHostnames attribute. This attribute indicates whether instances launched in the VPC get DNS hostnames. If this attribute is true, instances in the VPC get DNS hostnames; otherwise, they do not.
 * const input = {
 *   "EnableDnsHostnames": {
 *     "Value": false
 *   },
 *   "VpcId": "vpc-a01106c2"
 * };
 * const command = new ModifyVpcAttributeCommand(input);
 * await client.send(command);
 * // example id: ec2-modify-vpc-attribute-2
 * ```
 *
 */
export class ModifyVpcAttributeCommand extends $Command<
  ModifyVpcAttributeCommandInput,
  ModifyVpcAttributeCommandOutput,
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
  constructor(readonly input: ModifyVpcAttributeCommandInput) {
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
  ): Handler<ModifyVpcAttributeCommandInput, ModifyVpcAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpcAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcAttributeCommand";
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
  private serialize(input: ModifyVpcAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyVpcAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVpcAttributeCommandOutput> {
    return de_ModifyVpcAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
