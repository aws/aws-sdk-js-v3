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
import { DescribeClientVpnEndpointsRequest, DescribeClientVpnEndpointsResult } from "../models/models_3";
import { de_DescribeClientVpnEndpointsCommand, se_DescribeClientVpnEndpointsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientVpnEndpointsCommand}.
 */
export interface DescribeClientVpnEndpointsCommandInput extends DescribeClientVpnEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientVpnEndpointsCommand}.
 */
export interface DescribeClientVpnEndpointsCommandOutput extends DescribeClientVpnEndpointsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more Client VPN endpoints in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeClientVpnEndpointsRequest
 *   ClientVpnEndpointIds: [ // ClientVpnEndpointIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeClientVpnEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientVpnEndpointsResult
 * //   ClientVpnEndpoints: [ // EndpointSet
 * //     { // ClientVpnEndpoint
 * //       ClientVpnEndpointId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: { // ClientVpnEndpointStatus
 * //         Code: "pending-associate" || "available" || "deleting" || "deleted",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CreationTime: "STRING_VALUE",
 * //       DeletionTime: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       ClientCidrBlock: "STRING_VALUE",
 * //       DnsServers: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SplitTunnel: true || false,
 * //       VpnProtocol: "openvpn",
 * //       TransportProtocol: "tcp" || "udp",
 * //       VpnPort: Number("int"),
 * //       AssociatedTargetNetworks: [ // AssociatedTargetNetworkSet
 * //         { // AssociatedTargetNetwork
 * //           NetworkId: "STRING_VALUE",
 * //           NetworkType: "vpc",
 * //         },
 * //       ],
 * //       ServerCertificateArn: "STRING_VALUE",
 * //       AuthenticationOptions: [ // ClientVpnAuthenticationList
 * //         { // ClientVpnAuthentication
 * //           Type: "certificate-authentication" || "directory-service-authentication" || "federated-authentication",
 * //           ActiveDirectory: { // DirectoryServiceAuthentication
 * //             DirectoryId: "STRING_VALUE",
 * //           },
 * //           MutualAuthentication: { // CertificateAuthentication
 * //             ClientRootCertificateChain: "STRING_VALUE",
 * //           },
 * //           FederatedAuthentication: { // FederatedAuthentication
 * //             SamlProviderArn: "STRING_VALUE",
 * //             SelfServiceSamlProviderArn: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       ConnectionLogOptions: { // ConnectionLogResponseOptions
 * //         Enabled: true || false,
 * //         CloudwatchLogGroup: "STRING_VALUE",
 * //         CloudwatchLogStream: "STRING_VALUE",
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SecurityGroupIds: [ // ClientVpnSecurityGroupIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       SelfServicePortalUrl: "STRING_VALUE",
 * //       ClientConnectOptions: { // ClientConnectResponseOptions
 * //         Enabled: true || false,
 * //         LambdaFunctionArn: "STRING_VALUE",
 * //         Status: { // ClientVpnEndpointAttributeStatus
 * //           Code: "applying" || "applied",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //       SessionTimeoutHours: Number("int"),
 * //       ClientLoginBannerOptions: { // ClientLoginBannerResponseOptions
 * //         Enabled: true || false,
 * //         BannerText: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClientVpnEndpointsCommandInput - {@link DescribeClientVpnEndpointsCommandInput}
 * @returns {@link DescribeClientVpnEndpointsCommandOutput}
 * @see {@link DescribeClientVpnEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeClientVpnEndpointsCommand extends $Command<
  DescribeClientVpnEndpointsCommandInput,
  DescribeClientVpnEndpointsCommandOutput,
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
  constructor(readonly input: DescribeClientVpnEndpointsCommandInput) {
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
  ): Handler<DescribeClientVpnEndpointsCommandInput, DescribeClientVpnEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClientVpnEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClientVpnEndpointsCommand";
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
  private serialize(input: DescribeClientVpnEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClientVpnEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClientVpnEndpointsCommandOutput> {
    return de_DescribeClientVpnEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
