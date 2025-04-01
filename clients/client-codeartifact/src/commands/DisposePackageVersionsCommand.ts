// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisposePackageVersionsRequest, DisposePackageVersionsResult } from "../models/models_0";
import { de_DisposePackageVersionsCommand, se_DisposePackageVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisposePackageVersionsCommand}.
 */
export interface DisposePackageVersionsCommandInput extends DisposePackageVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DisposePackageVersionsCommand}.
 */
export interface DisposePackageVersionsCommandOutput extends DisposePackageVersionsResult, __MetadataBearer {}

/**
 * <p>
 *       Deletes the assets in package versions and sets the package versions' status to <code>Disposed</code>.
 *       A disposed package version cannot be restored in your repository because its assets are deleted.
 *     </p>
 *          <p>
 *       To view all disposed package versions in a repository, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> and set the
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html#API_ListPackageVersions_RequestSyntax">status</a> parameter
 *       to <code>Disposed</code>.
 *     </p>
 *          <p>
 *       To view information about a disposed package version, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html">DescribePackageVersion</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DisposePackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DisposePackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const input = { // DisposePackageVersionsRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   versions: [ // PackageVersionList // required
 *     "STRING_VALUE",
 *   ],
 *   versionRevisions: { // PackageVersionRevisionMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   expectedStatus: "Published" || "Unfinished" || "Unlisted" || "Archived" || "Disposed" || "Deleted",
 * };
 * const command = new DisposePackageVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DisposePackageVersionsResult
 * //   successfulVersions: { // SuccessfulPackageVersionInfoMap
 * //     "<keys>": { // SuccessfulPackageVersionInfo
 * //       revision: "STRING_VALUE",
 * //       status: "Published" || "Unfinished" || "Unlisted" || "Archived" || "Disposed" || "Deleted",
 * //     },
 * //   },
 * //   failedVersions: { // PackageVersionErrorMap
 * //     "<keys>": { // PackageVersionError
 * //       errorCode: "ALREADY_EXISTS" || "MISMATCHED_REVISION" || "MISMATCHED_STATUS" || "NOT_ALLOWED" || "NOT_FOUND" || "SKIPPED",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DisposePackageVersionsCommandInput - {@link DisposePackageVersionsCommandInput}
 * @returns {@link DisposePackageVersionsCommandOutput}
 * @see {@link DisposePackageVersionsCommandInput} for command's `input` shape.
 * @see {@link DisposePackageVersionsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *         The operation did not succeed because prerequisites are not met.
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
export class DisposePackageVersionsCommand extends $Command
  .classBuilder<
    DisposePackageVersionsCommandInput,
    DisposePackageVersionsCommandOutput,
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
  .s("CodeArtifactControlPlaneService", "DisposePackageVersions", {})
  .n("CodeartifactClient", "DisposePackageVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DisposePackageVersionsCommand)
  .de(de_DisposePackageVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisposePackageVersionsRequest;
      output: DisposePackageVersionsResult;
    };
    sdk: {
      input: DisposePackageVersionsCommandInput;
      output: DisposePackageVersionsCommandOutput;
    };
  };
}
