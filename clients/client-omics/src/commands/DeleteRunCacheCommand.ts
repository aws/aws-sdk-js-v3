// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRunCacheRequest } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { DeleteRunCache } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a run cache and returns a response with no body if the operation is successful. This action removes the cache metadata stored in the service account, but does not delete the data in Amazon S3. You can access the cache data in Amazon S3, for inspection or to troubleshoot issues. You can remove old cache data using standard S3 <code>Delete</code> operations. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-cache-delete.html">Deleting a run cache</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class DeleteRunCacheCommand extends $Command
  .classBuilder<
    DeleteRunCacheCommandInput,
    DeleteRunCacheCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "DeleteRunCache", {})
  .n("OmicsClient", "DeleteRunCacheCommand")
  .sc(DeleteRunCache)
  .build() {
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
