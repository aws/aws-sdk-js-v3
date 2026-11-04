// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResolverEndpointsRequest, ListResolverEndpointsResponse } from "../models/models_0";
import { ListResolverEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResolverEndpointsCommand}.
 */
export interface ListResolverEndpointsCommandInput extends ListResolverEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverEndpointsCommand}.
 */
export interface ListResolverEndpointsCommandOutput extends ListResolverEndpointsResponse, __MetadataBearer {}

/**
 * Lists all the Resolver endpoints that were created using the current Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverEndpointsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverEndpointsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverEndpointsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListResolverEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverEndpointsResponse
 * //   NextToken: "STRING_VALUE",
 * //   MaxResults: Number("int"),
 * //   ResolverEndpoints: [ // ResolverEndpoints
 * //     { // ResolverEndpoint
 * //       Id: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       SecurityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //       Direction: "INBOUND" || "OUTBOUND" || "INBOUND_DELEGATION",
 * //       IpAddressCount: Number("int"),
 * //       HostVPCId: "STRING_VALUE",
 * //       Status: "CREATING" || "OPERATIONAL" || "UPDATING" || "AUTO_RECOVERING" || "ACTION_NEEDED" || "DELETING",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       ModificationTime: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       PreferredInstanceType: "STRING_VALUE",
 * //       ResolverEndpointType: "IPV6" || "IPV4" || "DUALSTACK",
 * //       Protocols: [ // ProtocolList
 * //         "DoH" || "Do53" || "DoH-FIPS",
 * //       ],
 * //       RniEnhancedMetricsEnabled: true || false,
 * //       TargetNameServerMetricsEnabled: true || false,
 * //       Dns64Enabled: true || false,
 * //       Ipv6InternetAccessEnabled: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverEndpointsCommandInput - {@link ListResolverEndpointsCommandInput}
 * @returns {@link ListResolverEndpointsCommandOutput}
 * @see {@link ListResolverEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListResolverEndpointsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
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
export class ListResolverEndpointsCommand extends command<ListResolverEndpointsCommandInput, ListResolverEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListResolverEndpoints",
  ListResolverEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResolverEndpointsRequest;
      output: ListResolverEndpointsResponse;
    };
    sdk: {
      input: ListResolverEndpointsCommandInput;
      output: ListResolverEndpointsCommandOutput;
    };
  };
}
