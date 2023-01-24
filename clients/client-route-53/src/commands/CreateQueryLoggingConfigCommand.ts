// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateQueryLoggingConfigRequest,
  CreateQueryLoggingConfigRequestFilterSensitiveLog,
  CreateQueryLoggingConfigResponse,
  CreateQueryLoggingConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateQueryLoggingConfigCommand,
  serializeAws_restXmlCreateQueryLoggingConfigCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface CreateQueryLoggingConfigCommandInput extends CreateQueryLoggingConfigRequest {}
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
 * const command = new CreateQueryLoggingConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQueryLoggingConfigCommandInput} for command's `input` shape.
 * @see {@link CreateQueryLoggingConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class CreateQueryLoggingConfigCommand extends $Command<
  CreateQueryLoggingConfigCommandInput,
  CreateQueryLoggingConfigCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CreateQueryLoggingConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateQueryLoggingConfigCommandInput, CreateQueryLoggingConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateQueryLoggingConfigCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateQueryLoggingConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateQueryLoggingConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateQueryLoggingConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateQueryLoggingConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateQueryLoggingConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateQueryLoggingConfigCommandOutput> {
    return deserializeAws_restXmlCreateQueryLoggingConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
