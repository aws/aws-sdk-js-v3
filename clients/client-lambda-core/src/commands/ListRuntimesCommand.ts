// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRuntimesRequest, ListRuntimesResponse } from "../models/models_0";
import { ListRuntimes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRuntimesCommand}.
 */
export interface ListRuntimesCommandInput extends ListRuntimesRequest {}
/**
 * @public
 *
 * The output of {@link ListRuntimesCommand}.
 */
export interface ListRuntimesCommandOutput extends ListRuntimesResponse, __MetadataBearer {}

/**
 * Returns a paginated list of runtimes in your account for the current Region.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, ListRuntimesCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, ListRuntimesCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // ListRuntimesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRuntimesCommand(input);
 * const response = await client.send(command);
 * // { // ListRuntimesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Items: [ // RuntimeList // required
 * //     { // RuntimeInfo
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       LicenseInfo: "STRING_VALUE",
 * //       ReleaseLifecycle: { // RuntimeReleaseLifecycle
 * //         ReleaseState: "PREVIEW" || "GA" || "DEPRECATED",
 * //         DeprecationDate: "STRING_VALUE",
 * //         FunctionCreateBlockDate: "STRING_VALUE",
 * //         FunctionUpdateBlockDate: "STRING_VALUE",
 * //       },
 * //       State: "ACTIVE" || "PENDING_DELETION" || "DELETING" || "FAILED",
 * //       PendingDeletionAt: "STRING_VALUE",
 * //       Created: "STRING_VALUE", // required
 * //       LastModified: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRuntimesCommandInput - {@link ListRuntimesCommandInput}
 * @returns {@link ListRuntimesCommandOutput}
 * @see {@link ListRuntimesCommandInput} for command's `input` shape.
 * @see {@link ListRuntimesCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
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
 * @example List runtimes
 * ```javascript
 * // Lists the runtimes in the account and region.
 * const input = {
 *   MaxResults: 10
 * };
 * const command = new ListRuntimesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8",
 *       Created: "2026-10-01T12:00:00.000Z",
 *       Description: "PHP 8 custom runtime",
 *       LastModified: "2026-10-02T09:30:00.000Z",
 *       LicenseInfo: "MIT",
 *       Name: "php8",
 *       ReleaseLifecycle: {
 *         ReleaseState: "GA"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRuntimesCommand extends command<ListRuntimesCommandInput, ListRuntimesCommandOutput>(
  _ep0,
  _mw0,
  "ListRuntimes",
  ListRuntimes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuntimesRequest;
      output: ListRuntimesResponse;
    };
    sdk: {
      input: ListRuntimesCommandInput;
      output: ListRuntimesCommandOutput;
    };
  };
}
