// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateQuickResponseRequest, UpdateQuickResponseResponse } from "../models/models_0";
import { UpdateQuickResponse$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQuickResponseCommand}.
 */
export interface UpdateQuickResponseCommandInput extends UpdateQuickResponseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQuickResponseCommand}.
 */
export interface UpdateQuickResponseCommandOutput extends UpdateQuickResponseResponse, __MetadataBearer {}

/**
 * <p>Updates an existing Wisdom quick response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, UpdateQuickResponseCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, UpdateQuickResponseCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // UpdateQuickResponseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   quickResponseId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
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
 *   removeGroupingConfiguration: true || false,
 *   description: "STRING_VALUE",
 *   removeDescription: true || false,
 *   shortcutKey: "STRING_VALUE",
 *   removeShortcutKey: true || false,
 *   isActive: true || false,
 *   channels: [ // Channels
 *     "STRING_VALUE",
 *   ],
 *   language: "STRING_VALUE",
 * };
 * const command = new UpdateQuickResponseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQuickResponseResponse
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
 * @param UpdateQuickResponseCommandInput - {@link UpdateQuickResponseCommandInput}
 * @returns {@link UpdateQuickResponseCommandOutput}
 * @see {@link UpdateQuickResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateQuickResponseCommandOutput} for command's `response` shape.
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
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>The provided <code>revisionId</code> does not match, indicating the content has been
 *       modified since it was last read.</p>
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
export class UpdateQuickResponseCommand extends $Command
  .classBuilder<
    UpdateQuickResponseCommandInput,
    UpdateQuickResponseCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "UpdateQuickResponse", {})
  .n("WisdomClient", "UpdateQuickResponseCommand")
  .sc(UpdateQuickResponse$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQuickResponseRequest;
      output: UpdateQuickResponseResponse;
    };
    sdk: {
      input: UpdateQuickResponseCommandInput;
      output: UpdateQuickResponseCommandOutput;
    };
  };
}
