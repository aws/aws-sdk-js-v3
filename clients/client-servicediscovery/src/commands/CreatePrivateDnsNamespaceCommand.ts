// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePrivateDnsNamespaceRequest, CreatePrivateDnsNamespaceResponse } from "../models/models_0";
import { CreatePrivateDnsNamespace$ } from "../schemas/schemas_0";
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
 * The input for {@link CreatePrivateDnsNamespaceCommand}.
 */
export interface CreatePrivateDnsNamespaceCommandInput extends CreatePrivateDnsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link CreatePrivateDnsNamespaceCommand}.
 */
export interface CreatePrivateDnsNamespaceCommandOutput extends CreatePrivateDnsNamespaceResponse, __MetadataBearer {}

/**
 * <p>Creates a private namespace based on DNS, which is visible only inside a specified Amazon
 *    VPC. The namespace defines your service naming scheme. For example, if you name your namespace
 *     <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for
 *    the service is <code>backend.example.com</code>. Service instances that are registered using a
 *    private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or
 *    using DNS. For the current quota on the number of namespaces that you can create using the same
 *     Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreatePrivateDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreatePrivateDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // CreatePrivateDnsNamespaceRequest
 *   Name: "STRING_VALUE", // required
 *   CreatorRequestId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Vpc: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Properties: { // PrivateDnsNamespaceProperties
 *     DnsProperties: { // PrivateDnsPropertiesMutable
 *       SOA: { // SOA
 *         TTL: Number("long"), // required
 *       },
 *     },
 *   },
 * };
 * const command = new CreatePrivateDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreatePrivateDnsNamespaceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePrivateDnsNamespaceCommandInput - {@link CreatePrivateDnsNamespaceCommandInput}
 * @returns {@link CreatePrivateDnsNamespaceCommandOutput}
 * @see {@link CreatePrivateDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateDnsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *  <p>The operation is already in progress.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link NamespaceAlreadyExists} (client fault)
 *  <p>The namespace that you're trying to create already exists.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p>The resource can't be created because you've reached the quota on the number of
 *    resources.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The list of tags on the resource is over the quota. The maximum number of tags that can be
 *    applied to a resource is 50.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example Example: Create private DNS namespace
 * ```javascript
 * // Example: Create private DNS namespace
 * const input = {
 *   CreatorRequestId: "eedd6892-50f3-41b2-8af9-611d6e1d1a8c",
 *   Name: "example.com",
 *   Vpc: "vpc-1c56417b"
 * };
 * const command = new CreatePrivateDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePrivateDnsNamespaceCommand extends $Command
  .classBuilder<
    CreatePrivateDnsNamespaceCommandInput,
    CreatePrivateDnsNamespaceCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53AutoNaming_v20170314", "CreatePrivateDnsNamespace", {})
  .n("ServiceDiscoveryClient", "CreatePrivateDnsNamespaceCommand")
  .sc(CreatePrivateDnsNamespace$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePrivateDnsNamespaceRequest;
      output: CreatePrivateDnsNamespaceResponse;
    };
    sdk: {
      input: CreatePrivateDnsNamespaceCommandInput;
      output: CreatePrivateDnsNamespaceCommandOutput;
    };
  };
}
