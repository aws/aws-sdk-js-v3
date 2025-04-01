// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AddStorageSystemRequest,
  AddStorageSystemRequestFilterSensitiveLog,
  AddStorageSystemResponse,
} from "../models/models_0";
import { de_AddStorageSystemCommand, se_AddStorageSystemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddStorageSystemCommand}.
 */
export interface AddStorageSystemCommandInput extends AddStorageSystemRequest {}
/**
 * @public
 *
 * The output of {@link AddStorageSystemCommand}.
 */
export interface AddStorageSystemCommandOutput extends AddStorageSystemResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services resource for an on-premises storage system that you want DataSync Discovery to collect
 *       information about.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, AddStorageSystemCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, AddStorageSystemCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // AddStorageSystemRequest
 *   ServerConfiguration: { // DiscoveryServerConfiguration
 *     ServerHostname: "STRING_VALUE", // required
 *     ServerPort: Number("int"),
 *   },
 *   SystemType: "NetAppONTAP", // required
 *   AgentArns: [ // DiscoveryAgentArnList // required
 *     "STRING_VALUE",
 *   ],
 *   CloudWatchLogGroupArn: "STRING_VALUE",
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Name: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE", // required
 *   Credentials: { // Credentials
 *     Username: "STRING_VALUE", // required
 *     Password: "STRING_VALUE", // required
 *   },
 * };
 * const command = new AddStorageSystemCommand(input);
 * const response = await client.send(command);
 * // { // AddStorageSystemResponse
 * //   StorageSystemArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AddStorageSystemCommandInput - {@link AddStorageSystemCommandInput}
 * @returns {@link AddStorageSystemCommandOutput}
 * @see {@link AddStorageSystemCommandInput} for command's `input` shape.
 * @see {@link AddStorageSystemCommandOutput} for command's `response` shape.
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
export class AddStorageSystemCommand extends $Command
  .classBuilder<
    AddStorageSystemCommandInput,
    AddStorageSystemCommandOutput,
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
  .s("FmrsService", "AddStorageSystem", {})
  .n("DataSyncClient", "AddStorageSystemCommand")
  .f(AddStorageSystemRequestFilterSensitiveLog, void 0)
  .ser(se_AddStorageSystemCommand)
  .de(de_AddStorageSystemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddStorageSystemRequest;
      output: AddStorageSystemResponse;
    };
    sdk: {
      input: AddStorageSystemCommandInput;
      output: AddStorageSystemCommandOutput;
    };
  };
}
