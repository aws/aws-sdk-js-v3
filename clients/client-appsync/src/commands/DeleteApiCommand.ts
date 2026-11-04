// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApiRequest, DeleteApiResponse } from "../models/models_0";
import { DeleteApi$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApiCommand}.
 */
export interface DeleteApiCommandInput extends DeleteApiRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApiCommand}.
 */
export interface DeleteApiCommandOutput extends DeleteApiResponse, __MetadataBearer {}

/**
 * Deletes an `Api` object
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // DeleteApiRequest
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApiCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApiCommandInput - {@link DeleteApiCommandInput}
 * @returns {@link DeleteApiCommandOutput}
 * @see {@link DeleteApiCommandInput} for command's `input` shape.
 * @see {@link DeleteApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this operation on this resource.
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
export class DeleteApiCommand extends command<DeleteApiCommandInput, DeleteApiCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApi",
  DeleteApi$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApiRequest;
      output: {};
    };
    sdk: {
      input: DeleteApiCommandInput;
      output: DeleteApiCommandOutput;
    };
  };
}
