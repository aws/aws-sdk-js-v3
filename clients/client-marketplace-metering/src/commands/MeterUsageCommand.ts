// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MeterUsageRequest, MeterUsageResult } from "../models/models_0";
import { MeterUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * As a seller, your software hosted in the buyer's Amazon Web Services account uses this API action to emit metering records directly to Amazon Web Services Marketplace. You must use the following buyer Amazon Web Services account credentials to sign the API request.
 *
 * - For **Amazon EC2** deployments, your software must use the [IAM role for Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html) to sign the API call for `MeterUsage` API operation.
 * - For **Amazon EKS** deployments, your software must use [IAM roles for service accounts (IRSA)](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) to sign the API call for the `MeterUsage` API operation. Using [EKS Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/pod-identities.html), the node role, or long-term access keys is not supported.
 * - For **Amazon ECS** deployments, your software must use [Amazon ECS task IAM](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) role to sign the API call for the `MeterUsage` API operation. Using the node role or long-term access keys are not supported.
 * - For **Amazon Bedrock AgentCore Runtime** deployments, your software must use the [AgentCore Runtime execution role](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-permissions.html#runtime-permissions-execution) to sign the API call for the `MeterUsage` API operation. Long-term access keys are not supported.
 *
 * The handling of `MeterUsage` requests varies between Amazon Bedrock AgentCore Runtime and non-Amazon Bedrock AgentCore deployments.
 *
 * - For **non-Amazon Bedrock AgentCore Runtime** deployments, you can only report usage once per hour for each dimension. For AMI-based products, this is per dimension and per EC2 instance. For container products, this is per dimension and per ECS task or EKS pod. You can't modify values after they're recorded. If you report usage before a current hour ends, you will be unable to report additional usage until the next hour begins. The `Timestamp` request parameter is rounded down to the hour and used to enforce this once-per-hour rule for idempotency. For requests that are identical after the `Timestamp` is rounded down, the API is idempotent and returns the metering record ID.
 * - For **Amazon Bedrock AgentCore Runtime** deployments, you can report usage multiple times per hour for the same dimension. You do not need to aggregate metering records by the hour. You must include an idempotency token in the `ClientToken` request parameter. If using an Amazon SDK or the Amazon Web Services CLI, you must use the latest version which automatically includes an idempotency token in the `ClientToken` request parameter so that the request is processed successfully. The `Timestamp` request parameter is not rounded down to the hour and is not used for duplicate validation. Requests with duplicate `Timestamps` are aggregated as long as the `ClientToken` is unique.
 *
 * If you submit records more than six hours after events occur, the records won't be accepted. The timestamp in your request determines when an event is recorded.
 *
 * You can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define or allow the customer to define.
 *
 * For Amazon Web Services Regions that support `MeterUsage`, see [MeterUsage Region support for Amazon EC2](https://docs.aws.amazon.com/marketplace/latest/APIReference/metering-regions.html#meterusage-region-support-ec2) and [MeterUsage Region support for Amazon ECS and Amazon EKS](https://docs.aws.amazon.com/marketplace/latest/APIReference/metering-regions.html#meterusage-region-support-ecs-eks).
 *
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
 *
 * Exception thrown when the customer does not have a valid subscription for the product.
 *
 * @throws {@link DuplicateRequestException} (client fault)
 *
 * A metering record has already been emitted by the same EC2 instance, ECS task, or EKS pod for the given {`usageDimension`, `timestamp`} with a different `usageQuantity`.
 *
 * @throws {@link IdempotencyConflictException} (client fault)
 *
 * The `ClientToken` is being used for multiple requests.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * An internal error has occurred. Retry your request. If the problem persists, post a message with details on the Amazon Web Services forums.
 *
 * @throws {@link InvalidEndpointRegionException} (client fault)
 *
 * The endpoint being called is in a Amazon Web Services Region different from your EC2 instance, ECS task, or EKS pod. The Region of the Metering Service endpoint and the Amazon Web Services Region of the resource must match.
 *
 * @throws {@link InvalidProductCodeException} (client fault)
 *
 * The product code passed does not match the product code used for publishing the product.
 *
 * @throws {@link InvalidTagException} (client fault)
 *
 * The tag is invalid, or the number of tags is greater than 5.
 *
 * @throws {@link InvalidUsageAllocationsException} (client fault)
 *
 * Sum of allocated usage quantities is not equal to the usage quantity.
 *
 * @throws {@link InvalidUsageDimensionException} (client fault)
 *
 * The usage dimension does not match one of the `UsageDimensions` associated with products.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The calls to the API are throttled.
 *
 * @throws {@link TimestampOutOfBoundsException} (client fault)
 *
 * The `timestamp` value passed in the `UsageRecord` is out of allowed range.
 *
 * For `BatchMeterUsage`, if any of the records are outside of the allowed range, the entire batch is not processed. You must remove invalid records and try again.
 *
 * @throws {@link MarketplaceMeteringServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceMetering service.
 *
 * @public
 */
export class MeterUsageCommand extends command<MeterUsageCommandInput, MeterUsageCommandOutput>(
  _ep0,
  _mw0,
  "MeterUsage",
  MeterUsage$
) {
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
