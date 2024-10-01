// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataLakeDatasetRequest, DeleteDataLakeDatasetResponse } from "../models/models_0";
import { de_DeleteDataLakeDatasetCommand, se_DeleteDataLakeDatasetCommand } from "../protocols/Aws_restJson1";
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
 * <p>Delete a data lake dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, DeleteDataLakeDatasetCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, DeleteDataLakeDatasetCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
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
 * @public
 * @example Delete an AWS Supply Chain inbound_order dataset
 * ```javascript
 * //
 * const input = {
 *   "name": "inbound_order",
 *   "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   "namespace": "asc"
 * };
 * const command = new DeleteDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "name": "inbound_order",
 *   "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   "namespace": "asc"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 * @example Delete a custom dataset
 * ```javascript
 * //
 * const input = {
 *   "name": "my_dataset",
 *   "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   "namespace": "default"
 * };
 * const command = new DeleteDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "name": "my_dataset",
 *   "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   "namespace": "default"
 * }
 * *\/
 * // example id: example-2
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GalaxyPublicAPIGateway", "DeleteDataLakeDataset", {})
  .n("SupplyChainClient", "DeleteDataLakeDatasetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataLakeDatasetCommand)
  .de(de_DeleteDataLakeDatasetCommand)
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
