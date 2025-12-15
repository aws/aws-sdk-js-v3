// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribePackageVersionRequest, DescribePackageVersionResult } from "../models/models_0";
import { DescribePackageVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePackageVersionCommand}.
 */
export interface DescribePackageVersionCommandInput extends DescribePackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribePackageVersionCommand}.
 */
export interface DescribePackageVersionCommandOutput extends DescribePackageVersionResult, __MetadataBearer {}

/**
 * <p>
 *        Returns a
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
 *        object that contains information about the requested package version.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DescribePackageVersionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DescribePackageVersionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // DescribePackageVersionRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   packageVersion: "STRING_VALUE", // required
 * };
 * const command = new DescribePackageVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePackageVersionResult
 * //   packageVersion: { // PackageVersionDescription
 * //     format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 * //     namespace: "STRING_VALUE",
 * //     packageName: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     summary: "STRING_VALUE",
 * //     homePage: "STRING_VALUE",
 * //     sourceCodeRepository: "STRING_VALUE",
 * //     publishedTime: new Date("TIMESTAMP"),
 * //     licenses: [ // LicenseInfoList
 * //       { // LicenseInfo
 * //         name: "STRING_VALUE",
 * //         url: "STRING_VALUE",
 * //       },
 * //     ],
 * //     revision: "STRING_VALUE",
 * //     status: "Published" || "Unfinished" || "Unlisted" || "Archived" || "Disposed" || "Deleted",
 * //     origin: { // PackageVersionOrigin
 * //       domainEntryPoint: { // DomainEntryPoint
 * //         repositoryName: "STRING_VALUE",
 * //         externalConnectionName: "STRING_VALUE",
 * //       },
 * //       originType: "INTERNAL" || "EXTERNAL" || "UNKNOWN",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePackageVersionCommandInput - {@link DescribePackageVersionCommandInput}
 * @returns {@link DescribePackageVersionCommandOutput}
 * @see {@link DescribePackageVersionCommandInput} for command's `input` shape.
 * @see {@link DescribePackageVersionCommandOutput} for command's `response` shape.
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
export class DescribePackageVersionCommand extends $Command
  .classBuilder<
    DescribePackageVersionCommandInput,
    DescribePackageVersionCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "DescribePackageVersion", {})
  .n("CodeartifactClient", "DescribePackageVersionCommand")
  .sc(DescribePackageVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePackageVersionRequest;
      output: DescribePackageVersionResult;
    };
    sdk: {
      input: DescribePackageVersionCommandInput;
      output: DescribePackageVersionCommandOutput;
    };
  };
}
