// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListMonitoredResourcesRequest, ListMonitoredResourcesResponse } from "../models/models_0";
import { ListMonitoredResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMonitoredResourcesCommand}.
 */
export interface ListMonitoredResourcesCommandInput extends ListMonitoredResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitoredResourcesCommand}.
 */
export interface ListMonitoredResourcesCommandOutput extends ListMonitoredResourcesResponse, __MetadataBearer {}

/**
 * <p>
 * 			Returns the list of all log groups that are being monitored and tagged by DevOps Guru.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListMonitoredResourcesCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListMonitoredResourcesCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListMonitoredResourcesRequest
 *   Filters: { // ListMonitoredResourcesFilters
 *     ResourcePermission: "FULL_PERMISSION" || "MISSING_PERMISSION", // required
 *     ResourceTypeFilters: [ // ResourceTypeFilters // required
 *       "LOG_GROUPS" || "CLOUDFRONT_DISTRIBUTION" || "DYNAMODB_TABLE" || "EC2_NAT_GATEWAY" || "ECS_CLUSTER" || "ECS_SERVICE" || "EKS_CLUSTER" || "ELASTIC_BEANSTALK_ENVIRONMENT" || "ELASTIC_LOAD_BALANCER_LOAD_BALANCER" || "ELASTIC_LOAD_BALANCING_V2_LOAD_BALANCER" || "ELASTIC_LOAD_BALANCING_V2_TARGET_GROUP" || "ELASTICACHE_CACHE_CLUSTER" || "ELASTICSEARCH_DOMAIN" || "KINESIS_STREAM" || "LAMBDA_FUNCTION" || "OPEN_SEARCH_SERVICE_DOMAIN" || "RDS_DB_INSTANCE" || "RDS_DB_CLUSTER" || "REDSHIFT_CLUSTER" || "ROUTE53_HOSTED_ZONE" || "ROUTE53_HEALTH_CHECK" || "S3_BUCKET" || "SAGEMAKER_ENDPOINT" || "SNS_TOPIC" || "SQS_QUEUE" || "STEP_FUNCTIONS_ACTIVITY" || "STEP_FUNCTIONS_STATE_MACHINE",
 *     ],
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMonitoredResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitoredResourcesResponse
 * //   MonitoredResourceIdentifiers: [ // MonitoredResourceIdentifiers // required
 * //     { // MonitoredResourceIdentifier
 * //       MonitoredResourceName: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       ResourcePermission: "FULL_PERMISSION" || "MISSING_PERMISSION",
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       ResourceCollection: { // ResourceCollection
 * //         CloudFormation: { // CloudFormationCollection
 * //           StackNames: [ // StackNames
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Tags: [ // TagCollections
 * //           { // TagCollection
 * //             AppBoundaryKey: "STRING_VALUE", // required
 * //             TagValues: [ // TagValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMonitoredResourcesCommandInput - {@link ListMonitoredResourcesCommandInput}
 * @returns {@link ListMonitoredResourcesCommandOutput}
 * @see {@link ListMonitoredResourcesCommandInput} for command's `input` shape.
 * @see {@link ListMonitoredResourcesCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class ListMonitoredResourcesCommand extends $Command
  .classBuilder<
    ListMonitoredResourcesCommandInput,
    ListMonitoredResourcesCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "ListMonitoredResources", {})
  .n("DevOpsGuruClient", "ListMonitoredResourcesCommand")
  .sc(ListMonitoredResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMonitoredResourcesRequest;
      output: ListMonitoredResourcesResponse;
    };
    sdk: {
      input: ListMonitoredResourcesCommandInput;
      output: ListMonitoredResourcesCommandOutput;
    };
  };
}
