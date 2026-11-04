// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateQueryLoggingConfigRequest, CreateQueryLoggingConfigResponse } from "../models/models_0";
import { CreateQueryLoggingConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateQueryLoggingConfigCommand}.
 */
export interface CreateQueryLoggingConfigCommandInput extends CreateQueryLoggingConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueryLoggingConfigCommand}.
 */
export interface CreateQueryLoggingConfigCommandOutput extends CreateQueryLoggingConfigResponse, __MetadataBearer {}

/**
 * Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
 *
 * DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:
 *
 * - Route 53 edge location that responded to the DNS query
 * - Domain or subdomain that was requested
 * - DNS record type, such as A or AAAA
 * - DNS response code, such as `NoError` or `ServFail`
 *
 * - **Log Group and Resource Policy**
 *
 *   Before you create a query logging configuration, perform the following operations.
 *
 *   > **Note:** If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically.
 *
 *   1. Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following:
 *
 *      - You must create the log group in the us-east-1 region.
 *      - You must use the same Amazon Web Services account to create the log group and the hosted zone that you want to configure query logging for.
 *      - When you create log groups for query logging, we recommend that you use a consistent prefix, for example:
 *
 *        `/aws/route53/hosted zone name`
 *
 *        In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated Amazon Web Services resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging.
 *   2. Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of `Resource`, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with `*`, for example:
 *
 *      `arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*`
 *
 *      To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values:
 *
 *      - For `aws:SourceArn`, supply the hosted zone ARN used in creating the query logging configuration. For example, `aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID`.
 *      - For `aws:SourceAccount`, supply the account ID for the account that creates the query logging configuration. For example, `aws:SourceAccount:111111111111`.
 *
 *      For more information, see [The confused deputy problem](https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html) in the *Amazon Web Services IAM User Guide*.
 *
 *      > **Note:** You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the Amazon Web Services SDKs, or the CLI.
 *
 * - **Log Streams and Edge Locations**
 *
 *   When Route 53 finishes creating the configuration for DNS query logging, it does the following:
 *
 *   - Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location.
 *   - Begins to send query logs to the applicable log stream.
 *
 *   The name of each log stream is in the following format:
 *
 *   `hosted zone ID/edge location code`
 *
 *   The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the [Route 53 Product Details](http://aws.amazon.com/route53/details/) page.
 *
 * - **Queries That Are Logged**
 *
 *   Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see [Routing Internet Traffic to Your Website or Web Application](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html) in the *Amazon Route 53 Developer Guide*.
 *
 * - **Log File Format**
 *
 *   For a list of the values in each query log and the format of each value, see [Logging DNS Queries](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html) in the *Amazon Route 53 Developer Guide*.
 *
 * - **Pricing**
 *
 *   For information about charges for query logs, see [Amazon CloudWatch Pricing](http://aws.amazon.com/cloudwatch/pricing/).
 *
 * - **How to Stop Logging**
 *
 *   If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see [DeleteQueryLoggingConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateQueryLoggingConfigCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateQueryLoggingConfigCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateQueryLoggingConfigRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   CloudWatchLogsLogGroupArn: "STRING_VALUE", // required
 * };
 * const command = new CreateQueryLoggingConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueryLoggingConfigResponse
 * //   QueryLoggingConfig: { // QueryLoggingConfig
 * //     Id: "STRING_VALUE", // required
 * //     HostedZoneId: "STRING_VALUE", // required
 * //     CloudWatchLogsLogGroupArn: "STRING_VALUE", // required
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateQueryLoggingConfigCommandInput - {@link CreateQueryLoggingConfigCommandInput}
 * @returns {@link CreateQueryLoggingConfigCommandOutput}
 * @see {@link CreateQueryLoggingConfigCommandInput} for command's `input` shape.
 * @see {@link CreateQueryLoggingConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *
 * Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request.
 *
 * @throws {@link InsufficientCloudWatchLogsResourcePolicy} (client fault)
 *
 * Amazon Route 53 doesn't have the permissions required to create log streams and send query logs to log streams. Possible causes include the following:
 *
 * - There is no resource policy that specifies the log group ARN in the value for `Resource`.
 * - The resource policy that includes the log group ARN in the value for `Resource` doesn't have the necessary permissions.
 * - The resource policy hasn't finished propagating yet.
 * - The Key management service (KMS) key you specified doesn’t exist or it can’t be used with the log group associated with query log. Update or provide a resource policy to grant permissions for the KMS key.
 * - The Key management service (KMS) key you specified is marked as disabled for the log group associated with query log. Update or provide a resource policy to grant permissions for the KMS key.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link NoSuchCloudWatchLogsLogGroup} (client fault)
 *
 * There is no CloudWatch Logs log group with the specified ARN.
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *
 * No hosted zone exists with the ID that you specified.
 *
 * @throws {@link QueryLoggingConfigAlreadyExists} (client fault)
 *
 * You can create only one query logging configuration for a hosted zone, and a query logging configuration already exists for this hosted zone.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class CreateQueryLoggingConfigCommand extends command<CreateQueryLoggingConfigCommandInput, CreateQueryLoggingConfigCommandOutput>(
  _ep0,
  _mw0,
  "CreateQueryLoggingConfig",
  CreateQueryLoggingConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueryLoggingConfigRequest;
      output: CreateQueryLoggingConfigResponse;
    };
    sdk: {
      input: CreateQueryLoggingConfigCommandInput;
      output: CreateQueryLoggingConfigCommandOutput;
    };
  };
}
