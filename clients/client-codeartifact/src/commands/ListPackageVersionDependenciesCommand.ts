// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPackageVersionDependenciesRequest, ListPackageVersionDependenciesResult } from "../models/models_0";
import { ListPackageVersionDependencies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPackageVersionDependenciesCommand}.
 */
export interface ListPackageVersionDependenciesCommandInput extends ListPackageVersionDependenciesRequest {}
/**
 * @public
 *
 * The output of {@link ListPackageVersionDependenciesCommand}.
 */
export interface ListPackageVersionDependenciesCommandOutput extends ListPackageVersionDependenciesResult, __MetadataBearer {}

/**
 * Returns the direct dependencies for a package version. The dependencies are returned as [PackageDependency](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html) objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package format (for example, the `package.json` file for npm packages and the `pom.xml` file for Maven). Any package version dependencies that are not listed in the configuration file are not returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageVersionDependenciesCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackageVersionDependenciesCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // ListPackageVersionDependenciesRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   packageVersion: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPackageVersionDependenciesCommand(input);
 * const response = await client.send(command);
 * // { // ListPackageVersionDependenciesResult
 * //   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 * //   namespace: "STRING_VALUE",
 * //   package: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   versionRevision: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * //   dependencies: [ // PackageDependencyList
 * //     { // PackageDependency
 * //       namespace: "STRING_VALUE",
 * //       package: "STRING_VALUE",
 * //       dependencyType: "STRING_VALUE",
 * //       versionRequirement: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPackageVersionDependenciesCommandInput - {@link ListPackageVersionDependenciesCommandInput}
 * @returns {@link ListPackageVersionDependenciesCommandOutput}
 * @see {@link ListPackageVersionDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListPackageVersionDependenciesCommandOutput} for command's `response` shape.
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
export class ListPackageVersionDependenciesCommand extends command<ListPackageVersionDependenciesCommandInput, ListPackageVersionDependenciesCommandOutput>(
  _ep0,
  _mw0,
  "ListPackageVersionDependencies",
  ListPackageVersionDependencies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPackageVersionDependenciesRequest;
      output: ListPackageVersionDependenciesResult;
    };
    sdk: {
      input: ListPackageVersionDependenciesCommandInput;
      output: ListPackageVersionDependenciesCommandOutput;
    };
  };
}
