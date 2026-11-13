// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRuntimeVersionRequest, CreateRuntimeVersionResponse } from "../models/models_0";
import { CreateRuntimeVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRuntimeVersionCommand}.
 */
export interface CreateRuntimeVersionCommandInput extends CreateRuntimeVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuntimeVersionCommand}.
 */
export interface CreateRuntimeVersionCommandOutput extends CreateRuntimeVersionResponse, __MetadataBearer {}

/**
 * Creates a new runtime version. A runtime version defines the function execution environment by referencing a container image. Runtime versions are immutable. To update the runtime, create a new runtime version and migrate functions by updating the runtime aliases to point to the new runtime version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, CreateRuntimeVersionCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, CreateRuntimeVersionCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // CreateRuntimeVersionRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   ImageUri: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ReleaseNotes: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new CreateRuntimeVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuntimeVersionResponse
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
 * @param CreateRuntimeVersionCommandInput - {@link CreateRuntimeVersionCommandInput}
 * @returns {@link CreateRuntimeVersionCommandOutput}
 * @see {@link CreateRuntimeVersionCommandInput} for command's `input` shape.
 * @see {@link CreateRuntimeVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota for your account. Request a quota increase or reduce the number of resources in use, then retry the request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was throttled due to exceeding the allowed request rate. Retry the request after a brief wait using exponential backoff.</p>
 *
 * @throws {@link LambdaCoreServiceException}
 * <p>Base exception class for all service exceptions from LambdaCore service.</p>
 *
 *
 * @example Create a runtime version
 * ```javascript
 * // Creates a new runtime version from a container image.
 * const input = {
 *   ImageUri: "123456789012.dkr.ecr.us-west-2.amazonaws.com/php8:latest",
 *   Name: "v1",
 *   ReleaseNotes: "Initial release",
 *   RuntimeName: "php8"
 * };
 * const command = new CreateRuntimeVersionCommand(input);
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
 *     }
 *   ],
 *   ReleaseNotes: "Initial release",
 *   ResolvedUri: "123456789012.dkr.ecr.us-west-2.amazonaws.com/php8@sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
 *   State: "CREATING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRuntimeVersionCommand extends command<CreateRuntimeVersionCommandInput, CreateRuntimeVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateRuntimeVersion",
  CreateRuntimeVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuntimeVersionRequest;
      output: CreateRuntimeVersionResponse;
    };
    sdk: {
      input: CreateRuntimeVersionCommandInput;
      output: CreateRuntimeVersionCommandOutput;
    };
  };
}
