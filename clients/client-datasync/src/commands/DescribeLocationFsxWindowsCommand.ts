// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocationFsxWindowsRequest, DescribeLocationFsxWindowsResponse } from "../models/models_0";
import { de_DescribeLocationFsxWindowsCommand, se_DescribeLocationFsxWindowsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationFsxWindowsCommand}.
 */
export interface DescribeLocationFsxWindowsCommandInput extends DescribeLocationFsxWindowsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationFsxWindowsCommand}.
 */
export interface DescribeLocationFsxWindowsCommandOutput extends DescribeLocationFsxWindowsResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for an Amazon FSx for Windows File Server file system is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxWindowsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxWindowsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationFsxWindowsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationFsxWindowsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationFsxWindowsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   SecurityGroupArns: [ // Ec2SecurityGroupArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   User: "STRING_VALUE",
 * //   Domain: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLocationFsxWindowsCommandInput - {@link DescribeLocationFsxWindowsCommandInput}
 * @returns {@link DescribeLocationFsxWindowsCommandOutput}
 * @see {@link DescribeLocationFsxWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxWindowsCommandOutput} for command's `response` shape.
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
export class DescribeLocationFsxWindowsCommand extends $Command
  .classBuilder<
    DescribeLocationFsxWindowsCommandInput,
    DescribeLocationFsxWindowsCommandOutput,
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
  .s("FmrsService", "DescribeLocationFsxWindows", {})
  .n("DataSyncClient", "DescribeLocationFsxWindowsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLocationFsxWindowsCommand)
  .de(de_DescribeLocationFsxWindowsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationFsxWindowsRequest;
      output: DescribeLocationFsxWindowsResponse;
    };
    sdk: {
      input: DescribeLocationFsxWindowsCommandInput;
      output: DescribeLocationFsxWindowsCommandOutput;
    };
  };
}
