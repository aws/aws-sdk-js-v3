// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRuntimeRequest, GetRuntimeResponse } from "../models/models_0";
import { GetRuntime$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRuntimeCommand}.
 */
export interface GetRuntimeCommandInput extends GetRuntimeRequest {}
/**
 * @public
 *
 * The output of {@link GetRuntimeCommand}.
 */
export interface GetRuntimeCommandOutput extends GetRuntimeResponse, __MetadataBearer {}

/**
 * Retrieves the configuration and metadata of a runtime.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, GetRuntimeCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, GetRuntimeCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // GetRuntimeRequest
 *   RuntimeName: "STRING_VALUE", // required
 * };
 * const command = new GetRuntimeCommand(input);
 * const response = await client.send(command);
 * // { // GetRuntimeResponse
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
 * //   State: "ACTIVE" || "PENDING_DELETION" || "DELETING" || "FAILED",
 * //   PendingDeletionAt: "STRING_VALUE",
 * //   Created: "STRING_VALUE", // required
 * //   LastModified: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRuntimeCommandInput - {@link GetRuntimeCommandInput}
 * @returns {@link GetRuntimeCommandOutput}
 * @see {@link GetRuntimeCommandInput} for command's `input` shape.
 * @see {@link GetRuntimeCommandOutput} for command's `response` shape.
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
 * @example Get a runtime
 * ```javascript
 * // Retrieves the metadata for a runtime by name.
 * const input = {
 *   RuntimeName: "php8"
 * };
 * const command = new GetRuntimeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8",
 *   Created: "2026-10-01T12:00:00.000Z",
 *   Description: "PHP 8 custom runtime",
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
export class GetRuntimeCommand extends command<GetRuntimeCommandInput, GetRuntimeCommandOutput>(
  _ep0,
  _mw0,
  "GetRuntime",
  GetRuntime$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuntimeRequest;
      output: GetRuntimeResponse;
    };
    sdk: {
      input: GetRuntimeCommandInput;
      output: GetRuntimeCommandOutput;
    };
  };
}
