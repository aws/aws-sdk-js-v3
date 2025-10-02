// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePublicDnsNamespaceRequest, UpdatePublicDnsNamespaceResponse } from "../models/models_0";
import { de_UpdatePublicDnsNamespaceCommand, se_UpdatePublicDnsNamespaceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePublicDnsNamespaceCommand}.
 */
export interface UpdatePublicDnsNamespaceCommandInput extends UpdatePublicDnsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePublicDnsNamespaceCommand}.
 */
export interface UpdatePublicDnsNamespaceCommandOutput extends UpdatePublicDnsNamespaceResponse, __MetadataBearer {}

/**
 * <p>Updates a public DNS namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdatePublicDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdatePublicDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // UpdatePublicDnsNamespaceRequest
 *   Id: "STRING_VALUE", // required
 *   UpdaterRequestId: "STRING_VALUE",
 *   Namespace: { // PublicDnsNamespaceChange
 *     Description: "STRING_VALUE",
 *     Properties: { // PublicDnsNamespacePropertiesChange
 *       DnsProperties: { // PublicDnsPropertiesMutableChange
 *         SOA: { // SOAChange
 *           TTL: Number("long"), // required
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePublicDnsNamespaceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePublicDnsNamespaceCommandInput - {@link UpdatePublicDnsNamespaceCommandInput}
 * @returns {@link UpdatePublicDnsNamespaceCommandOutput}
 * @see {@link UpdatePublicDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdatePublicDnsNamespaceCommandOutput} for command's `response` shape.
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
 * @throws {@link NamespaceNotFound} (client fault)
 *  <p>No namespace exists with the specified ID.</p>
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>The specified resource can't be deleted because it contains other resources. For example,
 *    you can't delete a service that contains any instances.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example To update a public DNS namespace
 * ```javascript
 * // The following example updates the description of a public DNS namespace.
 * const input = {
 *   Id: "ns-bk3aEXAMPLE",
 *   Namespace: {
 *     Description: "The updated namespace description."
 *   },
 *   UpdaterRequestId: ""
 * };
 * const command = new UpdatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "ft52xe2koxhoeormaceymagglsdjEXAMPLE"
 * }
 * *\/
 * ```
 *
 * @example Update public DNS namespace using namespace ARN for shared namespace
 * ```javascript
 * // This example updates a public DNS namespace using a namespace ARN instead of namespace ID.
 * const input = {
 *   Id: "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-bk3aexample",
 *   Namespace: {
 *     Description: "Updated description for shared public DNS namespace."
 *   }
 * };
 * const command = new UpdatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "ft52xe2koxhoeormaceymagglsdjexample"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdatePublicDnsNamespaceCommand extends $Command
  .classBuilder<
    UpdatePublicDnsNamespaceCommandInput,
    UpdatePublicDnsNamespaceCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "UpdatePublicDnsNamespace", {})
  .n("ServiceDiscoveryClient", "UpdatePublicDnsNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePublicDnsNamespaceCommand)
  .de(de_UpdatePublicDnsNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePublicDnsNamespaceRequest;
      output: UpdatePublicDnsNamespaceResponse;
    };
    sdk: {
      input: UpdatePublicDnsNamespaceCommandInput;
      output: UpdatePublicDnsNamespaceCommandOutput;
    };
  };
}
