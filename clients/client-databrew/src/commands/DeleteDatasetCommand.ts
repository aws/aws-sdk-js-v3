// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDatasetRequest, DeleteDatasetResponse } from "../models/models_0";
import { DeleteDataset } from "../schemas/schemas_5_DeleteDataset";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatasetCommand}.
 */
export interface DeleteDatasetCommandInput extends DeleteDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatasetCommand}.
 */
export interface DeleteDatasetCommandOutput extends DeleteDatasetResponse, __MetadataBearer {}

/**
 * <p>Deletes a dataset from DataBrew.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteDatasetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteDatasetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DeleteDatasetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDatasetResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteDatasetCommandInput - {@link DeleteDatasetCommandInput}
 * @returns {@link DeleteDatasetCommandOutput}
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class DeleteDatasetCommand extends $Command
  .classBuilder<
    DeleteDatasetCommandInput,
    DeleteDatasetCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "DeleteDataset", {})
  .n("DataBrewClient", "DeleteDatasetCommand")
  .sc(DeleteDataset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatasetRequest;
      output: DeleteDatasetResponse;
    };
    sdk: {
      input: DeleteDatasetCommandInput;
      output: DeleteDatasetCommandOutput;
    };
  };
}
