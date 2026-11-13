// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRuntimeAliasesRequest, ListRuntimeAliasesResponse } from "../models/models_0";
import { ListRuntimeAliases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRuntimeAliasesCommand}.
 */
export interface ListRuntimeAliasesCommandInput extends ListRuntimeAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListRuntimeAliasesCommand}.
 */
export interface ListRuntimeAliasesCommandOutput extends ListRuntimeAliasesResponse, __MetadataBearer {}

/**
 * Returns a paginated list of aliases for the specified runtime.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, ListRuntimeAliasesCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, ListRuntimeAliasesCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // ListRuntimeAliasesRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRuntimeAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListRuntimeAliasesResponse
 * //   Items: [ // RuntimeAliasList // required
 * //     { // RuntimeAliasInfo
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       RuntimeVersion: "STRING_VALUE", // required
 * //       RuntimeVersionArn: "STRING_VALUE", // required
 * //       State: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "PENDING_DELETION", // required
 * //       PendingDeletionAt: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Compatibility: { // Compatibility
 * //         IntegrationModels: [ // IntegrationModelList
 * //           "RuntimeAPI",
 * //         ],
 * //         Architectures: [ // RuntimeArchitectureList
 * //           "x86_64" || "arm64",
 * //         ],
 * //         ManagedInstances: "Supported" || "NotSupported",
 * //       },
 * //       ReleaseLifecycle: { // RuntimeReleaseLifecycle
 * //         ReleaseState: "PREVIEW" || "GA" || "DEPRECATED",
 * //         DeprecationDate: "STRING_VALUE",
 * //         FunctionCreateBlockDate: "STRING_VALUE",
 * //         FunctionUpdateBlockDate: "STRING_VALUE",
 * //       },
 * //       Created: "STRING_VALUE", // required
 * //       LastModified: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRuntimeAliasesCommandInput - {@link ListRuntimeAliasesCommandInput}
 * @returns {@link ListRuntimeAliasesCommandOutput}
 * @see {@link ListRuntimeAliasesCommandInput} for command's `input` shape.
 * @see {@link ListRuntimeAliasesCommandOutput} for command's `response` shape.
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
 * @example List runtime aliases
 * ```javascript
 * // Lists the aliases defined on a runtime.
 * const input = {
 *   MaxResults: 10,
 *   RuntimeName: "php8"
 * };
 * const command = new ListRuntimeAliasesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/alias/latest",
 *       Created: "2026-10-01T12:00:00.000Z",
 *       Description: "Points at the newest published version",
 *       LastModified: "2026-10-02T09:30:00.000Z",
 *       Name: "latest",
 *       RuntimeVersion: "v1",
 *       RuntimeVersionArn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/version/v1",
 *       State: "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRuntimeAliasesCommand extends command<ListRuntimeAliasesCommandInput, ListRuntimeAliasesCommandOutput>(
  _ep0,
  _mw0,
  "ListRuntimeAliases",
  ListRuntimeAliases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuntimeAliasesRequest;
      output: ListRuntimeAliasesResponse;
    };
    sdk: {
      input: ListRuntimeAliasesCommandInput;
      output: ListRuntimeAliasesCommandOutput;
    };
  };
}
