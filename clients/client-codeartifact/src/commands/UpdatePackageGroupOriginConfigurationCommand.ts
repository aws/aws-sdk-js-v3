// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdatePackageGroupOriginConfigurationRequest,
  UpdatePackageGroupOriginConfigurationResult,
} from "../models/models_0";
import {
  de_UpdatePackageGroupOriginConfigurationCommand,
  se_UpdatePackageGroupOriginConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePackageGroupOriginConfigurationCommand}.
 */
export interface UpdatePackageGroupOriginConfigurationCommandInput
  extends UpdatePackageGroupOriginConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePackageGroupOriginConfigurationCommand}.
 */
export interface UpdatePackageGroupOriginConfigurationCommandOutput
  extends UpdatePackageGroupOriginConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Updates the package origin configuration for a package group.</p>
 *          <p>The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct
 *       publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source.
 *       For more information about package group origin controls and configuration, see
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-group-origin-controls.html">Package group origin controls</a>
 *       in the <i>CodeArtifact User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, UpdatePackageGroupOriginConfigurationCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, UpdatePackageGroupOriginConfigurationCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const input = { // UpdatePackageGroupOriginConfigurationRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   packageGroup: "STRING_VALUE", // required
 *   restrictions: { // OriginRestrictions
 *     "<keys>": "ALLOW" || "ALLOW_SPECIFIC_REPOSITORIES" || "BLOCK" || "INHERIT",
 *   },
 *   addAllowedRepositories: [ // PackageGroupAllowedRepositoryList
 *     { // PackageGroupAllowedRepository
 *       repositoryName: "STRING_VALUE",
 *       originRestrictionType: "EXTERNAL_UPSTREAM" || "INTERNAL_UPSTREAM" || "PUBLISH",
 *     },
 *   ],
 *   removeAllowedRepositories: [
 *     {
 *       repositoryName: "STRING_VALUE",
 *       originRestrictionType: "EXTERNAL_UPSTREAM" || "INTERNAL_UPSTREAM" || "PUBLISH",
 *     },
 *   ],
 * };
 * const command = new UpdatePackageGroupOriginConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePackageGroupOriginConfigurationResult
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
 * //   allowedRepositoryUpdates: { // PackageGroupAllowedRepositoryUpdates
 * //     "<keys>": { // PackageGroupAllowedRepositoryUpdate
 * //       "<keys>": [ // RepositoryNameList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePackageGroupOriginConfigurationCommandInput - {@link UpdatePackageGroupOriginConfigurationCommandInput}
 * @returns {@link UpdatePackageGroupOriginConfigurationCommandOutput}
 * @see {@link UpdatePackageGroupOriginConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageGroupOriginConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *         The operation did not succeed because it would have exceeded a service limit for your account.
 *       </p>
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
export class UpdatePackageGroupOriginConfigurationCommand extends $Command
  .classBuilder<
    UpdatePackageGroupOriginConfigurationCommandInput,
    UpdatePackageGroupOriginConfigurationCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeArtifactControlPlaneService", "UpdatePackageGroupOriginConfiguration", {})
  .n("CodeartifactClient", "UpdatePackageGroupOriginConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePackageGroupOriginConfigurationCommand)
  .de(de_UpdatePackageGroupOriginConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePackageGroupOriginConfigurationRequest;
      output: UpdatePackageGroupOriginConfigurationResult;
    };
    sdk: {
      input: UpdatePackageGroupOriginConfigurationCommandInput;
      output: UpdatePackageGroupOriginConfigurationCommandOutput;
    };
  };
}
