// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConfigurationBundlesRequest, ListConfigurationBundlesResponse } from "../models/models_0";
import { ListConfigurationBundles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConfigurationBundlesCommand}.
 */
export interface ListConfigurationBundlesCommandInput extends ListConfigurationBundlesRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationBundlesCommand}.
 */
export interface ListConfigurationBundlesCommandOutput extends ListConfigurationBundlesResponse, __MetadataBearer {}

/**
 * <p>Lists all configuration bundles in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListConfigurationBundlesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListConfigurationBundlesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListConfigurationBundlesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListConfigurationBundlesCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationBundlesResponse
 * //   bundles: [ // ConfigurationBundleSummaryList // required
 * //     { // ConfigurationBundleSummary
 * //       bundleArn: "STRING_VALUE", // required
 * //       bundleId: "STRING_VALUE", // required
 * //       bundleName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationBundlesCommandInput - {@link ListConfigurationBundlesCommandInput}
 * @returns {@link ListConfigurationBundlesCommandOutput}
 * @see {@link ListConfigurationBundlesCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationBundlesCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
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
export class ListConfigurationBundlesCommand extends command<ListConfigurationBundlesCommandInput, ListConfigurationBundlesCommandOutput>(
  _ep0,
  _mw0,
  "ListConfigurationBundles",
  ListConfigurationBundles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationBundlesRequest;
      output: ListConfigurationBundlesResponse;
    };
    sdk: {
      input: ListConfigurationBundlesCommandInput;
      output: ListConfigurationBundlesCommandOutput;
    };
  };
}
