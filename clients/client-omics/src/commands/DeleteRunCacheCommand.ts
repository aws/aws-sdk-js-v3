// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRunCacheRequest } from "../models/models_0";
import { DeleteRunCache$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRunCacheCommand}.
 */
export interface DeleteRunCacheCommandInput extends DeleteRunCacheRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRunCacheCommand}.
 */
export interface DeleteRunCacheCommandOutput extends __MetadataBearer {}

/**
 * Deletes a run cache and returns a response with no body if the operation is successful. This action removes the cache metadata stored in the service account, but does not delete the data in Amazon S3. You can access the cache data in Amazon S3, for inspection or to troubleshoot issues. You can remove old cache data using standard S3 `Delete` operations.
 *
 * For more information, see [Deleting a run cache](https://docs.aws.amazon.com/omics/latest/dev/workflow-cache-delete.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteRunCacheCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteRunCacheCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteRunCacheRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteRunCacheCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRunCacheCommandInput - {@link DeleteRunCacheCommandInput}
 * @returns {@link DeleteRunCacheCommandOutput}
 * @see {@link DeleteRunCacheCommandInput} for command's `input` shape.
 * @see {@link DeleteRunCacheCommandOutput} for command's `response` shape.
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
export class DeleteRunCacheCommand extends command<DeleteRunCacheCommandInput, DeleteRunCacheCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRunCache",
  DeleteRunCache$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRunCacheRequest;
      output: {};
    };
    sdk: {
      input: DeleteRunCacheCommandInput;
      output: DeleteRunCacheCommandOutput;
    };
  };
}
