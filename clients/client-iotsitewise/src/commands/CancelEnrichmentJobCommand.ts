// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelEnrichmentJobRequest, CancelEnrichmentJobResponse } from "../models/models_0";
import { CancelEnrichmentJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelEnrichmentJobCommand}.
 */
export interface CancelEnrichmentJobCommandInput extends CancelEnrichmentJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelEnrichmentJobCommand}.
 */
export interface CancelEnrichmentJobCommandOutput extends CancelEnrichmentJobResponse, __MetadataBearer {}

/**
 * <p>Cancels a running or pending enrichment job. This is an idempotent operation—calling it multiple
 * times with the same jobId is safe and returns the current status.</p>
 * <h2>Behavior</h2>
 * <ul>
 * <li>Jobs in PENDING or RUNNING status transition to CANCELLED</li>
 * <li>Jobs in RUNNING state may not be cancellable once they have progressed to certain processing stages</li>
 * <li>Jobs already in terminal states (COMPLETED, FAILED, TIMED_OUT) cannot be cancelled;
 * the operation returns a ConflictingOperationException</li>
 * <li>Cancelling an already-CANCELLED job is a no-op and returns the current status (idempotent behavior)</li>
 * <li>The API responds immediately after recording the cancellation</li>
 * <li>Cleanup of job resources happens asynchronously in the background</li>
 * </ul>
 * <h2>When to Cancel</h2>
 * <p>Cancel a job when:</p>
 * <ul>
 * <li>The job is taking longer than expected</li>
 * <li>The job was created with incorrect parameters</li>
 * <li>You no longer need the results</li>
 * </ul>
 * <h2>Idempotency</h2>
 * <p>You can safely retry cancellation requests. Calling CancelEnrichmentJob multiple times for the same
 * job returns the current status without error as long as the job is not in a terminal state other
 * than CANCELLED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CancelEnrichmentJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CancelEnrichmentJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CancelEnrichmentJobRequest
 *   workspaceName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new CancelEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * // { // CancelEnrichmentJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   status: "PENDING" || "RUNNING" || "COMPLETED" || "FAILED" || "TIMED_OUT" || "CANCELLED", // required
 * // };
 *
 * ```
 *
 * @param CancelEnrichmentJobCommandInput - {@link CancelEnrichmentJobCommandInput}
 * @returns {@link CancelEnrichmentJobCommandOutput}
 * @see {@link CancelEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link CancelEnrichmentJobCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class CancelEnrichmentJobCommand extends command<CancelEnrichmentJobCommandInput, CancelEnrichmentJobCommandOutput>(
  _ep0,
  _mw0,
  "CancelEnrichmentJob",
  CancelEnrichmentJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelEnrichmentJobRequest;
      output: CancelEnrichmentJobResponse;
    };
    sdk: {
      input: CancelEnrichmentJobCommandInput;
      output: CancelEnrichmentJobCommandOutput;
    };
  };
}
