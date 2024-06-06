// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateLocationSmbRequest,
  UpdateLocationSmbRequestFilterSensitiveLog,
  UpdateLocationSmbResponse,
} from "../models/models_0";
import { de_UpdateLocationSmbCommand, se_UpdateLocationSmbCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationSmbCommand}.
 */
export interface UpdateLocationSmbCommandInput extends UpdateLocationSmbRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationSmbCommand}.
 */
export interface UpdateLocationSmbCommandOutput extends UpdateLocationSmbResponse, __MetadataBearer {}

/**
 * <p>Updates some of the parameters of a Server Message Block
 *       (SMB) file server location that you can use for DataSync transfers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationSmbRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   User: "STRING_VALUE",
 *   Domain: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 *   MountOptions: { // SmbMountOptions
 *     Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 *   },
 * };
 * const command = new UpdateLocationSmbCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationSmbCommandInput - {@link UpdateLocationSmbCommandInput}
 * @returns {@link UpdateLocationSmbCommandOutput}
 * @see {@link UpdateLocationSmbCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationSmbCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateLocationSmbCommand extends $Command
  .classBuilder<
    UpdateLocationSmbCommandInput,
    UpdateLocationSmbCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "UpdateLocationSmb", {})
  .n("DataSyncClient", "UpdateLocationSmbCommand")
  .f(UpdateLocationSmbRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateLocationSmbCommand)
  .de(de_UpdateLocationSmbCommand)
  .build() {}
