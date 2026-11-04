// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartApprovalTeamBaselineRequest, StartApprovalTeamBaselineResponse } from "../models/models_0";
import { StartApprovalTeamBaseline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartApprovalTeamBaselineCommand}.
 */
export interface StartApprovalTeamBaselineCommandInput extends StartApprovalTeamBaselineRequest {}
/**
 * @public
 *
 * The output of {@link StartApprovalTeamBaselineCommand}.
 */
export interface StartApprovalTeamBaselineCommandOutput extends StartApprovalTeamBaselineResponse, __MetadataBearer {}

/**
 * Starts a baseline session for specified approvers on an `ACTIVE` approval team.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, StartApprovalTeamBaselineCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, StartApprovalTeamBaselineCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // StartApprovalTeamBaselineRequest
 *   Arn: "STRING_VALUE", // required
 *   ApproverIds: [ // StartApprovalTeamBaselineApproverIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartApprovalTeamBaselineCommand(input);
 * const response = await client.send(command);
 * // { // StartApprovalTeamBaselineResponse
 * //   BaselineSessionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartApprovalTeamBaselineCommandInput - {@link StartApprovalTeamBaselineCommandInput}
 * @returns {@link StartApprovalTeamBaselineCommandOutput}
 * @see {@link StartApprovalTeamBaselineCommandInput} for command's `input` shape.
 * @see {@link StartApprovalTeamBaselineCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action. Check your permissions, and try again.
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
export class StartApprovalTeamBaselineCommand extends command<StartApprovalTeamBaselineCommandInput, StartApprovalTeamBaselineCommandOutput>(
  _ep0,
  _mw0,
  "StartApprovalTeamBaseline",
  StartApprovalTeamBaseline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartApprovalTeamBaselineRequest;
      output: StartApprovalTeamBaselineResponse;
    };
    sdk: {
      input: StartApprovalTeamBaselineCommandInput;
      output: StartApprovalTeamBaselineCommandOutput;
    };
  };
}
