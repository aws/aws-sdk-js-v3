// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConfigurationBundleRequest, UpdateConfigurationBundleResponse } from "../models/models_0";
import { UpdateConfigurationBundle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationBundleCommand}.
 */
export interface UpdateConfigurationBundleCommandInput extends UpdateConfigurationBundleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationBundleCommand}.
 */
export interface UpdateConfigurationBundleCommandOutput extends UpdateConfigurationBundleResponse, __MetadataBearer {}

/**
 * <p>Updates a configuration bundle by creating a new version with the specified changes. Each update creates a new version in the version history.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateConfigurationBundleCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateConfigurationBundleCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateConfigurationBundleRequest
 *   clientToken: "STRING_VALUE",
 *   bundleId: "STRING_VALUE", // required
 *   bundleName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   components: { // ComponentConfigurationMap
 *     "<keys>": { // ComponentConfiguration
 *       configuration: "DOCUMENT_VALUE", // required
 *     },
 *   },
 *   parentVersionIds: [ // ConfigurationBundleVersionList
 *     "STRING_VALUE",
 *   ],
 *   branchName: "STRING_VALUE",
 *   commitMessage: "STRING_VALUE",
 *   createdBy: { // VersionCreatedBySource
 *     name: "STRING_VALUE", // required
 *     arn: "STRING_VALUE",
 *   },
 *   kmsKeyArn: "STRING_VALUE",
 * };
 * const command = new UpdateConfigurationBundleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConfigurationBundleResponse
 * //   bundleArn: "STRING_VALUE", // required
 * //   bundleId: "STRING_VALUE", // required
 * //   versionId: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateConfigurationBundleCommandInput - {@link UpdateConfigurationBundleCommandInput}
 * @returns {@link UpdateConfigurationBundleCommandOutput}
 * @see {@link UpdateConfigurationBundleCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationBundleCommandOutput} for command's `response` shape.
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
export class UpdateConfigurationBundleCommand extends command<UpdateConfigurationBundleCommandInput, UpdateConfigurationBundleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConfigurationBundle",
  UpdateConfigurationBundle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationBundleRequest;
      output: UpdateConfigurationBundleResponse;
    };
    sdk: {
      input: UpdateConfigurationBundleCommandInput;
      output: UpdateConfigurationBundleCommandOutput;
    };
  };
}
