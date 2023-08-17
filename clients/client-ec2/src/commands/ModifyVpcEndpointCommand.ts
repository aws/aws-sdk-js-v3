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
import { ModifyVpcEndpointRequest, ModifyVpcEndpointResult } from "../models/models_6";
import { de_ModifyVpcEndpointCommand, se_ModifyVpcEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointCommand}.
 */
export interface ModifyVpcEndpointCommandInput extends ModifyVpcEndpointRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointCommand}.
 */
export interface ModifyVpcEndpointCommandOutput extends ModifyVpcEndpointResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies attributes of a specified VPC endpoint. The attributes that you can modify
 *             depend on the type of VPC endpoint (interface, gateway, or Gateway Load Balancer). For more information,
 *             see the <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/">Amazon Web Services PrivateLink
 *                 Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEndpointRequest
 *   DryRun: true || false,
 *   VpcEndpointId: "STRING_VALUE", // required
 *   ResetPolicy: true || false,
 *   PolicyDocument: "STRING_VALUE",
 *   AddRouteTableIds: [ // VpcEndpointRouteTableIdList
 *     "STRING_VALUE",
 *   ],
 *   RemoveRouteTableIds: [
 *     "STRING_VALUE",
 *   ],
 *   AddSubnetIds: [ // VpcEndpointSubnetIdList
 *     "STRING_VALUE",
 *   ],
 *   RemoveSubnetIds: [
 *     "STRING_VALUE",
 *   ],
 *   AddSecurityGroupIds: [ // VpcEndpointSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   RemoveSecurityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   IpAddressType: "ipv4" || "dualstack" || "ipv6",
 *   DnsOptions: { // DnsOptionsSpecification
 *     DnsRecordIpType: "ipv4" || "dualstack" || "ipv6" || "service-defined",
 *     PrivateDnsOnlyForInboundResolverEndpoint: true || false,
 *   },
 *   PrivateDnsEnabled: true || false,
 *   SubnetConfigurations: [ // SubnetConfigurationsList
 *     { // SubnetConfiguration
 *       SubnetId: "STRING_VALUE",
 *       Ipv4: "STRING_VALUE",
 *       Ipv6: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyVpcEndpointCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEndpointResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyVpcEndpointCommandInput - {@link ModifyVpcEndpointCommandInput}
 * @returns {@link ModifyVpcEndpointCommandOutput}
 * @see {@link ModifyVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyVpcEndpointCommand extends $Command<
  ModifyVpcEndpointCommandInput,
  ModifyVpcEndpointCommandOutput,
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
  constructor(readonly input: ModifyVpcEndpointCommandInput) {
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
  ): Handler<ModifyVpcEndpointCommandInput, ModifyVpcEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpcEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointCommand";
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
  private serialize(input: ModifyVpcEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyVpcEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVpcEndpointCommandOutput> {
    return de_ModifyVpcEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
