// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPackagesRequest, ListPackagesResult } from "../models/models_0";
import { ListPackages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPackagesCommand}.
 */
export interface ListPackagesCommandInput extends ListPackagesRequest {}
/**
 * @public
 *
 * The output of {@link ListPackagesCommand}.
 */
export interface ListPackagesCommandOutput extends ListPackagesResult, __MetadataBearer {}

/**
 * Returns a list of [PackageSummary](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html) objects for packages in a repository that match the request parameters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackagesCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackagesCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // ListPackagesRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 *   namespace: "STRING_VALUE",
 *   packagePrefix: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   publish: "ALLOW" || "BLOCK",
 *   upstream: "ALLOW" || "BLOCK",
 * };
 * const command = new ListPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListPackagesResult
 * //   packages: [ // PackageSummaryList
 * //     { // PackageSummary
 * //       format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 * //       namespace: "STRING_VALUE",
 * //       package: "STRING_VALUE",
 * //       originConfiguration: { // PackageOriginConfiguration
 * //         restrictions: { // PackageOriginRestrictions
 * //           publish: "ALLOW" || "BLOCK", // required
 * //           upstream: "ALLOW" || "BLOCK", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPackagesCommandInput - {@link ListPackagesCommandInput}
 * @returns {@link ListPackagesCommandOutput}
 * @see {@link ListPackagesCommandInput} for command's `input` shape.
 * @see {@link ListPackagesCommandOutput} for command's `response` shape.
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
export class ListPackagesCommand extends command<ListPackagesCommandInput, ListPackagesCommandOutput>(
  _ep0,
  _mw0,
  "ListPackages",
  ListPackages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPackagesRequest;
      output: ListPackagesResult;
    };
    sdk: {
      input: ListPackagesCommandInput;
      output: ListPackagesCommandOutput;
    };
  };
}
