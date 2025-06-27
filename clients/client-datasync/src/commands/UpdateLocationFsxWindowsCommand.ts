// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateLocationFsxWindowsRequest,
  UpdateLocationFsxWindowsRequestFilterSensitiveLog,
  UpdateLocationFsxWindowsResponse,
} from "../models/models_0";
import { de_UpdateLocationFsxWindowsCommand, se_UpdateLocationFsxWindowsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationFsxWindowsCommand}.
 */
export interface UpdateLocationFsxWindowsCommandInput extends UpdateLocationFsxWindowsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationFsxWindowsCommand}.
 */
export interface UpdateLocationFsxWindowsCommandOutput extends UpdateLocationFsxWindowsResponse, __MetadataBearer {}

/**
 * <p>Modifies the following configuration parameters of the Amazon FSx for Windows File Server
 *       transfer location that you're using with DataSync.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-fsx-location.html">Configuring DataSync
 *         transfers with FSx for Windows File Server</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationFsxWindowsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationFsxWindowsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationFsxWindowsRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   Domain: "STRING_VALUE",
 *   User: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 * };
 * const command = new UpdateLocationFsxWindowsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationFsxWindowsCommandInput - {@link UpdateLocationFsxWindowsCommandInput}
 * @returns {@link UpdateLocationFsxWindowsCommandOutput}
 * @see {@link UpdateLocationFsxWindowsCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationFsxWindowsCommandOutput} for command's `response` shape.
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
export class UpdateLocationFsxWindowsCommand extends $Command
  .classBuilder<
    UpdateLocationFsxWindowsCommandInput,
    UpdateLocationFsxWindowsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "UpdateLocationFsxWindows", {})
  .n("DataSyncClient", "UpdateLocationFsxWindowsCommand")
  .f(UpdateLocationFsxWindowsRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateLocationFsxWindowsCommand)
  .de(de_UpdateLocationFsxWindowsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationFsxWindowsRequest;
      output: {};
    };
    sdk: {
      input: UpdateLocationFsxWindowsCommandInput;
      output: UpdateLocationFsxWindowsCommandOutput;
    };
  };
}
