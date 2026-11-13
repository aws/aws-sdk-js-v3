// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRuntimeAliasRequest, CreateRuntimeAliasResponse } from "../models/models_0";
import { CreateRuntimeAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRuntimeAliasCommand}.
 */
export interface CreateRuntimeAliasCommandInput extends CreateRuntimeAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuntimeAliasCommand}.
 */
export interface CreateRuntimeAliasCommandOutput extends CreateRuntimeAliasResponse, __MetadataBearer {}

/**
 * Creates a new customer-managed runtime alias. The alias is a named pointer to a runtime version. Functions consume the customer-managed runtime through the runtime alias.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, CreateRuntimeAliasCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, CreateRuntimeAliasCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // CreateRuntimeAliasRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   RuntimeVersion: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ReleaseLifecycle: { // RuntimeReleaseLifecycle
 *     ReleaseState: "PREVIEW" || "GA" || "DEPRECATED",
 *     DeprecationDate: "STRING_VALUE",
 *     FunctionCreateBlockDate: "STRING_VALUE",
 *     FunctionUpdateBlockDate: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRuntimeAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuntimeAliasResponse
 * //   Name: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   RuntimeVersion: "STRING_VALUE", // required
 * //   RuntimeVersionArn: "STRING_VALUE", // required
 * //   State: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "PENDING_DELETION", // required
 * //   Description: "STRING_VALUE",
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
 * @param CreateRuntimeAliasCommandInput - {@link CreateRuntimeAliasCommandInput}
 * @returns {@link CreateRuntimeAliasCommandOutput}
 * @see {@link CreateRuntimeAliasCommandInput} for command's `input` shape.
 * @see {@link CreateRuntimeAliasCommandOutput} for command's `response` shape.
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
 * @example Create a runtime alias
 * ```javascript
 * // Creates an alias that points at a published runtime version.
 * const input = {
 *   Description: "Points at the newest published version",
 *   Name: "latest",
 *   RuntimeName: "php8",
 *   RuntimeVersion: "v1"
 * };
 * const command = new CreateRuntimeAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/alias/latest",
 *   Created: "2026-10-01T12:00:00.000Z",
 *   Description: "Points at the newest published version",
 *   LastModified: "2026-10-01T12:00:00.000Z",
 *   Name: "latest",
 *   RuntimeVersion: "v1",
 *   RuntimeVersionArn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/version/v1",
 *   State: "CREATING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRuntimeAliasCommand extends command<CreateRuntimeAliasCommandInput, CreateRuntimeAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateRuntimeAlias",
  CreateRuntimeAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuntimeAliasRequest;
      output: CreateRuntimeAliasResponse;
    };
    sdk: {
      input: CreateRuntimeAliasCommandInput;
      output: CreateRuntimeAliasCommandOutput;
    };
  };
}
