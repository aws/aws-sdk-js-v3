// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateKnowledgeBaseTemplateUriRequest, UpdateKnowledgeBaseTemplateUriResponse } from "../models/models_0";
import { UpdateKnowledgeBaseTemplateUri } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKnowledgeBaseTemplateUriCommand}.
 */
export interface UpdateKnowledgeBaseTemplateUriCommandInput extends UpdateKnowledgeBaseTemplateUriRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKnowledgeBaseTemplateUriCommand}.
 */
export interface UpdateKnowledgeBaseTemplateUriCommandOutput
  extends UpdateKnowledgeBaseTemplateUriResponse,
    __MetadataBearer {}

/**
 * <p>Updates the template URI of a knowledge base. This is only supported for knowledge bases
 *       of type EXTERNAL. Include a single variable in <code>$\{variable\}</code> format; this
 *       interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce
 *       article, it has an <code>Id</code> value, and you can set the template URI to
 *         <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*$\{Id\}*\/view</code>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, UpdateKnowledgeBaseTemplateUriCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, UpdateKnowledgeBaseTemplateUriCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // UpdateKnowledgeBaseTemplateUriRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   templateUri: "STRING_VALUE", // required
 * };
 * const command = new UpdateKnowledgeBaseTemplateUriCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKnowledgeBaseTemplateUriResponse
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
 * @param UpdateKnowledgeBaseTemplateUriCommandInput - {@link UpdateKnowledgeBaseTemplateUriCommandInput}
 * @returns {@link UpdateKnowledgeBaseTemplateUriCommandOutput}
 * @see {@link UpdateKnowledgeBaseTemplateUriCommandInput} for command's `input` shape.
 * @see {@link UpdateKnowledgeBaseTemplateUriCommandOutput} for command's `response` shape.
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
export class UpdateKnowledgeBaseTemplateUriCommand extends $Command
  .classBuilder<
    UpdateKnowledgeBaseTemplateUriCommandInput,
    UpdateKnowledgeBaseTemplateUriCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "UpdateKnowledgeBaseTemplateUri", {})
  .n("WisdomClient", "UpdateKnowledgeBaseTemplateUriCommand")
  .sc(UpdateKnowledgeBaseTemplateUri)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKnowledgeBaseTemplateUriRequest;
      output: UpdateKnowledgeBaseTemplateUriResponse;
    };
    sdk: {
      input: UpdateKnowledgeBaseTemplateUriCommandInput;
      output: UpdateKnowledgeBaseTemplateUriCommandOutput;
    };
  };
}
