// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateLocationFsxWindowsRequest, CreateLocationFsxWindowsResponse } from "../models/models_0";
import { CreateLocationFsxWindows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationFsxWindowsCommand}.
 */
export interface CreateLocationFsxWindowsCommandInput extends CreateLocationFsxWindowsRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationFsxWindowsCommand}.
 */
export interface CreateLocationFsxWindowsCommandOutput extends CreateLocationFsxWindowsResponse, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for an Amazon FSx for Windows File Server file
 *       system. DataSync can use this location as a source or destination for
 *       transferring data.</p>
 *          <p>Before you begin, make sure that you understand how DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-fsx-location.html#create-fsx-location-access">accesses
 *           FSx for Windows File Server file systems</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxWindowsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxWindowsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationFsxWindowsRequest
 *   Subdirectory: "STRING_VALUE",
 *   FsxFilesystemArn: "STRING_VALUE", // required
 *   SecurityGroupArns: [ // Ec2SecurityGroupArnList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   User: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE",
 *   Password: "STRING_VALUE", // required
 * };
 * const command = new CreateLocationFsxWindowsCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationFsxWindowsResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationFsxWindowsCommandInput - {@link CreateLocationFsxWindowsCommandInput}
 * @returns {@link CreateLocationFsxWindowsCommandOutput}
 * @see {@link CreateLocationFsxWindowsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxWindowsCommandOutput} for command's `response` shape.
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
export class CreateLocationFsxWindowsCommand extends $Command
  .classBuilder<
    CreateLocationFsxWindowsCommandInput,
    CreateLocationFsxWindowsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "CreateLocationFsxWindows", {})
  .n("DataSyncClient", "CreateLocationFsxWindowsCommand")
  .sc(CreateLocationFsxWindows$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationFsxWindowsRequest;
      output: CreateLocationFsxWindowsResponse;
    };
    sdk: {
      input: CreateLocationFsxWindowsCommandInput;
      output: CreateLocationFsxWindowsCommandOutput;
    };
  };
}
