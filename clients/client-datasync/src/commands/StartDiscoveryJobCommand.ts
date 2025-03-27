// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartDiscoveryJobRequest, StartDiscoveryJobResponse } from "../models/models_0";
import { de_StartDiscoveryJobCommand, se_StartDiscoveryJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDiscoveryJobCommand}.
 */
export interface StartDiscoveryJobCommandInput extends StartDiscoveryJobRequest {}
/**
 * @public
 *
 * The output of {@link StartDiscoveryJobCommand}.
 */
export interface StartDiscoveryJobCommandOutput extends StartDiscoveryJobResponse, __MetadataBearer {}

/**
 * <p>Runs a DataSync discovery job on your on-premises storage system. If you haven't added the
 *       storage system to DataSync Discovery yet, do this first by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html">AddStorageSystem</a>
 *       operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, StartDiscoveryJobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, StartDiscoveryJobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // StartDiscoveryJobRequest
 *   StorageSystemArn: "STRING_VALUE", // required
 *   CollectionDurationMinutes: Number("int"), // required
 *   ClientToken: "STRING_VALUE", // required
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartDiscoveryJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDiscoveryJobResponse
 * //   DiscoveryJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDiscoveryJobCommandInput - {@link StartDiscoveryJobCommandInput}
 * @returns {@link StartDiscoveryJobCommandOutput}
 * @see {@link StartDiscoveryJobCommandInput} for command's `input` shape.
 * @see {@link StartDiscoveryJobCommandOutput} for command's `response` shape.
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
export class StartDiscoveryJobCommand extends $Command
  .classBuilder<
    StartDiscoveryJobCommandInput,
    StartDiscoveryJobCommandOutput,
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
  .s("FmrsService", "StartDiscoveryJob", {})
  .n("DataSyncClient", "StartDiscoveryJobCommand")
  .f(void 0, void 0)
  .ser(se_StartDiscoveryJobCommand)
  .de(de_StartDiscoveryJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDiscoveryJobRequest;
      output: StartDiscoveryJobResponse;
    };
    sdk: {
      input: StartDiscoveryJobCommandInput;
      output: StartDiscoveryJobCommandOutput;
    };
  };
}
