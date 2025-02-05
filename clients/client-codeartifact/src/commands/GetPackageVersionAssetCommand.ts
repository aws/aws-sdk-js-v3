// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetPackageVersionAssetRequest,
  GetPackageVersionAssetResult,
  GetPackageVersionAssetResultFilterSensitiveLog,
} from "../models/models_0";
import { de_GetPackageVersionAssetCommand, se_GetPackageVersionAssetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPackageVersionAssetCommand}.
 */
export interface GetPackageVersionAssetCommandInput extends GetPackageVersionAssetRequest {}
/**
 * @public
 *
 * The output of {@link GetPackageVersionAssetCommand}.
 */
export interface GetPackageVersionAssetCommandOutput
  extends Omit<GetPackageVersionAssetResult, "asset">,
    __MetadataBearer {
  asset?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>
 *       Returns an asset (or file) that is in a package. For example, for a Maven package version, use
 *       <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file,
 *       or any other assets in the package version.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetPackageVersionAssetCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetPackageVersionAssetCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeartifactClient(config);
 * const input = { // GetPackageVersionAssetRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   namespace: "STRING_VALUE",
 *   package: "STRING_VALUE", // required
 *   packageVersion: "STRING_VALUE", // required
 *   asset: "STRING_VALUE", // required
 *   packageVersionRevision: "STRING_VALUE",
 * };
 * const command = new GetPackageVersionAssetCommand(input);
 * const response = await client.send(command);
 * // { // GetPackageVersionAssetResult
 * //   asset: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   assetName: "STRING_VALUE",
 * //   packageVersion: "STRING_VALUE",
 * //   packageVersionRevision: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPackageVersionAssetCommandInput - {@link GetPackageVersionAssetCommandInput}
 * @returns {@link GetPackageVersionAssetCommandOutput}
 * @see {@link GetPackageVersionAssetCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionAssetCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetPackageVersionAssetCommand extends $Command
  .classBuilder<
    GetPackageVersionAssetCommandInput,
    GetPackageVersionAssetCommandOutput,
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
  .s("CodeArtifactControlPlaneService", "GetPackageVersionAsset", {})
  .n("CodeartifactClient", "GetPackageVersionAssetCommand")
  .f(void 0, GetPackageVersionAssetResultFilterSensitiveLog)
  .ser(se_GetPackageVersionAssetCommand)
  .de(de_GetPackageVersionAssetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPackageVersionAssetRequest;
      output: GetPackageVersionAssetResult;
    };
    sdk: {
      input: GetPackageVersionAssetCommandInput;
      output: GetPackageVersionAssetCommandOutput;
    };
  };
}
