// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveStorageSystemRequest, RemoveStorageSystemResponse } from "../models/models_0";
import { de_RemoveStorageSystemCommand, se_RemoveStorageSystemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveStorageSystemCommand}.
 */
export interface RemoveStorageSystemCommandInput extends RemoveStorageSystemRequest {}
/**
 * @public
 *
 * The output of {@link RemoveStorageSystemCommand}.
 */
export interface RemoveStorageSystemCommandOutput extends RemoveStorageSystemResponse, __MetadataBearer {}

/**
 * <p>Permanently removes a storage system resource from DataSync Discovery, including the associated
 *       discovery jobs, collected data, and recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, RemoveStorageSystemCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, RemoveStorageSystemCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // RemoveStorageSystemRequest
 *   StorageSystemArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveStorageSystemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveStorageSystemCommandInput - {@link RemoveStorageSystemCommandInput}
 * @returns {@link RemoveStorageSystemCommandOutput}
 * @see {@link RemoveStorageSystemCommandInput} for command's `input` shape.
 * @see {@link RemoveStorageSystemCommandOutput} for command's `response` shape.
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
export class RemoveStorageSystemCommand extends $Command
  .classBuilder<
    RemoveStorageSystemCommandInput,
    RemoveStorageSystemCommandOutput,
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
  .s("FmrsService", "RemoveStorageSystem", {})
  .n("DataSyncClient", "RemoveStorageSystemCommand")
  .f(void 0, void 0)
  .ser(se_RemoveStorageSystemCommand)
  .de(de_RemoveStorageSystemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveStorageSystemRequest;
      output: {};
    };
    sdk: {
      input: RemoveStorageSystemCommandInput;
      output: RemoveStorageSystemCommandOutput;
    };
  };
}
