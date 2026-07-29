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
 * <p>Creates an asynchronous enrichment job to analyze time-series sensor data. The operation returns
 * immediately with job details while processing continues in the background.</p>
 * <h2>Idempotency</h2>
 * <p>Include a clientToken to make the operation idempotent. If you submit the same request with the same
 * token within the idempotency window, you receive the original job details without creating a duplicate.</p>
 * <h2>Prerequisites</h2>
 * <p>Before creating a job, ensure:</p>
 * <ul>
 * <li>The workspace is in ACTIVE state (not being deleted)</li>
 * <li>You have IAM permissions for the workspace, dataset, and time-series resources</li>
 * <li>You have KMS Decrypt permission on the workspace's customer-managed encryption key</li>
 * <li>No duplicate job (same workspace, dataset, property, and job type) is currently running</li>
 * </ul>
 * <h2>Workflow</h2>
 * <ol>
 * <li>Submit the job with configuration specifying which video data to analyze and the time range</li>
 * <li>Capture the jobId from the response</li>
 * <li>Use DescribeEnrichmentJob to monitor progress and check job status</li>
 * <li>When status reaches a terminal state (COMPLETED, FAILED, TIMED_OUT, CANCELLED), check results</li>
 * <li>For COMPLETED jobs, query IoT SiteWise for semantic search on video events</li>
 * </ol>
 * <h2>Error Handling</h2>
 * <ul>
 * <li>ConflictingOperationException: A duplicate job is already running for the same configuration</li>
 * <li>InvalidRequestException: Invalid parameters (e.g., both timeSeriesId and propertyAlias specified)</li>
 * <li>AccessDeniedException: Insufficient IAM or KMS permissions</li>
 * <li>LimitExceededException: Too many concurrent jobs or requests</li>
 * </ul>
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
