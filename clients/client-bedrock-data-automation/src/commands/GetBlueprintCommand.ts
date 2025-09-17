// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBlueprintRequest, GetBlueprintResponse, GetBlueprintResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetBlueprintCommand, se_GetBlueprintCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBlueprintCommand}.
 */
export interface GetBlueprintCommandInput extends GetBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintCommand}.
 */
export interface GetBlueprintCommandOutput extends GetBlueprintResponse, __MetadataBearer {}

/**
 * Gets an existing Amazon Bedrock Data Automation Blueprint
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, GetBlueprintCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, GetBlueprintCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // GetBlueprintRequest
 *   blueprintArn: "STRING_VALUE", // required
 *   blueprintVersion: "STRING_VALUE",
 *   blueprintStage: "DEVELOPMENT" || "LIVE",
 * };
 * const command = new GetBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintResponse
 * //   blueprint: { // Blueprint
 * //     blueprintArn: "STRING_VALUE", // required
 * //     schema: "STRING_VALUE", // required
 * //     type: "DOCUMENT" || "IMAGE" || "AUDIO" || "VIDEO", // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     blueprintName: "STRING_VALUE", // required
 * //     blueprintVersion: "STRING_VALUE",
 * //     blueprintStage: "DEVELOPMENT" || "LIVE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     kmsEncryptionContext: { // KmsEncryptionContext
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlueprintCommandInput - {@link GetBlueprintCommandInput}
 * @returns {@link GetBlueprintCommandOutput}
 * @see {@link GetBlueprintCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintCommandOutput} for command's `response` shape.
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
export class GetBlueprintCommand extends $Command
  .classBuilder<
    GetBlueprintCommandInput,
    GetBlueprintCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "GetBlueprint", {})
  .n("BedrockDataAutomationClient", "GetBlueprintCommand")
  .f(void 0, GetBlueprintResponseFilterSensitiveLog)
  .ser(se_GetBlueprintCommand)
  .de(de_GetBlueprintCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlueprintRequest;
      output: GetBlueprintResponse;
    };
    sdk: {
      input: GetBlueprintCommandInput;
      output: GetBlueprintCommandOutput;
    };
  };
}
