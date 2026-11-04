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
 * Cancels a running or pending enrichment job. This is an idempotent operation—calling it multiple times with the same jobId is safe and returns the current status.
 *
 * ## Behavior
 *
 * - Jobs in PENDING or RUNNING status transition to CANCELLED
 * - Jobs in RUNNING state may not be cancellable once they have progressed to certain processing stages
 * - Jobs already in terminal states (COMPLETED, FAILED, TIMED_OUT) cannot be cancelled; the operation returns a ConflictingOperationException
 * - Cancelling an already-CANCELLED job is a no-op and returns the current status (idempotent behavior)
 * - The API responds immediately after recording the cancellation
 * - Cleanup of job resources happens asynchronously in the background
 *
 * ## When to Cancel
 *
 * Cancel a job when:
 *
 * - The job is taking longer than expected
 * - The job was created with incorrect parameters
 * - You no longer need the results
 *
 * ## Idempotency
 *
 * You can safely retry cancellation requests. Calling CancelEnrichmentJob multiple times for the same job returns the current status without error as long as the job is not in a terminal state other than CANCELLED.
 *
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
 *
 * Access is denied.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've reached the quota for a resource. For example, this can occur if you're trying to associate more than the allowed number of child assets or attempting to create more than the allowed number of properties for an asset model.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
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
