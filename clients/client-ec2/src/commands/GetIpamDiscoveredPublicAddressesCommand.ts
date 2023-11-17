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
import { GetIpamDiscoveredPublicAddressesRequest, GetIpamDiscoveredPublicAddressesResult } from "../models/models_5";
import {
  de_GetIpamDiscoveredPublicAddressesCommand,
  se_GetIpamDiscoveredPublicAddressesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIpamDiscoveredPublicAddressesCommand}.
 */
export interface GetIpamDiscoveredPublicAddressesCommandInput extends GetIpamDiscoveredPublicAddressesRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamDiscoveredPublicAddressesCommand}.
 */
export interface GetIpamDiscoveredPublicAddressesCommandOutput
  extends GetIpamDiscoveredPublicAddressesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the public IP addresses that have been discovered by IPAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamDiscoveredPublicAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamDiscoveredPublicAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetIpamDiscoveredPublicAddressesRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryId: "STRING_VALUE", // required
 *   AddressRegion: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetIpamDiscoveredPublicAddressesCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamDiscoveredPublicAddressesResult
 * //   IpamDiscoveredPublicAddresses: [ // IpamDiscoveredPublicAddressSet
 * //     { // IpamDiscoveredPublicAddress
 * //       IpamResourceDiscoveryId: "STRING_VALUE",
 * //       AddressRegion: "STRING_VALUE",
 * //       Address: "STRING_VALUE",
 * //       AddressOwnerId: "STRING_VALUE",
 * //       AddressAllocationId: "STRING_VALUE",
 * //       AssociationStatus: "associated" || "disassociated",
 * //       AddressType: "service-managed-ip" || "service-managed-byoip" || "amazon-owned-eip" || "byoip" || "ec2-public-ip",
 * //       Service: "nat-gateway" || "database-migration-service" || "redshift" || "elastic-container-service" || "relational-database-service" || "site-to-site-vpn" || "load-balancer" || "global-accelerator" || "other",
 * //       ServiceResource: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       PublicIpv4PoolId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       NetworkInterfaceDescription: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       Tags: { // IpamPublicAddressTags
 * //         EipTags: [ // IpamPublicAddressTagList
 * //           { // IpamPublicAddressTag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       NetworkBorderGroup: "STRING_VALUE",
 * //       SecurityGroups: [ // IpamPublicAddressSecurityGroupList
 * //         { // IpamPublicAddressSecurityGroup
 * //           GroupName: "STRING_VALUE",
 * //           GroupId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SampleTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   OldestSampleTime: new Date("TIMESTAMP"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamDiscoveredPublicAddressesCommandInput - {@link GetIpamDiscoveredPublicAddressesCommandInput}
 * @returns {@link GetIpamDiscoveredPublicAddressesCommandOutput}
 * @see {@link GetIpamDiscoveredPublicAddressesCommandInput} for command's `input` shape.
 * @see {@link GetIpamDiscoveredPublicAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetIpamDiscoveredPublicAddressesCommand extends $Command<
  GetIpamDiscoveredPublicAddressesCommandInput,
  GetIpamDiscoveredPublicAddressesCommandOutput,
  EC2ClientResolvedConfig
> {
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
  constructor(readonly input: GetIpamDiscoveredPublicAddressesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIpamDiscoveredPublicAddressesCommandInput, GetIpamDiscoveredPublicAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIpamDiscoveredPublicAddressesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetIpamDiscoveredPublicAddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetIpamDiscoveredPublicAddresses",
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
    input: GetIpamDiscoveredPublicAddressesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetIpamDiscoveredPublicAddressesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIpamDiscoveredPublicAddressesCommandOutput> {
    return de_GetIpamDiscoveredPublicAddressesCommand(output, context);
  }
}
