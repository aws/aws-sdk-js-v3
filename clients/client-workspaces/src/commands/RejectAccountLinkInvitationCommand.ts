// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RejectAccountLinkInvitationRequest, RejectAccountLinkInvitationResult } from "../models/models_0";
import { RejectAccountLinkInvitation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Rejects the account link invitation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RejectAccountLinkInvitationCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RejectAccountLinkInvitationCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The `TargetAccountId` is already linked or invited.
 *
 * @throws {@link InternalServerException} (client fault)
 *
 * Unexpected server error occured.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You either haven't provided a `TargetAccountId` or are using the same value for `TargetAccountId` and `SourceAccountId`.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class RejectAccountLinkInvitationCommand extends command<RejectAccountLinkInvitationCommandInput, RejectAccountLinkInvitationCommandOutput>(
  _ep0,
  _mw0,
  "RejectAccountLinkInvitation",
  RejectAccountLinkInvitation$
) {
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
