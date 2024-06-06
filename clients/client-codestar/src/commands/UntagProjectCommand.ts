// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UntagProjectRequest, UntagProjectResult } from "../models/models_0";
import { de_UntagProjectCommand, se_UntagProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagProjectCommand}.
 */
export interface UntagProjectCommandInput extends UntagProjectRequest {}
/**
 * @public
 *
 * The output of {@link UntagProjectCommand}.
 */
export interface UntagProjectCommandOutput extends UntagProjectResult, __MetadataBearer {}

/**
 * <p>Removes tags from a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UntagProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UntagProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // UntagProjectRequest
 *   id: "STRING_VALUE", // required
 *   tags: [ // TagKeys // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagProjectCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagProjectCommandInput - {@link UntagProjectCommandInput}
 * @returns {@link UntagProjectCommandOutput}
 * @see {@link UntagProjectCommandInput} for command's `input` shape.
 * @see {@link UntagProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A resource limit has been exceeded.</p>
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
export class UntagProjectCommand extends $Command
  .classBuilder<
    UntagProjectCommandInput,
    UntagProjectCommandOutput,
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
  .s("CodeStar_20170419", "UntagProject", {})
  .n("CodeStarClient", "UntagProjectCommand")
  .f(void 0, void 0)
  .ser(se_UntagProjectCommand)
  .de(de_UntagProjectCommand)
  .build() {}
