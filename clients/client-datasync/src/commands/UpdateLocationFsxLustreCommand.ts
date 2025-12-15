// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateLocationFsxLustreRequest, UpdateLocationFsxLustreResponse } from "../models/models_0";
import { UpdateLocationFsxLustre$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationFsxLustreCommand}.
 */
export interface UpdateLocationFsxLustreCommandInput extends UpdateLocationFsxLustreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationFsxLustreCommand}.
 */
export interface UpdateLocationFsxLustreCommandOutput extends UpdateLocationFsxLustreResponse, __MetadataBearer {}

/**
 * <p>Modifies the following configuration parameters of the Amazon FSx for Lustre
 *       transfer location that you're using with DataSync.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-lustre-location.html">Configuring DataSync
 *         transfers with FSx for Lustre</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationFsxLustreCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationFsxLustreCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationFsxLustreRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 * };
 * const command = new UpdateLocationFsxLustreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationFsxLustreCommandInput - {@link UpdateLocationFsxLustreCommandInput}
 * @returns {@link UpdateLocationFsxLustreCommandOutput}
 * @see {@link UpdateLocationFsxLustreCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationFsxLustreCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class UpdateLocationFsxLustreCommand extends $Command
  .classBuilder<
    UpdateLocationFsxLustreCommandInput,
    UpdateLocationFsxLustreCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "UpdateLocationFsxLustre", {})
  .n("DataSyncClient", "UpdateLocationFsxLustreCommand")
  .sc(UpdateLocationFsxLustre$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationFsxLustreRequest;
      output: {};
    };
    sdk: {
      input: UpdateLocationFsxLustreCommandInput;
      output: UpdateLocationFsxLustreCommandOutput;
    };
  };
}
