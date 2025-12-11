// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateApprovalTeamRequest, UpdateApprovalTeamResponse } from "../models/models_0";
import type { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { UpdateApprovalTeam } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates an approval team. You can request to update the team description, approval threshold, and approvers in the team.</p> <note> <p> <b>Updates require team approval</b> </p> <p>Updates to an active team must be approved by the team.</p> </note>
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
 *  <p>You do not have sufficient access to perform this action. Check your permissions, and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be completed because it conflicts with the current state of a resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check the resource ID, and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds the service quota for your account. Request a quota increase or reduce your request size.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link MPAServiceException}
 * <p>Base exception class for all service exceptions from MPA service.</p>
 *
 *
 * @public
 */
export class UpdateApprovalTeamCommand extends $Command
  .classBuilder<
    UpdateApprovalTeamCommandInput,
    UpdateApprovalTeamCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "UpdateApprovalTeam", {})
  .n("MPAClient", "UpdateApprovalTeamCommand")
  .sc(UpdateApprovalTeam)
  .build() {
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
