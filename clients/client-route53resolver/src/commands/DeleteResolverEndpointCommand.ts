// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteResolverEndpointRequest, DeleteResolverEndpointResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { DeleteResolverEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResolverEndpointCommand}.
 */
export interface DeleteResolverEndpointCommandInput extends DeleteResolverEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResolverEndpointCommand}.
 */
export interface DeleteResolverEndpointCommandOutput extends DeleteResolverEndpointResponse, __MetadataBearer {}

/**
 * <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound
 * 			Resolver endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Inbound</b>: DNS queries from your network are no longer routed
 * 				to the DNS service for the specified VPC.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // DeleteResolverEndpointRequest
 *   ResolverEndpointId: "STRING_VALUE", // required
 * };
 * const command = new DeleteResolverEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResolverEndpointResponse
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
 * @param DeleteResolverEndpointCommandInput - {@link DeleteResolverEndpointCommandInput}
 * @returns {@link DeleteResolverEndpointCommandOutput}
 * @see {@link DeleteResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteResolverEndpointCommandOutput} for command's `response` shape.
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
export class DeleteResolverEndpointCommand extends $Command
  .classBuilder<
    DeleteResolverEndpointCommandInput,
    DeleteResolverEndpointCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "DeleteResolverEndpoint", {})
  .n("Route53ResolverClient", "DeleteResolverEndpointCommand")
  .sc(DeleteResolverEndpoint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResolverEndpointRequest;
      output: DeleteResolverEndpointResponse;
    };
    sdk: {
      input: DeleteResolverEndpointCommandInput;
      output: DeleteResolverEndpointCommandOutput;
    };
  };
}
