// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEnrichmentJobRequest, CreateEnrichmentJobResponse } from "../models/models_0";
import { CreateEnrichmentJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEnrichmentJobCommand}.
 */
export interface CreateEnrichmentJobCommandInput extends CreateEnrichmentJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateEnrichmentJobCommand}.
 */
export interface CreateEnrichmentJobCommandOutput extends CreateEnrichmentJobResponse, __MetadataBearer {}

/**
 * Creates an asynchronous enrichment job to analyze time-series sensor data. The operation returns immediately with job details while processing continues in the background.
 *
 * ## Idempotency
 *
 * Include a clientToken to make the operation idempotent. If you submit the same request with the same token within the idempotency window, you receive the original job details without creating a duplicate.
 *
 * ## Prerequisites
 *
 * Before creating a job, ensure:
 *
 * - The workspace is in ACTIVE state (not being deleted)
 * - You have IAM permissions for the workspace, dataset, and time-series resources
 * - You have KMS Decrypt permission on the workspace's customer-managed encryption key
 * - No duplicate job (same workspace, dataset, property, and job type) is currently running
 *
 * ## Workflow
 *
 * 1. Submit the job with configuration specifying which video data to analyze and the time range
 * 2. Capture the jobId from the response
 * 3. Use DescribeEnrichmentJob to monitor progress and check job status
 * 4. When status reaches a terminal state (COMPLETED, FAILED, TIMED_OUT, CANCELLED), check results
 * 5. For COMPLETED jobs, query IoT SiteWise for semantic search on video events
 *
 * ## Error Handling
 *
 * - ConflictingOperationException: A duplicate job is already running for the same configuration
 * - InvalidRequestException: Invalid parameters (e.g., both timeSeriesId and propertyAlias specified)
 * - AccessDeniedException: Insufficient IAM or KMS permissions
 * - LimitExceededException: Too many concurrent jobs or requests
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateEnrichmentJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateEnrichmentJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateEnrichmentJobRequest
 *   workspaceName: "STRING_VALUE", // required
 *   jobConfiguration: { // EnrichmentJobConfiguration Union: only one key present
 *     eventDetection: { // EventDetection
 *       datasetId: "STRING_VALUE", // required
 *       timeSeriesId: "STRING_VALUE",
 *       propertyAlias: "STRING_VALUE",
 *       trimSettings: { // EnrichmentTrimSettings
 *         startTime: { // TimeInNanos
 *           timeInSeconds: Number("long"), // required
 *           offsetInNanos: Number("int"),
 *         },
 *         endTime: {
 *           timeInSeconds: Number("long"), // required
 *           offsetInNanos: Number("int"),
 *         },
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnrichmentJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   status: "PENDING" || "RUNNING" || "COMPLETED" || "FAILED" || "TIMED_OUT" || "CANCELLED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateEnrichmentJobCommandInput - {@link CreateEnrichmentJobCommandInput}
 * @returns {@link CreateEnrichmentJobCommandOutput}
 * @see {@link CreateEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link CreateEnrichmentJobCommandOutput} for command's `response` shape.
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
export class CreateEnrichmentJobCommand extends command<CreateEnrichmentJobCommandInput, CreateEnrichmentJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateEnrichmentJob",
  CreateEnrichmentJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnrichmentJobRequest;
      output: CreateEnrichmentJobResponse;
    };
    sdk: {
      input: CreateEnrichmentJobCommandInput;
      output: CreateEnrichmentJobCommandOutput;
    };
  };
}
