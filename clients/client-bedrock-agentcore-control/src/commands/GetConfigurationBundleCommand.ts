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
import type { GetConfigurationBundleRequest, GetConfigurationBundleResponse } from "../models/models_0";
import { GetConfigurationBundle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationBundleCommand}.
 */
export interface GetConfigurationBundleCommandInput extends GetConfigurationBundleRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationBundleCommand}.
 */
export interface GetConfigurationBundleCommandOutput extends GetConfigurationBundleResponse, __MetadataBearer {}

/**
 * <p>Gets the latest version of a configuration bundle. By default, returns the latest version on the mainline branch. Use <code>GetConfigurationBundleVersion</code> to retrieve a specific historical version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetConfigurationBundleCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetConfigurationBundleCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetConfigurationBundleRequest
 *   bundleId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE",
 * };
 * const command = new GetConfigurationBundleCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationBundleResponse
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
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetConfigurationBundleCommandInput - {@link GetConfigurationBundleCommandInput}
 * @returns {@link GetConfigurationBundleCommandOutput}
 * @see {@link GetConfigurationBundleCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationBundleCommandOutput} for command's `response` shape.
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
export class GetConfigurationBundleCommand extends $Command
  .classBuilder<
    GetConfigurationBundleCommandInput,
    GetConfigurationBundleCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetConfigurationBundle", {})
  .n("BedrockAgentCoreControlClient", "GetConfigurationBundleCommand")
  .sc(GetConfigurationBundle$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigurationBundleRequest;
      output: GetConfigurationBundleResponse;
    };
    sdk: {
      input: GetConfigurationBundleCommandInput;
      output: GetConfigurationBundleCommandOutput;
    };
  };
}
