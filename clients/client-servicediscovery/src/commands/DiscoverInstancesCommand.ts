// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DiscoverInstancesRequest, DiscoverInstancesResponse } from "../models/models_0";
import { de_DiscoverInstancesCommand, se_DiscoverInstancesCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DiscoverInstancesCommand}.
 */
export interface DiscoverInstancesCommandInput extends DiscoverInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DiscoverInstancesCommand}.
 */
export interface DiscoverInstancesCommandOutput extends DiscoverInstancesResponse, __MetadataBearer {}

/**
 * <p>Discovers registered instances for a specified namespace and service. You can use
 *     <code>DiscoverInstances</code> to discover instances for any type of namespace.
 *     <code>DiscoverInstances</code> returns a randomized list of instances allowing customers to
 *    distribute traffic evenly across instances. For public and private DNS namespaces, you can also
 *    use DNS queries to discover instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DiscoverInstancesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DiscoverInstancesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // DiscoverInstancesRequest
 *   NamespaceName: "STRING_VALUE", // required
 *   ServiceName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   QueryParameters: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   OptionalParameters: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   HealthStatus: "HEALTHY" || "UNHEALTHY" || "ALL" || "HEALTHY_OR_ELSE_ALL",
 *   OwnerAccount: "STRING_VALUE",
 * };
 * const command = new DiscoverInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DiscoverInstancesResponse
 * //   Instances: [ // HttpInstanceSummaryList
 * //     { // HttpInstanceSummary
 * //       InstanceId: "STRING_VALUE",
 * //       NamespaceName: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       HealthStatus: "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //       Attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   InstancesRevision: Number("long"),
 * // };
 *
 * ```
 *
 * @param DiscoverInstancesCommandInput - {@link DiscoverInstancesCommandInput}
 * @returns {@link DiscoverInstancesCommandOutput}
 * @see {@link DiscoverInstancesCommandInput} for command's `input` shape.
 * @see {@link DiscoverInstancesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link NamespaceNotFound} (client fault)
 *  <p>No namespace exists with the specified ID.</p>
 *
 * @throws {@link RequestLimitExceeded} (client fault)
 *  <p>The operation can't be completed because you've reached the quota for the number of
 *    requests. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/throttling.html">Cloud Map API request throttling quota</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example Example: Discover registered instances
 * ```javascript
 * // Example: Discover registered instances
 * const input = {
 *   HealthStatus: "ALL",
 *   MaxResults: 10,
 *   NamespaceName: "example.com",
 *   ServiceName: "myservice"
 * };
 * const command = new DiscoverInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Instances: [
 *     {
 *       Attributes: {
 *         AWS_INSTANCE_IPV4: "172.2.1.3",
 *         AWS_INSTANCE_PORT: "808"
 *       },
 *       HealthStatus: "UNKNOWN",
 *       InstanceId: "myservice-53",
 *       NamespaceName: "example.com",
 *       ServiceName: "myservice"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DiscoverInstancesCommand extends $Command
  .classBuilder<
    DiscoverInstancesCommandInput,
    DiscoverInstancesCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "DiscoverInstances", {})
  .n("ServiceDiscoveryClient", "DiscoverInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DiscoverInstancesCommand)
  .de(de_DiscoverInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DiscoverInstancesRequest;
      output: DiscoverInstancesResponse;
    };
    sdk: {
      input: DiscoverInstancesCommandInput;
      output: DiscoverInstancesCommandOutput;
    };
  };
}
