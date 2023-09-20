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
import {
  ModifyVpcEndpointServiceConfigurationRequest,
  ModifyVpcEndpointServiceConfigurationResult,
} from "../models/models_6";
import {
  de_ModifyVpcEndpointServiceConfigurationCommand,
  se_ModifyVpcEndpointServiceConfigurationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointServiceConfigurationCommand}.
 */
export interface ModifyVpcEndpointServiceConfigurationCommandInput
  extends ModifyVpcEndpointServiceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointServiceConfigurationCommand}.
 */
export interface ModifyVpcEndpointServiceConfigurationCommandOutput
  extends ModifyVpcEndpointServiceConfigurationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the attributes of your VPC endpoint service configuration. You can change the
 *             Network Load Balancers or Gateway Load Balancers for your service, and you can specify whether acceptance is
 *             required for requests to connect to your endpoint service through an interface VPC
 *             endpoint.</p>
 *          <p>If you set or modify the private DNS name, you must prove that you own the private DNS
 *             domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEndpointServiceConfigurationRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 *   PrivateDnsName: "STRING_VALUE",
 *   RemovePrivateDnsName: true || false,
 *   AcceptanceRequired: true || false,
 *   AddNetworkLoadBalancerArns: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   RemoveNetworkLoadBalancerArns: [
 *     "STRING_VALUE",
 *   ],
 *   AddGatewayLoadBalancerArns: [
 *     "STRING_VALUE",
 *   ],
 *   RemoveGatewayLoadBalancerArns: [
 *     "STRING_VALUE",
 *   ],
 *   AddSupportedIpAddressTypes: [
 *     "STRING_VALUE",
 *   ],
 *   RemoveSupportedIpAddressTypes: "<ValueStringList>",
 * };
 * const command = new ModifyVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEndpointServiceConfigurationResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyVpcEndpointServiceConfigurationCommandInput - {@link ModifyVpcEndpointServiceConfigurationCommandInput}
 * @returns {@link ModifyVpcEndpointServiceConfigurationCommandOutput}
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyVpcEndpointServiceConfigurationCommand extends $Command<
  ModifyVpcEndpointServiceConfigurationCommandInput,
  ModifyVpcEndpointServiceConfigurationCommandOutput,
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
  constructor(readonly input: ModifyVpcEndpointServiceConfigurationCommandInput) {
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
  ): Handler<ModifyVpcEndpointServiceConfigurationCommandInput, ModifyVpcEndpointServiceConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpcEndpointServiceConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointServiceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyVpcEndpointServiceConfiguration",
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
  private serialize(
    input: ModifyVpcEndpointServiceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyVpcEndpointServiceConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcEndpointServiceConfigurationCommandOutput> {
    return de_ModifyVpcEndpointServiceConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
