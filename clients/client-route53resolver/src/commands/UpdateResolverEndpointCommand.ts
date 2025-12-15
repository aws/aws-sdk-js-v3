// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateResolverEndpointRequest, UpdateResolverEndpointResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { UpdateResolverEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResolverEndpointCommand}.
 */
export interface UpdateResolverEndpointCommandInput extends UpdateResolverEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResolverEndpointCommand}.
 */
export interface UpdateResolverEndpointCommandOutput extends UpdateResolverEndpointResponse, __MetadataBearer {}

/**
 * <p>Updates the name, or endpoint type for an inbound or an outbound Resolver endpoint.
 * 			You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // UpdateResolverEndpointRequest
 *   ResolverEndpointId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   ResolverEndpointType: "IPV6" || "IPV4" || "DUALSTACK",
 *   UpdateIpAddresses: [ // UpdateIpAddresses
 *     { // UpdateIpAddress
 *       IpId: "STRING_VALUE", // required
 *       Ipv6: "STRING_VALUE", // required
 *     },
 *   ],
 *   Protocols: [ // ProtocolList
 *     "DoH" || "Do53" || "DoH-FIPS",
 *   ],
 *   RniEnhancedMetricsEnabled: true || false,
 *   TargetNameServerMetricsEnabled: true || false,
 * };
 * const command = new UpdateResolverEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResolverEndpointResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateResolverEndpointCommandInput - {@link UpdateResolverEndpointCommandInput}
 * @returns {@link UpdateResolverEndpointCommandOutput}
 * @see {@link UpdateResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
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
export class UpdateResolverEndpointCommand extends $Command
  .classBuilder<
    UpdateResolverEndpointCommandInput,
    UpdateResolverEndpointCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "UpdateResolverEndpoint", {})
  .n("Route53ResolverClient", "UpdateResolverEndpointCommand")
  .sc(UpdateResolverEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResolverEndpointRequest;
      output: UpdateResolverEndpointResponse;
    };
    sdk: {
      input: UpdateResolverEndpointCommandInput;
      output: UpdateResolverEndpointCommandOutput;
    };
  };
}
