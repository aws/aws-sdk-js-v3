// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateApprovalTeamRequest, UpdateApprovalTeamResponse } from "../models/models_0";
import { UpdateApprovalTeam$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateApprovalTeamCommand}.
 */
export interface UpdateApprovalTeamCommandInput extends UpdateApprovalTeamRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApprovalTeamCommand}.
 */
export interface UpdateApprovalTeamCommandOutput extends UpdateApprovalTeamResponse, __MetadataBearer {}

/**
 * Updates an approval team. You can request to update the team description, approval threshold, and approvers in the team.
 *
 * > **Note:**
 * >
 * > **Updates require team approval**
 * >
 * > Updates to an active team must be approved by the team.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, UpdateApprovalTeamCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, UpdateApprovalTeamCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // UpdateApprovalTeamRequest
 *   ApprovalStrategy: { // ApprovalStrategy Union: only one key present
 *     MofN: { // MofNApprovalStrategy
 *       MinApprovalsRequired: Number("int"), // required
 *     },
 *   },
 *   Approvers: [ // ApprovalTeamRequestApprovers
 *     { // ApprovalTeamRequestApprover
 *       PrimaryIdentityId: "STRING_VALUE", // required
 *       PrimaryIdentitySourceArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   Description: "STRING_VALUE",
 *   Arn: "STRING_VALUE", // required
 *   UpdateActions: [ // UpdateActions
 *     "SYNCHRONIZE_MFA_DEVICES",
 *   ],
 * };
 * const command = new UpdateApprovalTeamCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApprovalTeamResponse
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateApprovalTeamCommandInput - {@link UpdateApprovalTeamCommandInput}
 * @returns {@link UpdateApprovalTeamCommandOutput}
 * @see {@link UpdateApprovalTeamCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalTeamCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds the service quota for your account. Request a quota increase or reduce your request size.
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
export class UpdateApprovalTeamCommand extends command<UpdateApprovalTeamCommandInput, UpdateApprovalTeamCommandOutput>(
  _ep0,
  _mw0,
  "UpdateApprovalTeam",
  UpdateApprovalTeam$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApprovalTeamRequest;
      output: UpdateApprovalTeamResponse;
    };
    sdk: {
      input: UpdateApprovalTeamCommandInput;
      output: UpdateApprovalTeamCommandOutput;
    };
  };
}
