// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartActiveApprovalTeamDeletionRequest, StartActiveApprovalTeamDeletionResponse } from "../models/models_0";
import { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { StartActiveApprovalTeamDeletion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartActiveApprovalTeamDeletionCommand}.
 */
export interface StartActiveApprovalTeamDeletionCommandInput extends StartActiveApprovalTeamDeletionRequest {}
/**
 * @public
 *
 * The output of {@link StartActiveApprovalTeamDeletionCommand}.
 */
export interface StartActiveApprovalTeamDeletionCommandOutput
  extends StartActiveApprovalTeamDeletionResponse,
    __MetadataBearer {}

/**
 * <p>Starts the deletion process for an active approval team.</p> <note> <p> <b>Deletions require team approval</b> </p> <p>Requests to delete an active team must be approved by the team.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, StartActiveApprovalTeamDeletionCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, StartActiveApprovalTeamDeletionCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // StartActiveApprovalTeamDeletionRequest
 *   PendingWindowDays: Number("int"),
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new StartActiveApprovalTeamDeletionCommand(input);
 * const response = await client.send(command);
 * // { // StartActiveApprovalTeamDeletionResponse
 * //   DeletionCompletionTime: new Date("TIMESTAMP"),
 * //   DeletionStartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartActiveApprovalTeamDeletionCommandInput - {@link StartActiveApprovalTeamDeletionCommandInput}
 * @returns {@link StartActiveApprovalTeamDeletionCommandOutput}
 * @see {@link StartActiveApprovalTeamDeletionCommandInput} for command's `input` shape.
 * @see {@link StartActiveApprovalTeamDeletionCommandOutput} for command's `response` shape.
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
export class StartActiveApprovalTeamDeletionCommand extends $Command
  .classBuilder<
    StartActiveApprovalTeamDeletionCommandInput,
    StartActiveApprovalTeamDeletionCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "StartActiveApprovalTeamDeletion", {})
  .n("MPAClient", "StartActiveApprovalTeamDeletionCommand")
  .sc(StartActiveApprovalTeamDeletion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartActiveApprovalTeamDeletionRequest;
      output: StartActiveApprovalTeamDeletionResponse;
    };
    sdk: {
      input: StartActiveApprovalTeamDeletionCommandInput;
      output: StartActiveApprovalTeamDeletionCommandOutput;
    };
  };
}
