// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPackageVersionAssetRequest, GetPackageVersionAssetResult } from "../models/models_0";
import { GetPackageVersionAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetPackageVersionAssetCommandOutput extends Omit<GetPackageVersionAssetResult, "asset">, __MetadataBearer {
  asset?: StreamingBlobPayloadOutputTypes;
}

/**
 * Returns an asset (or file) that is in a package. For example, for a Maven package version, use `GetPackageVersionAsset` to download a `JAR` file, a `POM` file, or any other assets in the package version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetPackageVersionAssetCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetPackageVersionAssetCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
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
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.asset.transformToByteArray();
 * // const str = await response.asset.transformToString();
 * // response.asset.destroy(); // only applicable to Node.js Readable streams.
 *
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
export class GetPackageVersionAssetCommand extends command<GetPackageVersionAssetCommandInput, GetPackageVersionAssetCommandOutput>(
  _ep0,
  _mw0,
  "GetPackageVersionAsset",
  GetPackageVersionAsset$
) {
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
