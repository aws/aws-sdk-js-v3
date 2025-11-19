// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFoldersRequest, ListFoldersResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListFolders } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFoldersCommand}.
 */
export interface ListFoldersCommandInput extends ListFoldersRequest {}
/**
 * @public
 *
 * The output of {@link ListFoldersCommand}.
 */
export interface ListFoldersCommandOutput extends ListFoldersResponse, __MetadataBearer {}

/**
 * <p>Lists all folders in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListFoldersCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListFoldersCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListFoldersRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFoldersCommand(input);
 * const response = await client.send(command);
 * // { // ListFoldersResponse
 * //   Status: Number("int"),
 * //   FolderSummaryList: [ // FolderSummaryList
 * //     { // FolderSummary
 * //       Arn: "STRING_VALUE",
 * //       FolderId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       FolderType: "SHARED" || "RESTRICTED",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       SharingModel: "ACCOUNT" || "NAMESPACE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFoldersCommandInput - {@link ListFoldersCommandInput}
 * @returns {@link ListFoldersCommandOutput}
 * @see {@link ListFoldersCommandInput} for command's `input` shape.
 * @see {@link ListFoldersCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListFoldersCommand extends $Command
  .classBuilder<
    ListFoldersCommandInput,
    ListFoldersCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListFolders", {})
  .n("QuickSightClient", "ListFoldersCommand")
  .sc(ListFolders)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFoldersRequest;
      output: ListFoldersResponse;
    };
    sdk: {
      input: ListFoldersCommandInput;
      output: ListFoldersCommandOutput;
    };
  };
}
