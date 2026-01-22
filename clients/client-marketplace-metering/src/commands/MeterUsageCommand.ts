// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import type { MeterUsageRequest, MeterUsageResult } from "../models/models_0";
import { MeterUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MeterUsageCommand}.
 */
export interface MeterUsageCommandInput extends MeterUsageRequest {}
/**
 * @public
 *
 * The output of {@link MeterUsageCommand}.
 */
export interface MeterUsageCommandOutput extends MeterUsageResult, __MetadataBearer {}

/**
 * <p>As a seller, your software hosted in the buyer's Amazon Web Services account uses this API action to emit metering records directly to Amazon Web Services Marketplace.
 *             You must use the following buyer Amazon Web Services account credentials to sign the API request.</p>
 *          <ul>
 *             <li>
 *                <p>For <b>Amazon EC2</b> deployments, your software must use the
 *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html">IAM role for Amazon EC2</a>
 *                     to sign the API call for <code>MeterUsage</code> API operation.</p>
 *             </li>
 *             <li>
 *                <p>For <b>Amazon EKS</b> deployments, your software must use
 *                     <a href="https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html">IAM roles for service accounts (IRSA)</a>
 *                     to sign the API call for the <code>MeterUsage</code> API operation. Using
 *                     <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-identities.html">EKS Pod Identity</a>, the node role, or long-term access keys is not supported.</p>
 *             </li>
 *             <li>
 *                <p>For <b>Amazon ECS</b> deployments, your software must use
 *                     <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">Amazon ECS task IAM</a>
 *                     role to sign the API call for the <code>MeterUsage</code> API operation. Using the node role or long-term access keys are not supported.</p>
 *             </li>
 *             <li>
 *                <p>For <b>Amazon Bedrock AgentCore Runtime</b> deployments, your software must use the
 *                     <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-permissions.html#runtime-permissions-execution">AgentCore Runtime execution role</a>
 *                     to sign the API call for the <code>MeterUsage</code> API operation. Long-term access keys are not supported.</p>
 *             </li>
 *          </ul>
 *          <p>The handling of <code>MeterUsage</code> requests varies between Amazon Bedrock AgentCore Runtime and non-Amazon Bedrock AgentCore deployments.</p>
 *          <ul>
 *             <li>
 *                <p>For <b>non-Amazon Bedrock AgentCore Runtime</b> deployments, you can only report usage once per hour for each dimension.
 *                     For AMI-based products, this is per dimension and per EC2 instance. For container products, this is per dimension and per ECS task or EKS pod. You can't modify values
 *                     after they're recorded. If you report usage before a current hour ends, you will be unable to report additional usage until the next hour begins.
 *                     The <code>Timestamp</code> request parameter is rounded down to the hour and used to enforce this once-per-hour rule for idempotency.
 *                     For requests that are identical after the <code>Timestamp</code> is rounded down, the API is idempotent and returns the metering record ID.</p>
 *             </li>
 *             <li>
 *                <p>For <b>Amazon Bedrock AgentCore Runtime</b> deployments, you can report usage multiple times per hour for the same dimension.
 *                     You do not need to aggregate metering records by the hour. You must include an idempotency token in the <code>ClientToken</code> request parameter. If using an Amazon
 *                     SDK or the Amazon Web Services CLI, you must use the latest version which automatically includes an idempotency token in the <code>ClientToken</code> request parameter so that the request is processed successfully.
 *                     The <code>Timestamp</code> request parameter is not rounded down to the hour and is not used for duplicate validation. Requests with duplicate <code>Timestamps</code> are aggregated as long as the
 *                     <code>ClientToken</code> is unique.</p>
 *             </li>
 *          </ul>
 *          <p>If you submit records more than six hours after events occur, the records won't be accepted. The timestamp in your request determines when an event is recorded.</p>
 *          <p>You can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define or allow the customer to define.</p>
 *          <p>For Amazon Web Services Regions that support <code>MeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/APIReference/metering-regions.html#meterusage-region-support-ec2">MeterUsage Region support for Amazon EC2</a> and <a href="https://docs.aws.amazon.com/marketplace/latest/APIReference/metering-regions.html#meterusage-region-support-ecs-eks">MeterUsage Region support for Amazon ECS and Amazon EKS</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, MeterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, MeterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * // import type { MarketplaceMeteringClientConfig } from "@aws-sdk/client-marketplace-metering";
 * const config = {}; // type is MarketplaceMeteringClientConfig
 * const client = new MarketplaceMeteringClient(config);
 * const input = { // MeterUsageRequest
 *   ProductCode: "STRING_VALUE", // required
 *   Timestamp: new Date("TIMESTAMP"), // required
 *   UsageDimension: "STRING_VALUE", // required
 *   UsageQuantity: Number("int"),
 *   DryRun: true || false,
 *   UsageAllocations: [ // UsageAllocations
 *     { // UsageAllocation
 *       AllocatedUsageQuantity: Number("int"), // required
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new MeterUsageCommand(input);
 * const response = await client.send(command);
 * // { // MeterUsageResult
 * //   MeteringRecordId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MeterUsageCommandInput - {@link MeterUsageCommandInput}
 * @returns {@link MeterUsageCommandOutput}
 * @see {@link MeterUsageCommandInput} for command's `input` shape.
 * @see {@link MeterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
 *
 * @throws {@link CustomerNotEntitledException} (client fault)
 *  <p>Exception thrown when the customer does not have a valid subscription for the
 *             product.</p>
 *
 * @throws {@link DuplicateRequestException} (client fault)
 *  <p>A metering record has already been emitted by the same EC2 instance, ECS task, or EKS
 *             pod for the given {<code>usageDimension</code>, <code>timestamp</code>} with a different
 *                 <code>usageQuantity</code>.</p>
 *
 * @throws {@link IdempotencyConflictException} (client fault)
 *  <p>The <code>ClientToken</code> is being used for multiple requests.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the Amazon Web Services forums.</p>
 *
 * @throws {@link InvalidEndpointRegionException} (client fault)
 *  <p>The endpoint being called is in a Amazon Web Services Region different from your EC2 instance, ECS
 *             task, or EKS pod. The Region of the Metering Service endpoint and the Amazon Web Services Region of
 *             the resource must match.</p>
 *
 * @throws {@link InvalidProductCodeException} (client fault)
 *  <p>The product code passed does not match the product code used for publishing the
 *             product.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>The tag is invalid, or the number of tags is greater than 5.</p>
 *
 * @throws {@link InvalidUsageAllocationsException} (client fault)
 *  <p>Sum of allocated usage quantities is not equal to the usage quantity.</p>
 *
 * @throws {@link InvalidUsageDimensionException} (client fault)
 *  <p>The usage dimension does not match one of the <code>UsageDimensions</code> associated
 *             with products.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to the API are throttled.</p>
 *
 * @throws {@link TimestampOutOfBoundsException} (client fault)
 *  <p>The <code>timestamp</code> value passed in the <code>UsageRecord</code> is out of
 *             allowed range.</p>
 *          <p>For <code>BatchMeterUsage</code>, if any of the records are outside of the allowed
 *             range, the entire batch is not processed. You must remove invalid records and try
 *             again.</p>
 *
 * @throws {@link MarketplaceMeteringServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceMetering service.</p>
 *
 *
 * @public
 */
export class MeterUsageCommand extends $Command
  .classBuilder<
    MeterUsageCommandInput,
    MeterUsageCommandOutput,
    MarketplaceMeteringClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceMeteringClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPMeteringService", "MeterUsage", {})
  .n("MarketplaceMeteringClient", "MeterUsageCommand")
  .sc(MeterUsage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MeterUsageRequest;
      output: MeterUsageResult;
    };
    sdk: {
      input: MeterUsageCommandInput;
      output: MeterUsageCommandOutput;
    };
  };
}
