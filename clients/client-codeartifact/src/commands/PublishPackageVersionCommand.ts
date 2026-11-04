// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PublishPackageVersionRequest, PublishPackageVersionResult } from "../models/models_0";
import { PublishPackageVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new package version containing one or more assets (or files).
 *
 * The `unfinished` flag can be used to keep the package version in the `Unfinished` state until all of its assets have been uploaded (see [Package version status](https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status.html#package-version-status) in the *CodeArtifact user guide*). To set the package version’s status to `Published`, omit the `unfinished` flag when uploading the final asset, or set the status using [UpdatePackageVersionStatus](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html). Once a package version’s status is set to `Published`, it cannot change back to `Unfinished`.
 *
 * > **Note:** Only generic packages can be published using this API. For more information, see [Using generic packages](https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html) in the *CodeArtifact User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PublishPackageVersionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, PublishPackageVersionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // PublishPackageVersionRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
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
 * //   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
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
 *
 * The operation did not succeed because of an unauthorized access attempt.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The operation did not succeed because prerequisites are not met.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation did not succeed because of an error that occurred inside CodeArtifact.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation did not succeed because the resource requested is not found in the service.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The operation did not succeed because it would have exceeded a service limit for your account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The operation did not succeed because too many requests are sent to the service.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation did not succeed because a parameter in the request was sent with an invalid value.
 *
 * @throws {@link CodeartifactServiceException}
 *
 * Base exception class for all service exceptions from Codeartifact service.
 *
 * @public
 */
export class PublishPackageVersionCommand extends command<PublishPackageVersionCommandInput, PublishPackageVersionCommandOutput>(
  _ep0,
  _mw0,
  "PublishPackageVersion",
  PublishPackageVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishPackageVersionRequest;
      output: PublishPackageVersionResult;
    };
    sdk: {
      input: PublishPackageVersionCommandInput;
      output: PublishPackageVersionCommandOutput;
    };
  };
}
