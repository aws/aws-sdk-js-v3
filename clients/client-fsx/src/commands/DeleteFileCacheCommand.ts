// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DeleteFileCacheRequest, DeleteFileCacheResponse } from "../models/models_0";
import { de_DeleteFileCacheCommand, se_DeleteFileCacheCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an Amazon File Cache resource. After deletion, the cache no longer exists, and its data
 *             is gone.</p>
 *          <p>The <code>DeleteFileCache</code> operation returns while the cache has the
 *             <code>DELETING</code> status. You can check the cache deletion status by
 *             calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns a list of caches in your
 *             account. If you pass the cache ID for a deleted cache, the
 *             <code>DescribeFileCaches</code> operation returns a <code>FileCacheNotFound</code>
 *             error.</p>
 *          <important>
 *             <p>The data in a deleted cache is also deleted and can't be recovered by
 *                 any means.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteFileCacheCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteFileCacheCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
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
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileCacheNotFound} (client fault)
 *  <p>No caches were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web ServicesSupport.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DeleteFileCacheCommand extends $Command
  .classBuilder<
    DeleteFileCacheCommandInput,
    DeleteFileCacheCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "DeleteFileCache", {})
  .n("FSxClient", "DeleteFileCacheCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFileCacheCommand)
  .de(de_DeleteFileCacheCommand)
  .build() {
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
