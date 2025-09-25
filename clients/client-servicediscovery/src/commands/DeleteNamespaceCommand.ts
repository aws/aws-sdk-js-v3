// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNamespaceRequest, DeleteNamespaceResponse } from "../models/models_0";
import { DeleteNamespace } from "../schemas/schemas_9_Namespace";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNamespaceCommand}.
 */
export interface DeleteNamespaceCommandInput extends DeleteNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNamespaceCommand}.
 */
export interface DeleteNamespaceCommandOutput extends DeleteNamespaceResponse, __MetadataBearer {}

/**
 * <p>Deletes a namespace from the current account. If the namespace still contains one or more
 *    services, the request fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DeleteNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DeleteNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * // import type { ServiceDiscoveryClientConfig } from "@aws-sdk/client-servicediscovery";
 * const config = {}; // type is ServiceDiscoveryClientConfig
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // DeleteNamespaceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNamespaceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNamespaceCommandInput - {@link DeleteNamespaceCommandInput}
 * @returns {@link DeleteNamespaceCommandOutput}
 * @see {@link DeleteNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteNamespaceCommandOutput} for command's `response` shape.
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
 * @example Example: Delete namespace
 * ```javascript
 * // Example: Delete namespace
 * const input = {
 *   Id: "ns-ylexjili4cdxy3xm"
 * };
 * const command = new DeleteNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "abcd1234-xmpl-5678-9012-abcd1234xmplabcd"
 * }
 * *\/
 * ```
 *
 * @example Delete namespace using namespace ARN
 * ```javascript
 * // Deletes a namespace using a namespace ARN instead of namespace ID, useful when working with shared namespaces.
 * const input = {
 *   Id: "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-abcd1234xmpl5678"
 * };
 * const command = new DeleteNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "abcd1234-xmpl-5678-9012-abcd1234xmplabcd"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteNamespaceCommand extends $Command
  .classBuilder<
    DeleteNamespaceCommandInput,
    DeleteNamespaceCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53AutoNaming_v20170314", "DeleteNamespace", {})
  .n("ServiceDiscoveryClient", "DeleteNamespaceCommand")
  .sc(DeleteNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNamespaceRequest;
      output: DeleteNamespaceResponse;
    };
    sdk: {
      input: DeleteNamespaceCommandInput;
      output: DeleteNamespaceCommandOutput;
    };
  };
}
