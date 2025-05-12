// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataLakeNamespacesRequest, ListDataLakeNamespacesResponse } from "../models/models_0";
import { de_ListDataLakeNamespacesCommand, se_ListDataLakeNamespacesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataLakeNamespacesCommand}.
 */
export interface ListDataLakeNamespacesCommandInput extends ListDataLakeNamespacesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataLakeNamespacesCommand}.
 */
export interface ListDataLakeNamespacesCommandOutput extends ListDataLakeNamespacesResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically view the list of Amazon Web Services Supply Chain data lake namespaces. Developers can view the namespaces and the corresponding information such as description for a given instance ID. Note that this API only return custom namespaces, instance pre-defined namespaces are not included.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, ListDataLakeNamespacesCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, ListDataLakeNamespacesCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * const client = new SupplyChainClient(config);
 * const input = { // ListDataLakeNamespacesRequest
 *   instanceId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataLakeNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataLakeNamespacesResponse
 * //   namespaces: [ // DataLakeNamespaceList // required
 * //     { // DataLakeNamespace
 * //       instanceId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataLakeNamespacesCommandInput - {@link ListDataLakeNamespacesCommandInput}
 * @returns {@link ListDataLakeNamespacesCommandOutput}
 * @see {@link ListDataLakeNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListDataLakeNamespacesCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 *
 * @example List AWS Supply Chain namespaces
 * ```javascript
 * //
 * const input = {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5"
 * };
 * const command = new ListDataLakeNamespacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   namespaces: [
 *     {
 *       arn: "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/custom_namespace",
 *       createdTime: 1.736892060751E9,
 *       instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *       lastModifiedTime: 1.736892060751E9,
 *       name: "custom_namespace"
 *     },
 *     {
 *       arn: "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/my_namespace",
 *       createdTime: 1.736892560751E9,
 *       instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *       lastModifiedTime: 1.736892586156E9,
 *       name: "my_namespace"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List AWS Supply Chain namespaces using pagination
 * ```javascript
 * //
 * const input = {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   maxResults: 1,
 *   nextToken: "next_token_returned_from_previous_list_request"
 * };
 * const command = new ListDataLakeNamespacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   namespaces: [
 *     {
 *       arn: "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/my_namespace",
 *       createdTime: 1.736892560751E9,
 *       instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *       lastModifiedTime: 1.736892586156E9,
 *       name: "my_namespace"
 *     }
 *   ],
 *   nextToken: "next_token_for_next_list_request"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDataLakeNamespacesCommand extends $Command
  .classBuilder<
    ListDataLakeNamespacesCommandInput,
    ListDataLakeNamespacesCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GalaxyPublicAPIGateway", "ListDataLakeNamespaces", {})
  .n("SupplyChainClient", "ListDataLakeNamespacesCommand")
  .f(void 0, void 0)
  .ser(se_ListDataLakeNamespacesCommand)
  .de(de_ListDataLakeNamespacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataLakeNamespacesRequest;
      output: ListDataLakeNamespacesResponse;
    };
    sdk: {
      input: ListDataLakeNamespacesCommandInput;
      output: ListDataLakeNamespacesCommandOutput;
    };
  };
}
