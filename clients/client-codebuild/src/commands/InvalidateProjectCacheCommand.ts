// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { InvalidateProjectCacheInput, InvalidateProjectCacheOutput } from "../models/models_0";
import { InvalidateProjectCache } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvalidateProjectCacheCommand}.
 */
export interface InvalidateProjectCacheCommandInput extends InvalidateProjectCacheInput {}
/**
 * @public
 *
 * The output of {@link InvalidateProjectCacheCommand}.
 */
export interface InvalidateProjectCacheCommandOutput extends InvalidateProjectCacheOutput, __MetadataBearer {}

/**
 * <p>Resets the cache for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, InvalidateProjectCacheCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, InvalidateProjectCacheCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // InvalidateProjectCacheInput
 *   projectName: "STRING_VALUE", // required
 * };
 * const command = new InvalidateProjectCacheCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param InvalidateProjectCacheCommandInput - {@link InvalidateProjectCacheCommandInput}
 * @returns {@link InvalidateProjectCacheCommandOutput}
 * @see {@link InvalidateProjectCacheCommandInput} for command's `input` shape.
 * @see {@link InvalidateProjectCacheCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class InvalidateProjectCacheCommand extends $Command
  .classBuilder<
    InvalidateProjectCacheCommandInput,
    InvalidateProjectCacheCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "InvalidateProjectCache", {})
  .n("CodeBuildClient", "InvalidateProjectCacheCommand")
  .sc(InvalidateProjectCache)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvalidateProjectCacheInput;
      output: {};
    };
    sdk: {
      input: InvalidateProjectCacheCommandInput;
      output: InvalidateProjectCacheCommandOutput;
    };
  };
}
