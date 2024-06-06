// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateQueryLoggingConfigRequest, CreateQueryLoggingConfigResponse } from "../models/models_0";
import { de_CreateQueryLoggingConfigCommand, se_CreateQueryLoggingConfigCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a configuration for DNS query logging. After you create a query logging
 * 			configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs
 * 			log group.</p>
 *          <p>DNS query logs contain information about the queries that Route 53 receives for a
 * 			specified public hosted zone, such as the following:</p>
 *          <ul>
 *             <li>
 *                <p>Route 53 edge location that responded to the DNS query</p>
 *             </li>
 *             <li>
 *                <p>Domain or subdomain that was requested</p>
 *             </li>
 *             <li>
 *                <p>DNS record type, such as A or AAAA</p>
 *             </li>
 *             <li>
 *                <p>DNS response code, such as <code>NoError</code> or
 * 					<code>ServFail</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <dl>
 *             <dt>Log Group and Resource Policy</dt>
 *             <dd>
 *                <p>Before you create a query logging configuration, perform the following
 * 						operations.</p>
 *                <note>
 *                   <p>If you create a query logging configuration using the Route 53
 * 							console, Route 53 performs these operations automatically.</p>
 *                </note>
 *                <ol>
 *                   <li>
 *                      <p>Create a CloudWatch Logs log group, and make note of the ARN,
 * 								which you specify when you create a query logging configuration.
 * 								Note the following:</p>
 *                      <ul>
 *                         <li>
 *                            <p>You must create the log group in the us-east-1
 * 										region.</p>
 *                         </li>
 *                         <li>
 *                            <p>You must use the same Amazon Web Services account to create
 * 										the log group and the hosted zone that you want to configure
 * 										query logging for.</p>
 *                         </li>
 *                         <li>
 *                            <p>When you create log groups for query logging, we recommend
 * 										that you use a consistent prefix, for example:</p>
 *                            <p>
 *                               <code>/aws/route53/<i>hosted zone
 * 											name</i>
 *                               </code>
 *                            </p>
 *                            <p>In the next step, you'll create a resource policy, which
 * 										controls access to one or more log groups and the associated
 * 											Amazon Web Services resources, such as Route 53 hosted
 * 										zones. There's a limit on the number of resource policies
 * 										that you can create, so we recommend that you use a
 * 										consistent prefix so you can use the same resource policy
 * 										for all the log groups that you create for query
 * 										logging.</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                   <li>
 *                      <p>Create a CloudWatch Logs resource policy, and give it the
 * 								permissions that Route 53 needs to create log streams and to send
 * 								query logs to log streams. For the value of <code>Resource</code>,
 * 								specify the ARN for the log group that you created in the previous
 * 								step. To use the same resource policy for all the CloudWatch Logs
 * 								log groups that you created for query logging configurations,
 * 								replace the hosted zone name with <code>*</code>, for
 * 								example:</p>
 *                      <p>
 *                         <code>arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*</code>
 *                      </p>
 *                      <p>To avoid the confused deputy problem, a security issue where an
 * 								entity without a permission for an action can coerce a
 * 								more-privileged entity to perform it, you can optionally limit the
 * 								permissions that a service has to a resource in a resource-based
 * 								policy by supplying the following values:</p>
 *                      <ul>
 *                         <li>
 *                            <p>For <code>aws:SourceArn</code>, supply the hosted zone ARN
 * 										used in creating the query logging configuration. For
 * 										example, <code>aws:SourceArn:
 * 											arn:aws:route53:::hostedzone/hosted zone
 * 										ID</code>.</p>
 *                         </li>
 *                         <li>
 *                            <p>For <code>aws:SourceAccount</code>, supply the account ID
 * 										for the account that creates the query logging
 * 										configuration. For example,
 * 											<code>aws:SourceAccount:111111111111</code>.</p>
 *                         </li>
 *                      </ul>
 *                      <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html">The confused
 * 									deputy problem</a> in the <i>Amazon Web Services
 * 									IAM User Guide</i>.</p>
 *                      <note>
 *                         <p>You can't use the CloudWatch console to create or edit a
 * 									resource policy. You must use the CloudWatch API, one of the
 * 										Amazon Web Services SDKs, or the CLI.</p>
 *                      </note>
 *                   </li>
 *                </ol>
 *             </dd>
 *             <dt>Log Streams and Edge Locations</dt>
 *             <dd>
 *                <p>When Route 53 finishes creating the configuration for DNS query logging,
 * 						it does the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>Creates a log stream for an edge location the first time that the
 * 								edge location responds to DNS queries for the specified hosted zone.
 * 								That log stream is used to log all queries that Route 53 responds to
 * 								for that edge location.</p>
 *                   </li>
 *                   <li>
 *                      <p>Begins to send query logs to the applicable log stream.</p>
 *                   </li>
 *                </ul>
 *                <p>The name of each log stream is in the following format:</p>
 *                <p>
 *                   <code>
 *                      <i>hosted zone ID</i>/<i>edge location
 * 								code</i>
 *                   </code>
 *                </p>
 *                <p>The edge location code is a three-letter code and an arbitrarily assigned
 * 						number, for example, DFW3. The three-letter code typically corresponds with
 * 						the International Air Transport Association airport code for an airport near
 * 						the edge location. (These abbreviations might change in the future.) For a
 * 						list of edge locations, see "The Route 53 Global Network" on the <a href="http://aws.amazon.com/route53/details/">Route 53 Product Details</a>
 * 						page.</p>
 *             </dd>
 *             <dt>Queries That Are Logged</dt>
 *             <dd>
 *                <p>Query logs contain only the queries that DNS resolvers forward to Route
 * 						53. If a DNS resolver has already cached the response to a query (such as
 * 						the IP address for a load balancer for example.com), the resolver will
 * 						continue to return the cached response. It doesn't forward another query to
 * 						Route 53 until the TTL for the corresponding resource record set expires.
 * 						Depending on how many DNS queries are submitted for a resource record set,
 * 						and depending on the TTL for that resource record set, query logs might
 * 						contain information about only one query out of every several thousand
 * 						queries that are submitted to DNS. For more information about how DNS works,
 * 						see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html">Routing
 * 							Internet Traffic to Your Website or Web Application</a> in the
 * 							<i>Amazon Route 53 Developer Guide</i>.</p>
 *             </dd>
 *             <dt>Log File Format</dt>
 *             <dd>
 *                <p>For a list of the values in each query log and the format of each value,
 * 						see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS
 * 							Queries</a> in the <i>Amazon Route 53 Developer
 * 							Guide</i>.</p>
 *             </dd>
 *             <dt>Pricing</dt>
 *             <dd>
 *                <p>For information about charges for query logs, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
 *             </dd>
 *             <dt>How to Stop Logging</dt>
 *             <dd>
 *                <p>If you want Route 53 to stop sending query logs to CloudWatch Logs, delete
 * 						the query logging configuration. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html">DeleteQueryLoggingConfig</a>.</p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateQueryLoggingConfigCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateQueryLoggingConfigCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
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
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InsufficientCloudWatchLogsResourcePolicy} (client fault)
 *  <p>Amazon Route 53 doesn't have the permissions required to create log streams and send
 * 			query logs to log streams. Possible causes include the following:</p>
 *          <ul>
 *             <li>
 *                <p>There is no resource policy that specifies the log group ARN in the value for
 * 						<code>Resource</code>.</p>
 *             </li>
 *             <li>
 *                <p>The resource policy that includes the log group ARN in the value for
 * 						<code>Resource</code> doesn't have the necessary permissions.</p>
 *             </li>
 *             <li>
 *                <p>The resource policy hasn't finished propagating yet.</p>
 *             </li>
 *             <li>
 *                <p>The Key management service (KMS) key you specified doesn’t exist or it can’t
 * 					be used with the log group associated with query log. Update or provide a
 * 					resource policy to grant permissions for the KMS key.</p>
 *             </li>
 *             <li>
 *                <p>The Key management service (KMS) key you specified is marked as
 * 				disabled for the log group associated with query log. Update or provide
 * 				a resource policy to grant permissions for the KMS key.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchCloudWatchLogsLogGroup} (client fault)
 *  <p>There is no CloudWatch Logs log group with the specified ARN.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link QueryLoggingConfigAlreadyExists} (client fault)
 *  <p>You can create only one query logging configuration for a hosted zone, and a query
 * 			logging configuration already exists for this hosted zone.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @public
 */
export class CreateQueryLoggingConfigCommand extends $Command
  .classBuilder<
    CreateQueryLoggingConfigCommandInput,
    CreateQueryLoggingConfigCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "CreateQueryLoggingConfig", {})
  .n("Route53Client", "CreateQueryLoggingConfigCommand")
  .f(void 0, void 0)
  .ser(se_CreateQueryLoggingConfigCommand)
  .de(de_CreateQueryLoggingConfigCommand)
  .build() {}
