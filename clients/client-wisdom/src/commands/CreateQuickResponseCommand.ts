// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateQuickResponseRequest, CreateQuickResponseResponse } from "../models/models_0";
import { CreateQuickResponse } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQuickResponseCommand}.
 */
export interface CreateQuickResponseCommandInput extends CreateQuickResponseRequest {}
/**
 * @public
 *
 * The output of {@link CreateQuickResponseCommand}.
 */
export interface CreateQuickResponseCommandOutput extends CreateQuickResponseResponse, __MetadataBearer {}

/**
 * <p>Creates a Wisdom quick response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, CreateQuickResponseCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, CreateQuickResponseCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // CreateQuickResponseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   content: { // QuickResponseDataProvider Union: only one key present
 *     content: "STRING_VALUE",
 *   },
 *   contentType: "STRING_VALUE",
 *   groupingConfiguration: { // GroupingConfiguration
 *     criteria: "STRING_VALUE",
 *     values: [ // GroupingValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   description: "STRING_VALUE",
 *   shortcutKey: "STRING_VALUE",
 *   isActive: true || false,
 *   channels: [ // Channels
 *     "STRING_VALUE",
 *   ],
 *   language: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQuickResponseCommand(input);
 * const response = await client.send(command);
 * // { // CreateQuickResponseResponse
 * //   quickResponse: { // QuickResponseData
 * //     quickResponseArn: "STRING_VALUE", // required
 * //     quickResponseId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     contentType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     contents: { // QuickResponseContents
 * //       plainText: { // QuickResponseContentProvider Union: only one key present
 * //         content: "STRING_VALUE",
 * //       },
 * //       markdown: {//  Union: only one key present
 * //         content: "STRING_VALUE",
 * //       },
 * //     },
 * //     description: "STRING_VALUE",
 * //     groupingConfiguration: { // GroupingConfiguration
 * //       criteria: "STRING_VALUE",
 * //       values: [ // GroupingValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     shortcutKey: "STRING_VALUE",
 * //     lastModifiedBy: "STRING_VALUE",
 * //     isActive: true || false,
 * //     channels: [ // Channels
 * //       "STRING_VALUE",
 * //     ],
 * //     language: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateQuickResponseCommandInput - {@link CreateQuickResponseCommandInput}
 * @returns {@link CreateQuickResponseCommandOutput}
 * @see {@link CreateQuickResponseCommandInput} for command's `input` shape.
 * @see {@link CreateQuickResponseCommandOutput} for command's `response` shape.
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
export class CreateQuickResponseCommand extends $Command
  .classBuilder<
    CreateQuickResponseCommandInput,
    CreateQuickResponseCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "CreateQuickResponse", {})
  .n("WisdomClient", "CreateQuickResponseCommand")
  .sc(CreateQuickResponse)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQuickResponseRequest;
      output: CreateQuickResponseResponse;
    };
    sdk: {
      input: CreateQuickResponseCommandInput;
      output: CreateQuickResponseCommandOutput;
    };
  };
}
