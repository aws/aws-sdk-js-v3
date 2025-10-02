// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetApprovalTeamRequest,
  GetApprovalTeamResponse,
  GetApprovalTeamResponseFilterSensitiveLog,
} from "../models/models_0";
import { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { de_GetApprovalTeamCommand, se_GetApprovalTeamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApprovalTeamCommand}.
 */
export interface GetApprovalTeamCommandInput extends GetApprovalTeamRequest {}
/**
 * @public
 *
 * The output of {@link GetApprovalTeamCommand}.
 */
export interface GetApprovalTeamCommandOutput extends GetApprovalTeamResponse, __MetadataBearer {}

/**
 * <p>Returns details for an approval team.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, GetApprovalTeamCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, GetApprovalTeamCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // GetApprovalTeamRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetApprovalTeamCommand(input);
 * const response = await client.send(command);
 * // { // GetApprovalTeamResponse
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   ApprovalStrategy: { // ApprovalStrategyResponse Union: only one key present
 * //     MofN: { // MofNApprovalStrategy
 * //       MinApprovalsRequired: Number("int"), // required
 * //     },
 * //   },
 * //   NumberOfApprovers: Number("int"),
 * //   Approvers: [ // GetApprovalTeamResponseApprovers
 * //     { // GetApprovalTeamResponseApprover
 * //       ApproverId: "STRING_VALUE",
 * //       ResponseTime: new Date("TIMESTAMP"),
 * //       PrimaryIdentityId: "STRING_VALUE",
 * //       PrimaryIdentitySourceArn: "STRING_VALUE",
 * //       PrimaryIdentityStatus: "PENDING" || "ACCEPTED" || "REJECTED" || "INVALID",
 * //     },
 * //   ],
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Status: "ACTIVE" || "INACTIVE" || "DELETING" || "PENDING",
 * //   StatusCode: "VALIDATING" || "PENDING_ACTIVATION" || "FAILED_VALIDATION" || "FAILED_ACTIVATION" || "UPDATE_PENDING_APPROVAL" || "UPDATE_PENDING_ACTIVATION" || "UPDATE_FAILED_APPROVAL" || "UPDATE_FAILED_ACTIVATION" || "UPDATE_FAILED_VALIDATION" || "DELETE_PENDING_APPROVAL" || "DELETE_FAILED_APPROVAL" || "DELETE_FAILED_VALIDATION",
 * //   StatusMessage: "STRING_VALUE",
 * //   UpdateSessionArn: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * //   Policies: [ // PoliciesReferences
 * //     { // PolicyReference
 * //       PolicyArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   LastUpdateTime: new Date("TIMESTAMP"),
 * //   PendingUpdate: { // PendingUpdate
 * //     VersionId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ApprovalStrategy: {//  Union: only one key present
 * //       MofN: {
 * //         MinApprovalsRequired: Number("int"), // required
 * //       },
 * //     },
 * //     NumberOfApprovers: Number("int"),
 * //     Status: "ACTIVE" || "INACTIVE" || "DELETING" || "PENDING",
 * //     StatusCode: "VALIDATING" || "PENDING_ACTIVATION" || "FAILED_VALIDATION" || "FAILED_ACTIVATION" || "UPDATE_PENDING_APPROVAL" || "UPDATE_PENDING_ACTIVATION" || "UPDATE_FAILED_APPROVAL" || "UPDATE_FAILED_ACTIVATION" || "UPDATE_FAILED_VALIDATION" || "DELETE_PENDING_APPROVAL" || "DELETE_FAILED_APPROVAL" || "DELETE_FAILED_VALIDATION",
 * //     StatusMessage: "STRING_VALUE",
 * //     Approvers: [
 * //       {
 * //         ApproverId: "STRING_VALUE",
 * //         ResponseTime: new Date("TIMESTAMP"),
 * //         PrimaryIdentityId: "STRING_VALUE",
 * //         PrimaryIdentitySourceArn: "STRING_VALUE",
 * //         PrimaryIdentityStatus: "PENDING" || "ACCEPTED" || "REJECTED" || "INVALID",
 * //       },
 * //     ],
 * //     UpdateInitiationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApprovalTeamCommandInput - {@link GetApprovalTeamCommandInput}
 * @returns {@link GetApprovalTeamCommandOutput}
 * @see {@link GetApprovalTeamCommandInput} for command's `input` shape.
 * @see {@link GetApprovalTeamCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Check your permissions, and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check the resource ID, and try again.</p>
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
export class GetApprovalTeamCommand extends $Command
  .classBuilder<
    GetApprovalTeamCommandInput,
    GetApprovalTeamCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFluffyCoreService", "GetApprovalTeam", {})
  .n("MPAClient", "GetApprovalTeamCommand")
  .f(void 0, GetApprovalTeamResponseFilterSensitiveLog)
  .ser(se_GetApprovalTeamCommand)
  .de(de_GetApprovalTeamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApprovalTeamRequest;
      output: GetApprovalTeamResponse;
    };
    sdk: {
      input: GetApprovalTeamCommandInput;
      output: GetApprovalTeamCommandOutput;
    };
  };
}
