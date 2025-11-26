// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDataLakeNamespaceRequest, GetDataLakeNamespaceResponse } from "../models/models_0";
import { GetDataLakeNamespace } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataLakeNamespaceCommand}.
 */
export interface GetDataLakeNamespaceCommandInput extends GetDataLakeNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link GetDataLakeNamespaceCommand}.
 */
export interface GetDataLakeNamespaceCommandOutput extends GetDataLakeNamespaceResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically view an Amazon Web Services Supply Chain data lake namespace. Developers can view the data lake namespace information such as description for a given instance ID and namespace name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, GetDataLakeNamespaceCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, GetDataLakeNamespaceCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // GetDataLakeNamespaceRequest
 *   instanceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetDataLakeNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // GetDataLakeNamespaceResponse
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
 * @param GetDataLakeNamespaceCommandInput - {@link GetDataLakeNamespaceCommandInput}
 * @returns {@link GetDataLakeNamespaceCommandOutput}
 * @see {@link GetDataLakeNamespaceCommandInput} for command's `input` shape.
 * @see {@link GetDataLakeNamespaceCommandOutput} for command's `response` shape.
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
 * @example Get properties of an existing AWS Supply Chain namespace
 * ```javascript
 * //
 * const input = {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "my_namespace"
 * };
 * const command = new GetDataLakeNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   namespace: {
 *     arn: "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/my_namespace",
 *     createdTime: 1.736892560751E9,
 *     description: "This is my AWS Supply Chain namespace",
 *     instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *     lastModifiedTime: 1.736892560751E9,
 *     name: "my_namespace"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Get proporties of an existing pre-defined AWS Supply Chain namespace
 * ```javascript
 * //
 * const input = {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "asc"
 * };
 * const command = new GetDataLakeNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   namespace: {
 *     arn: "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/asc",
 *     createdTime: 1.736892430234E9,
 *     instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *     lastModifiedTime: 1.736892430234E9,
 *     name: "asc"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDataLakeNamespaceCommand extends $Command
  .classBuilder<
    GetDataLakeNamespaceCommandInput,
    GetDataLakeNamespaceCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "GetDataLakeNamespace", {})
  .n("SupplyChainClient", "GetDataLakeNamespaceCommand")
  .sc(GetDataLakeNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataLakeNamespaceRequest;
      output: GetDataLakeNamespaceResponse;
    };
    sdk: {
      input: GetDataLakeNamespaceCommandInput;
      output: GetDataLakeNamespaceCommandOutput;
    };
  };
}
