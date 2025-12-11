// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDataLakeNamespaceRequest, DeleteDataLakeNamespaceResponse } from "../models/models_0";
import { DeleteDataLakeNamespace } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataLakeNamespaceCommand}.
 */
export interface DeleteDataLakeNamespaceCommandInput extends DeleteDataLakeNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataLakeNamespaceCommand}.
 */
export interface DeleteDataLakeNamespaceCommandOutput extends DeleteDataLakeNamespaceResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically delete an Amazon Web Services Supply Chain data lake namespace and its underling datasets. Developers can delete the existing namespaces for a given instance ID and namespace name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, DeleteDataLakeNamespaceCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, DeleteDataLakeNamespaceCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // DeleteDataLakeNamespaceRequest
 *   instanceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataLakeNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataLakeNamespaceResponse
 * //   instanceId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteDataLakeNamespaceCommandInput - {@link DeleteDataLakeNamespaceCommandInput}
 * @returns {@link DeleteDataLakeNamespaceCommandOutput}
 * @see {@link DeleteDataLakeNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteDataLakeNamespaceCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 *
 * @example Delete an AWS Supply Chain namespace
 * ```javascript
 * //
 * const input = {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "my_namespace"
 * };
 * const command = new DeleteDataLakeNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "my_namespace"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDataLakeNamespaceCommand extends $Command
  .classBuilder<
    DeleteDataLakeNamespaceCommandInput,
    DeleteDataLakeNamespaceCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "DeleteDataLakeNamespace", {})
  .n("SupplyChainClient", "DeleteDataLakeNamespaceCommand")
  .sc(DeleteDataLakeNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataLakeNamespaceRequest;
      output: DeleteDataLakeNamespaceResponse;
    };
    sdk: {
      input: DeleteDataLakeNamespaceCommandInput;
      output: DeleteDataLakeNamespaceCommandOutput;
    };
  };
}
