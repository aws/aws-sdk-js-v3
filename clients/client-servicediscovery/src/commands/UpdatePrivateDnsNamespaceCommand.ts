// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePrivateDnsNamespaceRequest, UpdatePrivateDnsNamespaceResponse } from "../models/models_0";
import { de_UpdatePrivateDnsNamespaceCommand, se_UpdatePrivateDnsNamespaceCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePrivateDnsNamespaceCommand}.
 */
export interface UpdatePrivateDnsNamespaceCommandInput extends UpdatePrivateDnsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePrivateDnsNamespaceCommand}.
 */
export interface UpdatePrivateDnsNamespaceCommandOutput extends UpdatePrivateDnsNamespaceResponse, __MetadataBearer {}

/**
 * <p>Updates a private DNS
 *    namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdatePrivateDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdatePrivateDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // UpdatePrivateDnsNamespaceRequest
 *   Id: "STRING_VALUE", // required
 *   UpdaterRequestId: "STRING_VALUE",
 *   Namespace: { // PrivateDnsNamespaceChange
 *     Description: "STRING_VALUE",
 *     Properties: { // PrivateDnsNamespacePropertiesChange
 *       DnsProperties: { // PrivateDnsPropertiesMutableChange
 *         SOA: { // SOAChange
 *           TTL: Number("long"), // required
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdatePrivateDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePrivateDnsNamespaceResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePrivateDnsNamespaceCommandInput - {@link UpdatePrivateDnsNamespaceCommandInput}
 * @returns {@link UpdatePrivateDnsNamespaceCommandOutput}
 * @see {@link UpdatePrivateDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdatePrivateDnsNamespaceCommandOutput} for command's `response` shape.
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
 * @example To update a private DNS namespace
 * ```javascript
 * // The following example updates the description of a private DNS namespace.
 * const input = {
 *   Id: "ns-bk3aEXAMPLE",
 *   Namespace: {
 *     Description: "The updated namespace description."
 *   },
 *   UpdaterRequestId: ""
 * };
 * const command = new UpdatePrivateDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OperationId: "ft52xe2koxhoeormaceymagglsdjyvEXAMPLE"
 * }
 * *\/
 * ```
 *
 * @example Update private DNS namespace using namespace ARN for shared namespace
 * ```javascript
 * // This example updates a private DNS namespace using a namespace ARN instead of namespace ID.
 * const input = {
 *   Id: "arn:aws:servicediscovery:us-west-2:123456789012:namespace/ns-bk3aexample",
 *   Namespace: {
 *     Description: "Updated description for shared private DNS namespace."
 *   }
 * };
 * const command = new UpdatePrivateDnsNamespaceCommand(input);
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
export class UpdatePrivateDnsNamespaceCommand extends $Command
  .classBuilder<
    UpdatePrivateDnsNamespaceCommandInput,
    UpdatePrivateDnsNamespaceCommandOutput,
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
  .s("Route53AutoNaming_v20170314", "UpdatePrivateDnsNamespace", {})
  .n("ServiceDiscoveryClient", "UpdatePrivateDnsNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePrivateDnsNamespaceCommand)
  .de(de_UpdatePrivateDnsNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePrivateDnsNamespaceRequest;
      output: UpdatePrivateDnsNamespaceResponse;
    };
    sdk: {
      input: UpdatePrivateDnsNamespaceCommandInput;
      output: UpdatePrivateDnsNamespaceCommandOutput;
    };
  };
}
