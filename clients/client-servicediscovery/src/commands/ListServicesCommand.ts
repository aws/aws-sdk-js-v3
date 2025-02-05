// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListServicesRequest, ListServicesResponse } from "../models/models_0";
import { de_ListServicesCommand, se_ListServicesCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicesCommand}.
 */
export interface ListServicesCommandInput extends ListServicesRequest {}
/**
 * @public
 *
 * The output of {@link ListServicesCommand}.
 */
export interface ListServicesCommandOutput extends ListServicesResponse, __MetadataBearer {}

/**
 * <p>Lists summary information for all the services that are associated with one or more
 *    namespaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, ListServicesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, ListServicesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // ListServicesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // ServiceFilters
 *     { // ServiceFilter
 *       Name: "NAMESPACE_ID", // required
 *       Values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Condition: "EQ" || "IN" || "BETWEEN" || "BEGINS_WITH",
 *     },
 *   ],
 * };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesResponse
 * //   Services: [ // ServiceSummariesList
 * //     { // ServiceSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "HTTP" || "DNS_HTTP" || "DNS",
 * //       Description: "STRING_VALUE",
 * //       InstanceCount: Number("int"),
 * //       DnsConfig: { // DnsConfig
 * //         NamespaceId: "STRING_VALUE",
 * //         RoutingPolicy: "MULTIVALUE" || "WEIGHTED",
 * //         DnsRecords: [ // DnsRecordList // required
 * //           { // DnsRecord
 * //             Type: "SRV" || "A" || "AAAA" || "CNAME", // required
 * //             TTL: Number("long"), // required
 * //           },
 * //         ],
 * //       },
 * //       HealthCheckConfig: { // HealthCheckConfig
 * //         Type: "HTTP" || "HTTPS" || "TCP", // required
 * //         ResourcePath: "STRING_VALUE",
 * //         FailureThreshold: Number("int"),
 * //       },
 * //       HealthCheckCustomConfig: { // HealthCheckCustomConfig
 * //         FailureThreshold: Number("int"),
 * //       },
 * //       CreateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServicesCommandInput - {@link ListServicesCommandInput}
 * @returns {@link ListServicesCommandOutput}
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value
 *    might be outside the allowed range, or a string value might exceed length constraints.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 * @public
 * @example Example: List services
 * ```javascript
 * // Example: List services
 * const input = {};
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Services": [
 *     {
 *       "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-p5zdwlg5uvvzjita",
 *       "CreateDate": 1587081768.334,
 *       "DnsConfig": {
 *         "DnsRecords": [
 *           {
 *             "TTL": 60,
 *             "Type": "A"
 *           }
 *         ],
 *         "RoutingPolicy": "MULTIVALUE"
 *       },
 *       "Id": "srv-p5zdwlg5uvvzjita",
 *       "Name": "myservice"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-list-services-1587236889840
 * ```
 *
 */
export class ListServicesCommand extends $Command
  .classBuilder<
    ListServicesCommandInput,
    ListServicesCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "ListServices", {})
  .n("ServiceDiscoveryClient", "ListServicesCommand")
  .f(void 0, void 0)
  .ser(se_ListServicesCommand)
  .de(de_ListServicesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicesRequest;
      output: ListServicesResponse;
    };
    sdk: {
      input: ListServicesCommandInput;
      output: ListServicesCommandOutput;
    };
  };
}
