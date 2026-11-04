// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePackageVersionRequest, DescribePackageVersionResult } from "../models/models_0";
import { DescribePackageVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a [PackageVersionDescription](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html) object that contains information about the requested package version.
 *
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
 *
 * The operation did not succeed because of an unauthorized access attempt.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The operation did not succeed because prerequisites are not met.
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
export class DescribePackageVersionCommand extends command<DescribePackageVersionCommandInput, DescribePackageVersionCommandOutput>(
  _ep0,
  _mw0,
  "DescribePackageVersion",
  DescribePackageVersion$
) {
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
