// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateResolverEndpointIpAddressRequest,
  DisassociateResolverEndpointIpAddressResponse,
} from "../models/models_0";
import {
  de_DisassociateResolverEndpointIpAddressCommand,
  se_DisassociateResolverEndpointIpAddressCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateResolverEndpointIpAddressCommand}.
 */
export interface DisassociateResolverEndpointIpAddressCommandInput
  extends DisassociateResolverEndpointIpAddressRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateResolverEndpointIpAddressCommand}.
 */
export interface DisassociateResolverEndpointIpAddressCommandOutput
  extends DisassociateResolverEndpointIpAddressResponse,
    __MetadataBearer {}

/**
 * <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address,
 * 			submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p>
 *          <p>To add an IP address to an endpoint, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverEndpointIpAddressCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverEndpointIpAddressCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
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
 * //     Direction: "INBOUND" || "OUTBOUND",
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
 * @param DisassociateResolverEndpointIpAddressCommandInput - {@link DisassociateResolverEndpointIpAddressCommandInput}
 * @returns {@link DisassociateResolverEndpointIpAddressCommandOutput}
 * @see {@link DisassociateResolverEndpointIpAddressCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverEndpointIpAddressCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisassociateResolverEndpointIpAddressCommand extends $Command
  .classBuilder<
    DisassociateResolverEndpointIpAddressCommandInput,
    DisassociateResolverEndpointIpAddressCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "DisassociateResolverEndpointIpAddress", {})
  .n("Route53ResolverClient", "DisassociateResolverEndpointIpAddressCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateResolverEndpointIpAddressCommand)
  .de(de_DisassociateResolverEndpointIpAddressCommand)
  .build() {}
