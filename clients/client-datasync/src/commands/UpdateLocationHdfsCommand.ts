// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLocationHdfsRequest, UpdateLocationHdfsResponse } from "../models/models_0";
import { de_UpdateLocationHdfsCommand, se_UpdateLocationHdfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationHdfsCommand}.
 */
export interface UpdateLocationHdfsCommandInput extends UpdateLocationHdfsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationHdfsCommand}.
 */
export interface UpdateLocationHdfsCommandOutput extends UpdateLocationHdfsResponse, __MetadataBearer {}

/**
 * <p>Modifies the following configuration parameters of the Hadoop Distributed File System
 *       (HDFS) transfer location that you're using with DataSync.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-hdfs-location.html">Configuring DataSync
 *         transfers with an HDFS cluster</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationHdfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationHdfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationHdfsRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   NameNodes: [ // HdfsNameNodeList
 *     { // HdfsNameNode
 *       Hostname: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *     },
 *   ],
 *   BlockSize: Number("int"),
 *   ReplicationFactor: Number("int"),
 *   KmsKeyProviderUri: "STRING_VALUE",
 *   QopConfiguration: { // QopConfiguration
 *     RpcProtection: "DISABLED" || "AUTHENTICATION" || "INTEGRITY" || "PRIVACY",
 *     DataTransferProtection: "DISABLED" || "AUTHENTICATION" || "INTEGRITY" || "PRIVACY",
 *   },
 *   AuthenticationType: "SIMPLE" || "KERBEROS",
 *   SimpleUser: "STRING_VALUE",
 *   KerberosPrincipal: "STRING_VALUE",
 *   KerberosKeytab: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   KerberosKrb5Conf: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateLocationHdfsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationHdfsCommandInput - {@link UpdateLocationHdfsCommandInput}
 * @returns {@link UpdateLocationHdfsCommandOutput}
 * @see {@link UpdateLocationHdfsCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationHdfsCommandOutput} for command's `response` shape.
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
export class UpdateLocationHdfsCommand extends $Command
  .classBuilder<
    UpdateLocationHdfsCommandInput,
    UpdateLocationHdfsCommandOutput,
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
  .s("FmrsService", "UpdateLocationHdfs", {})
  .n("DataSyncClient", "UpdateLocationHdfsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLocationHdfsCommand)
  .de(de_UpdateLocationHdfsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationHdfsRequest;
      output: {};
    };
    sdk: {
      input: UpdateLocationHdfsCommandInput;
      output: UpdateLocationHdfsCommandOutput;
    };
  };
}
