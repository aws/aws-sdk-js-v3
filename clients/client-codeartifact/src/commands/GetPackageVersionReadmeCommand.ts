// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPackageVersionReadmeRequest, GetPackageVersionReadmeResult } from "../models/models_0";
import { GetPackageVersionReadme } from "../schemas/schemas_6_Package";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPackageVersionReadmeCommand}.
 */
export interface GetPackageVersionReadmeCommandInput extends GetPackageVersionReadmeRequest {}
/**
 * @public
 *
 * The output of {@link GetPackageVersionReadmeCommand}.
 */
export interface GetPackageVersionReadmeCommandOutput extends GetPackageVersionReadmeResult, __MetadataBearer {}

/**
 * <p>
 *          Gets the readme file or descriptive text for a package version.
 *       </p>
 *          <p>
 *        The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetPackageVersionReadmeCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetPackageVersionReadmeCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // GetPackageVersionReadmeRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   packageVersion: "STRING_VALUE", // required
 * };
 * const command = new GetPackageVersionReadmeCommand(input);
 * const response = await client.send(command);
 * // { // GetPackageVersionReadmeResult
 * //   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 * //   namespace: "STRING_VALUE",
 * //   package: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   versionRevision: "STRING_VALUE",
 * //   readme: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPackageVersionReadmeCommandInput - {@link GetPackageVersionReadmeCommandInput}
 * @returns {@link GetPackageVersionReadmeCommandOutput}
 * @see {@link GetPackageVersionReadmeCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionReadmeCommandOutput} for command's `response` shape.
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
export class GetPackageVersionReadmeCommand extends $Command
  .classBuilder<
    GetPackageVersionReadmeCommandInput,
    GetPackageVersionReadmeCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "GetPackageVersionReadme", {})
  .n("CodeartifactClient", "GetPackageVersionReadmeCommand")
  .sc(GetPackageVersionReadme)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPackageVersionReadmeRequest;
      output: GetPackageVersionReadmeResult;
    };
    sdk: {
      input: GetPackageVersionReadmeCommandInput;
      output: GetPackageVersionReadmeCommandOutput;
    };
  };
}
