// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  SubmitRegistryRecordForApprovalRequest,
  SubmitRegistryRecordForApprovalResponse,
} from "../models/models_2";
import { SubmitRegistryRecordForApproval$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Submits a registry record for approval. This transitions the record from <code>DRAFT</code> status to <code>PENDING_APPROVAL</code> status. If the registry has auto-approval enabled, the record is automatically approved.</p>
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
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class SubmitRegistryRecordForApprovalCommand extends $Command
  .classBuilder<
    SubmitRegistryRecordForApprovalCommandInput,
    SubmitRegistryRecordForApprovalCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "SubmitRegistryRecordForApproval", {})
  .n("BedrockAgentCoreControlClient", "SubmitRegistryRecordForApprovalCommand")
  .sc(SubmitRegistryRecordForApproval$)
  .build() {
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
