// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeOrganizationResourceCollectionHealthRequest,
  DescribeOrganizationResourceCollectionHealthResponse,
} from "../models/models_0";
import {
  de_DescribeOrganizationResourceCollectionHealthCommand,
  se_DescribeOrganizationResourceCollectionHealthCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationResourceCollectionHealthCommand}.
 */
export interface DescribeOrganizationResourceCollectionHealthCommandInput
  extends DescribeOrganizationResourceCollectionHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationResourceCollectionHealthCommand}.
 */
export interface DescribeOrganizationResourceCollectionHealthCommandOutput
  extends DescribeOrganizationResourceCollectionHealthResponse,
    __MetadataBearer {}

/**
 * <p>Provides an overview of your system's health. If additional member accounts are part
 * 			of your organization, you can filter those accounts using the <code>AccountIds</code>
 * 			field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeOrganizationResourceCollectionHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeOrganizationResourceCollectionHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DevOpsGuruClient(config);
 * const input = { // DescribeOrganizationResourceCollectionHealthRequest
 *   OrganizationResourceCollectionType: "AWS_CLOUD_FORMATION" || "AWS_SERVICE" || "AWS_ACCOUNT" || "AWS_TAGS", // required
 *   AccountIds: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   OrganizationalUnitIds: [ // OrganizationalUnitIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeOrganizationResourceCollectionHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationResourceCollectionHealthResponse
 * //   CloudFormation: [ // CloudFormationHealths
 * //     { // CloudFormationHealth
 * //       StackName: "STRING_VALUE",
 * //       Insight: { // InsightHealth
 * //         OpenProactiveInsights: Number("int"),
 * //         OpenReactiveInsights: Number("int"),
 * //         MeanTimeToRecoverInMilliseconds: Number("long"),
 * //       },
 * //       AnalyzedResourceCount: Number("long"),
 * //     },
 * //   ],
 * //   Service: [ // ServiceHealths
 * //     { // ServiceHealth
 * //       ServiceName: "API_GATEWAY" || "APPLICATION_ELB" || "AUTO_SCALING_GROUP" || "CLOUD_FRONT" || "DYNAMO_DB" || "EC2" || "ECS" || "EKS" || "ELASTIC_BEANSTALK" || "ELASTI_CACHE" || "ELB" || "ES" || "KINESIS" || "LAMBDA" || "NAT_GATEWAY" || "NETWORK_ELB" || "RDS" || "REDSHIFT" || "ROUTE_53" || "S3" || "SAGE_MAKER" || "SNS" || "SQS" || "STEP_FUNCTIONS" || "SWF",
 * //       Insight: { // ServiceInsightHealth
 * //         OpenProactiveInsights: Number("int"),
 * //         OpenReactiveInsights: Number("int"),
 * //       },
 * //       AnalyzedResourceCount: Number("long"),
 * //     },
 * //   ],
 * //   Account: [ // AccountHealths
 * //     { // AccountHealth
 * //       AccountId: "STRING_VALUE",
 * //       Insight: { // AccountInsightHealth
 * //         OpenProactiveInsights: Number("int"),
 * //         OpenReactiveInsights: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Tags: [ // TagHealths
 * //     { // TagHealth
 * //       AppBoundaryKey: "STRING_VALUE",
 * //       TagValue: "STRING_VALUE",
 * //       Insight: {
 * //         OpenProactiveInsights: Number("int"),
 * //         OpenReactiveInsights: Number("int"),
 * //         MeanTimeToRecoverInMilliseconds: Number("long"),
 * //       },
 * //       AnalyzedResourceCount: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationResourceCollectionHealthCommandInput - {@link DescribeOrganizationResourceCollectionHealthCommandInput}
 * @returns {@link DescribeOrganizationResourceCollectionHealthCommandOutput}
 * @see {@link DescribeOrganizationResourceCollectionHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationResourceCollectionHealthCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
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
 * @public
 */
export class DescribeOrganizationResourceCollectionHealthCommand extends $Command
  .classBuilder<
    DescribeOrganizationResourceCollectionHealthCommandInput,
    DescribeOrganizationResourceCollectionHealthCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CapstoneControlPlaneService", "DescribeOrganizationResourceCollectionHealth", {})
  .n("DevOpsGuruClient", "DescribeOrganizationResourceCollectionHealthCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOrganizationResourceCollectionHealthCommand)
  .de(de_DescribeOrganizationResourceCollectionHealthCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationResourceCollectionHealthRequest;
      output: DescribeOrganizationResourceCollectionHealthResponse;
    };
    sdk: {
      input: DescribeOrganizationResourceCollectionHealthCommandInput;
      output: DescribeOrganizationResourceCollectionHealthCommandOutput;
    };
  };
}
