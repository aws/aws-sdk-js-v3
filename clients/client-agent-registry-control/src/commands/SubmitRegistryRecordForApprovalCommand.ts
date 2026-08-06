// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SubmitRegistryRecordForApprovalRequest,
  SubmitRegistryRecordForApprovalResponse,
} from "../models/models_0";
import { SubmitRegistryRecordForApproval$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SubmitRegistryRecordForApprovalCommand}.
 */
export interface SubmitRegistryRecordForApprovalCommandInput extends SubmitRegistryRecordForApprovalRequest {}
/**
 * @public
 *
 * The output of {@link SubmitRegistryRecordForApprovalCommand}.
 */
export interface SubmitRegistryRecordForApprovalCommandOutput extends SubmitRegistryRecordForApprovalResponse, __MetadataBearer {}

/**
 * <p>Submits a DRAFT registry record for approval, moving it into the registry's approval workflow. Depending on the registry's approval configuration, the record is either auto-approved or set to PENDING_APPROVAL for a curator to approve or reject.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, SubmitRegistryRecordForApprovalCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, SubmitRegistryRecordForApprovalCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // SubmitRegistryRecordForApprovalRequest
 *   registryId: "STRING_VALUE", // required
 *   recordId: "STRING_VALUE", // required
 * };
 * const command = new SubmitRegistryRecordForApprovalCommand(input);
 * const response = await client.send(command);
 * // { // SubmitRegistryRecordForApprovalResponse
 * //   registryArn: "STRING_VALUE", // required
 * //   recordArn: "STRING_VALUE", // required
 * //   recordId: "STRING_VALUE", // required
 * //   status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param SubmitRegistryRecordForApprovalCommandInput - {@link SubmitRegistryRecordForApprovalCommandInput}
 * @returns {@link SubmitRegistryRecordForApprovalCommandOutput}
 * @see {@link SubmitRegistryRecordForApprovalCommandInput} for command's `input` shape.
 * @see {@link SubmitRegistryRecordForApprovalCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unexpected internal error; the caller may retry.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling; the caller may retry after a delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation of one or more input fields.</p>
 *
 * @throws {@link AgentRegistryControlServiceException}
 * <p>Base exception class for all service exceptions from AgentRegistryControl service.</p>
 *
 *
 * @public
 */
export class SubmitRegistryRecordForApprovalCommand extends command<SubmitRegistryRecordForApprovalCommandInput, SubmitRegistryRecordForApprovalCommandOutput>(
  _ep0,
  _mw0,
  "SubmitRegistryRecordForApproval",
  SubmitRegistryRecordForApproval$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitRegistryRecordForApprovalRequest;
      output: SubmitRegistryRecordForApprovalResponse;
    };
    sdk: {
      input: SubmitRegistryRecordForApprovalCommandInput;
      output: SubmitRegistryRecordForApprovalCommandOutput;
    };
  };
}
