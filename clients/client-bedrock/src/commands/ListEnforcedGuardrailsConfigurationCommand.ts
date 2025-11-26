// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListEnforcedGuardrailsConfigurationRequest,
  ListEnforcedGuardrailsConfigurationResponse,
} from "../models/models_0";
import { ListEnforcedGuardrailsConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnforcedGuardrailsConfigurationCommand}.
 */
export interface ListEnforcedGuardrailsConfigurationCommandInput extends ListEnforcedGuardrailsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ListEnforcedGuardrailsConfigurationCommand}.
 */
export interface ListEnforcedGuardrailsConfigurationCommandOutput
  extends ListEnforcedGuardrailsConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Lists the account-level enforced guardrail configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListEnforcedGuardrailsConfigurationCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListEnforcedGuardrailsConfigurationCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListEnforcedGuardrailsConfigurationRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEnforcedGuardrailsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ListEnforcedGuardrailsConfigurationResponse
 * //   guardrailsConfig: [ // AccountEnforcedGuardrailsOutputConfiguration // required
 * //     { // AccountEnforcedGuardrailOutputConfiguration
 * //       configId: "STRING_VALUE",
 * //       guardrailArn: "STRING_VALUE",
 * //       guardrailId: "STRING_VALUE",
 * //       inputTags: "HONOR" || "IGNORE",
 * //       guardrailVersion: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnforcedGuardrailsConfigurationCommandInput - {@link ListEnforcedGuardrailsConfigurationCommandInput}
 * @returns {@link ListEnforcedGuardrailsConfigurationCommandOutput}
 * @see {@link ListEnforcedGuardrailsConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListEnforcedGuardrailsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
export class ListEnforcedGuardrailsConfigurationCommand extends $Command
  .classBuilder<
    ListEnforcedGuardrailsConfigurationCommandInput,
    ListEnforcedGuardrailsConfigurationCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "ListEnforcedGuardrailsConfiguration", {})
  .n("BedrockClient", "ListEnforcedGuardrailsConfigurationCommand")
  .sc(ListEnforcedGuardrailsConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnforcedGuardrailsConfigurationRequest;
      output: ListEnforcedGuardrailsConfigurationResponse;
    };
    sdk: {
      input: ListEnforcedGuardrailsConfigurationCommandInput;
      output: ListEnforcedGuardrailsConfigurationCommandOutput;
    };
  };
}
