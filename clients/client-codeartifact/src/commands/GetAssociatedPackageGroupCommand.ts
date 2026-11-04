// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAssociatedPackageGroupRequest, GetAssociatedPackageGroupResult } from "../models/models_0";
import { GetAssociatedPackageGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAssociatedPackageGroupCommand}.
 */
export interface GetAssociatedPackageGroupCommandInput extends GetAssociatedPackageGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetAssociatedPackageGroupCommand}.
 */
export interface GetAssociatedPackageGroupCommandOutput extends GetAssociatedPackageGroupResult, __MetadataBearer {}

/**
 * Returns the most closely associated package group to the specified package. This API does not require that the package exist in any repository in the domain. As such, `GetAssociatedPackageGroup` can be used to see which package group's origin configuration applies to a package before that package is in a repository. This can be helpful to check if public packages are blocked without ingesting them.
 *
 * For information package group association and matching, see [Package group definition syntax and matching behavior](https://docs.aws.amazon.com/codeartifact/latest/ug/package-group-definition-syntax-matching-behavior.html) in the *CodeArtifact User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetAssociatedPackageGroupCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetAssociatedPackageGroupCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // GetAssociatedPackageGroupRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 * };
 * const command = new GetAssociatedPackageGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetAssociatedPackageGroupResult
 * //   packageGroup: { // PackageGroupDescription
 * //     arn: "STRING_VALUE",
 * //     pattern: "STRING_VALUE",
 * //     domainName: "STRING_VALUE",
 * //     domainOwner: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"),
 * //     contactInfo: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     originConfiguration: { // PackageGroupOriginConfiguration
 * //       restrictions: { // PackageGroupOriginRestrictions
 * //         "<keys>": { // PackageGroupOriginRestriction
 * //           mode: "ALLOW" || "ALLOW_SPECIFIC_REPOSITORIES" || "BLOCK" || "INHERIT",
 * //           effectiveMode: "ALLOW" || "ALLOW_SPECIFIC_REPOSITORIES" || "BLOCK" || "INHERIT",
 * //           inheritedFrom: { // PackageGroupReference
 * //             arn: "STRING_VALUE",
 * //             pattern: "STRING_VALUE",
 * //           },
 * //           repositoriesCount: Number("long"),
 * //         },
 * //       },
 * //     },
 * //     parent: {
 * //       arn: "STRING_VALUE",
 * //       pattern: "STRING_VALUE",
 * //     },
 * //   },
 * //   associationType: "STRONG" || "WEAK",
 * // };
 *
 * ```
 *
 * @param GetAssociatedPackageGroupCommandInput - {@link GetAssociatedPackageGroupCommandInput}
 * @returns {@link GetAssociatedPackageGroupCommandOutput}
 * @see {@link GetAssociatedPackageGroupCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedPackageGroupCommandOutput} for command's `response` shape.
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
export class GetAssociatedPackageGroupCommand extends command<GetAssociatedPackageGroupCommandInput, GetAssociatedPackageGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetAssociatedPackageGroup",
  GetAssociatedPackageGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssociatedPackageGroupRequest;
      output: GetAssociatedPackageGroupResult;
    };
    sdk: {
      input: GetAssociatedPackageGroupCommandInput;
      output: GetAssociatedPackageGroupCommandOutput;
    };
  };
}
