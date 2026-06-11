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
import type { GetDatasetRequest, GetDatasetResponse } from "../models/models_0";
import { GetDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDatasetCommand}.
 */
export interface GetDatasetCommandInput extends GetDatasetRequest {}
/**
 * @public
 *
 * The output of {@link GetDatasetCommand}.
 */
export interface GetDatasetCommandOutput extends GetDatasetResponse, __MetadataBearer {}

/**
 * <p> Retrieves dataset metadata. Use the <code>datasetVersion</code> query parameter to retrieve a specific version's metadata. If absent, defaults to DRAFT. For paginated example content, use <code>ListDatasetExamples</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetDatasetCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetDatasetCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetDatasetRequest
 *   datasetId: "STRING_VALUE", // required
 *   datasetVersion: "STRING_VALUE",
 * };
 * const command = new GetDatasetCommand(input);
 * const response = await client.send(command);
 * // { // GetDatasetResponse
 * //   datasetArn: "STRING_VALUE", // required
 * //   datasetId: "STRING_VALUE", // required
 * //   datasetVersion: "STRING_VALUE", // required
 * //   datasetName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   draftStatus: "MODIFIED" || "UNMODIFIED",
 * //   failureReason: "STRING_VALUE",
 * //   schemaType: "AGENTCORE_EVALUATION_PREDEFINED_V1" || "AGENTCORE_EVALUATION_SIMULATED_V1", // required
 * //   kmsKeyArn: "STRING_VALUE",
 * //   exampleCount: Number("long"), // required
 * //   downloadUrl: "STRING_VALUE",
 * //   downloadUrlExpiresAt: new Date("TIMESTAMP"),
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDatasetCommandInput - {@link GetDatasetCommandInput}
 * @returns {@link GetDatasetCommandOutput}
 * @see {@link GetDatasetCommandInput} for command's `input` shape.
 * @see {@link GetDatasetCommandOutput} for command's `response` shape.
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
export class GetDatasetCommand extends $Command
  .classBuilder<
    GetDatasetCommandInput,
    GetDatasetCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetDataset", {})
  .n("BedrockAgentCoreControlClient", "GetDatasetCommand")
  .sc(GetDataset$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatasetRequest;
      output: GetDatasetResponse;
    };
    sdk: {
      input: GetDatasetCommandInput;
      output: GetDatasetCommandOutput;
    };
  };
}
