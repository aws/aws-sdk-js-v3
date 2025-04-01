// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStorageSystemRequest, DescribeStorageSystemResponse } from "../models/models_0";
import { de_DescribeStorageSystemCommand, se_DescribeStorageSystemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStorageSystemCommand}.
 */
export interface DescribeStorageSystemCommandInput extends DescribeStorageSystemRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStorageSystemCommand}.
 */
export interface DescribeStorageSystemCommandOutput extends DescribeStorageSystemResponse, __MetadataBearer {}

/**
 * <p>Returns information about an on-premises storage system that you're using with
 *       DataSync Discovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeStorageSystemCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeStorageSystemCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeStorageSystemRequest
 *   StorageSystemArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeStorageSystemCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorageSystemResponse
 * //   StorageSystemArn: "STRING_VALUE",
 * //   ServerConfiguration: { // DiscoveryServerConfiguration
 * //     ServerHostname: "STRING_VALUE", // required
 * //     ServerPort: Number("int"),
 * //   },
 * //   SystemType: "NetAppONTAP",
 * //   AgentArns: [ // DiscoveryAgentArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   Name: "STRING_VALUE",
 * //   ErrorMessage: "STRING_VALUE",
 * //   ConnectivityStatus: "PASS" || "FAIL" || "UNKNOWN",
 * //   CloudWatchLogGroupArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   SecretsManagerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStorageSystemCommandInput - {@link DescribeStorageSystemCommandInput}
 * @returns {@link DescribeStorageSystemCommandOutput}
 * @see {@link DescribeStorageSystemCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageSystemCommandOutput} for command's `response` shape.
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
export class DescribeStorageSystemCommand extends $Command
  .classBuilder<
    DescribeStorageSystemCommandInput,
    DescribeStorageSystemCommandOutput,
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
  .s("FmrsService", "DescribeStorageSystem", {})
  .n("DataSyncClient", "DescribeStorageSystemCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStorageSystemCommand)
  .de(de_DescribeStorageSystemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStorageSystemRequest;
      output: DescribeStorageSystemResponse;
    };
    sdk: {
      input: DescribeStorageSystemCommandInput;
      output: DescribeStorageSystemCommandOutput;
    };
  };
}
