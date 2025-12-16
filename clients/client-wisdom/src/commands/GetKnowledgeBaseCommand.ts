// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetKnowledgeBaseRequest, GetKnowledgeBaseResponse } from "../models/models_0";
import { GetKnowledgeBase$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKnowledgeBaseCommand}.
 */
export interface GetKnowledgeBaseCommandInput extends GetKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link GetKnowledgeBaseCommand}.
 */
export interface GetKnowledgeBaseCommandOutput extends GetKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, GetKnowledgeBaseCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, GetKnowledgeBaseCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // GetKnowledgeBaseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new GetKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // GetKnowledgeBaseResponse
 * //   knowledgeBase: { // KnowledgeBaseData
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     knowledgeBaseType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     lastContentModificationTime: new Date("TIMESTAMP"),
 * //     sourceConfiguration: { // SourceConfiguration Union: only one key present
 * //       appIntegrations: { // AppIntegrationsConfiguration
 * //         appIntegrationArn: "STRING_VALUE", // required
 * //         objectFields: [ // ObjectFieldsList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     renderingConfiguration: { // RenderingConfiguration
 * //       templateUri: "STRING_VALUE",
 * //     },
 * //     serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //     description: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetKnowledgeBaseCommandInput - {@link GetKnowledgeBaseCommandInput}
 * @returns {@link GetKnowledgeBaseCommandOutput}
 * @see {@link GetKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link GetKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class GetKnowledgeBaseCommand extends $Command
  .classBuilder<
    GetKnowledgeBaseCommandInput,
    GetKnowledgeBaseCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "GetKnowledgeBase", {})
  .n("WisdomClient", "GetKnowledgeBaseCommand")
  .sc(GetKnowledgeBase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKnowledgeBaseRequest;
      output: GetKnowledgeBaseResponse;
    };
    sdk: {
      input: GetKnowledgeBaseCommandInput;
      output: GetKnowledgeBaseCommandOutput;
    };
  };
}
