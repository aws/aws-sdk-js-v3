// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDiscoveryJobRequest, DescribeDiscoveryJobResponse } from "../models/models_0";
import { de_DescribeDiscoveryJobCommand, se_DescribeDiscoveryJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDiscoveryJobCommand}.
 */
export interface DescribeDiscoveryJobCommandInput extends DescribeDiscoveryJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDiscoveryJobCommand}.
 */
export interface DescribeDiscoveryJobCommandOutput extends DescribeDiscoveryJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a DataSync discovery job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeDiscoveryJobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeDiscoveryJobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataSyncClient(config);
 * const input = { // DescribeDiscoveryJobRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDiscoveryJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDiscoveryJobResponse
 * //   StorageSystemArn: "STRING_VALUE",
 * //   DiscoveryJobArn: "STRING_VALUE",
 * //   CollectionDurationMinutes: Number("int"),
 * //   Status: "RUNNING" || "WARNING" || "TERMINATED" || "FAILED" || "STOPPED" || "COMPLETED" || "COMPLETED_WITH_ISSUES",
 * //   JobStartTime: new Date("TIMESTAMP"),
 * //   JobEndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeDiscoveryJobCommandInput - {@link DescribeDiscoveryJobCommandInput}
 * @returns {@link DescribeDiscoveryJobCommandOutput}
 * @see {@link DescribeDiscoveryJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDiscoveryJobCommandOutput} for command's `response` shape.
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
export class DescribeDiscoveryJobCommand extends $Command
  .classBuilder<
    DescribeDiscoveryJobCommandInput,
    DescribeDiscoveryJobCommandOutput,
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
  .s("FmrsService", "DescribeDiscoveryJob", {})
  .n("DataSyncClient", "DescribeDiscoveryJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDiscoveryJobCommand)
  .de(de_DescribeDiscoveryJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDiscoveryJobRequest;
      output: DescribeDiscoveryJobResponse;
    };
    sdk: {
      input: DescribeDiscoveryJobCommandInput;
      output: DescribeDiscoveryJobCommandOutput;
    };
  };
}
