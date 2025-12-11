// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePackageRequest, DeletePackageResult } from "../models/models_0";
import { DeletePackage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePackageCommand}.
 */
export interface DeletePackageCommandInput extends DeletePackageRequest {}
/**
 * @public
 *
 * The output of {@link DeletePackageCommand}.
 */
export interface DeletePackageCommandOutput extends DeletePackageResult, __MetadataBearer {}

/**
 * <p>Deletes a package and all associated package versions. A deleted package cannot be restored. To delete one or more package versions, use the
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeletePackageVersions.html">DeletePackageVersions</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeletePackageCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeletePackageCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // DeletePackageRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 * };
 * const command = new DeletePackageCommand(input);
 * const response = await client.send(command);
 * // { // DeletePackageResult
 * //   deletedPackage: { // PackageSummary
 * //     format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 * //     namespace: "STRING_VALUE",
 * //     package: "STRING_VALUE",
 * //     originConfiguration: { // PackageOriginConfiguration
 * //       restrictions: { // PackageOriginRestrictions
 * //         publish: "ALLOW" || "BLOCK", // required
 * //         upstream: "ALLOW" || "BLOCK", // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeletePackageCommandInput - {@link DeletePackageCommandInput}
 * @returns {@link DeletePackageCommandOutput}
 * @see {@link DeletePackageCommandInput} for command's `input` shape.
 * @see {@link DeletePackageCommandOutput} for command's `response` shape.
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
export class DeletePackageCommand extends $Command
  .classBuilder<
    DeletePackageCommandInput,
    DeletePackageCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "DeletePackage", {})
  .n("CodeartifactClient", "DeletePackageCommand")
  .sc(DeletePackage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePackageRequest;
      output: DeletePackageResult;
    };
    sdk: {
      input: DeletePackageCommandInput;
      output: DeletePackageCommandOutput;
    };
  };
}
