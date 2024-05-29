// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PublishPackageVersionRequest,
  PublishPackageVersionRequestFilterSensitiveLog,
  PublishPackageVersionResult,
} from "../models/models_0";
import { de_PublishPackageVersionCommand, se_PublishPackageVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PublishPackageVersionCommand}.
 */
export interface PublishPackageVersionCommandInput extends Omit<PublishPackageVersionRequest, "assetContent"> {
  assetContent: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link PublishPackageVersionCommand}.
 */
export interface PublishPackageVersionCommandOutput extends PublishPackageVersionResult, __MetadataBearer {}

/**
 * <p>Creates a new package version containing one or more assets (or files).</p>
 *          <p>The <code>unfinished</code> flag can be used to keep the package version in the
 *       <code>Unfinished</code> state until all of its assets have been uploaded (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status.html#package-version-status">Package version status</a> in the <i>CodeArtifact user guide</i>). To set
 *       the package version’s status to <code>Published</code>, omit the <code>unfinished</code> flag
 *       when uploading the final asset, or set the status using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionStatus</a>. Once a package version’s status is set to
 *       <code>Published</code>, it cannot change back to <code>Unfinished</code>.</p>
 *          <note>
 *             <p>Only generic packages can be published using this API. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html">Using generic
 *       packages</a> in the <i>CodeArtifact User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PublishPackageVersionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, PublishPackageVersionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const input = { // PublishPackageVersionRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   packageVersion: "STRING_VALUE", // required
 *   assetContent: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 *   assetName: "STRING_VALUE", // required
 *   assetSHA256: "STRING_VALUE", // required
 *   unfinished: true || false,
 * };
 * const command = new PublishPackageVersionCommand(input);
 * const response = await client.send(command);
 * // { // PublishPackageVersionResult
 * //   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift",
 * //   namespace: "STRING_VALUE",
 * //   package: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   versionRevision: "STRING_VALUE",
 * //   status: "Published" || "Unfinished" || "Unlisted" || "Archived" || "Disposed" || "Deleted",
 * //   asset: { // AssetSummary
 * //     name: "STRING_VALUE", // required
 * //     size: Number("long"),
 * //     hashes: { // AssetHashes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PublishPackageVersionCommandInput - {@link PublishPackageVersionCommandInput}
 * @returns {@link PublishPackageVersionCommandOutput}
 * @see {@link PublishPackageVersionCommandInput} for command's `input` shape.
 * @see {@link PublishPackageVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PublishPackageVersionCommand extends $Command
  .classBuilder<
    PublishPackageVersionCommandInput,
    PublishPackageVersionCommandOutput,
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
  .s("CodeArtifactControlPlaneService", "PublishPackageVersion", {})
  .n("CodeartifactClient", "PublishPackageVersionCommand")
  .f(PublishPackageVersionRequestFilterSensitiveLog, void 0)
  .ser(se_PublishPackageVersionCommand)
  .de(de_PublishPackageVersionCommand)
  .build() {}
