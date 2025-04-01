// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyPackageVersionsRequest, CopyPackageVersionsResult } from "../models/models_0";
import { de_CopyPackageVersionsCommand, se_CopyPackageVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyPackageVersionsCommand}.
 */
export interface CopyPackageVersionsCommandInput extends CopyPackageVersionsRequest {}
/**
 * @public
 *
 * The output of {@link CopyPackageVersionsCommand}.
 */
export interface CopyPackageVersionsCommandOutput extends CopyPackageVersionsResult, __MetadataBearer {}

/**
 * <p>
 *         Copies package versions from one repository to another repository in the same domain.
 *       </p>
 *          <note>
 *             <p>
 *         You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, CopyPackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, CopyPackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const input = { // CopyPackageVersionsRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   sourceRepository: "STRING_VALUE", // required
 *   destinationRepository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   versions: [ // PackageVersionList
 *     "STRING_VALUE",
 *   ],
 *   versionRevisions: { // PackageVersionRevisionMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   allowOverwrite: true || false,
 *   includeFromUpstream: true || false,
 * };
 * const command = new CopyPackageVersionsCommand(input);
 * const response = await client.send(command);
 * // { // CopyPackageVersionsResult
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
 * @param CopyPackageVersionsCommandInput - {@link CopyPackageVersionsCommandInput}
 * @returns {@link CopyPackageVersionsCommandOutput}
 * @see {@link CopyPackageVersionsCommandInput} for command's `input` shape.
 * @see {@link CopyPackageVersionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *         The operation did not succeed because it would have exceeded a service limit for your account.
 *       </p>
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
export class CopyPackageVersionsCommand extends $Command
  .classBuilder<
    CopyPackageVersionsCommandInput,
    CopyPackageVersionsCommandOutput,
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
  .s("CodeArtifactControlPlaneService", "CopyPackageVersions", {})
  .n("CodeartifactClient", "CopyPackageVersionsCommand")
  .f(void 0, void 0)
  .ser(se_CopyPackageVersionsCommand)
  .de(de_CopyPackageVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyPackageVersionsRequest;
      output: CopyPackageVersionsResult;
    };
    sdk: {
      input: CopyPackageVersionsCommandInput;
      output: CopyPackageVersionsCommandOutput;
    };
  };
}
