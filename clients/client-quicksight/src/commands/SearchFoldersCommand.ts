// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchFoldersRequest, SearchFoldersResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { SearchFolders } from "../schemas/schemas_48_Folder";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchFoldersCommand}.
 */
export interface SearchFoldersCommandInput extends SearchFoldersRequest {}
/**
 * @public
 *
 * The output of {@link SearchFoldersCommand}.
 */
export interface SearchFoldersCommandOutput extends SearchFoldersResponse, __MetadataBearer {}

/**
 * <p>Searches the subfolders in a folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchFoldersCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchFoldersCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // SearchFoldersRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Filters: [ // FolderSearchFilterList // required
 *     { // FolderSearchFilter
 *       Operator: "StringEquals" || "StringLike",
 *       Name: "PARENT_FOLDER_ARN" || "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_SOLE_OWNER" || "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER" || "QUICKSIGHT_OWNER" || "QUICKSIGHT_VIEWER_OR_OWNER" || "FOLDER_NAME",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchFoldersCommand(input);
 * const response = await client.send(command);
 * // { // SearchFoldersResponse
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
 * @param SearchFoldersCommandInput - {@link SearchFoldersCommandInput}
 * @returns {@link SearchFoldersCommandOutput}
 * @see {@link SearchFoldersCommandInput} for command's `input` shape.
 * @see {@link SearchFoldersCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class SearchFoldersCommand extends $Command
  .classBuilder<
    SearchFoldersCommandInput,
    SearchFoldersCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "SearchFolders", {})
  .n("QuickSightClient", "SearchFoldersCommand")
  .sc(SearchFolders)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchFoldersRequest;
      output: SearchFoldersResponse;
    };
    sdk: {
      input: SearchFoldersCommandInput;
      output: SearchFoldersCommandOutput;
    };
  };
}
