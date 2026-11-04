// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SubmitRegistryRecordForApprovalRequest,
  SubmitRegistryRecordForApprovalResponse,
} from "../models/models_2";
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
 * Submits a registry record for approval. This transitions the record from `DRAFT` status to `PENDING_APPROVAL` status. If the registry has auto-approval enabled, the record is automatically approved.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, SubmitRegistryRecordForApprovalCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, SubmitRegistryRecordForApprovalCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
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
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentCoreControl service.
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
