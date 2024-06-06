// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTemplateVersionsRequest, ListTemplateVersionsResponse } from "../models/models_4";
import { de_ListTemplateVersionsCommand, se_ListTemplateVersionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTemplateVersionsCommand}.
 */
export interface ListTemplateVersionsCommandInput extends ListTemplateVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplateVersionsCommand}.
 */
export interface ListTemplateVersionsCommandOutput extends ListTemplateVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the versions of the templates in the current Amazon QuickSight account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListTemplateVersionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListTemplateVersionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListTemplateVersionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateVersionsResponse
 * //   TemplateVersionSummaryList: [ // TemplateVersionSummaryList
 * //     { // TemplateVersionSummary
 * //       Arn: "STRING_VALUE",
 * //       VersionNumber: Number("long"),
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTemplateVersionsCommandInput - {@link ListTemplateVersionsCommandInput}
 * @returns {@link ListTemplateVersionsCommandOutput}
 * @see {@link ListTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
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
 * @public
 */
export class ListTemplateVersionsCommand extends $Command
  .classBuilder<
    ListTemplateVersionsCommandInput,
    ListTemplateVersionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "ListTemplateVersions", {})
  .n("QuickSightClient", "ListTemplateVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListTemplateVersionsCommand)
  .de(de_ListTemplateVersionsCommand)
  .build() {}
