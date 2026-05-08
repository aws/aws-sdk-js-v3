// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetDataAutomationLibraryIngestionJobRequest,
  GetDataAutomationLibraryIngestionJobResponse,
} from "../models/models_0";
import { GetDataAutomationLibraryIngestionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataAutomationLibraryIngestionJobCommand}.
 */
export interface GetDataAutomationLibraryIngestionJobCommandInput extends GetDataAutomationLibraryIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link GetDataAutomationLibraryIngestionJobCommand}.
 */
export interface GetDataAutomationLibraryIngestionJobCommandOutput extends GetDataAutomationLibraryIngestionJobResponse, __MetadataBearer {}

/**
 * API used to get status of data automation library ingestion job
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, GetDataAutomationLibraryIngestionJobCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, GetDataAutomationLibraryIngestionJobCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // GetDataAutomationLibraryIngestionJobRequest
 *   libraryArn: "STRING_VALUE", // required
 *   jobArn: "STRING_VALUE", // required
 * };
 * const command = new GetDataAutomationLibraryIngestionJobCommand(input);
 * const response = await client.send(command);
 * // { // GetDataAutomationLibraryIngestionJobResponse
 * //   job: { // DataAutomationLibraryIngestionJob
 * //     jobArn: "STRING_VALUE", // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     entityType: "VOCABULARY", // required
 * //     operationType: "UPSERT" || "DELETE", // required
 * //     jobStatus: "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED", // required
 * //     outputConfiguration: { // OutputConfiguration
 * //       s3Uri: "STRING_VALUE", // required
 * //     },
 * //     completionTime: new Date("TIMESTAMP"),
 * //     errorMessage: "STRING_VALUE",
 * //     errorType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataAutomationLibraryIngestionJobCommandInput - {@link GetDataAutomationLibraryIngestionJobCommandInput}
 * @returns {@link GetDataAutomationLibraryIngestionJobCommandOutput}
 * @see {@link GetDataAutomationLibraryIngestionJobCommandInput} for command's `input` shape.
 * @see {@link GetDataAutomationLibraryIngestionJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockDataAutomationServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomation service.</p>
 *
 *
 * @public
 */
export class GetDataAutomationLibraryIngestionJobCommand extends $Command
  .classBuilder<
    GetDataAutomationLibraryIngestionJobCommandInput,
    GetDataAutomationLibraryIngestionJobCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "GetDataAutomationLibraryIngestionJob", {})
  .n("BedrockDataAutomationClient", "GetDataAutomationLibraryIngestionJobCommand")
  .sc(GetDataAutomationLibraryIngestionJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataAutomationLibraryIngestionJobRequest;
      output: GetDataAutomationLibraryIngestionJobResponse;
    };
    sdk: {
      input: GetDataAutomationLibraryIngestionJobCommandInput;
      output: GetDataAutomationLibraryIngestionJobCommandOutput;
    };
  };
}
