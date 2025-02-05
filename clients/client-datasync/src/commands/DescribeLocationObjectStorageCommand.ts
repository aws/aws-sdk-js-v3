// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocationObjectStorageRequest, DescribeLocationObjectStorageResponse } from "../models/models_0";
import {
  de_DescribeLocationObjectStorageCommand,
  se_DescribeLocationObjectStorageCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationObjectStorageCommand}.
 */
export interface DescribeLocationObjectStorageCommandInput extends DescribeLocationObjectStorageRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationObjectStorageCommand}.
 */
export interface DescribeLocationObjectStorageCommandOutput
  extends DescribeLocationObjectStorageResponse,
    __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for an object
 *       storage system is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationObjectStorageRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationObjectStorageResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   AccessKey: "STRING_VALUE",
 * //   ServerPort: Number("int"),
 * //   ServerProtocol: "HTTPS" || "HTTP",
 * //   AgentArns: [ // AgentArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   ServerCertificate: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param DescribeLocationObjectStorageCommandInput - {@link DescribeLocationObjectStorageCommandInput}
 * @returns {@link DescribeLocationObjectStorageCommandOutput}
 * @see {@link DescribeLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationObjectStorageCommandOutput} for command's `response` shape.
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
export class DescribeLocationObjectStorageCommand extends $Command
  .classBuilder<
    DescribeLocationObjectStorageCommandInput,
    DescribeLocationObjectStorageCommandOutput,
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
  .s("FmrsService", "DescribeLocationObjectStorage", {})
  .n("DataSyncClient", "DescribeLocationObjectStorageCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLocationObjectStorageCommand)
  .de(de_DescribeLocationObjectStorageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationObjectStorageRequest;
      output: DescribeLocationObjectStorageResponse;
    };
    sdk: {
      input: DescribeLocationObjectStorageCommandInput;
      output: DescribeLocationObjectStorageCommandOutput;
    };
  };
}
