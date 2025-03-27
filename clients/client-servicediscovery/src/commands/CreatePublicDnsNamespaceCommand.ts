// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePublicDnsNamespaceRequest, CreatePublicDnsNamespaceResponse } from "../models/models_0";
import { de_CreatePublicDnsNamespaceCommand, se_CreatePublicDnsNamespaceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePublicDnsNamespaceCommand}.
 */
export interface CreatePublicDnsNamespaceCommandInput extends CreatePublicDnsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link CreatePublicDnsNamespaceCommand}.
 */
export interface CreatePublicDnsNamespaceCommandOutput extends CreatePublicDnsNamespaceResponse, __MetadataBearer {}

/**
 * <p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your
 *    service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service
 *     <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can
 *    discover instances that were registered with a public DNS namespace by using either a
 *     <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you
 *    can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 *          <important>
 *             <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US)
 *     Regions.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreatePublicDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreatePublicDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // CreatePublicDnsNamespaceRequest
 *   Name: "STRING_VALUE", // required
 *   CreatorRequestId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Properties: { // PublicDnsNamespaceProperties
 *     DnsProperties: { // PublicDnsPropertiesMutable
 *       SOA: { // SOA
 *         TTL: Number("long"), // required
 *       },
 *     },
 *   },
 * };
 * const command = new CreatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreatePublicDnsNamespaceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePublicDnsNamespaceCommandInput - {@link CreatePublicDnsNamespaceCommandInput}
 * @returns {@link CreatePublicDnsNamespaceCommandOutput}
 * @see {@link CreatePublicDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreatePublicDnsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *  <p>The operation is already in progress.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value
 *    might be outside the allowed range, or a string value might exceed length constraints.</p>
 *
 * @throws {@link NamespaceAlreadyExists} (client fault)
 *  <p>The namespace that you're trying to create already exists.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p>The resource can't be created because you've reached the quota on the number of resources.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The list of tags on the resource is over the quota. The maximum number of tags that can be applied to a
 *    resource is 50.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example CreatePublicDnsNamespace example
 * ```javascript
 * // This example creates a public namespace based on DNS.
 * const input = {
 *   CreatorRequestId: "example-creator-request-id-0003",
 *   Description: "Example.com AWS Cloud Map Public DNS Namespace",
 *   Name: "example-public-dns.com"
 * };
 * const command = new CreatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "dns2voqozuhfet5kzxoxg-a-response-example"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePublicDnsNamespaceCommand extends $Command
  .classBuilder<
    CreatePublicDnsNamespaceCommandInput,
    CreatePublicDnsNamespaceCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "CreatePublicDnsNamespace", {})
  .n("ServiceDiscoveryClient", "CreatePublicDnsNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_CreatePublicDnsNamespaceCommand)
  .de(de_CreatePublicDnsNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePublicDnsNamespaceRequest;
      output: CreatePublicDnsNamespaceResponse;
    };
    sdk: {
      input: CreatePublicDnsNamespaceCommandInput;
      output: CreatePublicDnsNamespaceCommandOutput;
    };
  };
}
