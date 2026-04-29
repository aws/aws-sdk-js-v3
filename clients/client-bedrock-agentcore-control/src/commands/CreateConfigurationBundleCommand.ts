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
import type { CreateConfigurationBundleRequest, CreateConfigurationBundleResponse } from "../models/models_0";
import { CreateConfigurationBundle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigurationBundleCommand}.
 */
export interface CreateConfigurationBundleCommandInput extends CreateConfigurationBundleRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationBundleCommand}.
 */
export interface CreateConfigurationBundleCommandOutput extends CreateConfigurationBundleResponse, __MetadataBearer {}

/**
 * <p>Creates a new configuration bundle resource. A configuration bundle stores versioned component configurations for agent evaluation workflows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateConfigurationBundleCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateConfigurationBundleCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateConfigurationBundleRequest
 *   clientToken: "STRING_VALUE",
 *   bundleName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   components: { // ComponentConfigurationMap // required
 *     "<keys>": { // ComponentConfiguration
 *       configuration: "DOCUMENT_VALUE", // required
 *     },
 *   },
 *   branchName: "STRING_VALUE",
 *   commitMessage: "STRING_VALUE",
 *   createdBy: { // VersionCreatedBySource
 *     name: "STRING_VALUE", // required
 *     arn: "STRING_VALUE",
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfigurationBundleCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfigurationBundleResponse
 * //   bundleArn: "STRING_VALUE", // required
 * //   bundleId: "STRING_VALUE", // required
 * //   versionId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateConfigurationBundleCommandInput - {@link CreateConfigurationBundleCommandInput}
 * @returns {@link CreateConfigurationBundleCommandOutput}
 * @see {@link CreateConfigurationBundleCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationBundleCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
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
export class CreateConfigurationBundleCommand extends $Command
  .classBuilder<
    CreateConfigurationBundleCommandInput,
    CreateConfigurationBundleCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateConfigurationBundle", {})
  .n("BedrockAgentCoreControlClient", "CreateConfigurationBundleCommand")
  .sc(CreateConfigurationBundle$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfigurationBundleRequest;
      output: CreateConfigurationBundleResponse;
    };
    sdk: {
      input: CreateConfigurationBundleCommandInput;
      output: CreateConfigurationBundleCommandOutput;
    };
  };
}
