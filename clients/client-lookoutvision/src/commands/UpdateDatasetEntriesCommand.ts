// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { UpdateDatasetEntriesRequest, UpdateDatasetEntriesResponse } from "../models/models_0";
import { de_UpdateDatasetEntriesCommand, se_UpdateDatasetEntriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasetEntriesCommand}.
 */
export interface UpdateDatasetEntriesCommandInput extends UpdateDatasetEntriesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetEntriesCommand}.
 */
export interface UpdateDatasetEntriesCommandOutput extends UpdateDatasetEntriesResponse, __MetadataBearer {}

/**
 * <p>Adds or updates one or more JSON Line entries in a dataset. A JSON Line includes information about an image
 *          used for training or testing an Amazon Lookout for Vision model.</p>
 *          <p>To update an existing JSON Line, use the <code>source-ref</code> field to identify the JSON Line. The JSON line
 *          that you supply replaces the existing JSON line. Any existing annotations that are not in the new JSON line are removed from the dataset.
 *       </p>
 *          <p>For more information, see
 *          <i>Defining JSON lines for anomaly classification</i> in the  Amazon Lookout for Vision Developer Guide. </p>
 *          <note>
 *             <p>The images you reference in the <code>source-ref</code> field of a JSON line, must be
 *       in the same S3 bucket as the existing images in the dataset. </p>
 *          </note>
 *          <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and
 *          check the <code>Status</code> field in the response.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:UpdateDatasetEntries</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, UpdateDatasetEntriesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, UpdateDatasetEntriesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const input = { // UpdateDatasetEntriesRequest
 *   ProjectName: "STRING_VALUE", // required
 *   DatasetType: "STRING_VALUE", // required
 *   Changes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDatasetEntriesResponse
 * //   Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED_ROLLBACK_IN_PROGRESS" || "UPDATE_FAILED_ROLLBACK_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED",
 * // };
 *
 * ```
 *
 * @param UpdateDatasetEntriesCommandInput - {@link UpdateDatasetEntriesCommandInput}
 * @returns {@link UpdateDatasetEntriesCommandOutput}
 * @see {@link UpdateDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetEntriesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateDatasetEntriesCommand extends $Command
  .classBuilder<
    UpdateDatasetEntriesCommandInput,
    UpdateDatasetEntriesCommandOutput,
    LookoutVisionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LookoutVisionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutVisionService", "UpdateDatasetEntries", {})
  .n("LookoutVisionClient", "UpdateDatasetEntriesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDatasetEntriesCommand)
  .de(de_UpdateDatasetEntriesCommand)
  .build() {}
