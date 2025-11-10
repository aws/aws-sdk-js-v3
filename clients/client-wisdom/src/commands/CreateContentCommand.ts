// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateContentRequest, CreateContentResponse } from "../models/models_0";
import { CreateContent } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContentCommand}.
 */
export interface CreateContentCommandInput extends CreateContentRequest {}
/**
 * @public
 *
 * The output of {@link CreateContentCommand}.
 */
export interface CreateContentCommandOutput extends CreateContentResponse, __MetadataBearer {}

/**
 * <p>Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to
 *       upload an asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, CreateContentCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, CreateContentCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // CreateContentRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   overrideLinkOutUri: "STRING_VALUE",
 *   metadata: { // ContentMetadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   uploadId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateContentCommand(input);
 * const response = await client.send(command);
 * // { // CreateContentResponse
 * //   content: { // ContentData
 * //     contentArn: "STRING_VALUE", // required
 * //     contentId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     revisionId: "STRING_VALUE", // required
 * //     title: "STRING_VALUE", // required
 * //     contentType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     metadata: { // ContentMetadata // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     linkOutUri: "STRING_VALUE",
 * //     url: "STRING_VALUE", // required
 * //     urlExpiry: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateContentCommandInput - {@link CreateContentCommandInput}
 * @returns {@link CreateContentCommandOutput}
 * @see {@link CreateContentCommandInput} for command's `input` shape.
 * @see {@link CreateContentCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
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
export class CreateContentCommand extends $Command
  .classBuilder<
    CreateContentCommandInput,
    CreateContentCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "CreateContent", {})
  .n("WisdomClient", "CreateContentCommand")
  .sc(CreateContent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContentRequest;
      output: CreateContentResponse;
    };
    sdk: {
      input: CreateContentCommandInput;
      output: CreateContentCommandOutput;
    };
  };
}
