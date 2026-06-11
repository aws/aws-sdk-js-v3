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
import type { AddDatasetExamplesRequest, AddDatasetExamplesResponse } from "../models/models_0";
import { AddDatasetExamples$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddDatasetExamplesCommand}.
 */
export interface AddDatasetExamplesCommandInput extends AddDatasetExamplesRequest {}
/**
 * @public
 *
 * The output of {@link AddDatasetExamplesCommand}.
 */
export interface AddDatasetExamplesCommandOutput extends AddDatasetExamplesResponse, __MetadataBearer {}

/**
 * <p> Adds examples to the dataset's DRAFT. All examples are validated against the dataset's schema type before any writes occur. If any example fails validation, the entire batch is rejected (all-or-nothing semantics). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, AddDatasetExamplesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, AddDatasetExamplesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // AddDatasetExamplesRequest
 *   datasetId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   source: { // DataSourceType Union: only one key present
 *     inlineExamples: { // InlineExamplesSource
 *       examples: [ // DatasetExampleList // required
 *         "DOCUMENT_VALUE",
 *       ],
 *     },
 *     s3Source: { // S3Source
 *       s3Uri: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new AddDatasetExamplesCommand(input);
 * const response = await client.send(command);
 * // { // AddDatasetExamplesResponse
 * //   datasetArn: "STRING_VALUE", // required
 * //   datasetId: "STRING_VALUE", // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   addedCount: Number("long"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   exampleIds: [ // ExampleIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddDatasetExamplesCommandInput - {@link AddDatasetExamplesCommandInput}
 * @returns {@link AddDatasetExamplesCommandOutput}
 * @see {@link AddDatasetExamplesCommandInput} for command's `input` shape.
 * @see {@link AddDatasetExamplesCommandOutput} for command's `response` shape.
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
export class AddDatasetExamplesCommand extends $Command
  .classBuilder<
    AddDatasetExamplesCommandInput,
    AddDatasetExamplesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "AddDatasetExamples", {})
  .n("BedrockAgentCoreControlClient", "AddDatasetExamplesCommand")
  .sc(AddDatasetExamples$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddDatasetExamplesRequest;
      output: AddDatasetExamplesResponse;
    };
    sdk: {
      input: AddDatasetExamplesCommandInput;
      output: AddDatasetExamplesCommandOutput;
    };
  };
}
