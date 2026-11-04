// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPackageVersionReadmeRequest, GetPackageVersionReadmeResult } from "../models/models_0";
import { GetPackageVersionReadme$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPackageVersionReadmeCommand}.
 */
export interface GetPackageVersionReadmeCommandInput extends GetPackageVersionReadmeRequest {}
/**
 * @public
 *
 * The output of {@link GetPackageVersionReadmeCommand}.
 */
export interface GetPackageVersionReadmeCommandOutput extends GetPackageVersionReadmeResult, __MetadataBearer {}

/**
 * Gets the readme file or descriptive text for a package version.
 *
 * The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetPackageVersionReadmeCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetPackageVersionReadmeCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // GetPackageVersionReadmeRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   packageVersion: "STRING_VALUE", // required
 * };
 * const command = new GetPackageVersionReadmeCommand(input);
 * const response = await client.send(command);
 * // { // GetPackageVersionReadmeResult
 * //   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 * //   namespace: "STRING_VALUE",
 * //   package: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   versionRevision: "STRING_VALUE",
 * //   readme: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPackageVersionReadmeCommandInput - {@link GetPackageVersionReadmeCommandInput}
 * @returns {@link GetPackageVersionReadmeCommandOutput}
 * @see {@link GetPackageVersionReadmeCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionReadmeCommandOutput} for command's `response` shape.
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
export class GetPackageVersionReadmeCommand extends command<GetPackageVersionReadmeCommandInput, GetPackageVersionReadmeCommandOutput>(
  _ep0,
  _mw0,
  "GetPackageVersionReadme",
  GetPackageVersionReadme$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPackageVersionReadmeRequest;
      output: GetPackageVersionReadmeResult;
    };
    sdk: {
      input: GetPackageVersionReadmeCommandInput;
      output: GetPackageVersionReadmeCommandOutput;
    };
  };
}
