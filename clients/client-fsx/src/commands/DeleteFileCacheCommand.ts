// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFileCacheRequest, DeleteFileCacheResponse } from "../models/models_0";
import { DeleteFileCache$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFileCacheCommand}.
 */
export interface DeleteFileCacheCommandInput extends DeleteFileCacheRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFileCacheCommand}.
 */
export interface DeleteFileCacheCommandOutput extends DeleteFileCacheResponse, __MetadataBearer {}

/**
 * Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data is gone.
 *
 * The `DeleteFileCache` operation returns while the cache has the `DELETING` status. You can check the cache deletion status by calling the [DescribeFileCaches](https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html) operation, which returns a list of caches in your account. If you pass the cache ID for a deleted cache, the `DescribeFileCaches` operation returns a `FileCacheNotFound` error.
 *
 * > **Important:** The data in a deleted cache is also deleted and can't be recovered by any means.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteFileCacheCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteFileCacheCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DeleteFileCacheRequest
 *   FileCacheId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new DeleteFileCacheCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFileCacheResponse
 * //   FileCacheId: "STRING_VALUE",
 * //   Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "UPDATING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteFileCacheCommandInput - {@link DeleteFileCacheCommandInput}
 * @returns {@link DeleteFileCacheCommandOutput}
 * @see {@link DeleteFileCacheCommandInput} for command's `input` shape.
 * @see {@link DeleteFileCacheCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * A generic error indicating a failure with a client request.
 *
 * @throws {@link FileCacheNotFound} (client fault)
 *
 * No caches were found based upon supplied parameters.
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *
 * The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * A generic error indicating a server-side failure.
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *
 * An error indicating that a particular service limit was exceeded. You can increase some service limits by contacting Amazon Web Services Support.
 *
 * @throws {@link FSxServiceException}
 *
 * Base exception class for all service exceptions from FSx service.
 *
 * @public
 */
export class DeleteFileCacheCommand extends command<DeleteFileCacheCommandInput, DeleteFileCacheCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFileCache",
  DeleteFileCache$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFileCacheRequest;
      output: DeleteFileCacheResponse;
    };
    sdk: {
      input: DeleteFileCacheCommandInput;
      output: DeleteFileCacheCommandOutput;
    };
  };
}
