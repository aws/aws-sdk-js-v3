// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DeleteDatasetRequest, DeleteDatasetResponse } from "../models/models_0";
import { de_DeleteDatasetCommand, se_DeleteDatasetCommand } from "../protocols/Aws_restJson1";

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
 * <p>Deletes an existing Amazon Lookout for Vision <code>dataset</code>. </p>
 *          <p>If your the project has a single
 *       dataset, you must create a new dataset before you can create a model.</p>
 *          <p>If you project has a training dataset and a test dataset consider the following. </p>
 *          <ul>
 *             <li>
 *                <p>If you delete the test dataset, your project reverts to a single dataset project. If you then
 *       train the model, Amazon Lookout for Vision internally splits the remaining dataset into a training and test dataset.</p>
 *             </li>
 *             <li>
 *                <p>If you delete the training dataset, you must create a training dataset before you can create a model.</p>
 *             </li>
 *          </ul>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DeleteDataset</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DeleteDatasetCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DeleteDatasetCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * // import type { LookoutVisionClientConfig } from "@aws-sdk/client-lookoutvision";
 * const config = {}; // type is LookoutVisionClientConfig
 * const client = new LookoutVisionClient(config);
 * const input = { // DeleteDatasetRequest
 *   ProjectName: "STRING_VALUE", // required
 *   DatasetType: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDatasetCommandInput - {@link DeleteDatasetCommandInput}
 * @returns {@link DeleteDatasetCommandOutput}
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The update or deletion of a resource caused an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 *
 * @public
 */
export class DeleteDatasetCommand extends $Command
  .classBuilder<
    DeleteDatasetCommandInput,
    DeleteDatasetCommandOutput,
    LookoutVisionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutVisionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutVisionService", "DeleteDataset", {})
  .n("LookoutVisionClient", "DeleteDatasetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDatasetCommand)
  .de(de_DeleteDatasetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatasetRequest;
      output: {};
    };
    sdk: {
      input: DeleteDatasetCommandInput;
      output: DeleteDatasetCommandOutput;
    };
  };
}
