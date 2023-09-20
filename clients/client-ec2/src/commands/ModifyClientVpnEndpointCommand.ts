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
import { ModifyClientVpnEndpointRequest, ModifyClientVpnEndpointResult } from "../models/models_6";
import { de_ModifyClientVpnEndpointCommand, se_ModifyClientVpnEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyClientVpnEndpointCommand}.
 */
export interface ModifyClientVpnEndpointCommandInput extends ModifyClientVpnEndpointRequest {}
/**
 * @public
 *
 * The output of {@link ModifyClientVpnEndpointCommand}.
 */
export interface ModifyClientVpnEndpointCommandOutput extends ModifyClientVpnEndpointResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified Client VPN endpoint. Modifying the DNS server resets existing client connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyClientVpnEndpointRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   ServerCertificateArn: "STRING_VALUE",
 *   ConnectionLogOptions: { // ConnectionLogOptions
 *     Enabled: true || false,
 *     CloudwatchLogGroup: "STRING_VALUE",
 *     CloudwatchLogStream: "STRING_VALUE",
 *   },
 *   DnsServers: { // DnsServersOptionsModifyStructure
 *     CustomDnsServers: [ // ValueStringList
 *       "STRING_VALUE",
 *     ],
 *     Enabled: true || false,
 *   },
 *   VpnPort: Number("int"),
 *   Description: "STRING_VALUE",
 *   SplitTunnel: true || false,
 *   DryRun: true || false,
 *   SecurityGroupIds: [ // ClientVpnSecurityGroupIdSet
 *     "STRING_VALUE",
 *   ],
 *   VpcId: "STRING_VALUE",
 *   SelfServicePortal: "enabled" || "disabled",
 *   ClientConnectOptions: { // ClientConnectOptions
 *     Enabled: true || false,
 *     LambdaFunctionArn: "STRING_VALUE",
 *   },
 *   SessionTimeoutHours: Number("int"),
 *   ClientLoginBannerOptions: { // ClientLoginBannerOptions
 *     Enabled: true || false,
 *     BannerText: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * // { // ModifyClientVpnEndpointResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyClientVpnEndpointCommandInput - {@link ModifyClientVpnEndpointCommandInput}
 * @returns {@link ModifyClientVpnEndpointCommandOutput}
 * @see {@link ModifyClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyClientVpnEndpointCommand extends $Command<
  ModifyClientVpnEndpointCommandInput,
  ModifyClientVpnEndpointCommandOutput,
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
  constructor(readonly input: ModifyClientVpnEndpointCommandInput) {
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
  ): Handler<ModifyClientVpnEndpointCommandInput, ModifyClientVpnEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyClientVpnEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyClientVpnEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyClientVpnEndpoint",
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
  private serialize(input: ModifyClientVpnEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyClientVpnEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClientVpnEndpointCommandOutput> {
    return de_ModifyClientVpnEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
