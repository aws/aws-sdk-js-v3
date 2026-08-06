// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRegistryRecordStatusRequest, UpdateRegistryRecordStatusResponse } from "../models/models_0";
import { UpdateRegistryRecordStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRegistryRecordStatusCommand}.
 */
export interface UpdateRegistryRecordStatusCommandInput extends UpdateRegistryRecordStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRegistryRecordStatusCommand}.
 */
export interface UpdateRegistryRecordStatusCommandOutput extends UpdateRegistryRecordStatusResponse, __MetadataBearer {}

/**
 * <p>Updates the status of a registry record as part of the registry's curation workflow, for example to approve or reject a record that is pending approval, or to deprecate an approved record so that it is no longer discoverable</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, UpdateRegistryRecordStatusCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, UpdateRegistryRecordStatusCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // UpdateRegistryRecordStatusRequest
 *   registryId: "STRING_VALUE", // required
 *   recordId: "STRING_VALUE", // required
 *   status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED", // required
 *   statusReason: "STRING_VALUE", // required
 * };
 * const command = new UpdateRegistryRecordStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRegistryRecordStatusResponse
 * //   registryArn: "STRING_VALUE", // required
 * //   recordArn: "STRING_VALUE", // required
 * //   recordId: "STRING_VALUE", // required
 * //   status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED", // required
 * //   statusReason: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateRegistryRecordStatusCommandInput - {@link UpdateRegistryRecordStatusCommandInput}
 * @returns {@link UpdateRegistryRecordStatusCommandOutput}
 * @see {@link UpdateRegistryRecordStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateRegistryRecordStatusCommandOutput} for command's `response` shape.
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
export class UpdateRegistryRecordStatusCommand extends command<UpdateRegistryRecordStatusCommandInput, UpdateRegistryRecordStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRegistryRecordStatus",
  UpdateRegistryRecordStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRegistryRecordStatusRequest;
      output: UpdateRegistryRecordStatusResponse;
    };
    sdk: {
      input: UpdateRegistryRecordStatusCommandInput;
      output: UpdateRegistryRecordStatusCommandOutput;
    };
  };
}
