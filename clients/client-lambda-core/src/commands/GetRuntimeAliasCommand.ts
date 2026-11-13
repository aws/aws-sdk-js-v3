// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRuntimeAliasRequest, GetRuntimeAliasResponse } from "../models/models_0";
import { GetRuntimeAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRuntimeAliasCommand}.
 */
export interface GetRuntimeAliasCommandInput extends GetRuntimeAliasRequest {}
/**
 * @public
 *
 * The output of {@link GetRuntimeAliasCommand}.
 */
export interface GetRuntimeAliasCommandOutput extends GetRuntimeAliasResponse, __MetadataBearer {}

/**
 * Retrieves the configuration, state, and metadata of a runtime alias.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, GetRuntimeAliasCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, GetRuntimeAliasCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // GetRuntimeAliasRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetRuntimeAliasCommand(input);
 * const response = await client.send(command);
 * // { // GetRuntimeAliasResponse
 * //   Name: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   RuntimeVersion: "STRING_VALUE", // required
 * //   RuntimeVersionArn: "STRING_VALUE", // required
 * //   State: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "PENDING_DELETION", // required
 * //   PendingDeletionAt: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Compatibility: { // Compatibility
 * //     IntegrationModels: [ // IntegrationModelList
 * //       "RuntimeAPI",
 * //     ],
 * //     Architectures: [ // RuntimeArchitectureList
 * //       "x86_64" || "arm64",
 * //     ],
 * //     ManagedInstances: "Supported" || "NotSupported",
 * //   },
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
 * @param GetRuntimeAliasCommandInput - {@link GetRuntimeAliasCommandInput}
 * @returns {@link GetRuntimeAliasCommandOutput}
 * @see {@link GetRuntimeAliasCommandInput} for command's `input` shape.
 * @see {@link GetRuntimeAliasCommandOutput} for command's `response` shape.
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
 * @example Get a runtime alias
 * ```javascript
 * // Retrieves an alias, including the version it currently points at and its compatibility matrix.
 * const input = {
 *   Name: "latest",
 *   RuntimeName: "php8"
 * };
 * const command = new GetRuntimeAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/alias/latest",
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
 *   Description: "Points at the newest published version",
 *   LastModified: "2026-10-02T09:30:00.000Z",
 *   Name: "latest",
 *   ReleaseLifecycle: {
 *     ReleaseState: "GA"
 *   },
 *   RuntimeVersion: "v1",
 *   RuntimeVersionArn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/version/v1",
 *   State: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRuntimeAliasCommand extends command<GetRuntimeAliasCommandInput, GetRuntimeAliasCommandOutput>(
  _ep0,
  _mw0,
  "GetRuntimeAlias",
  GetRuntimeAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuntimeAliasRequest;
      output: GetRuntimeAliasResponse;
    };
    sdk: {
      input: GetRuntimeAliasCommandInput;
      output: GetRuntimeAliasCommandOutput;
    };
  };
}
