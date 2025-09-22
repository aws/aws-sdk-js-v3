// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFolderMembershipRequest, CreateFolderMembershipResponse } from "../models/models_3";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateFolderMembership } from "../schemas/schemas_3_FolderMembership";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFolderMembershipCommand}.
 */
export interface CreateFolderMembershipCommandInput extends CreateFolderMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateFolderMembershipCommand}.
 */
export interface CreateFolderMembershipCommandOutput extends CreateFolderMembershipResponse, __MetadataBearer {}

/**
 * <p>Adds an asset, such as a dashboard, analysis, or dataset into a folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateFolderMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateFolderMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateFolderMembershipRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   FolderId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE", // required
 *   MemberType: "DASHBOARD" || "ANALYSIS" || "DATASET" || "DATASOURCE" || "TOPIC", // required
 * };
 * const command = new CreateFolderMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateFolderMembershipResponse
 * //   Status: Number("int"),
 * //   FolderMember: { // FolderMember
 * //     MemberId: "STRING_VALUE",
 * //     MemberType: "DASHBOARD" || "ANALYSIS" || "DATASET" || "DATASOURCE" || "TOPIC",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFolderMembershipCommandInput - {@link CreateFolderMembershipCommandInput}
 * @returns {@link CreateFolderMembershipCommandOutput}
 * @see {@link CreateFolderMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateFolderMembershipCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class CreateFolderMembershipCommand extends $Command
  .classBuilder<
    CreateFolderMembershipCommandInput,
    CreateFolderMembershipCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "CreateFolderMembership", {})
  .n("QuickSightClient", "CreateFolderMembershipCommand")
  .sc(CreateFolderMembership)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFolderMembershipRequest;
      output: CreateFolderMembershipResponse;
    };
    sdk: {
      input: CreateFolderMembershipCommandInput;
      output: CreateFolderMembershipCommandOutput;
    };
  };
}
