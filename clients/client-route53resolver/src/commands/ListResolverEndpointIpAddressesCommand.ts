// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResolverEndpointIpAddressesRequest, ListResolverEndpointIpAddressesResponse } from "../models/models_0";
import {
  de_ListResolverEndpointIpAddressesCommand,
  se_ListResolverEndpointIpAddressesCommand,
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
 * The input for {@link ListResolverEndpointIpAddressesCommand}.
 */
export interface ListResolverEndpointIpAddressesCommandInput extends ListResolverEndpointIpAddressesRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverEndpointIpAddressesCommand}.
 */
export interface ListResolverEndpointIpAddressesCommandOutput
  extends ListResolverEndpointIpAddressesResponse,
    __MetadataBearer {}

/**
 * <p>Gets the IP addresses for a specified Resolver endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverEndpointIpAddressesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverEndpointIpAddressesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverEndpointIpAddressesRequest
 *   ResolverEndpointId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResolverEndpointIpAddressesCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverEndpointIpAddressesResponse
 * //   NextToken: "STRING_VALUE",
 * //   MaxResults: Number("int"),
 * //   IpAddresses: [ // IpAddressesResponse
 * //     { // IpAddressResponse
 * //       IpId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       Ip: "STRING_VALUE",
 * //       Ipv6: "STRING_VALUE",
 * //       Status: "CREATING" || "FAILED_CREATION" || "ATTACHING" || "ATTACHED" || "REMAP_DETACHING" || "REMAP_ATTACHING" || "DETACHING" || "FAILED_RESOURCE_GONE" || "DELETING" || "DELETE_FAILED_FAS_EXPIRED" || "UPDATING" || "UPDATE_FAILED" || "ISOLATED",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       ModificationTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverEndpointIpAddressesCommandInput - {@link ListResolverEndpointIpAddressesCommandInput}
 * @returns {@link ListResolverEndpointIpAddressesCommandOutput}
 * @see {@link ListResolverEndpointIpAddressesCommandInput} for command's `input` shape.
 * @see {@link ListResolverEndpointIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
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
export class ListResolverEndpointIpAddressesCommand extends $Command
  .classBuilder<
    ListResolverEndpointIpAddressesCommandInput,
    ListResolverEndpointIpAddressesCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "ListResolverEndpointIpAddresses", {})
  .n("Route53ResolverClient", "ListResolverEndpointIpAddressesCommand")
  .f(void 0, void 0)
  .ser(se_ListResolverEndpointIpAddressesCommand)
  .de(de_ListResolverEndpointIpAddressesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResolverEndpointIpAddressesRequest;
      output: ListResolverEndpointIpAddressesResponse;
    };
    sdk: {
      input: ListResolverEndpointIpAddressesCommandInput;
      output: ListResolverEndpointIpAddressesCommandOutput;
    };
  };
}
