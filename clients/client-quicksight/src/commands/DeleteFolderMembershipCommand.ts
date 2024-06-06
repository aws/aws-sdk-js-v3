// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFolderMembershipRequest, DeleteFolderMembershipResponse } from "../models/models_3";
import { de_DeleteFolderMembershipCommand, se_DeleteFolderMembershipCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFolderMembershipCommand}.
 */
export interface DeleteFolderMembershipCommandInput extends DeleteFolderMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFolderMembershipCommand}.
 */
export interface DeleteFolderMembershipCommandOutput extends DeleteFolderMembershipResponse, __MetadataBearer {}

/**
 * <p>Removes an asset, such as a dashboard, analysis, or dataset, from a folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteFolderMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteFolderMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DeleteFolderMembershipRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   FolderId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE", // required
 *   MemberType: "DASHBOARD" || "ANALYSIS" || "DATASET" || "DATASOURCE" || "TOPIC", // required
 * };
 * const command = new DeleteFolderMembershipCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFolderMembershipResponse
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteFolderMembershipCommandInput - {@link DeleteFolderMembershipCommandInput}
 * @returns {@link DeleteFolderMembershipCommandOutput}
 * @see {@link DeleteFolderMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteFolderMembershipCommandOutput} for command's `response` shape.
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
export class DeleteFolderMembershipCommand extends $Command
  .classBuilder<
    DeleteFolderMembershipCommandInput,
    DeleteFolderMembershipCommandOutput,
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
  .s("QuickSight_20180401", "DeleteFolderMembership", {})
  .n("QuickSightClient", "DeleteFolderMembershipCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFolderMembershipCommand)
  .de(de_DeleteFolderMembershipCommand)
  .build() {}
