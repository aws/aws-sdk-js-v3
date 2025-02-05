// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLocationFsxLustreRequest, CreateLocationFsxLustreResponse } from "../models/models_0";
import { de_CreateLocationFsxLustreCommand, se_CreateLocationFsxLustreCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationFsxLustreCommand}.
 */
export interface CreateLocationFsxLustreCommandInput extends CreateLocationFsxLustreRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationFsxLustreCommand}.
 */
export interface CreateLocationFsxLustreCommandOutput extends CreateLocationFsxLustreResponse, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for an Amazon FSx for Lustre file system.
 *       DataSync can use this location as a source or destination for transferring
 *       data.</p>
 *          <p>Before you begin, make sure that you understand how DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-lustre-location.html#create-lustre-location-access">accesses FSx for Lustre file systems</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxLustreCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxLustreCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationFsxLustreRequest
 *   FsxFilesystemArn: "STRING_VALUE", // required
 *   SecurityGroupArns: [ // Ec2SecurityGroupArnList // required
 *     "STRING_VALUE",
 *   ],
 *   Subdirectory: "STRING_VALUE",
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationFsxLustreCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationFsxLustreResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationFsxLustreCommandInput - {@link CreateLocationFsxLustreCommandInput}
 * @returns {@link CreateLocationFsxLustreCommandOutput}
 * @see {@link CreateLocationFsxLustreCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxLustreCommandOutput} for command's `response` shape.
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
export class CreateLocationFsxLustreCommand extends $Command
  .classBuilder<
    CreateLocationFsxLustreCommandInput,
    CreateLocationFsxLustreCommandOutput,
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
  .s("FmrsService", "CreateLocationFsxLustre", {})
  .n("DataSyncClient", "CreateLocationFsxLustreCommand")
  .f(void 0, void 0)
  .ser(se_CreateLocationFsxLustreCommand)
  .de(de_CreateLocationFsxLustreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationFsxLustreRequest;
      output: CreateLocationFsxLustreResponse;
    };
    sdk: {
      input: CreateLocationFsxLustreCommandInput;
      output: CreateLocationFsxLustreCommandOutput;
    };
  };
}
