// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAccountLinkInvitationRequest, CreateAccountLinkInvitationResult } from "../models/models_0";
import { CreateAccountLinkInvitation$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccountLinkInvitationCommand}.
 */
export interface CreateAccountLinkInvitationCommandInput extends CreateAccountLinkInvitationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccountLinkInvitationCommand}.
 */
export interface CreateAccountLinkInvitationCommandOutput extends CreateAccountLinkInvitationResult, __MetadataBearer {}

/**
 * <p>Creates the account link invitation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateAccountLinkInvitationCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateAccountLinkInvitationCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateAccountLinkInvitationRequest
 *   TargetAccountId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateAccountLinkInvitationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccountLinkInvitationResult
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
 * @param CreateAccountLinkInvitationCommandInput - {@link CreateAccountLinkInvitationCommandInput}
 * @returns {@link CreateAccountLinkInvitationCommandOutput}
 * @see {@link CreateAccountLinkInvitationCommandInput} for command's `input` shape.
 * @see {@link CreateAccountLinkInvitationCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>You either haven't provided a <code>TargetAccountId</code> or
 *          are using the same value for <code>TargetAccountId</code> and <code>SourceAccountId</code>.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class CreateAccountLinkInvitationCommand extends $Command
  .classBuilder<
    CreateAccountLinkInvitationCommandInput,
    CreateAccountLinkInvitationCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "CreateAccountLinkInvitation", {})
  .n("WorkSpacesClient", "CreateAccountLinkInvitationCommand")
  .sc(CreateAccountLinkInvitation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccountLinkInvitationRequest;
      output: CreateAccountLinkInvitationResult;
    };
    sdk: {
      input: CreateAccountLinkInvitationCommandInput;
      output: CreateAccountLinkInvitationCommandOutput;
    };
  };
}
