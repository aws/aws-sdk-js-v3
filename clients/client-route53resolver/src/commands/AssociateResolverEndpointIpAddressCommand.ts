// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateResolverEndpointIpAddressRequest,
  AssociateResolverEndpointIpAddressResponse,
} from "../models/models_0";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { AssociateResolverEndpointIpAddress } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateResolverEndpointIpAddressCommand}.
 */
export interface AssociateResolverEndpointIpAddressCommandInput extends AssociateResolverEndpointIpAddressRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResolverEndpointIpAddressCommand}.
 */
export interface AssociateResolverEndpointIpAddressCommandOutput
  extends AssociateResolverEndpointIpAddressResponse,
    __MetadataBearer {}

/**
 * <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address,
 * 			submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p>
 *          <p>To remove an IP address from an endpoint, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateResolverEndpointIpAddressCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateResolverEndpointIpAddressCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // AssociateResolverEndpointIpAddressRequest
 *   ResolverEndpointId: "STRING_VALUE", // required
 *   IpAddress: { // IpAddressUpdate
 *     IpId: "STRING_VALUE",
 *     SubnetId: "STRING_VALUE",
 *     Ip: "STRING_VALUE",
 *     Ipv6: "STRING_VALUE",
 *   },
 * };
 * const command = new AssociateResolverEndpointIpAddressCommand(input);
 * const response = await client.send(command);
 * // { // AssociateResolverEndpointIpAddressResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateResolverEndpointIpAddressCommandInput - {@link AssociateResolverEndpointIpAddressCommandInput}
 * @returns {@link AssociateResolverEndpointIpAddressCommandOutput}
 * @see {@link AssociateResolverEndpointIpAddressCommandInput} for command's `input` shape.
 * @see {@link AssociateResolverEndpointIpAddressCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request caused one or more limits to be exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource that you tried to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class AssociateResolverEndpointIpAddressCommand extends $Command
  .classBuilder<
    AssociateResolverEndpointIpAddressCommandInput,
    AssociateResolverEndpointIpAddressCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "AssociateResolverEndpointIpAddress", {})
  .n("Route53ResolverClient", "AssociateResolverEndpointIpAddressCommand")
  .sc(AssociateResolverEndpointIpAddress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateResolverEndpointIpAddressRequest;
      output: AssociateResolverEndpointIpAddressResponse;
    };
    sdk: {
      input: AssociateResolverEndpointIpAddressCommandInput;
      output: AssociateResolverEndpointIpAddressCommandOutput;
    };
  };
}
