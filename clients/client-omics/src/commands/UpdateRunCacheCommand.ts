// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRunCacheRequest } from "../models/models_0";
import { UpdateRunCache$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRunCacheCommand}.
 */
export interface UpdateRunCacheCommandInput extends UpdateRunCacheRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRunCacheCommand}.
 */
export interface UpdateRunCacheCommandOutput extends __MetadataBearer {}

/**
 * Updates a run cache using its ID and returns a response with no body if the operation is successful. You can update the run cache description, name, or the default run cache behavior with `CACHE_ON_FAILURE` or `CACHE_ALWAYS`. To confirm that your run cache settings have been properly updated, use the `GetRunCache` API operation.
 *
 * For more information, see [How call caching works](https://docs.aws.amazon.com/omics/latest/dev/how-run-cache.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateRunCacheCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateRunCacheCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // UpdateRunCacheRequest
 *   cacheBehavior: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 * };
 * const command = new UpdateRunCacheCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRunCacheCommandInput - {@link UpdateRunCacheCommandInput}
 * @returns {@link UpdateRunCacheCommandOutput}
 * @see {@link UpdateRunCacheCommandInput} for command's `input` shape.
 * @see {@link UpdateRunCacheCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class UpdateRunCacheCommand extends command<UpdateRunCacheCommandInput, UpdateRunCacheCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRunCache",
  UpdateRunCache$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRunCacheRequest;
      output: {};
    };
    sdk: {
      input: UpdateRunCacheCommandInput;
      output: UpdateRunCacheCommandOutput;
    };
  };
}
