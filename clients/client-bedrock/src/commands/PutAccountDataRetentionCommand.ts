// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutAccountDataRetentionRequest, PutAccountDataRetentionResponse } from "../models/models_0";
import { PutAccountDataRetention$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountDataRetentionCommand}.
 */
export interface PutAccountDataRetentionCommandInput extends PutAccountDataRetentionRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountDataRetentionCommand}.
 */
export interface PutAccountDataRetentionCommandOutput extends PutAccountDataRetentionResponse, __MetadataBearer {}

/**
 * <p>Sets the account-wide data retention mode for Amazon Bedrock.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, PutAccountDataRetentionCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, PutAccountDataRetentionCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // PutAccountDataRetentionRequest
 *   mode: "default" || "none" || "provider_data_share" || "inherit", // required
 * };
 * const command = new PutAccountDataRetentionCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountDataRetentionResponse
 * //   mode: "default" || "none" || "provider_data_share" || "inherit", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutAccountDataRetentionCommandInput - {@link PutAccountDataRetentionCommandInput}
 * @returns {@link PutAccountDataRetentionCommandOutput}
 * @see {@link PutAccountDataRetentionCommandInput} for command's `input` shape.
 * @see {@link PutAccountDataRetentionCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class PutAccountDataRetentionCommand extends $Command
  .classBuilder<
    PutAccountDataRetentionCommandInput,
    PutAccountDataRetentionCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "PutAccountDataRetention", {})
  .n("BedrockClient", "PutAccountDataRetentionCommand")
  .sc(PutAccountDataRetention$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountDataRetentionRequest;
      output: PutAccountDataRetentionResponse;
    };
    sdk: {
      input: PutAccountDataRetentionCommandInput;
      output: PutAccountDataRetentionCommandOutput;
    };
  };
}
