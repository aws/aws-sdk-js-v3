// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRuntimeVersionRequest, GetRuntimeVersionResponse } from "../models/models_0";
import { GetRuntimeVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRuntimeVersionCommand}.
 */
export interface GetRuntimeVersionCommandInput extends GetRuntimeVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetRuntimeVersionCommand}.
 */
export interface GetRuntimeVersionCommandOutput extends GetRuntimeVersionResponse, __MetadataBearer {}

/**
 * Retrieves the configuration, state, and metadata of a runtime version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, GetRuntimeVersionCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, GetRuntimeVersionCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // GetRuntimeVersionRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetRuntimeVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetRuntimeVersionResponse
 * //   Name: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   ResolvedUri: "STRING_VALUE", // required
 * //   State: "CREATING" || "ACTIVE" || "FAILED" || "DELETING" || "PENDING_DELETION", // required
 * //   PendingDeletionAt: "STRING_VALUE",
 * //   ReleaseNotes: "STRING_VALUE",
 * //   Platforms: [ // PlatformList
 * //     { // Platform
 * //       Architecture: "STRING_VALUE", // required
 * //       Os: "STRING_VALUE", // required
 * //       Digest: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Compatibility: { // Compatibility
 * //     IntegrationModels: [ // IntegrationModelList
 * //       "RuntimeAPI",
 * //     ],
 * //     Architectures: [ // RuntimeArchitectureList
 * //       "x86_64" || "arm64",
 * //     ],
 * //     ManagedInstances: "Supported" || "NotSupported",
 * //   },
 * //   Created: "STRING_VALUE", // required
 * //   LastModified: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetRuntimeVersionCommandInput - {@link GetRuntimeVersionCommandInput}
 * @returns {@link GetRuntimeVersionCommandOutput}
 * @see {@link GetRuntimeVersionCommandInput} for command's `input` shape.
 * @see {@link GetRuntimeVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist. Verify the identifier and Region.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal service error occurred. Retry the request with exponential backoff.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was throttled due to exceeding the allowed request rate. Retry the request after a brief wait using exponential backoff.</p>
 *
 * @throws {@link LambdaCoreServiceException}
 * <p>Base exception class for all service exceptions from LambdaCore service.</p>
 *
 *
 * @example Get a runtime version
 * ```javascript
 * // Retrieves a runtime version, including its resolved image URI, per-architecture platforms, and compatibility matrix.
 * const input = {
 *   Name: "v1",
 *   RuntimeName: "php8"
 * };
 * const command = new GetRuntimeVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/version/v1",
 *   Compatibility: {
 *     Architectures: [
 *       "arm64",
 *       "x86_64"
 *     ],
 *     IntegrationModels: [
 *       "RuntimeAPI"
 *     ],
 *     ManagedInstances: "Supported"
 *   },
 *   Created: "2026-10-01T12:00:00.000Z",
 *   LastModified: "2026-10-01T12:00:00.000Z",
 *   Name: "v1",
 *   Platforms: [
 *     {
 *       Architecture: "arm64",
 *       Digest: "sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
 *       Os: "linux"
 *     },
 *     {
 *       Architecture: "x86_64",
 *       Digest: "sha256:2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c",
 *       Os: "linux"
 *     }
 *   ],
 *   ReleaseNotes: "Initial release",
 *   ResolvedUri: "123456789012.dkr.ecr.us-west-2.amazonaws.com/php8@sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
 *   State: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRuntimeVersionCommand extends command<GetRuntimeVersionCommandInput, GetRuntimeVersionCommandOutput>(
  _ep0,
  _mw0,
  "GetRuntimeVersion",
  GetRuntimeVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuntimeVersionRequest;
      output: GetRuntimeVersionResponse;
    };
    sdk: {
      input: GetRuntimeVersionCommandInput;
      output: GetRuntimeVersionCommandOutput;
    };
  };
}
