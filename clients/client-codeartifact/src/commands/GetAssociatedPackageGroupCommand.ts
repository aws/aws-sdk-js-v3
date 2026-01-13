// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAssociatedPackageGroupRequest, GetAssociatedPackageGroupResult } from "../models/models_0";
import { GetAssociatedPackageGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the most closely associated package group to the specified package. This API does not require that the package exist
 *     in any repository in the domain. As such, <code>GetAssociatedPackageGroup</code> can be used to see which package group's origin configuration
 *     applies to a package before that package is in a repository. This can be helpful to check if public packages are blocked without ingesting them.</p>
 *          <p>For information package group association and matching, see
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-group-definition-syntax-matching-behavior.html">Package group
 *         definition syntax and matching behavior</a> in the <i>CodeArtifact User Guide</i>.</p>
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
export class GetAssociatedPackageGroupCommand extends $Command
  .classBuilder<
    GetAssociatedPackageGroupCommandInput,
    GetAssociatedPackageGroupCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "GetAssociatedPackageGroup", {})
  .n("CodeartifactClient", "GetAssociatedPackageGroupCommand")
  .sc(GetAssociatedPackageGroup$)
  .build() {
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
