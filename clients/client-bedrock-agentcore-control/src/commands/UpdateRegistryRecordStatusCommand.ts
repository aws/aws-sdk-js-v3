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
import type { UpdateRegistryRecordStatusRequest, UpdateRegistryRecordStatusResponse } from "../models/models_2";
import { UpdateRegistryRecordStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the status of a registry record. Use this operation to approve, reject, or deprecate a registry record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateRegistryRecordStatusCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateRegistryRecordStatusCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
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
export class UpdateRegistryRecordStatusCommand extends $Command
  .classBuilder<
    UpdateRegistryRecordStatusCommandInput,
    UpdateRegistryRecordStatusCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdateRegistryRecordStatus", {})
  .n("BedrockAgentCoreControlClient", "UpdateRegistryRecordStatusCommand")
  .sc(UpdateRegistryRecordStatus$)
  .build() {
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
