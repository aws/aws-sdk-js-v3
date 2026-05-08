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
import type { CreateDataAutomationLibraryRequest, CreateDataAutomationLibraryResponse } from "../models/models_0";
import { CreateDataAutomationLibrary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataAutomationLibraryCommand}.
 */
export interface CreateDataAutomationLibraryCommandInput extends CreateDataAutomationLibraryRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataAutomationLibraryCommand}.
 */
export interface CreateDataAutomationLibraryCommandOutput extends CreateDataAutomationLibraryResponse, __MetadataBearer {}

/**
 * Creates an Amazon Bedrock Data Automation Library
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, CreateDataAutomationLibraryCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, CreateDataAutomationLibraryCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // CreateDataAutomationLibraryRequest
 *   libraryName: "STRING_VALUE", // required
 *   libraryDescription: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE", // required
 *     kmsEncryptionContext: { // KmsEncryptionContext
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDataAutomationLibraryCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataAutomationLibraryResponse
 * //   libraryArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DELETING",
 * // };
 *
 * ```
 *
 * @param CreateDataAutomationLibraryCommandInput - {@link CreateDataAutomationLibraryCommandInput}
 * @returns {@link CreateDataAutomationLibraryCommandOutput}
 * @see {@link CreateDataAutomationLibraryCommandInput} for command's `input` shape.
 * @see {@link CreateDataAutomationLibraryCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
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
export class CreateDataAutomationLibraryCommand extends $Command
  .classBuilder<
    CreateDataAutomationLibraryCommandInput,
    CreateDataAutomationLibraryCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "CreateDataAutomationLibrary", {})
  .n("BedrockDataAutomationClient", "CreateDataAutomationLibraryCommand")
  .sc(CreateDataAutomationLibrary$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataAutomationLibraryRequest;
      output: CreateDataAutomationLibraryResponse;
    };
    sdk: {
      input: CreateDataAutomationLibraryCommandInput;
      output: CreateDataAutomationLibraryCommandOutput;
    };
  };
}
