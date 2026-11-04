// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateResolverEndpointIpAddressRequest,
  DisassociateResolverEndpointIpAddressResponse,
} from "../models/models_0";
import { DisassociateResolverEndpointIpAddress$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateResolverEndpointIpAddressCommand}.
 */
export interface DisassociateResolverEndpointIpAddressCommandInput extends DisassociateResolverEndpointIpAddressRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateResolverEndpointIpAddressCommand}.
 */
export interface DisassociateResolverEndpointIpAddressCommandOutput extends DisassociateResolverEndpointIpAddressResponse, __MetadataBearer {}

/**
 * Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one `DisassociateResolverEndpointIpAddress` request for each IP address.
 *
 * To add an IP address to an endpoint, see [AssociateResolverEndpointIpAddress](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverEndpointIpAddressCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverEndpointIpAddressCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // DisassociateResolverEndpointIpAddressRequest
 *   ResolverEndpointId: "STRING_VALUE", // required
 *   IpAddress: { // IpAddressUpdate
 *     IpId: "STRING_VALUE",
 *     SubnetId: "STRING_VALUE",
 *     Ip: "STRING_VALUE",
 *     Ipv6: "STRING_VALUE",
 *   },
 * };
 * const command = new DisassociateResolverEndpointIpAddressCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateResolverEndpointIpAddressResponse
 * //   ResolverEndpoint: { // ResolverEndpoint
 * //     Id: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     SecurityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     Direction: "INBOUND" || "OUTBOUND" || "INBOUND_DELEGATION",
 * //     IpAddressCount: Number("int"),
 * //     HostVPCId: "STRING_VALUE",
 * //     Status: "CREATING" || "OPERATIONAL" || "UPDATING" || "AUTO_RECOVERING" || "ACTION_NEEDED" || "DELETING",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     PreferredInstanceType: "STRING_VALUE",
 * //     ResolverEndpointType: "IPV6" || "IPV4" || "DUALSTACK",
 * //     Protocols: [ // ProtocolList
 * //       "DoH" || "Do53" || "DoH-FIPS",
 * //     ],
 * //     RniEnhancedMetricsEnabled: true || false,
 * //     TargetNameServerMetricsEnabled: true || false,
 * //     Dns64Enabled: true || false,
 * //     Ipv6InternetAccessEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateResolverEndpointIpAddressCommandInput - {@link DisassociateResolverEndpointIpAddressCommandInput}
 * @returns {@link DisassociateResolverEndpointIpAddressCommandOutput}
 * @see {@link DisassociateResolverEndpointIpAddressCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverEndpointIpAddressCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *
 * We encountered an unknown error. Try again in a few minutes.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters in this request are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource that you tried to create already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled. Try again in a few minutes.
 *
 * @throws {@link Route53ResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53Resolver service.
 *
 * @public
 */
export class DisassociateResolverEndpointIpAddressCommand extends command<DisassociateResolverEndpointIpAddressCommandInput, DisassociateResolverEndpointIpAddressCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateResolverEndpointIpAddress",
  DisassociateResolverEndpointIpAddress$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateResolverEndpointIpAddressRequest;
      output: DisassociateResolverEndpointIpAddressResponse;
    };
    sdk: {
      input: DisassociateResolverEndpointIpAddressCommandInput;
      output: DisassociateResolverEndpointIpAddressCommandOutput;
    };
  };
}
