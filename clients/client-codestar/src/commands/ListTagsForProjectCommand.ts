// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagsForProjectRequest, ListTagsForProjectResult } from "../models/models_0";
import { de_ListTagsForProjectCommand, se_ListTagsForProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForProjectCommand}.
 */
export interface ListTagsForProjectCommandInput extends ListTagsForProjectRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForProjectCommand}.
 */
export interface ListTagsForProjectCommandOutput extends ListTagsForProjectResult, __MetadataBearer {}

/**
 * <p>Gets the tags for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListTagsForProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListTagsForProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // ListTagsForProjectRequest
 *   id: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTagsForProjectCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForProjectResult
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTagsForProjectCommandInput - {@link ListTagsForProjectCommandInput}
 * @returns {@link ListTagsForProjectCommandOutput}
 * @see {@link ListTagsForProjectCommandInput} for command's `input` shape.
 * @see {@link ListTagsForProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token is not valid.</p>
 *
 * @throws {@link ProjectNotFoundException} (client fault)
 *  <p>The specified AWS CodeStar project was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 * @public
 */
export class ListTagsForProjectCommand extends $Command
  .classBuilder<
    ListTagsForProjectCommandInput,
    ListTagsForProjectCommandOutput,
    CodeStarClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeStarClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_20170419", "ListTagsForProject", {})
  .n("CodeStarClient", "ListTagsForProjectCommand")
  .f(void 0, void 0)
  .ser(se_ListTagsForProjectCommand)
  .de(de_ListTagsForProjectCommand)
  .build() {}
