// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ComputeOptimizerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeRecommendationExportJobsRequest,
  DescribeRecommendationExportJobsResponse,
} from "../models/models_0";
import { DescribeRecommendationExportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describes recommendation export jobs created in the last seven days.</p>
 *          <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your
 *             recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action
 *             to view your export jobs.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ComputeOptimizerServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizer service.</p>
 *
 *
 * @public
 */
export class DescribeRecommendationExportJobsCommand extends $Command
  .classBuilder<
    DescribeRecommendationExportJobsCommandInput,
    DescribeRecommendationExportJobsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "DescribeRecommendationExportJobs", {})
  .n("ComputeOptimizerClient", "DescribeRecommendationExportJobsCommand")
  .sc(DescribeRecommendationExportJobs$)
  .build() {
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
