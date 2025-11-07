// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocationHdfsRequest, DescribeLocationHdfsResponse } from "../models/models_0";
import { DescribeLocationHdfs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationHdfsCommand}.
 */
export interface DescribeLocationHdfsCommandInput extends DescribeLocationHdfsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationHdfsCommand}.
 */
export interface DescribeLocationHdfsCommandOutput extends DescribeLocationHdfsResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for a Hadoop
 *       Distributed File System (HDFS) is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationHdfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationHdfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationHdfsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationHdfsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationHdfsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   NameNodes: [ // HdfsNameNodeList
 * //     { // HdfsNameNode
 * //       Hostname: "STRING_VALUE", // required
 * //       Port: Number("int"), // required
 * //     },
 * //   ],
 * //   BlockSize: Number("int"),
 * //   ReplicationFactor: Number("int"),
 * //   KmsKeyProviderUri: "STRING_VALUE",
 * //   QopConfiguration: { // QopConfiguration
 * //     RpcProtection: "DISABLED" || "AUTHENTICATION" || "INTEGRITY" || "PRIVACY",
 * //     DataTransferProtection: "DISABLED" || "AUTHENTICATION" || "INTEGRITY" || "PRIVACY",
 * //   },
 * //   AuthenticationType: "SIMPLE" || "KERBEROS",
 * //   SimpleUser: "STRING_VALUE",
 * //   KerberosPrincipal: "STRING_VALUE",
 * //   AgentArns: [ // AgentArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeLocationHdfsCommandInput - {@link DescribeLocationHdfsCommandInput}
 * @returns {@link DescribeLocationHdfsCommandOutput}
 * @see {@link DescribeLocationHdfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationHdfsCommandOutput} for command's `response` shape.
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
export class DescribeLocationHdfsCommand extends $Command
  .classBuilder<
    DescribeLocationHdfsCommandInput,
    DescribeLocationHdfsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "DescribeLocationHdfs", {})
  .n("DataSyncClient", "DescribeLocationHdfsCommand")
  .sc(DescribeLocationHdfs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationHdfsRequest;
      output: DescribeLocationHdfsResponse;
    };
    sdk: {
      input: DescribeLocationHdfsCommandInput;
      output: DescribeLocationHdfsCommandOutput;
    };
  };
}
