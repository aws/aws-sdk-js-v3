// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHttpNamespaceRequest, CreateHttpNamespaceResponse } from "../models/models_0";
import { de_CreateHttpNamespaceCommand, se_CreateHttpNamespaceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHttpNamespaceCommand}.
 */
export interface CreateHttpNamespaceCommandInput extends CreateHttpNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateHttpNamespaceCommand}.
 */
export interface CreateHttpNamespaceCommandOutput extends CreateHttpNamespaceResponse, __MetadataBearer {}

/**
 * <p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be
 *    discovered using a <code>DiscoverInstances</code> request but can't be discovered using
 *    DNS.</p>
 *          <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreateHttpNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreateHttpNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // CreateHttpNamespaceRequest
 *   Name: "STRING_VALUE", // required
 *   CreatorRequestId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateHttpNamespaceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHttpNamespaceCommandInput - {@link CreateHttpNamespaceCommandInput}
 * @returns {@link CreateHttpNamespaceCommandOutput}
 * @see {@link CreateHttpNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateHttpNamespaceCommandOutput} for command's `response` shape.
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
 * @example CreateHttpNamespace example
 * ```javascript
 * // This example creates an HTTP namespace.
 * const input = {
 *   CreatorRequestId: "example-creator-request-id-0001",
 *   Description: "Example.com AWS Cloud Map HTTP Namespace",
 *   Name: "example-http.com"
 * };
 * const command = new CreateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "httpvoqozuhfet5kzxoxg-a-response-example"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateHttpNamespaceCommand extends $Command
  .classBuilder<
    CreateHttpNamespaceCommandInput,
    CreateHttpNamespaceCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "CreateHttpNamespace", {})
  .n("ServiceDiscoveryClient", "CreateHttpNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_CreateHttpNamespaceCommand)
  .de(de_CreateHttpNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHttpNamespaceRequest;
      output: CreateHttpNamespaceResponse;
    };
    sdk: {
      input: CreateHttpNamespaceCommandInput;
      output: CreateHttpNamespaceCommandOutput;
    };
  };
}
