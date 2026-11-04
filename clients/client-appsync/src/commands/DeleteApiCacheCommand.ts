// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApiCacheRequest, DeleteApiCacheResponse } from "../models/models_0";
import { DeleteApiCache$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApiCacheCommand}.
 */
export interface DeleteApiCacheCommandInput extends DeleteApiCacheRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApiCacheCommand}.
 */
export interface DeleteApiCacheCommandOutput extends DeleteApiCacheResponse, __MetadataBearer {}

/**
 * Deletes an `ApiCache` object.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // DeleteApiCacheRequest
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApiCacheCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApiCacheCommandInput - {@link DeleteApiCacheCommandInput}
 * @returns {@link DeleteApiCacheCommandOutput}
 * @see {@link DeleteApiCacheCommandInput} for command's `input` shape.
 * @see {@link DeleteApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Another modification is in progress at this time and it must complete before you can make your change.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class DeleteApiCacheCommand extends command<DeleteApiCacheCommandInput, DeleteApiCacheCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApiCache",
  DeleteApiCache$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApiCacheRequest;
      output: {};
    };
    sdk: {
      input: DeleteApiCacheCommandInput;
      output: DeleteApiCacheCommandOutput;
    };
  };
}
