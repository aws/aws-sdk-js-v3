// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteInactiveApprovalTeamVersionRequest,
  DeleteInactiveApprovalTeamVersionResponse,
} from "../models/models_0";
import type { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { DeleteInactiveApprovalTeamVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeleteInactiveApprovalTeamVersionCommandOutput
  extends DeleteInactiveApprovalTeamVersionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an inactive approval team. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html">Team health</a> in the <i>Multi-party approval User Guide</i>.</p> <p>You can also use this operation to delete a team draft. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/update-team.html#update-team-draft-status">Interacting with drafts</a> in the <i>Multi-party approval User Guide</i>.</p>
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
export class DeleteInactiveApprovalTeamVersionCommand extends $Command
  .classBuilder<
    DeleteInactiveApprovalTeamVersionCommandInput,
    DeleteInactiveApprovalTeamVersionCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "DeleteInactiveApprovalTeamVersion", {})
  .n("MPAClient", "DeleteInactiveApprovalTeamVersionCommand")
  .sc(DeleteInactiveApprovalTeamVersion$)
  .build() {
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
