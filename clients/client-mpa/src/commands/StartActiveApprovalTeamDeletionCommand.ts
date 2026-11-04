// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartActiveApprovalTeamDeletionRequest,
  StartActiveApprovalTeamDeletionResponse,
} from "../models/models_0";
import { StartActiveApprovalTeamDeletion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StartActiveApprovalTeamDeletionCommandOutput extends StartActiveApprovalTeamDeletionResponse, __MetadataBearer {}

/**
 * Starts the deletion process for an active approval team.
 *
 * > **Note:**
 * >
 * > **Deletions require team approval**
 * >
 * > Requests to delete an active team must be approved by the team.
 *
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
export class StartActiveApprovalTeamDeletionCommand extends command<StartActiveApprovalTeamDeletionCommandInput, StartActiveApprovalTeamDeletionCommandOutput>(
  _ep0,
  _mw0,
  "StartActiveApprovalTeamDeletion",
  StartActiveApprovalTeamDeletion$
) {
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
