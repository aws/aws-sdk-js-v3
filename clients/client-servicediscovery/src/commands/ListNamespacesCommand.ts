// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListNamespacesRequest, ListNamespacesResponse } from "../models/models_0";
import { de_ListNamespacesCommand, se_ListNamespacesCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNamespacesCommand}.
 */
export interface ListNamespacesCommandInput extends ListNamespacesRequest {}
/**
 * @public
 *
 * The output of {@link ListNamespacesCommand}.
 */
export interface ListNamespacesCommandOutput extends ListNamespacesResponse, __MetadataBearer {}

/**
 * <p>Lists summary information about the namespaces that were created by the current Amazon Web Services account and shared with the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, ListNamespacesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, ListNamespacesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // ListNamespacesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // NamespaceFilters
 *     { // NamespaceFilter
 *       Name: "TYPE" || "NAME" || "HTTP_NAME" || "RESOURCE_OWNER", // required
 *       Values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Condition: "EQ" || "IN" || "BETWEEN" || "BEGINS_WITH",
 *     },
 *   ],
 * };
 * const command = new ListNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListNamespacesResponse
 * //   Namespaces: [ // NamespaceSummariesList
 * //     { // NamespaceSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       ResourceOwner: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "DNS_PUBLIC" || "DNS_PRIVATE" || "HTTP",
 * //       Description: "STRING_VALUE",
 * //       ServiceCount: Number("int"),
 * //       Properties: { // NamespaceProperties
 * //         DnsProperties: { // DnsProperties
 * //           HostedZoneId: "STRING_VALUE",
 * //           SOA: { // SOA
 * //             TTL: Number("long"), // required
 * //           },
 * //         },
 * //         HttpProperties: { // HttpProperties
 * //           HttpName: "STRING_VALUE",
 * //         },
 * //       },
 * //       CreateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNamespacesCommandInput - {@link ListNamespacesCommandInput}
 * @returns {@link ListNamespacesCommandOutput}
 * @see {@link ListNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListNamespacesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example Example: List namespaces
 * ```javascript
 * // Example: List namespaces
 * const input = { /* empty *\/ };
 * const command = new ListNamespacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Namespaces: [
 *     {
 *       Arn: "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-a3ccy2e7e3a7rile",
 *       CreateDate: 1.585354387357E9,
 *       Id: "ns-a3ccy2e7e3a7rile",
 *       Name: "local",
 *       Properties: {
 *         DnsProperties: {
 *           HostedZoneId: "Z06752353VBUDTC32S84S"
 *         },
 *         HttpProperties: {
 *           HttpName: "local"
 *         }
 *       },
 *       Type: "DNS_PRIVATE"
 *     },
 *     {
 *       Arn: "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-pocfyjtrsmwtvcxx",
 *       CreateDate: 1.586468974698E9,
 *       Description: "My second namespace",
 *       Id: "ns-pocfyjtrsmwtvcxx",
 *       Name: "My-second-namespace",
 *       Properties: {
 *         DnsProperties:         { /* empty *\/ },
 *         HttpProperties: {
 *           HttpName: "My-second-namespace"
 *         }
 *       },
 *       Type: "HTTP"
 *     },
 *     {
 *       Arn: "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-ylexjili4cdxy3xm",
 *       CreateDate: 1.587055896798E9,
 *       Id: "ns-ylexjili4cdxy3xm",
 *       Name: "example.com",
 *       Properties: {
 *         DnsProperties: {
 *           HostedZoneId: "Z09983722P0QME1B3KC8I"
 *         },
 *         HttpProperties: {
 *           HttpName: "example.com"
 *         }
 *       },
 *       Type: "DNS_PRIVATE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNamespacesCommand extends $Command
  .classBuilder<
    ListNamespacesCommandInput,
    ListNamespacesCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53AutoNaming_v20170314", "ListNamespaces", {})
  .n("ServiceDiscoveryClient", "ListNamespacesCommand")
  .f(void 0, void 0)
  .ser(se_ListNamespacesCommand)
  .de(de_ListNamespacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNamespacesRequest;
      output: ListNamespacesResponse;
    };
    sdk: {
      input: ListNamespacesCommandInput;
      output: ListNamespacesCommandOutput;
    };
  };
}
