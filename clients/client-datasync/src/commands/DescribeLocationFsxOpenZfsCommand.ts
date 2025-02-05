// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeLocationFsxOpenZfsRequest,
  DescribeLocationFsxOpenZfsResponse,
  DescribeLocationFsxOpenZfsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeLocationFsxOpenZfsCommand, se_DescribeLocationFsxOpenZfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationFsxOpenZfsCommand}.
 */
export interface DescribeLocationFsxOpenZfsCommandInput extends DescribeLocationFsxOpenZfsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationFsxOpenZfsCommand}.
 */
export interface DescribeLocationFsxOpenZfsCommandOutput extends DescribeLocationFsxOpenZfsResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for an Amazon FSx for OpenZFS file system is configured.</p>
 *          <note>
 *             <p>Response elements related to <code>SMB</code> aren't supported with the
 *           <code>DescribeLocationFsxOpenZfs</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxOpenZfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxOpenZfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationFsxOpenZfsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationFsxOpenZfsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationFsxOpenZfsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   SecurityGroupArns: [ // Ec2SecurityGroupArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   Protocol: { // FsxProtocol
 * //     NFS: { // FsxProtocolNfs
 * //       MountOptions: { // NfsMountOptions
 * //         Version: "AUTOMATIC" || "NFS3" || "NFS4_0" || "NFS4_1",
 * //       },
 * //     },
 * //     SMB: { // FsxProtocolSmb
 * //       Domain: "STRING_VALUE",
 * //       MountOptions: { // SmbMountOptions
 * //         Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 * //       },
 * //       Password: "STRING_VALUE", // required
 * //       User: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeLocationFsxOpenZfsCommandInput - {@link DescribeLocationFsxOpenZfsCommandInput}
 * @returns {@link DescribeLocationFsxOpenZfsCommandOutput}
 * @see {@link DescribeLocationFsxOpenZfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxOpenZfsCommandOutput} for command's `response` shape.
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
export class DescribeLocationFsxOpenZfsCommand extends $Command
  .classBuilder<
    DescribeLocationFsxOpenZfsCommandInput,
    DescribeLocationFsxOpenZfsCommandOutput,
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
  .s("FmrsService", "DescribeLocationFsxOpenZfs", {})
  .n("DataSyncClient", "DescribeLocationFsxOpenZfsCommand")
  .f(void 0, DescribeLocationFsxOpenZfsResponseFilterSensitiveLog)
  .ser(se_DescribeLocationFsxOpenZfsCommand)
  .de(de_DescribeLocationFsxOpenZfsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationFsxOpenZfsRequest;
      output: DescribeLocationFsxOpenZfsResponse;
    };
    sdk: {
      input: DescribeLocationFsxOpenZfsCommandInput;
      output: DescribeLocationFsxOpenZfsCommandOutput;
    };
  };
}
