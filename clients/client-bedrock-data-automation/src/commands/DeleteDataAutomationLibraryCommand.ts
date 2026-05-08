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
import type { DeleteDataAutomationLibraryRequest, DeleteDataAutomationLibraryResponse } from "../models/models_0";
import { DeleteDataAutomationLibrary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataAutomationLibraryCommand}.
 */
export interface DeleteDataAutomationLibraryCommandInput extends DeleteDataAutomationLibraryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataAutomationLibraryCommand}.
 */
export interface DeleteDataAutomationLibraryCommandOutput extends DeleteDataAutomationLibraryResponse, __MetadataBearer {}

/**
 * Deletes an existing Amazon Bedrock Data Automation Library
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, DeleteDataAutomationLibraryCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, DeleteDataAutomationLibraryCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // DeleteDataAutomationLibraryRequest
 *   libraryArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataAutomationLibraryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataAutomationLibraryResponse
 * //   libraryArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DELETING",
 * // };
 *
 * ```
 *
 * @param DeleteDataAutomationLibraryCommandInput - {@link DeleteDataAutomationLibraryCommandInput}
 * @returns {@link DeleteDataAutomationLibraryCommandOutput}
 * @see {@link DeleteDataAutomationLibraryCommandInput} for command's `input` shape.
 * @see {@link DeleteDataAutomationLibraryCommandOutput} for command's `response` shape.
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
export class DeleteDataAutomationLibraryCommand extends $Command
  .classBuilder<
    DeleteDataAutomationLibraryCommandInput,
    DeleteDataAutomationLibraryCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "DeleteDataAutomationLibrary", {})
  .n("BedrockDataAutomationClient", "DeleteDataAutomationLibraryCommand")
  .sc(DeleteDataAutomationLibrary$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataAutomationLibraryRequest;
      output: DeleteDataAutomationLibraryResponse;
    };
    sdk: {
      input: DeleteDataAutomationLibraryCommandInput;
      output: DeleteDataAutomationLibraryCommandOutput;
    };
  };
}
