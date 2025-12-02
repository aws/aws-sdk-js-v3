// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPolicyGenerationAssetsRequest, ListPolicyGenerationAssetsResponse } from "../models/models_0";
import { ListPolicyGenerationAssets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyGenerationAssetsCommand}.
 */
export interface ListPolicyGenerationAssetsCommandInput extends ListPolicyGenerationAssetsRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyGenerationAssetsCommand}.
 */
export interface ListPolicyGenerationAssetsCommandOutput extends ListPolicyGenerationAssetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of generated policy assets from a policy generation request within the AgentCore Policy system. This operation returns the actual Cedar policies and related artifacts produced by the AI-powered policy generation process, allowing users to review and select from multiple generated policy options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListPolicyGenerationAssetsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListPolicyGenerationAssetsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListPolicyGenerationAssetsRequest
 *   policyGenerationId: "STRING_VALUE", // required
 *   policyEngineId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPolicyGenerationAssetsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyGenerationAssetsResponse
 * //   policyGenerationAssets: [ // PolicyGenerationAssets
 * //     { // PolicyGenerationAsset
 * //       policyGenerationAssetId: "STRING_VALUE", // required
 * //       definition: { // PolicyDefinition Union: only one key present
 * //         cedar: { // CedarPolicy
 * //           statement: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       rawTextFragment: "STRING_VALUE", // required
 * //       findings: [ // Findings // required
 * //         { // Finding
 * //           type: "VALID" || "INVALID" || "NOT_TRANSLATABLE" || "ALLOW_ALL" || "ALLOW_NONE" || "DENY_ALL" || "DENY_NONE",
 * //           description: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicyGenerationAssetsCommandInput - {@link ListPolicyGenerationAssetsCommandInput}
 * @returns {@link ListPolicyGenerationAssetsCommandOutput}
 * @see {@link ListPolicyGenerationAssetsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyGenerationAssetsCommandOutput} for command's `response` shape.
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
export class ListPolicyGenerationAssetsCommand extends $Command
  .classBuilder<
    ListPolicyGenerationAssetsCommandInput,
    ListPolicyGenerationAssetsCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListPolicyGenerationAssets", {})
  .n("BedrockAgentCoreControlClient", "ListPolicyGenerationAssetsCommand")
  .sc(ListPolicyGenerationAssets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyGenerationAssetsRequest;
      output: ListPolicyGenerationAssetsResponse;
    };
    sdk: {
      input: ListPolicyGenerationAssetsCommandInput;
      output: ListPolicyGenerationAssetsCommandOutput;
    };
  };
}
