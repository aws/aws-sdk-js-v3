// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetContentRequest, GetContentResponse } from "../models/models_0";
import { GetContent$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContentCommand}.
 */
export interface GetContentCommandInput extends GetContentRequest {}
/**
 * @public
 *
 * The output of {@link GetContentCommand}.
 */
export interface GetContentCommandOutput extends GetContentResponse, __MetadataBearer {}

/**
 * <p>Retrieves content, including a pre-signed URL to download the content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, GetContentCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, GetContentCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // GetContentRequest
 *   contentId: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new GetContentCommand(input);
 * const response = await client.send(command);
 * // { // GetContentResponse
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
 * @param GetContentCommandInput - {@link GetContentCommandInput}
 * @returns {@link GetContentCommandOutput}
 * @see {@link GetContentCommandInput} for command's `input` shape.
 * @see {@link GetContentCommandOutput} for command's `response` shape.
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
export class GetContentCommand extends $Command
  .classBuilder<
    GetContentCommandInput,
    GetContentCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "GetContent", {})
  .n("WisdomClient", "GetContentCommand")
  .sc(GetContent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContentRequest;
      output: GetContentResponse;
    };
    sdk: {
      input: GetContentCommandInput;
      output: GetContentCommandOutput;
    };
  };
}
