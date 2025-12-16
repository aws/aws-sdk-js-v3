// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCuratedEnvironmentImagesInput, ListCuratedEnvironmentImagesOutput } from "../models/models_0";
import { ListCuratedEnvironmentImages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCuratedEnvironmentImagesCommand}.
 */
export interface ListCuratedEnvironmentImagesCommandInput extends ListCuratedEnvironmentImagesInput {}
/**
 * @public
 *
 * The output of {@link ListCuratedEnvironmentImagesCommand}.
 */
export interface ListCuratedEnvironmentImagesCommandOutput
  extends ListCuratedEnvironmentImagesOutput,
    __MetadataBearer {}

/**
 * <p>Gets information about Docker images that are managed by CodeBuild.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListCuratedEnvironmentImagesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListCuratedEnvironmentImagesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = {};
 * const command = new ListCuratedEnvironmentImagesCommand(input);
 * const response = await client.send(command);
 * // { // ListCuratedEnvironmentImagesOutput
 * //   platforms: [ // EnvironmentPlatforms
 * //     { // EnvironmentPlatform
 * //       platform: "DEBIAN" || "AMAZON_LINUX" || "UBUNTU" || "WINDOWS_SERVER",
 * //       languages: [ // EnvironmentLanguages
 * //         { // EnvironmentLanguage
 * //           language: "JAVA" || "PYTHON" || "NODE_JS" || "RUBY" || "GOLANG" || "DOCKER" || "ANDROID" || "DOTNET" || "BASE" || "PHP",
 * //           images: [ // EnvironmentImages
 * //             { // EnvironmentImage
 * //               name: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //               versions: [ // ImageVersions
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCuratedEnvironmentImagesCommandInput - {@link ListCuratedEnvironmentImagesCommandInput}
 * @returns {@link ListCuratedEnvironmentImagesCommandOutput}
 * @see {@link ListCuratedEnvironmentImagesCommandInput} for command's `input` shape.
 * @see {@link ListCuratedEnvironmentImagesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class ListCuratedEnvironmentImagesCommand extends $Command
  .classBuilder<
    ListCuratedEnvironmentImagesCommandInput,
    ListCuratedEnvironmentImagesCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "ListCuratedEnvironmentImages", {})
  .n("CodeBuildClient", "ListCuratedEnvironmentImagesCommand")
  .sc(ListCuratedEnvironmentImages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListCuratedEnvironmentImagesOutput;
    };
    sdk: {
      input: ListCuratedEnvironmentImagesCommandInput;
      output: ListCuratedEnvironmentImagesCommandOutput;
    };
  };
}
