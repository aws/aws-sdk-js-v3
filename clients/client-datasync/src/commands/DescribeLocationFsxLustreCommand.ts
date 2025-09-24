// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocationFsxLustreRequest, DescribeLocationFsxLustreResponse } from "../models/models_0";
import { DescribeLocationFsxLustre } from "../schemas/schemas_16_Location";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationFsxLustreCommand}.
 */
export interface DescribeLocationFsxLustreCommandInput extends DescribeLocationFsxLustreRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationFsxLustreCommand}.
 */
export interface DescribeLocationFsxLustreCommandOutput extends DescribeLocationFsxLustreResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync transfer location for an Amazon FSx for Lustre file system is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxLustreCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxLustreCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationFsxLustreRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationFsxLustreCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationFsxLustreResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   SecurityGroupArns: [ // Ec2SecurityGroupArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeLocationFsxLustreCommandInput - {@link DescribeLocationFsxLustreCommandInput}
 * @returns {@link DescribeLocationFsxLustreCommandOutput}
 * @see {@link DescribeLocationFsxLustreCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxLustreCommandOutput} for command's `response` shape.
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
export class DescribeLocationFsxLustreCommand extends $Command
  .classBuilder<
    DescribeLocationFsxLustreCommandInput,
    DescribeLocationFsxLustreCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "DescribeLocationFsxLustre", {})
  .n("DataSyncClient", "DescribeLocationFsxLustreCommand")
  .sc(DescribeLocationFsxLustre)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocationFsxLustreRequest;
      output: DescribeLocationFsxLustreResponse;
    };
    sdk: {
      input: DescribeLocationFsxLustreCommandInput;
      output: DescribeLocationFsxLustreCommandOutput;
    };
  };
}
