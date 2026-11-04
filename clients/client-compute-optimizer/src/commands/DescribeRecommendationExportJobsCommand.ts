// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeRecommendationExportJobsRequest,
  DescribeRecommendationExportJobsResponse,
} from "../models/models_0";
import { DescribeRecommendationExportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeRecommendationExportJobsCommand}.
 */
export interface DescribeRecommendationExportJobsCommandInput extends DescribeRecommendationExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecommendationExportJobsCommand}.
 */
export interface DescribeRecommendationExportJobsCommandOutput extends DescribeRecommendationExportJobsResponse, __MetadataBearer {}

/**
 * Describes recommendation export jobs created in the last seven days.
 *
 * Use the ExportAutoScalingGroupRecommendations or ExportEC2InstanceRecommendations actions to request an export of your recommendations. Then use the DescribeRecommendationExportJobs action to view your export jobs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, DescribeRecommendationExportJobsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, DescribeRecommendationExportJobsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // DescribeRecommendationExportJobsRequest
 *   jobIds: [ // JobIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // JobFilters
 *     { // JobFilter
 *       name: "ResourceType" || "JobStatus",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeRecommendationExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecommendationExportJobsResponse
 * //   recommendationExportJobs: [ // RecommendationExportJobs
 * //     { // RecommendationExportJob
 * //       jobId: "STRING_VALUE",
 * //       destination: { // ExportDestination
 * //         s3: { // S3Destination
 * //           bucket: "STRING_VALUE",
 * //           key: "STRING_VALUE",
 * //           metadataKey: "STRING_VALUE",
 * //         },
 * //       },
 * //       resourceType: "Ec2Instance" || "AutoScalingGroup" || "EbsVolume" || "LambdaFunction" || "NotApplicable" || "EcsService" || "License" || "RdsDBInstance" || "AuroraDBClusterStorage" || "Idle",
 * //       status: "Queued" || "InProgress" || "Complete" || "Failed",
 * //       creationTimestamp: new Date("TIMESTAMP"),
 * //       lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRecommendationExportJobsCommandInput - {@link DescribeRecommendationExportJobsCommandInput}
 * @returns {@link DescribeRecommendationExportJobsCommandOutput}
 * @see {@link DescribeRecommendationExportJobsCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Try your call again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value supplied for the input parameter is out of range or not valid.
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *
 * The request must contain either a valid (registered) Amazon Web Services access key ID or X.509 certificate.
 *
 * @throws {@link OptInRequiredException} (client fault)
 *
 * The account is not opted in to Compute Optimizer.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed due to a temporary failure of the server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ComputeOptimizerServiceException}
 *
 * Base exception class for all service exceptions from ComputeOptimizer service.
 *
 * @public
 */
export class DescribeRecommendationExportJobsCommand extends command<DescribeRecommendationExportJobsCommandInput, DescribeRecommendationExportJobsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRecommendationExportJobs",
  DescribeRecommendationExportJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRecommendationExportJobsRequest;
      output: DescribeRecommendationExportJobsResponse;
    };
    sdk: {
      input: DescribeRecommendationExportJobsCommandInput;
      output: DescribeRecommendationExportJobsCommandOutput;
    };
  };
}
