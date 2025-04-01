// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDiscoveryJobRequest, UpdateDiscoveryJobResponse } from "../models/models_0";
import { de_UpdateDiscoveryJobCommand, se_UpdateDiscoveryJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDiscoveryJobCommand}.
 */
export interface UpdateDiscoveryJobCommandInput extends UpdateDiscoveryJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDiscoveryJobCommand}.
 */
export interface UpdateDiscoveryJobCommandOutput extends UpdateDiscoveryJobResponse, __MetadataBearer {}

/**
 * <p>Edits a DataSync discovery job configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateDiscoveryJobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateDiscoveryJobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateDiscoveryJobRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 *   CollectionDurationMinutes: Number("int"), // required
 * };
 * const command = new UpdateDiscoveryJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDiscoveryJobCommandInput - {@link UpdateDiscoveryJobCommandInput}
 * @returns {@link UpdateDiscoveryJobCommandOutput}
 * @see {@link UpdateDiscoveryJobCommandInput} for command's `input` shape.
 * @see {@link UpdateDiscoveryJobCommandOutput} for command's `response` shape.
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
export class UpdateDiscoveryJobCommand extends $Command
  .classBuilder<
    UpdateDiscoveryJobCommandInput,
    UpdateDiscoveryJobCommandOutput,
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
  .s("FmrsService", "UpdateDiscoveryJob", {})
  .n("DataSyncClient", "UpdateDiscoveryJobCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDiscoveryJobCommand)
  .de(de_UpdateDiscoveryJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDiscoveryJobRequest;
      output: {};
    };
    sdk: {
      input: UpdateDiscoveryJobCommandInput;
      output: UpdateDiscoveryJobCommandOutput;
    };
  };
}
