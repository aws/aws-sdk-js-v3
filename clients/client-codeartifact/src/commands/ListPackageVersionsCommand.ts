// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPackageVersionsRequest, ListPackageVersionsResult } from "../models/models_0";
import { ListPackageVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPackageVersionsCommand}.
 */
export interface ListPackageVersionsCommandInput extends ListPackageVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPackageVersionsCommand}.
 */
export interface ListPackageVersionsCommandOutput extends ListPackageVersionsResult, __MetadataBearer {}

/**
 * Returns a list of [PackageVersionSummary](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html) objects for package versions in a repository that match the request parameters. Package versions of all statuses will be returned by default when calling `list-package-versions` with no `--status` parameter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // ListPackageVersionsRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   status: "Published" || "Unfinished" || "Unlisted" || "Archived" || "Disposed" || "Deleted",
 *   sortBy: "PUBLISHED_TIME",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   originType: "INTERNAL" || "EXTERNAL" || "UNKNOWN",
 * };
 * const command = new ListPackageVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPackageVersionsResult
 * //   defaultDisplayVersion: "STRING_VALUE",
 * //   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 * //   namespace: "STRING_VALUE",
 * //   package: "STRING_VALUE",
 * //   versions: [ // PackageVersionSummaryList
 * //     { // PackageVersionSummary
 * //       version: "STRING_VALUE", // required
 * //       revision: "STRING_VALUE",
 * //       status: "Published" || "Unfinished" || "Unlisted" || "Archived" || "Disposed" || "Deleted", // required
 * //       origin: { // PackageVersionOrigin
 * //         domainEntryPoint: { // DomainEntryPoint
 * //           repositoryName: "STRING_VALUE",
 * //           externalConnectionName: "STRING_VALUE",
 * //         },
 * //         originType: "INTERNAL" || "EXTERNAL" || "UNKNOWN",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPackageVersionsCommandInput - {@link ListPackageVersionsCommandInput}
 * @returns {@link ListPackageVersionsCommandOutput}
 * @see {@link ListPackageVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPackageVersionsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation did not succeed because of an unauthorized access attempt.
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
export class ListPackageVersionsCommand extends command<ListPackageVersionsCommandInput, ListPackageVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListPackageVersions",
  ListPackageVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPackageVersionsRequest;
      output: ListPackageVersionsResult;
    };
    sdk: {
      input: ListPackageVersionsCommandInput;
      output: ListPackageVersionsCommandOutput;
    };
  };
}
