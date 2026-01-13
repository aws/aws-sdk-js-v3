// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutPackageOriginConfigurationRequest, PutPackageOriginConfigurationResult } from "../models/models_0";
import { PutPackageOriginConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPackageOriginConfigurationCommand}.
 */
export interface PutPackageOriginConfigurationCommandInput extends PutPackageOriginConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutPackageOriginConfigurationCommand}.
 */
export interface PutPackageOriginConfigurationCommandOutput extends PutPackageOriginConfigurationResult, __MetadataBearer {}

/**
 * <p>Sets the package origin configuration for a package.</p>
 *          <p>The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct
 *     publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source.
 *     For more information about package origin controls and configuration, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-origin-controls.html">Editing package origin controls</a> in the <i>CodeArtifact User Guide</i>.</p>
 *          <p>
 *             <code>PutPackageOriginConfiguration</code> can be called on a package that doesn't yet exist in the repository. When called
 *       on a package that does not exist, a package is created in the repository with no versions and the requested restrictions are set on the package.
 *       This can be used to preemptively block ingesting or retaining any versions from external connections or upstream repositories, or to block
 *       publishing any versions of the package into the repository before connecting any package managers or publishers to the repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PutPackageOriginConfigurationCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, PutPackageOriginConfigurationCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // PutPackageOriginConfigurationRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   restrictions: { // PackageOriginRestrictions
 *     publish: "ALLOW" || "BLOCK", // required
 *     upstream: "ALLOW" || "BLOCK", // required
 *   },
 * };
 * const command = new PutPackageOriginConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutPackageOriginConfigurationResult
 * //   originConfiguration: { // PackageOriginConfiguration
 * //     restrictions: { // PackageOriginRestrictions
 * //       publish: "ALLOW" || "BLOCK", // required
 * //       upstream: "ALLOW" || "BLOCK", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutPackageOriginConfigurationCommandInput - {@link PutPackageOriginConfigurationCommandInput}
 * @returns {@link PutPackageOriginConfigurationCommandOutput}
 * @see {@link PutPackageOriginConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutPackageOriginConfigurationCommandOutput} for command's `response` shape.
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
export class PutPackageOriginConfigurationCommand extends $Command
  .classBuilder<
    PutPackageOriginConfigurationCommandInput,
    PutPackageOriginConfigurationCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "PutPackageOriginConfiguration", {})
  .n("CodeartifactClient", "PutPackageOriginConfigurationCommand")
  .sc(PutPackageOriginConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPackageOriginConfigurationRequest;
      output: PutPackageOriginConfigurationResult;
    };
    sdk: {
      input: PutPackageOriginConfigurationCommandInput;
      output: PutPackageOriginConfigurationCommandOutput;
    };
  };
}
