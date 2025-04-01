// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateStorageSystemRequest,
  UpdateStorageSystemRequestFilterSensitiveLog,
  UpdateStorageSystemResponse,
} from "../models/models_0";
import { de_UpdateStorageSystemCommand, se_UpdateStorageSystemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStorageSystemCommand}.
 */
export interface UpdateStorageSystemCommandInput extends UpdateStorageSystemRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStorageSystemCommand}.
 */
export interface UpdateStorageSystemCommandOutput extends UpdateStorageSystemResponse, __MetadataBearer {}

/**
 * <p>Modifies some configurations of an on-premises storage system resource that you're using
 *       with DataSync Discovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateStorageSystemCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateStorageSystemCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateStorageSystemRequest
 *   StorageSystemArn: "STRING_VALUE", // required
 *   ServerConfiguration: { // DiscoveryServerConfiguration
 *     ServerHostname: "STRING_VALUE", // required
 *     ServerPort: Number("int"),
 *   },
 *   AgentArns: [ // DiscoveryAgentArnList
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 *   CloudWatchLogGroupArn: "STRING_VALUE",
 *   Credentials: { // Credentials
 *     Username: "STRING_VALUE", // required
 *     Password: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateStorageSystemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStorageSystemCommandInput - {@link UpdateStorageSystemCommandInput}
 * @returns {@link UpdateStorageSystemCommandOutput}
 * @see {@link UpdateStorageSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateStorageSystemCommandOutput} for command's `response` shape.
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
export class UpdateStorageSystemCommand extends $Command
  .classBuilder<
    UpdateStorageSystemCommandInput,
    UpdateStorageSystemCommandOutput,
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
  .s("FmrsService", "UpdateStorageSystem", {})
  .n("DataSyncClient", "UpdateStorageSystemCommand")
  .f(UpdateStorageSystemRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateStorageSystemCommand)
  .de(de_UpdateStorageSystemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStorageSystemRequest;
      output: {};
    };
    sdk: {
      input: UpdateStorageSystemCommandInput;
      output: UpdateStorageSystemCommandOutput;
    };
  };
}
