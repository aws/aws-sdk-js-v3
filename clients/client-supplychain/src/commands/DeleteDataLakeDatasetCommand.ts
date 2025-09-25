// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataLakeDatasetRequest, DeleteDataLakeDatasetResponse } from "../models/models_0";
import { DeleteDataLakeDataset } from "../schemas/schemas_9_DataLake";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataLakeDatasetCommand}.
 */
export interface DeleteDataLakeDatasetCommandInput extends DeleteDataLakeDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataLakeDatasetCommand}.
 */
export interface DeleteDataLakeDatasetCommandOutput extends DeleteDataLakeDatasetResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically delete an Amazon Web Services Supply Chain data lake dataset. Developers can delete the existing datasets for a given instance ID, namespace, and instance name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, DeleteDataLakeDatasetCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, DeleteDataLakeDatasetCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // DeleteDataLakeDatasetRequest
 *   instanceId: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataLakeDatasetResponse
 * //   instanceId: "STRING_VALUE", // required
 * //   namespace: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteDataLakeDatasetCommandInput - {@link DeleteDataLakeDatasetCommandInput}
 * @returns {@link DeleteDataLakeDatasetCommandOutput}
 * @see {@link DeleteDataLakeDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDataLakeDatasetCommandOutput} for command's `response` shape.
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
 * @example Delete an AWS Supply Chain inbound_order dataset
 * ```javascript
 * //
 * const input = {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "inbound_order",
 *   namespace: "asc"
 * };
 * const command = new DeleteDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "inbound_order",
 *   namespace: "asc"
 * }
 * *\/
 * ```
 *
 * @example Delete a custom dataset
 * ```javascript
 * //
 * const input = {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "my_dataset",
 *   namespace: "default"
 * };
 * const command = new DeleteDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "my_dataset",
 *   namespace: "default"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDataLakeDatasetCommand extends $Command
  .classBuilder<
    DeleteDataLakeDatasetCommandInput,
    DeleteDataLakeDatasetCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "DeleteDataLakeDataset", {})
  .n("SupplyChainClient", "DeleteDataLakeDatasetCommand")
  .sc(DeleteDataLakeDataset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataLakeDatasetRequest;
      output: DeleteDataLakeDatasetResponse;
    };
    sdk: {
      input: DeleteDataLakeDatasetCommandInput;
      output: DeleteDataLakeDatasetCommandOutput;
    };
  };
}
