// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RejectAccountLinkInvitationRequest, RejectAccountLinkInvitationResult } from "../models/models_1";
import { de_RejectAccountLinkInvitationCommand, se_RejectAccountLinkInvitationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectAccountLinkInvitationCommand}.
 */
export interface RejectAccountLinkInvitationCommandInput extends RejectAccountLinkInvitationRequest {}
/**
 * @public
 *
 * The output of {@link RejectAccountLinkInvitationCommand}.
 */
export interface RejectAccountLinkInvitationCommandOutput extends RejectAccountLinkInvitationResult, __MetadataBearer {}

/**
 * <p>Rejects the account link invitation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RejectAccountLinkInvitationCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RejectAccountLinkInvitationCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // RejectAccountLinkInvitationRequest
 *   LinkId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new RejectAccountLinkInvitationCommand(input);
 * const response = await client.send(command);
 * // { // RejectAccountLinkInvitationResult
 * //   AccountLink: { // AccountLink
 * //     AccountLinkId: "STRING_VALUE",
 * //     AccountLinkStatus: "LINKED" || "LINKING_FAILED" || "LINK_NOT_FOUND" || "PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT" || "REJECTED",
 * //     SourceAccountId: "STRING_VALUE",
 * //     TargetAccountId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RejectAccountLinkInvitationCommandInput - {@link RejectAccountLinkInvitationCommandInput}
 * @returns {@link RejectAccountLinkInvitationCommandOutput}
 * @see {@link RejectAccountLinkInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectAccountLinkInvitationCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The <code>TargetAccountId</code> is already linked or invited.</p>
 *
 * @throws {@link InternalServerException} (client fault)
 *  <p>Unexpected server error occured.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You either haven't provided a <code>TargetAccountId</code> or
 *          are using the same value for <code>TargetAccountId</code> and <code>SourceAccountId</code>.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class RejectAccountLinkInvitationCommand extends $Command
  .classBuilder<
    RejectAccountLinkInvitationCommandInput,
    RejectAccountLinkInvitationCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "RejectAccountLinkInvitation", {})
  .n("WorkSpacesClient", "RejectAccountLinkInvitationCommand")
  .f(void 0, void 0)
  .ser(se_RejectAccountLinkInvitationCommand)
  .de(de_RejectAccountLinkInvitationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectAccountLinkInvitationRequest;
      output: RejectAccountLinkInvitationResult;
    };
    sdk: {
      input: RejectAccountLinkInvitationCommandInput;
      output: RejectAccountLinkInvitationCommandOutput;
    };
  };
}
