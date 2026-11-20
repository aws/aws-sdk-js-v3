// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdatePublisherAssociationApprovalStatusRequest,
  UpdatePublisherAssociationApprovalStatusResponse,
} from "../models/models_0";
import { UpdatePublisherAssociationApprovalStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePublisherAssociationApprovalStatusCommand}.
 */
export interface UpdatePublisherAssociationApprovalStatusCommandInput extends UpdatePublisherAssociationApprovalStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePublisherAssociationApprovalStatusCommand}.
 */
export interface UpdatePublisherAssociationApprovalStatusCommandOutput extends UpdatePublisherAssociationApprovalStatusResponse, __MetadataBearer {}

/**
 * Record the curator's decision (APPROVED or REJECTED) on a registry record's publisher association.
 * A successful call returns an empty response. Repeating the decision the association already holds
 * changes nothing; the same approvalStatus with a different approvalStatusReason updates the reason.
 * If the caller has no publisher association for the registry record, the request fails with
 * AccessDeniedException. A ConflictException (HTTP 409) means the association is not in a state
 * that accepts the decision (e.g. not PENDING_APPROVAL/APPROVED/REJECTED) or it changed while the
 * request was being applied; read it again before deciding whether to resubmit.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, UpdatePublisherAssociationApprovalStatusCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, UpdatePublisherAssociationApprovalStatusCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // UpdatePublisherAssociationApprovalStatusRequest
 *   recordArn: "STRING_VALUE", // required
 *   approvalStatus: "APPROVED" || "REJECTED", // required
 *   approvalStatusReason: "STRING_VALUE", // required
 * };
 * const command = new UpdatePublisherAssociationApprovalStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePublisherAssociationApprovalStatusCommandInput - {@link UpdatePublisherAssociationApprovalStatusCommandInput}
 * @returns {@link UpdatePublisherAssociationApprovalStatusCommandOutput}
 * @see {@link UpdatePublisherAssociationApprovalStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePublisherAssociationApprovalStatusCommandOutput} for command's `response` shape.
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
export class UpdatePublisherAssociationApprovalStatusCommand extends command<UpdatePublisherAssociationApprovalStatusCommandInput, UpdatePublisherAssociationApprovalStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePublisherAssociationApprovalStatus",
  UpdatePublisherAssociationApprovalStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePublisherAssociationApprovalStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdatePublisherAssociationApprovalStatusCommandInput;
      output: UpdatePublisherAssociationApprovalStatusCommandOutput;
    };
  };
}
