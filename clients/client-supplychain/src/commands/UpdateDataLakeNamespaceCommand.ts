// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataLakeNamespaceRequest, UpdateDataLakeNamespaceResponse } from "../models/models_0";
import { UpdateDataLakeNamespace } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataLakeNamespaceCommand}.
 */
export interface UpdateDataLakeNamespaceCommandInput extends UpdateDataLakeNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataLakeNamespaceCommand}.
 */
export interface UpdateDataLakeNamespaceCommandOutput extends UpdateDataLakeNamespaceResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically update an Amazon Web Services Supply Chain data lake namespace. Developers can update the description of a data lake namespace for a given instance ID and namespace name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, UpdateDataLakeNamespaceCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, UpdateDataLakeNamespaceCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // UpdateDataLakeNamespaceRequest
 *   instanceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateDataLakeNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataLakeNamespaceResponse
 * //   namespace: { // DataLakeNamespace
 * //     instanceId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDataLakeNamespaceCommandInput - {@link UpdateDataLakeNamespaceCommandInput}
 * @returns {@link UpdateDataLakeNamespaceCommandOutput}
 * @see {@link UpdateDataLakeNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataLakeNamespaceCommandOutput} for command's `response` shape.
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
 * @example Update description of an existing AWS Supply Chain namespace
 * ```javascript
 * //
 * const input = {
 *   description: "This is an updated AWS Supply Chain namespace",
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "my_namespace"
 * };
 * const command = new UpdateDataLakeNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   namespace: {
 *     arn: "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/my_namespace",
 *     createdTime: 1.736892560751E9,
 *     description: "This is an updated AWS Supply Chain namespace",
 *     instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *     lastModifiedTime: 1.736892586156E9,
 *     name: "my_namespace"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateDataLakeNamespaceCommand extends $Command
  .classBuilder<
    UpdateDataLakeNamespaceCommandInput,
    UpdateDataLakeNamespaceCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "UpdateDataLakeNamespace", {})
  .n("SupplyChainClient", "UpdateDataLakeNamespaceCommand")
  .sc(UpdateDataLakeNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataLakeNamespaceRequest;
      output: UpdateDataLakeNamespaceResponse;
    };
    sdk: {
      input: UpdateDataLakeNamespaceCommandInput;
      output: UpdateDataLakeNamespaceCommandOutput;
    };
  };
}
