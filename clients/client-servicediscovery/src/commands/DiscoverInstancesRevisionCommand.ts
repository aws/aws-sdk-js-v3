// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DiscoverInstancesRevisionRequest, DiscoverInstancesRevisionResponse } from "../models/models_0";
import { DiscoverInstancesRevision$ } from "../schemas/schemas_0";
import type {
  ServiceDiscoveryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DiscoverInstancesRevisionCommand}.
 */
export interface DiscoverInstancesRevisionCommandInput extends DiscoverInstancesRevisionRequest {}
/**
 * @public
 *
 * The output of {@link DiscoverInstancesRevisionCommand}.
 */
export interface DiscoverInstancesRevisionCommandOutput extends DiscoverInstancesRevisionResponse, __MetadataBearer {}

/**
 * <p>Discovers the increasing revision associated with an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DiscoverInstancesRevisionCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DiscoverInstancesRevisionCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // DiscoverInstancesRevisionRequest
 *   NamespaceName: "STRING_VALUE", // required
 *   ServiceName: "STRING_VALUE", // required
 *   OwnerAccount: "STRING_VALUE",
 * };
 * const command = new DiscoverInstancesRevisionCommand(input);
 * const response = await client.send(command);
 * // { // DiscoverInstancesRevisionResponse
 * //   InstancesRevision: Number("long"),
 * // };
 *
 * ```
 *
 * @param DiscoverInstancesRevisionCommandInput - {@link DiscoverInstancesRevisionCommandInput}
 * @returns {@link DiscoverInstancesRevisionCommandOutput}
 * @see {@link DiscoverInstancesRevisionCommandInput} for command's `input` shape.
 * @see {@link DiscoverInstancesRevisionCommandOutput} for command's `response` shape.
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
 * @example Discover instances revision using owner account
 * ```javascript
 * // Discovers the instances revision in a shared namespace by specifying the OwnerAccount parameter, useful when working with shared namespaces.
 * const input = {
 *   NamespaceName: "example-shared-namespace",
 *   OwnerAccount: "123456789012",
 *   ServiceName: "shared-service"
 * };
 * const command = new DiscoverInstancesRevisionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstancesRevision: 1001
 * }
 * *\/
 * ```
 *
 * @example To discover the revision for a registered instance
 * ```javascript
 * // The following example discovers the revision ID for a registered instance.
 * const input = {
 *   NamespaceName: "example-namespace",
 *   ServiceName: "example-service"
 * };
 * const command = new DiscoverInstancesRevisionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstancesRevision: 123456
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DiscoverInstancesRevisionCommand extends $Command
  .classBuilder<
    DiscoverInstancesRevisionCommandInput,
    DiscoverInstancesRevisionCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53AutoNaming_v20170314", "DiscoverInstancesRevision", {})
  .n("ServiceDiscoveryClient", "DiscoverInstancesRevisionCommand")
  .sc(DiscoverInstancesRevision$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DiscoverInstancesRevisionRequest;
      output: DiscoverInstancesRevisionResponse;
    };
    sdk: {
      input: DiscoverInstancesRevisionCommandInput;
      output: DiscoverInstancesRevisionCommandOutput;
    };
  };
}
