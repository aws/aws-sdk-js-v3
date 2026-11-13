// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRuntimeRequest, UpdateRuntimeResponse } from "../models/models_0";
import { UpdateRuntime$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRuntimeCommand}.
 */
export interface UpdateRuntimeCommandInput extends UpdateRuntimeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuntimeCommand}.
 */
export interface UpdateRuntimeCommandOutput extends UpdateRuntimeResponse, __MetadataBearer {}

/**
 * Updates the properties of an existing customer-managed runtime, such as its description, license information, or lifecycle information.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, UpdateRuntimeCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, UpdateRuntimeCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // UpdateRuntimeRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   LicenseInfo: "STRING_VALUE",
 *   ReleaseLifecycle: { // RuntimeReleaseLifecycle
 *     ReleaseState: "PREVIEW" || "GA" || "DEPRECATED",
 *     DeprecationDate: "STRING_VALUE",
 *     FunctionCreateBlockDate: "STRING_VALUE",
 *     FunctionUpdateBlockDate: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateRuntimeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuntimeResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   LicenseInfo: "STRING_VALUE",
 * //   ReleaseLifecycle: { // RuntimeReleaseLifecycle
 * //     ReleaseState: "PREVIEW" || "GA" || "DEPRECATED",
 * //     DeprecationDate: "STRING_VALUE",
 * //     FunctionCreateBlockDate: "STRING_VALUE",
 * //     FunctionUpdateBlockDate: "STRING_VALUE",
 * //   },
 * //   Created: "STRING_VALUE", // required
 * //   LastModified: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateRuntimeCommandInput - {@link UpdateRuntimeCommandInput}
 * @returns {@link UpdateRuntimeCommandOutput}
 * @see {@link UpdateRuntimeCommandInput} for command's `input` shape.
 * @see {@link UpdateRuntimeCommandOutput} for command's `response` shape.
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
 * @example Update a runtime
 * ```javascript
 * // Updates a runtime's description and declares it generally available.
 * const input = {
 *   Description: "PHP 8 custom runtime (updated)",
 *   ReleaseLifecycle: {
 *     ReleaseState: "GA"
 *   },
 *   RuntimeName: "php8"
 * };
 * const command = new UpdateRuntimeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8",
 *   Created: "2026-10-01T12:00:00.000Z",
 *   Description: "PHP 8 custom runtime (updated)",
 *   LastModified: "2026-10-02T09:30:00.000Z",
 *   LicenseInfo: "MIT",
 *   Name: "php8",
 *   ReleaseLifecycle: {
 *     ReleaseState: "GA"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRuntimeCommand extends command<UpdateRuntimeCommandInput, UpdateRuntimeCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRuntime",
  UpdateRuntime$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuntimeRequest;
      output: UpdateRuntimeResponse;
    };
    sdk: {
      input: UpdateRuntimeCommandInput;
      output: UpdateRuntimeCommandOutput;
    };
  };
}
