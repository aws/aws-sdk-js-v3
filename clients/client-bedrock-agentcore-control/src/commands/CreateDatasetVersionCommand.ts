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
import type { CreateDatasetVersionRequest, CreateDatasetVersionResponse } from "../models/models_0";
import { CreateDatasetVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetVersionCommand}.
 */
export interface CreateDatasetVersionCommandInput extends CreateDatasetVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetVersionCommand}.
 */
export interface CreateDatasetVersionCommandOutput extends CreateDatasetVersionResponse, __MetadataBearer {}

/**
 * <p> Publishes the current DRAFT as a new numbered version. The DRAFT is preserved and remains editable after publishing. Returns immediately with status UPDATING. Poll <code>GetDataset</code> until status transitions to ACTIVE or UPDATE_FAILED. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateDatasetVersionCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateDatasetVersionCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateDatasetVersionRequest
 *   datasetId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDatasetVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetVersionResponse
 * //   datasetArn: "STRING_VALUE", // required
 * //   datasetId: "STRING_VALUE", // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   datasetVersion: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateDatasetVersionCommandInput - {@link CreateDatasetVersionCommandInput}
 * @returns {@link CreateDatasetVersionCommandOutput}
 * @see {@link CreateDatasetVersionCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
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
export class CreateDatasetVersionCommand extends $Command
  .classBuilder<
    CreateDatasetVersionCommandInput,
    CreateDatasetVersionCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateDatasetVersion", {})
  .n("BedrockAgentCoreControlClient", "CreateDatasetVersionCommand")
  .sc(CreateDatasetVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetVersionRequest;
      output: CreateDatasetVersionResponse;
    };
    sdk: {
      input: CreateDatasetVersionCommandInput;
      output: CreateDatasetVersionCommandOutput;
    };
  };
}
