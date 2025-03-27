// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFoldersForResourceRequest, ListFoldersForResourceResponse } from "../models/models_4";
import { de_ListFoldersForResourceCommand, se_ListFoldersForResourceCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFoldersForResourceCommand}.
 */
export interface ListFoldersForResourceCommandInput extends ListFoldersForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListFoldersForResourceCommand}.
 */
export interface ListFoldersForResourceCommandOutput extends ListFoldersForResourceResponse, __MetadataBearer {}

/**
 * <p>List all folders that a resource is a member of.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListFoldersForResourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListFoldersForResourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListFoldersForResourceRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFoldersForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListFoldersForResourceResponse
 * //   Status: Number("int"),
 * //   Folders: [ // FoldersForResourceArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFoldersForResourceCommandInput - {@link ListFoldersForResourceCommandInput}
 * @returns {@link ListFoldersForResourceCommandOutput}
 * @see {@link ListFoldersForResourceCommandInput} for command's `input` shape.
 * @see {@link ListFoldersForResourceCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListFoldersForResourceCommand extends $Command
  .classBuilder<
    ListFoldersForResourceCommandInput,
    ListFoldersForResourceCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "ListFoldersForResource", {})
  .n("QuickSightClient", "ListFoldersForResourceCommand")
  .f(void 0, void 0)
  .ser(se_ListFoldersForResourceCommand)
  .de(de_ListFoldersForResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFoldersForResourceRequest;
      output: ListFoldersForResourceResponse;
    };
    sdk: {
      input: ListFoldersForResourceCommandInput;
      output: ListFoldersForResourceCommandOutput;
    };
  };
}
