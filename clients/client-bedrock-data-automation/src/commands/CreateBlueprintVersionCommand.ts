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
import {
  CreateBlueprintVersionRequest,
  CreateBlueprintVersionResponse,
  CreateBlueprintVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateBlueprintVersionCommand, se_CreateBlueprintVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBlueprintVersionCommand}.
 */
export interface CreateBlueprintVersionCommandInput extends CreateBlueprintVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateBlueprintVersionCommand}.
 */
export interface CreateBlueprintVersionCommandOutput extends CreateBlueprintVersionResponse, __MetadataBearer {}

/**
 * Creates a new version of an existing Amazon Bedrock Data Automation Blueprint
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, CreateBlueprintVersionCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, CreateBlueprintVersionCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // CreateBlueprintVersionRequest
 *   blueprintArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateBlueprintVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateBlueprintVersionResponse
 * //   blueprint: { // Blueprint
 * //     blueprintArn: "STRING_VALUE", // required
 * //     schema: "STRING_VALUE", // required
 * //     type: "DOCUMENT" || "IMAGE", // required
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
 * @param CreateBlueprintVersionCommandInput - {@link CreateBlueprintVersionCommandInput}
 * @returns {@link CreateBlueprintVersionCommandOutput}
 * @see {@link CreateBlueprintVersionCommandInput} for command's `input` shape.
 * @see {@link CreateBlueprintVersionCommandOutput} for command's `response` shape.
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
export class CreateBlueprintVersionCommand extends $Command
  .classBuilder<
    CreateBlueprintVersionCommandInput,
    CreateBlueprintVersionCommandOutput,
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
  .s("AmazonBedrockKeystoneBuildTimeService", "CreateBlueprintVersion", {})
  .n("BedrockDataAutomationClient", "CreateBlueprintVersionCommand")
  .f(void 0, CreateBlueprintVersionResponseFilterSensitiveLog)
  .ser(se_CreateBlueprintVersionCommand)
  .de(de_CreateBlueprintVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBlueprintVersionRequest;
      output: CreateBlueprintVersionResponse;
    };
    sdk: {
      input: CreateBlueprintVersionCommandInput;
      output: CreateBlueprintVersionCommandOutput;
    };
  };
}
