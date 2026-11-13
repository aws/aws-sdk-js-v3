// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRuntimeRequest, CreateRuntimeResponse } from "../models/models_0";
import { CreateRuntime$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRuntimeCommand}.
 */
export interface CreateRuntimeCommandInput extends CreateRuntimeRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuntimeCommand}.
 */
export interface CreateRuntimeCommandOutput extends CreateRuntimeResponse, __MetadataBearer {}

/**
 * Creates a customer-managed runtime, a resource providing a centrally managed execution environment for your Lambda functions. The runtime resource is the parent of the runtime version and runtime alias child resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, CreateRuntimeCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, CreateRuntimeCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // CreateRuntimeRequest
 *   Name: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   LicenseInfo: "STRING_VALUE",
 *   ReleaseLifecycle: { // RuntimeReleaseLifecycle
 *     ReleaseState: "PREVIEW" || "GA" || "DEPRECATED",
 *     DeprecationDate: "STRING_VALUE",
 *     FunctionCreateBlockDate: "STRING_VALUE",
 *     FunctionUpdateBlockDate: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRuntimeCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuntimeResponse
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
 * @param CreateRuntimeCommandInput - {@link CreateRuntimeCommandInput}
 * @returns {@link CreateRuntimeCommandOutput}
 * @see {@link CreateRuntimeCommandInput} for command's `input` shape.
 * @see {@link CreateRuntimeCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. For example, attempting to modify a resource that is not in a state that permits the operation.</p>
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
 * @example Create a runtime
 * ```javascript
 * // Creates a customer-managed runtime resource.
 * const input = {
 *   Description: "PHP 8 custom runtime",
 *   LicenseInfo: "MIT",
 *   Name: "php8",
 *   Tags: {
 *     team: "runtimes"
 *   }
 * };
 * const command = new CreateRuntimeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8",
 *   Created: "2026-10-01T12:00:00.000Z",
 *   Description: "PHP 8 custom runtime",
 *   LastModified: "2026-10-01T12:00:00.000Z",
 *   LicenseInfo: "MIT",
 *   Name: "php8"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRuntimeCommand extends command<CreateRuntimeCommandInput, CreateRuntimeCommandOutput>(
  _ep0,
  _mw0,
  "CreateRuntime",
  CreateRuntime$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuntimeRequest;
      output: CreateRuntimeResponse;
    };
    sdk: {
      input: CreateRuntimeCommandInput;
      output: CreateRuntimeCommandOutput;
    };
  };
}
