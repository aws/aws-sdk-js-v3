// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateApprovalTeamRequest, CreateApprovalTeamResponse } from "../models/models_0";
import type { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { CreateApprovalTeam$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApprovalTeamCommand}.
 */
export interface CreateApprovalTeamCommandInput extends CreateApprovalTeamRequest {}
/**
 * @public
 *
 * The output of {@link CreateApprovalTeamCommand}.
 */
export interface CreateApprovalTeamCommandOutput extends CreateApprovalTeamResponse, __MetadataBearer {}

/**
 * <p>Creates a new approval team. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html">Approval team</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, CreateApprovalTeamCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, CreateApprovalTeamCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // CreateApprovalTeamRequest
 *   ClientToken: "STRING_VALUE",
 *   ApprovalStrategy: { // ApprovalStrategy Union: only one key present
 *     MofN: { // MofNApprovalStrategy
 *       MinApprovalsRequired: Number("int"), // required
 *     },
 *   },
 *   Approvers: [ // ApprovalTeamRequestApprovers // required
 *     { // ApprovalTeamRequestApprover
 *       PrimaryIdentityId: "STRING_VALUE", // required
 *       PrimaryIdentitySourceArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   Description: "STRING_VALUE", // required
 *   Policies: [ // PoliciesReferences // required
 *     { // PolicyReference
 *       PolicyArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   Name: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateApprovalTeamCommand(input);
 * const response = await client.send(command);
 * // { // CreateApprovalTeamResponse
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateApprovalTeamCommandInput - {@link CreateApprovalTeamCommandInput}
 * @returns {@link CreateApprovalTeamCommandOutput}
 * @see {@link CreateApprovalTeamCommandInput} for command's `input` shape.
 * @see {@link CreateApprovalTeamCommandOutput} for command's `response` shape.
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
export class CreateApprovalTeamCommand extends $Command
  .classBuilder<
    CreateApprovalTeamCommandInput,
    CreateApprovalTeamCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "CreateApprovalTeam", {})
  .n("MPAClient", "CreateApprovalTeamCommand")
  .sc(CreateApprovalTeam$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApprovalTeamRequest;
      output: CreateApprovalTeamResponse;
    };
    sdk: {
      input: CreateApprovalTeamCommandInput;
      output: CreateApprovalTeamCommandOutput;
    };
  };
}
