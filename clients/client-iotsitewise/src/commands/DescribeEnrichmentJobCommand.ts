// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeEnrichmentJobRequest, DescribeEnrichmentJobResponse } from "../models/models_0";
import { DescribeEnrichmentJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeEnrichmentJobCommand}.
 */
export interface DescribeEnrichmentJobCommandInput extends DescribeEnrichmentJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEnrichmentJobCommand}.
 */
export interface DescribeEnrichmentJobCommandOutput extends DescribeEnrichmentJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific enrichment job, including its current status,
 * configuration, and timestamps.</p>
 * <h2>Use Cases</h2>
 * <ul>
 * <li>Monitor job progress by checking status updates with DescribeEnrichmentJob</li>
 * <li>Retrieve the complete job configuration submitted during creation</li>
 * <li>Debug failed jobs by examining the failureMessage field</li>
 * <li>Track job lifecycle with creation, update, completion, and cancellation timestamps</li>
 * </ul>
 * <h2>Status Monitoring</h2>
 * <p>Jobs progress through statuses: PENDING → RUNNING → terminal state</p>
 * <p>Terminal states:</p>
 * <ul>
 * <li>COMPLETED: Job finished successfully; query IoT SiteWise for semantic search results</li>
 * <li>FAILED: Job encountered an error; check failureMessage for details</li>
 * <li>TIMED_OUT: Job exceeded maximum processing time</li>
 * <li>CANCELLED: Job was cancelled via CancelEnrichmentJob</li>
 * </ul>
 * <h2>Response Fields</h2>
 * <p>The response includes:</p>
 * <ul>
 * <li>Current job status and type</li>
 * <li>Full job configuration as originally submitted</li>
 * <li>Lifecycle timestamps (created, updated, completed, cancelled)</li>
 * <li>Failure details if status is FAILED</li>
 * </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeEnrichmentJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeEnrichmentJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeEnrichmentJobRequest
 *   workspaceName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEnrichmentJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   status: "PENDING" || "RUNNING" || "COMPLETED" || "FAILED" || "TIMED_OUT" || "CANCELLED", // required
 * //   workspaceName: "STRING_VALUE", // required
 * //   jobType: "EVENT_DETECTION", // required
 * //   jobConfiguration: { // EnrichmentJobConfiguration Union: only one key present
 * //     eventDetection: { // EventDetection
 * //       datasetId: "STRING_VALUE", // required
 * //       timeSeriesId: "STRING_VALUE",
 * //       propertyAlias: "STRING_VALUE",
 * //       trimSettings: { // EnrichmentTrimSettings
 * //         startTime: { // TimeInNanos
 * //           timeInSeconds: Number("long"), // required
 * //           offsetInNanos: Number("int"),
 * //         },
 * //         endTime: {
 * //           timeInSeconds: Number("long"), // required
 * //           offsetInNanos: Number("int"),
 * //         },
 * //       },
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   completedAt: new Date("TIMESTAMP"),
 * //   cancelledAt: new Date("TIMESTAMP"),
 * //   failureMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEnrichmentJobCommandInput - {@link DescribeEnrichmentJobCommandInput}
 * @returns {@link DescribeEnrichmentJobCommandOutput}
 * @see {@link DescribeEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link DescribeEnrichmentJobCommandOutput} for command's `response` shape.
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
export class DescribeEnrichmentJobCommand extends command<DescribeEnrichmentJobCommandInput, DescribeEnrichmentJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEnrichmentJob",
  DescribeEnrichmentJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEnrichmentJobRequest;
      output: DescribeEnrichmentJobResponse;
    };
    sdk: {
      input: DescribeEnrichmentJobCommandInput;
      output: DescribeEnrichmentJobCommandOutput;
    };
  };
}
