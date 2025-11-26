// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInstancesRequest, ListInstancesResponse } from "../models/models_0";
import { ListInstances } from "../schemas/schemas_0";
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
 * The input for {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandInput extends ListInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandOutput extends ListInstancesResponse, __MetadataBearer {}

/**
 * <p>Lists summary information about the instances that you registered by using a specified
 *    service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, ListInstancesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, ListInstancesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // ListInstancesRequest
 *   ServiceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListInstancesResponse
 * //   ResourceOwner: "STRING_VALUE",
 * //   Instances: [ // InstanceSummaryList
 * //     { // InstanceSummary
 * //       Id: "STRING_VALUE",
 * //       Attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreatedByAccount: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstancesCommandInput - {@link ListInstancesCommandInput}
 * @returns {@link ListInstancesCommandOutput}
 * @see {@link ListInstancesCommandInput} for command's `input` shape.
 * @see {@link ListInstancesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example Example: List service instances
 * ```javascript
 * // Example: List service instances
 * const input = {
 *   ServiceId: "srv-qzpwvt2tfqcegapy"
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Instances: [
 *     {
 *       Attributes: {
 *         AWS_INSTANCE_IPV4: "172.2.1.3",
 *         AWS_INSTANCE_PORT: "808"
 *       },
 *       Id: "i-06bdabbae60f65a4e"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List instances using service ARN for shared namespace
 * ```javascript
 * // This example lists instances using a service ARN instead of service ID. This is useful for listing instances associated with shared namespaces.
 * const input = {
 *   ServiceId: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-e4anhexample0004"
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Instances: [
 *     {
 *       Attributes: {
 *         AWS_INSTANCE_IPV4: "192.0.2.44",
 *         AWS_INSTANCE_PORT: "80"
 *       },
 *       Id: "i-abcd1234"
 *     }
 *   ],
 *   ResourceOwner: "123456789012"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListInstancesCommand extends $Command
  .classBuilder<
    ListInstancesCommandInput,
    ListInstancesCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53AutoNaming_v20170314", "ListInstances", {})
  .n("ServiceDiscoveryClient", "ListInstancesCommand")
  .sc(ListInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstancesRequest;
      output: ListInstancesResponse;
    };
    sdk: {
      input: ListInstancesCommandInput;
      output: ListInstancesCommandOutput;
    };
  };
}
