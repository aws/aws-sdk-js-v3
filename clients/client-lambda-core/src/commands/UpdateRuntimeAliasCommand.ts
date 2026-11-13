// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRuntimeAliasRequest, UpdateRuntimeAliasResponse } from "../models/models_0";
import { UpdateRuntimeAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRuntimeAliasCommand}.
 */
export interface UpdateRuntimeAliasCommandInput extends UpdateRuntimeAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuntimeAliasCommand}.
 */
export interface UpdateRuntimeAliasCommandOutput extends UpdateRuntimeAliasResponse, __MetadataBearer {}

/**
 * Updates an existing runtime alias to point to a different runtime version or to change its description or lifecycle information.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, UpdateRuntimeAliasCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, UpdateRuntimeAliasCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // UpdateRuntimeAliasRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   RuntimeVersion: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ReleaseLifecycle: { // RuntimeReleaseLifecycle
 *     ReleaseState: "PREVIEW" || "GA" || "DEPRECATED",
 *     DeprecationDate: "STRING_VALUE",
 *     FunctionCreateBlockDate: "STRING_VALUE",
 *     FunctionUpdateBlockDate: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateRuntimeAliasCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuntimeAliasResponse
 * //   RuntimeName: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   RuntimeVersion: "STRING_VALUE", // required
 * //   RuntimeVersionArn: "STRING_VALUE", // required
 * //   State: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "PENDING_DELETION", // required
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
 * @param UpdateRuntimeAliasCommandInput - {@link UpdateRuntimeAliasCommandInput}
 * @returns {@link UpdateRuntimeAliasCommandOutput}
 * @see {@link UpdateRuntimeAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateRuntimeAliasCommandOutput} for command's `response` shape.
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
 * @example Update a runtime alias
 * ```javascript
 * // Repoints an alias at a different runtime version.
 * const input = {
 *   Name: "latest",
 *   RuntimeName: "php8",
 *   RuntimeVersion: "v2"
 * };
 * const command = new UpdateRuntimeAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/alias/latest",
 *   Created: "2026-10-01T12:00:00.000Z",
 *   Description: "Points at the newest published version",
 *   LastModified: "2026-10-03T08:15:00.000Z",
 *   Name: "latest",
 *   RuntimeName: "php8",
 *   RuntimeVersion: "v2",
 *   RuntimeVersionArn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/version/v2",
 *   State: "UPDATING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRuntimeAliasCommand extends command<UpdateRuntimeAliasCommandInput, UpdateRuntimeAliasCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRuntimeAlias",
  UpdateRuntimeAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuntimeAliasRequest;
      output: UpdateRuntimeAliasResponse;
    };
    sdk: {
      input: UpdateRuntimeAliasCommandInput;
      output: UpdateRuntimeAliasCommandOutput;
    };
  };
}
