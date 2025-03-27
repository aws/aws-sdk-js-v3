// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStorageSystemsRequest, ListStorageSystemsResponse } from "../models/models_0";
import { de_ListStorageSystemsCommand, se_ListStorageSystemsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStorageSystemsCommand}.
 */
export interface ListStorageSystemsCommandInput extends ListStorageSystemsRequest {}
/**
 * @public
 *
 * The output of {@link ListStorageSystemsCommand}.
 */
export interface ListStorageSystemsCommandOutput extends ListStorageSystemsResponse, __MetadataBearer {}

/**
 * <p>Lists the on-premises storage systems that you're using with DataSync Discovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListStorageSystemsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListStorageSystemsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // ListStorageSystemsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListStorageSystemsCommand(input);
 * const response = await client.send(command);
 * // { // ListStorageSystemsResponse
 * //   StorageSystems: [ // StorageSystemList
 * //     { // StorageSystemListEntry
 * //       StorageSystemArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStorageSystemsCommandInput - {@link ListStorageSystemsCommandInput}
 * @returns {@link ListStorageSystemsCommandOutput}
 * @see {@link ListStorageSystemsCommandInput} for command's `input` shape.
 * @see {@link ListStorageSystemsCommandOutput} for command's `response` shape.
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
export class ListStorageSystemsCommand extends $Command
  .classBuilder<
    ListStorageSystemsCommandInput,
    ListStorageSystemsCommandOutput,
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
  .s("FmrsService", "ListStorageSystems", {})
  .n("DataSyncClient", "ListStorageSystemsCommand")
  .f(void 0, void 0)
  .ser(se_ListStorageSystemsCommand)
  .de(de_ListStorageSystemsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStorageSystemsRequest;
      output: ListStorageSystemsResponse;
    };
    sdk: {
      input: ListStorageSystemsCommandInput;
      output: ListStorageSystemsCommandOutput;
    };
  };
}
