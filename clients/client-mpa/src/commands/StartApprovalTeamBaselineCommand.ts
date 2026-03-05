// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartApprovalTeamBaselineRequest, StartApprovalTeamBaselineResponse } from "../models/models_0";
import type { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { StartApprovalTeamBaseline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a baseline session for specified approvers on an <code>ACTIVE</code> approval team.</p>
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
export class StartApprovalTeamBaselineCommand extends $Command
  .classBuilder<
    StartApprovalTeamBaselineCommandInput,
    StartApprovalTeamBaselineCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "StartApprovalTeamBaseline", {})
  .n("MPAClient", "StartApprovalTeamBaselineCommand")
  .sc(StartApprovalTeamBaseline$)
  .build() {
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
