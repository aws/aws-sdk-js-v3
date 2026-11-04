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
 * Submits a DRAFT registry record for approval, moving it into the registry's approval workflow. Depending on the registry's approval configuration, the record is either auto-approved or set to PENDING_APPROVAL for a curator to approve or reject.
 *
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
 *
 * The caller is not authorized to perform the requested action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed due to an unexpected internal error; the caller may retry.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling; the caller may retry after a delay.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed validation of one or more input fields.
 *
 * @throws {@link AgentRegistryControlServiceException}
 *
 * Base exception class for all service exceptions from AgentRegistryControl service.
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
