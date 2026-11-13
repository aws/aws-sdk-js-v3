// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRuntimeVersionRequest, UpdateRuntimeVersionResponse } from "../models/models_0";
import { UpdateRuntimeVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRuntimeVersionCommand}.
 */
export interface UpdateRuntimeVersionCommandInput extends UpdateRuntimeVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuntimeVersionCommand}.
 */
export interface UpdateRuntimeVersionCommandOutput extends UpdateRuntimeVersionResponse, __MetadataBearer {}

/**
 * Updates the runtime version release notes. The runtime version must be in the ACTIVE state. The runtime version image is immutable. To change the runtime contents, create a new runtime version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, UpdateRuntimeVersionCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, UpdateRuntimeVersionCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // UpdateRuntimeVersionRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ReleaseNotes: "STRING_VALUE", // required
 * };
 * const command = new UpdateRuntimeVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuntimeVersionResponse
 * //   Name: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   ResolvedUri: "STRING_VALUE", // required
 * //   State: "CREATING" || "ACTIVE" || "FAILED" || "DELETING" || "PENDING_DELETION", // required
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
 * @param UpdateRuntimeVersionCommandInput - {@link UpdateRuntimeVersionCommandInput}
 * @returns {@link UpdateRuntimeVersionCommandOutput}
 * @see {@link UpdateRuntimeVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateRuntimeVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. For example, attempting to modify a resource that is not in a state that permits the operation.</p>
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
 * @example Update a runtime version's release notes
 * ```javascript
 * // Updates the release notes of an ACTIVE runtime version.
 * const input = {
 *   Name: "v1",
 *   ReleaseNotes: "Patched OpenSSL to 3.0.14",
 *   RuntimeName: "php8"
 * };
 * const command = new UpdateRuntimeVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/version/v1",
 *   Created: "2026-10-01T12:00:00.000Z",
 *   LastModified: "2026-10-03T08:15:00.000Z",
 *   Name: "v1",
 *   ReleaseNotes: "Patched OpenSSL to 3.0.14",
 *   ResolvedUri: "123456789012.dkr.ecr.us-west-2.amazonaws.com/php8@sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
 *   State: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRuntimeVersionCommand extends command<UpdateRuntimeVersionCommandInput, UpdateRuntimeVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRuntimeVersion",
  UpdateRuntimeVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuntimeVersionRequest;
      output: UpdateRuntimeVersionResponse;
    };
    sdk: {
      input: UpdateRuntimeVersionCommandInput;
      output: UpdateRuntimeVersionCommandOutput;
    };
  };
}
