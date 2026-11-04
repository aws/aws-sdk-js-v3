// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisposePackageVersionsRequest, DisposePackageVersionsResult } from "../models/models_0";
import { DisposePackageVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the assets in package versions and sets the package versions' status to `Disposed`. A disposed package version cannot be restored in your repository because its assets are deleted.
 *
 * To view all disposed package versions in a repository, use [ListPackageVersions](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html) and set the [status](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html#API_ListPackageVersions_RequestSyntax) parameter to `Disposed`.
 *
 * To view information about a disposed package version, use [DescribePackageVersion](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DisposePackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DisposePackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
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
export class DisposePackageVersionsCommand extends command<DisposePackageVersionsCommandInput, DisposePackageVersionsCommandOutput>(
  _ep0,
  _mw0,
  "DisposePackageVersions",
  DisposePackageVersions$
) {
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
