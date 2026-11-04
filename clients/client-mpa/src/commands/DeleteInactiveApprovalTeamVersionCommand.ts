// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteInactiveApprovalTeamVersionRequest,
  DeleteInactiveApprovalTeamVersionResponse,
} from "../models/models_0";
import { DeleteInactiveApprovalTeamVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInactiveApprovalTeamVersionCommand}.
 */
export interface DeleteInactiveApprovalTeamVersionCommandInput extends DeleteInactiveApprovalTeamVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInactiveApprovalTeamVersionCommand}.
 */
export interface DeleteInactiveApprovalTeamVersionCommandOutput extends DeleteInactiveApprovalTeamVersionResponse, __MetadataBearer {}

/**
 * Deletes an inactive approval team. For more information, see [Team health](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html) in the *Multi-party approval User Guide*.
 *
 * You can also use this operation to delete a team draft. For more information, see [Interacting with drafts](https://docs.aws.amazon.com/mpa/latest/userguide/update-team.html#update-team-draft-status) in the *Multi-party approval User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, DeleteInactiveApprovalTeamVersionCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, DeleteInactiveApprovalTeamVersionCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // DeleteInactiveApprovalTeamVersionRequest
 *   Arn: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInactiveApprovalTeamVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInactiveApprovalTeamVersionCommandInput - {@link DeleteInactiveApprovalTeamVersionCommandInput}
 * @returns {@link DeleteInactiveApprovalTeamVersionCommandOutput}
 * @see {@link DeleteInactiveApprovalTeamVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteInactiveApprovalTeamVersionCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action. Check your permissions, and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be completed because it conflicts with the current state of a resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist. Check the resource ID, and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link MPAServiceException}
 *
 * Base exception class for all service exceptions from MPA service.
 *
 * @public
 */
export class DeleteInactiveApprovalTeamVersionCommand extends command<DeleteInactiveApprovalTeamVersionCommandInput, DeleteInactiveApprovalTeamVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInactiveApprovalTeamVersion",
  DeleteInactiveApprovalTeamVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInactiveApprovalTeamVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteInactiveApprovalTeamVersionCommandInput;
      output: DeleteInactiveApprovalTeamVersionCommandOutput;
    };
  };
}
