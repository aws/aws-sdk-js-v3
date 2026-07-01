// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContentSummaryRequest, GetContentSummaryResponse } from "../models/models_0";
import { GetContentSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContentSummaryCommand}.
 */
export interface GetContentSummaryCommandInput extends GetContentSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetContentSummaryCommand}.
 */
export interface GetContentSummaryCommandOutput extends GetContentSummaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves summary information about the content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, GetContentSummaryCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, GetContentSummaryCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // GetContentSummaryRequest
 *   contentId: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new GetContentSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetContentSummaryResponse
 * //   contentSummary: { // ContentSummary
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
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContentSummaryCommandInput - {@link GetContentSummaryCommandInput}
 * @returns {@link GetContentSummaryCommandOutput}
 * @see {@link GetContentSummaryCommandInput} for command's `input` shape.
 * @see {@link GetContentSummaryCommandOutput} for command's `response` shape.
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
export class GetContentSummaryCommand extends command<GetContentSummaryCommandInput, GetContentSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetContentSummary",
  GetContentSummary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContentSummaryRequest;
      output: GetContentSummaryResponse;
    };
    sdk: {
      input: GetContentSummaryCommandInput;
      output: GetContentSummaryCommandOutput;
    };
  };
}
