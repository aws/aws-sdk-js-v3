// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeLocationFsxOntapRequest,
  DescribeLocationFsxOntapResponse,
  DescribeLocationFsxOntapResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeLocationFsxOntapCommand, se_DescribeLocationFsxOntapCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationFsxOntapCommand}.
 */
export interface DescribeLocationFsxOntapCommandInput extends DescribeLocationFsxOntapRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationFsxOntapCommand}.
 */
export interface DescribeLocationFsxOntapCommandOutput extends DescribeLocationFsxOntapResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for an Amazon FSx for NetApp ONTAP file system is configured.</p>
 *          <note>
 *             <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't
 *         actually return a <code>Password</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxOntapCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxOntapCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationFsxOntapRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationFsxOntapCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationFsxOntapResponse
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
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
 * //   SecurityGroupArns: [ // Ec2SecurityGroupArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   StorageVirtualMachineArn: "STRING_VALUE",
 * //   FsxFilesystemArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLocationFsxOntapCommandInput - {@link DescribeLocationFsxOntapCommandInput}
 * @returns {@link DescribeLocationFsxOntapCommandOutput}
 * @see {@link DescribeLocationFsxOntapCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxOntapCommandOutput} for command's `response` shape.
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
export class DescribeLocationFsxOntapCommand extends $Command
  .classBuilder<
    DescribeLocationFsxOntapCommandInput,
    DescribeLocationFsxOntapCommandOutput,
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
  .s("FmrsService", "DescribeLocationFsxOntap", {})
  .n("DataSyncClient", "DescribeLocationFsxOntapCommand")
  .f(void 0, DescribeLocationFsxOntapResponseFilterSensitiveLog)
  .ser(se_DescribeLocationFsxOntapCommand)
  .de(de_DescribeLocationFsxOntapCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationFsxOntapRequest;
      output: DescribeLocationFsxOntapResponse;
    };
    sdk: {
      input: DescribeLocationFsxOntapCommandInput;
      output: DescribeLocationFsxOntapCommandOutput;
    };
  };
}
