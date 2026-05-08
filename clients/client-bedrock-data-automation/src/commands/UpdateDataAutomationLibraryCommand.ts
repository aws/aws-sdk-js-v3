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
import type { UpdateDataAutomationLibraryRequest, UpdateDataAutomationLibraryResponse } from "../models/models_0";
import { UpdateDataAutomationLibrary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataAutomationLibraryCommand}.
 */
export interface UpdateDataAutomationLibraryCommandInput extends UpdateDataAutomationLibraryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataAutomationLibraryCommand}.
 */
export interface UpdateDataAutomationLibraryCommandOutput extends UpdateDataAutomationLibraryResponse, __MetadataBearer {}

/**
 * Updates an existing Amazon Bedrock Data Automation Library
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, UpdateDataAutomationLibraryCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, UpdateDataAutomationLibraryCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // UpdateDataAutomationLibraryRequest
 *   libraryArn: "STRING_VALUE", // required
 *   libraryDescription: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateDataAutomationLibraryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataAutomationLibraryResponse
 * //   libraryArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DELETING",
 * // };
 *
 * ```
 *
 * @param UpdateDataAutomationLibraryCommandInput - {@link UpdateDataAutomationLibraryCommandInput}
 * @returns {@link UpdateDataAutomationLibraryCommandOutput}
 * @see {@link UpdateDataAutomationLibraryCommandInput} for command's `input` shape.
 * @see {@link UpdateDataAutomationLibraryCommandOutput} for command's `response` shape.
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
export class UpdateDataAutomationLibraryCommand extends $Command
  .classBuilder<
    UpdateDataAutomationLibraryCommandInput,
    UpdateDataAutomationLibraryCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "UpdateDataAutomationLibrary", {})
  .n("BedrockDataAutomationClient", "UpdateDataAutomationLibraryCommand")
  .sc(UpdateDataAutomationLibrary$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataAutomationLibraryRequest;
      output: UpdateDataAutomationLibraryResponse;
    };
    sdk: {
      input: UpdateDataAutomationLibraryCommandInput;
      output: UpdateDataAutomationLibraryCommandOutput;
    };
  };
}
