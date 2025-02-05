// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLocationHdfsRequest, CreateLocationHdfsResponse } from "../models/models_0";
import { de_CreateLocationHdfsCommand, se_CreateLocationHdfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationHdfsCommand}.
 */
export interface CreateLocationHdfsCommandInput extends CreateLocationHdfsRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationHdfsCommand}.
 */
export interface CreateLocationHdfsCommandOutput extends CreateLocationHdfsResponse, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for a Hadoop Distributed File System
 *       (HDFS). DataSync can use this location as a source or destination for
 *       transferring data.</p>
 *          <p>Before you begin, make sure that you understand how DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-hdfs-location.html#accessing-hdfs">accesses
 *         HDFS clusters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationHdfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationHdfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationHdfsRequest
 *   Subdirectory: "STRING_VALUE",
 *   NameNodes: [ // HdfsNameNodeList // required
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
 *   AuthenticationType: "SIMPLE" || "KERBEROS", // required
 *   SimpleUser: "STRING_VALUE",
 *   KerberosPrincipal: "STRING_VALUE",
 *   KerberosKeytab: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   KerberosKrb5Conf: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   AgentArns: [ // AgentArnList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationHdfsCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationHdfsResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationHdfsCommandInput - {@link CreateLocationHdfsCommandInput}
 * @returns {@link CreateLocationHdfsCommandOutput}
 * @see {@link CreateLocationHdfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationHdfsCommandOutput} for command's `response` shape.
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
export class CreateLocationHdfsCommand extends $Command
  .classBuilder<
    CreateLocationHdfsCommandInput,
    CreateLocationHdfsCommandOutput,
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
  .s("FmrsService", "CreateLocationHdfs", {})
  .n("DataSyncClient", "CreateLocationHdfsCommand")
  .f(void 0, void 0)
  .ser(se_CreateLocationHdfsCommand)
  .de(de_CreateLocationHdfsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationHdfsRequest;
      output: CreateLocationHdfsResponse;
    };
    sdk: {
      input: CreateLocationHdfsCommandInput;
      output: CreateLocationHdfsCommandOutput;
    };
  };
}
