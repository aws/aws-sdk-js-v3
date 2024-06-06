// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourcesRequest, ListResourcesResult } from "../models/models_0";
import { de_ListResourcesCommand, se_ListResourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandInput extends ListResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandOutput extends ListResourcesResult, __MetadataBearer {}

/**
 * <p>Lists resources associated with a project in AWS CodeStar.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListResourcesCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListResourcesCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // ListResourcesRequest
 *   projectId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesResult
 * //   resources: [ // ResourcesResult
 * //     { // Resource
 * //       id: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesCommandInput - {@link ListResourcesCommandInput}
 * @returns {@link ListResourcesCommandOutput}
 * @see {@link ListResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourcesCommandOutput} for command's `response` shape.
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
export class ListResourcesCommand extends $Command
  .classBuilder<
    ListResourcesCommandInput,
    ListResourcesCommandOutput,
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
  .s("CodeStar_20170419", "ListResources", {})
  .n("CodeStarClient", "ListResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListResourcesCommand)
  .de(de_ListResourcesCommand)
  .build() {}
