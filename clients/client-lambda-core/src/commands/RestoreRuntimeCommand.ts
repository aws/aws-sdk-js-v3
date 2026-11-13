// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreRuntimeRequest, RestoreRuntimeResponse } from "../models/models_0";
import { RestoreRuntime$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreRuntimeCommand}.
 */
export interface RestoreRuntimeCommandInput extends RestoreRuntimeRequest {}
/**
 * @public
 *
 * The output of {@link RestoreRuntimeCommand}.
 */
export interface RestoreRuntimeCommandOutput extends RestoreRuntimeResponse, __MetadataBearer {}

/**
 * Cancels a pending scheduled deletion, returning the resource to the ACTIVE state. Scope is
 * determined by the RuntimeName path parameter plus an optional, mutually exclusive RuntimeVersion
 * or RuntimeAlias query parameter: with neither, the runtime itself is restored; with RuntimeVersion,
 * the named runtime version; with RuntimeAlias, the named runtime alias. Restoring a resource that is
 * already ACTIVE is a no-op success. Restore only works while the target is PENDING_DELETION; once the
 * scheduled deletion has begun executing (DELETING) or has completed, the call fails.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, RestoreRuntimeCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, RestoreRuntimeCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // RestoreRuntimeRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   RuntimeVersion: "STRING_VALUE",
 *   RuntimeAlias: "STRING_VALUE",
 * };
 * const command = new RestoreRuntimeCommand(input);
 * const response = await client.send(command);
 * // { // RestoreRuntimeResponse
 * //   RuntimeName: "STRING_VALUE", // required
 * //   RuntimeVersion: "STRING_VALUE",
 * //   RuntimeAlias: "STRING_VALUE",
 * //   Arn: "STRING_VALUE", // required
 * //   State: "ACTIVE" || "PENDING_DELETION" || "DELETING" || "FAILED", // required
 * //   LastModified: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RestoreRuntimeCommandInput - {@link RestoreRuntimeCommandInput}
 * @returns {@link RestoreRuntimeCommandOutput}
 * @see {@link RestoreRuntimeCommandInput} for command's `input` shape.
 * @see {@link RestoreRuntimeCommandOutput} for command's `response` shape.
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
 * @example Restore a runtime alias that is scheduled for deletion
 * ```javascript
 * // Cancels a pending deletion for an alias, returning it to ACTIVE.
 * const input = {
 *   RuntimeAlias: "release",
 *   RuntimeName: "php8"
 * };
 * const command = new RestoreRuntimeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/alias/release",
 *   LastModified: "2026-10-02T19:40:00.000Z",
 *   RuntimeAlias: "release",
 *   RuntimeName: "php8",
 *   State: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @example Restore a customer-managed runtime that is scheduled for deletion
 * ```javascript
 * // Cancels a pending deletion for the runtime, returning it to ACTIVE.
 * const input = {
 *   RuntimeName: "php8"
 * };
 * const command = new RestoreRuntimeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8",
 *   LastModified: "2026-10-02T19:41:00.000Z",
 *   RuntimeName: "php8",
 *   State: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RestoreRuntimeCommand extends command<RestoreRuntimeCommandInput, RestoreRuntimeCommandOutput>(
  _ep0,
  _mw0,
  "RestoreRuntime",
  RestoreRuntime$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreRuntimeRequest;
      output: RestoreRuntimeResponse;
    };
    sdk: {
      input: RestoreRuntimeCommandInput;
      output: RestoreRuntimeCommandOutput;
    };
  };
}
