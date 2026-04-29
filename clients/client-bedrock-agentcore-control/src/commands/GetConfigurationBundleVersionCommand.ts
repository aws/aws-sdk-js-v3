// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetConfigurationBundleVersionRequest, GetConfigurationBundleVersionResponse } from "../models/models_0";
import { GetConfigurationBundleVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationBundleVersionCommand}.
 */
export interface GetConfigurationBundleVersionCommandInput extends GetConfigurationBundleVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationBundleVersionCommand}.
 */
export interface GetConfigurationBundleVersionCommandOutput extends GetConfigurationBundleVersionResponse, __MetadataBearer {}

/**
 * <p>Gets a specific version of a configuration bundle by its version identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetConfigurationBundleVersionCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetConfigurationBundleVersionCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetConfigurationBundleVersionRequest
 *   bundleId: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE", // required
 * };
 * const command = new GetConfigurationBundleVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationBundleVersionResponse
 * //   bundleArn: "STRING_VALUE", // required
 * //   bundleId: "STRING_VALUE", // required
 * //   bundleName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   versionId: "STRING_VALUE", // required
 * //   components: { // ComponentConfigurationMap // required
 * //     "<keys>": { // ComponentConfiguration
 * //       configuration: "DOCUMENT_VALUE", // required
 * //     },
 * //   },
 * //   lineageMetadata: { // VersionLineageMetadata
 * //     parentVersionIds: [ // ConfigurationBundleVersionList
 * //       "STRING_VALUE",
 * //     ],
 * //     branchName: "STRING_VALUE",
 * //     createdBy: { // VersionCreatedBySource
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //     },
 * //     commitMessage: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   versionCreatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetConfigurationBundleVersionCommandInput - {@link GetConfigurationBundleVersionCommandInput}
 * @returns {@link GetConfigurationBundleVersionCommandOutput}
 * @see {@link GetConfigurationBundleVersionCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationBundleVersionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
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
export class GetConfigurationBundleVersionCommand extends $Command
  .classBuilder<
    GetConfigurationBundleVersionCommandInput,
    GetConfigurationBundleVersionCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetConfigurationBundleVersion", {})
  .n("BedrockAgentCoreControlClient", "GetConfigurationBundleVersionCommand")
  .sc(GetConfigurationBundleVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigurationBundleVersionRequest;
      output: GetConfigurationBundleVersionResponse;
    };
    sdk: {
      input: GetConfigurationBundleVersionCommandInput;
      output: GetConfigurationBundleVersionCommandOutput;
    };
  };
}
