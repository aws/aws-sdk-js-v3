// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListResolverEndpointIpAddressesRequest,
  ListResolverEndpointIpAddressesResponse,
} from "../models/models_0";
import { ListResolverEndpointIpAddresses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListResolverEndpointIpAddressesCommandOutput extends ListResolverEndpointIpAddressesResponse, __MetadataBearer {}

/**
 * Gets the IP addresses for a specified Resolver endpoint.
 *
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
 * //       Status: "CREATING" || "FAILED_CREATION" || "FAILED_CREATION_INSUFFICIENT_EC2_CAPACITY_IN_OUTPOST" || "ATTACHING" || "ATTACHED" || "REMAP_DETACHING" || "REMAP_ATTACHING" || "DETACHING" || "FAILED_RESOURCE_GONE" || "DELETING" || "DELETE_FAILED_FAS_EXPIRED" || "UPDATING" || "UPDATE_FAILED" || "ISOLATED",
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
 *
 * We encountered an unknown error. Try again in a few minutes.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The value that you specified for `NextToken` in a `List` request isn't valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters in this request are not valid.
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
export class ListResolverEndpointIpAddressesCommand extends command<ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput>(
  _ep0,
  _mw0,
  "ListResolverEndpointIpAddresses",
  ListResolverEndpointIpAddresses$
) {
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
