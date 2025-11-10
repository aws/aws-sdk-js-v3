// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPackageVersionsRequest, ListPackageVersionsResult } from "../models/models_0";
import { ListPackageVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>
 *         Returns a list of
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a>
 *         objects for package versions in a repository that match the request parameters. Package versions of all statuses will be returned by default when calling <code>list-package-versions</code> with no  <code>--status</code> parameter.
 *       </p>
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
export class ListPackageVersionsCommand extends $Command
  .classBuilder<
    ListPackageVersionsCommandInput,
    ListPackageVersionsCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "ListPackageVersions", {})
  .n("CodeartifactClient", "ListPackageVersionsCommand")
  .sc(ListPackageVersions)
  .build() {
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
