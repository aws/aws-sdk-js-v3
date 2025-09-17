// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateHttpNamespaceRequest, UpdateHttpNamespaceResponse } from "../models/models_0";
import { de_UpdateHttpNamespaceCommand, se_UpdateHttpNamespaceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHttpNamespaceCommand}.
 */
export interface UpdateHttpNamespaceCommandInput extends UpdateHttpNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHttpNamespaceCommand}.
 */
export interface UpdateHttpNamespaceCommandOutput extends UpdateHttpNamespaceResponse, __MetadataBearer {}

/**
 * <p>Updates an HTTP
 *    namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateHttpNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateHttpNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // UpdateHttpNamespaceRequest
 *   Id: "STRING_VALUE", // required
 *   UpdaterRequestId: "STRING_VALUE",
 *   Namespace: { // HttpNamespaceChange
 *     Description: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHttpNamespaceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateHttpNamespaceCommandInput - {@link UpdateHttpNamespaceCommandInput}
 * @returns {@link UpdateHttpNamespaceCommandOutput}
 * @see {@link UpdateHttpNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdateHttpNamespaceCommandOutput} for command's `response` shape.
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
 * @example To update a HTTP namespace
 * ```javascript
 * // The following example updates the description of a HTTP namespace.
 * const input = {
 *   Id: "ns-vh4nbmEXAMPLE",
 *   Namespace: {
 *     Description: "The updated namespace description."
 *   }
 * };
 * const command = new UpdateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "ft52xe2koxhoeormaceymagglsdjyvEXAMPLE"
 * }
 * *\/
 * ```
 *
 * @example Update HTTP namespace using namespace ARN for shared namespace
 * ```javascript
 * // This example updates an HTTP namespace using a namespace ARN instead of namespace ID.
 * const input = {
 *   Id: "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-vh4nbmexample",
 *   Namespace: {
 *     Description: "Updated description for shared HTTP namespace."
 *   }
 * };
 * const command = new UpdateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "ft52xe2koxhoeormaceymagglsdjyvexample"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateHttpNamespaceCommand extends $Command
  .classBuilder<
    UpdateHttpNamespaceCommandInput,
    UpdateHttpNamespaceCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "UpdateHttpNamespace", {})
  .n("ServiceDiscoveryClient", "UpdateHttpNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateHttpNamespaceCommand)
  .de(de_UpdateHttpNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHttpNamespaceRequest;
      output: UpdateHttpNamespaceResponse;
    };
    sdk: {
      input: UpdateHttpNamespaceCommandInput;
      output: UpdateHttpNamespaceCommandOutput;
    };
  };
}
