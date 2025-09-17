// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPackageVersionAssetsRequest, ListPackageVersionAssetsResult } from "../models/models_0";
import { de_ListPackageVersionAssetsCommand, se_ListPackageVersionAssetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPackageVersionAssetsCommand}.
 */
export interface ListPackageVersionAssetsCommandInput extends ListPackageVersionAssetsRequest {}
/**
 * @public
 *
 * The output of {@link ListPackageVersionAssetsCommand}.
 */
export interface ListPackageVersionAssetsCommandOutput extends ListPackageVersionAssetsResult, __MetadataBearer {}

/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a>
 *        objects for assets in a package version.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageVersionAssetsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackageVersionAssetsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // ListPackageVersionAssetsRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   packageVersion: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPackageVersionAssetsCommand(input);
 * const response = await client.send(command);
 * // { // ListPackageVersionAssetsResult
 * //   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 * //   namespace: "STRING_VALUE",
 * //   package: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   versionRevision: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * //   assets: [ // AssetSummaryList
 * //     { // AssetSummary
 * //       name: "STRING_VALUE", // required
 * //       size: Number("long"),
 * //       hashes: { // AssetHashes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPackageVersionAssetsCommandInput - {@link ListPackageVersionAssetsCommandInput}
 * @returns {@link ListPackageVersionAssetsCommandOutput}
 * @see {@link ListPackageVersionAssetsCommandInput} for command's `input` shape.
 * @see {@link ListPackageVersionAssetsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation did not succeed because of an error that occurred inside CodeArtifact. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 *
 * @throws {@link CodeartifactServiceException}
 * <p>Base exception class for all service exceptions from Codeartifact service.</p>
 *
 *
 * @public
 */
export class ListPackageVersionAssetsCommand extends $Command
  .classBuilder<
    ListPackageVersionAssetsCommandInput,
    ListPackageVersionAssetsCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeArtifactControlPlaneService", "ListPackageVersionAssets", {})
  .n("CodeartifactClient", "ListPackageVersionAssetsCommand")
  .f(void 0, void 0)
  .ser(se_ListPackageVersionAssetsCommand)
  .de(de_ListPackageVersionAssetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPackageVersionAssetsRequest;
      output: ListPackageVersionAssetsResult;
    };
    sdk: {
      input: ListPackageVersionAssetsCommandInput;
      output: ListPackageVersionAssetsCommandOutput;
    };
  };
}
