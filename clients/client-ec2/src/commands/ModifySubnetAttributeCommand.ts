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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifySubnetAttributeRequest } from "../models/models_6";
import { de_ModifySubnetAttributeCommand, se_ModifySubnetAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifySubnetAttributeCommand}.
 */
export interface ModifySubnetAttributeCommandInput extends ModifySubnetAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifySubnetAttributeCommand}.
 */
export interface ModifySubnetAttributeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Modifies a subnet attribute. You can only modify one attribute at a time.</p>
 *          <p>Use this action to modify subnets on Amazon Web Services Outposts.</p>
 *          <ul>
 *             <li>
 *                <p>To modify a subnet on an Outpost rack, set both
 *                         <code>MapCustomerOwnedIpOnLaunch</code> and
 *                         <code>CustomerOwnedIpv4Pool</code>. These two parameters act as a single
 *                     attribute.</p>
 *             </li>
 *             <li>
 *                <p>To modify a subnet on an Outpost server, set either
 *                         <code>EnableLniAtDeviceIndex</code> or
 *                     <code>DisableLniAtDeviceIndex</code>.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about Amazon Web Services Outposts, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/outposts/latest/userguide/how-servers-work.html">Outpost servers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/outposts/latest/userguide/how-racks-work.html">Outpost racks</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySubnetAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySubnetAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifySubnetAttributeRequest
 *   AssignIpv6AddressOnCreation: { // AttributeBooleanValue
 *     Value: true || false,
 *   },
 *   MapPublicIpOnLaunch: {
 *     Value: true || false,
 *   },
 *   SubnetId: "STRING_VALUE", // required
 *   MapCustomerOwnedIpOnLaunch: {
 *     Value: true || false,
 *   },
 *   CustomerOwnedIpv4Pool: "STRING_VALUE",
 *   EnableDns64: {
 *     Value: true || false,
 *   },
 *   PrivateDnsHostnameTypeOnLaunch: "ip-name" || "resource-name",
 *   EnableResourceNameDnsARecordOnLaunch: {
 *     Value: true || false,
 *   },
 *   EnableResourceNameDnsAAAARecordOnLaunch: "<AttributeBooleanValue>",
 *   EnableLniAtDeviceIndex: Number("int"),
 *   DisableLniAtDeviceIndex: "<AttributeBooleanValue>",
 * };
 * const command = new ModifySubnetAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifySubnetAttributeCommandInput - {@link ModifySubnetAttributeCommandInput}
 * @returns {@link ModifySubnetAttributeCommandOutput}
 * @see {@link ModifySubnetAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifySubnetAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To change a subnet's public IP addressing behavior
 * ```javascript
 * // This example modifies the specified subnet so that all instances launched into this subnet are assigned a public IP address.
 * const input = {
 *   "MapPublicIpOnLaunch": {
 *     "Value": true
 *   },
 *   "SubnetId": "subnet-1a2b3c4d"
 * };
 * const command = new ModifySubnetAttributeCommand(input);
 * await client.send(command);
 * // example id: ec2-modify-subnet-attribute-1
 * ```
 *
 */
export class ModifySubnetAttributeCommand extends $Command<
  ModifySubnetAttributeCommandInput,
  ModifySubnetAttributeCommandOutput,
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
  constructor(readonly input: ModifySubnetAttributeCommandInput) {
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
  ): Handler<ModifySubnetAttributeCommandInput, ModifySubnetAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySubnetAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifySubnetAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifySubnetAttribute",
      },
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
  private serialize(input: ModifySubnetAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifySubnetAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySubnetAttributeCommandOutput> {
    return de_ModifySubnetAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
