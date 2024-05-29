// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePackageVersionsStatusRequest, UpdatePackageVersionsStatusResult } from "../models/models_0";
import {
  de_UpdatePackageVersionsStatusCommand,
  se_UpdatePackageVersionsStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePackageVersionsStatusCommand}.
 */
export interface UpdatePackageVersionsStatusCommandInput extends UpdatePackageVersionsStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePackageVersionsStatusCommand}.
 */
export interface UpdatePackageVersionsStatusCommandOutput extends UpdatePackageVersionsStatusResult, __MetadataBearer {}

/**
 * <p>
 *       Updates the status of one or more versions of a package. Using <code>UpdatePackageVersionsStatus</code>,
 *       you can update the status of package versions to <code>Archived</code>, <code>Published</code>, or <code>Unlisted</code>.
 *       To set the status of a package version to <code>Disposed</code>, use
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html">DisposePackageVersions</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, UpdatePackageVersionsStatusCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, UpdatePackageVersionsStatusCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const input = { // UpdatePackageVersionsStatusRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   versions: [ // PackageVersionList // required
 *     "STRING_VALUE",
 *   ],
 *   versionRevisions: { // PackageVersionRevisionMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   expectedStatus: "Published" || "Unfinished" || "Unlisted" || "Archived" || "Disposed" || "Deleted",
 *   targetStatus: "Published" || "Unfinished" || "Unlisted" || "Archived" || "Disposed" || "Deleted", // required
 * };
 * const command = new UpdatePackageVersionsStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePackageVersionsStatusResult
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
 * @param UpdatePackageVersionsStatusCommandInput - {@link UpdatePackageVersionsStatusCommandInput}
 * @returns {@link UpdatePackageVersionsStatusCommandOutput}
 * @see {@link UpdatePackageVersionsStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageVersionsStatusCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdatePackageVersionsStatusCommand extends $Command
  .classBuilder<
    UpdatePackageVersionsStatusCommandInput,
    UpdatePackageVersionsStatusCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeArtifactControlPlaneService", "UpdatePackageVersionsStatus", {})
  .n("CodeartifactClient", "UpdatePackageVersionsStatusCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePackageVersionsStatusCommand)
  .de(de_UpdatePackageVersionsStatusCommand)
  .build() {}
