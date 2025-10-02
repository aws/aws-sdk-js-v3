// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocationEfsRequest, DescribeLocationEfsResponse } from "../models/models_0";
import { de_DescribeLocationEfsCommand, se_DescribeLocationEfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationEfsCommand}.
 */
export interface DescribeLocationEfsCommandInput extends DescribeLocationEfsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationEfsCommand}.
 */
export interface DescribeLocationEfsCommandOutput extends DescribeLocationEfsResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for an Amazon EFS file system is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationEfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationEfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationEfsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationEfsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationEfsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   Ec2Config: { // Ec2Config
 * //     SubnetArn: "STRING_VALUE", // required
 * //     SecurityGroupArns: [ // Ec2SecurityGroupArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   AccessPointArn: "STRING_VALUE",
 * //   FileSystemAccessRoleArn: "STRING_VALUE",
 * //   InTransitEncryption: "NONE" || "TLS1_2",
 * // };
 *
 * ```
 *
 * @param DescribeLocationEfsCommandInput - {@link DescribeLocationEfsCommandInput}
 * @returns {@link DescribeLocationEfsCommandOutput}
 * @see {@link DescribeLocationEfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationEfsCommandOutput} for command's `response` shape.
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
export class DescribeLocationEfsCommand extends $Command
  .classBuilder<
    DescribeLocationEfsCommandInput,
    DescribeLocationEfsCommandOutput,
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
  .s("FmrsService", "DescribeLocationEfs", {})
  .n("DataSyncClient", "DescribeLocationEfsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLocationEfsCommand)
  .de(de_DescribeLocationEfsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationEfsRequest;
      output: DescribeLocationEfsResponse;
    };
    sdk: {
      input: DescribeLocationEfsCommandInput;
      output: DescribeLocationEfsCommandOutput;
    };
  };
}
