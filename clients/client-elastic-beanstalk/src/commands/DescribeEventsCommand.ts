// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEventsMessage, EventDescriptionsMessage } from "../models/models_0";
import { de_DescribeEventsCommand, se_DescribeEventsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandInput extends DescribeEventsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandOutput extends EventDescriptionsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p>
 *          <note>
 *             <p>This action returns the most recent 1,000 events from the specified
 *           <code>NextToken</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEventsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEventsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeEventsMessage
 *   ApplicationName: "STRING_VALUE",
 *   VersionLabel: "STRING_VALUE",
 *   TemplateName: "STRING_VALUE",
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   PlatformArn: "STRING_VALUE",
 *   RequestId: "STRING_VALUE",
 *   Severity: "TRACE" || "DEBUG" || "INFO" || "WARN" || "ERROR" || "FATAL",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * // { // EventDescriptionsMessage
 * //   Events: [ // EventDescriptionList
 * //     { // EventDescription
 * //       EventDate: new Date("TIMESTAMP"),
 * //       Message: "STRING_VALUE",
 * //       ApplicationName: "STRING_VALUE",
 * //       VersionLabel: "STRING_VALUE",
 * //       TemplateName: "STRING_VALUE",
 * //       EnvironmentName: "STRING_VALUE",
 * //       PlatformArn: "STRING_VALUE",
 * //       RequestId: "STRING_VALUE",
 * //       Severity: "TRACE" || "DEBUG" || "INFO" || "WARN" || "ERROR" || "FATAL",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventsCommandInput - {@link DescribeEventsCommandInput}
 * @returns {@link DescribeEventsCommandOutput}
 * @see {@link DescribeEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To view events for an environment
 * ```javascript
 * // The following operation retrieves events for an environment named my-env:
 * const input = {
 *   "EnvironmentName": "my-env"
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Events": [
 *     {
 *       "ApplicationName": "my-app",
 *       "EnvironmentName": "my-env",
 *       "EventDate": "2015-08-20T07:06:53.535Z",
 *       "Message": "Environment health has transitioned from Info to Ok.",
 *       "Severity": "INFO"
 *     },
 *     {
 *       "ApplicationName": "my-app",
 *       "EnvironmentName": "my-env",
 *       "EventDate": "2015-08-20T07:06:02.049Z",
 *       "Message": "Environment update completed successfully.",
 *       "RequestId": "b7f3960b-4709-11e5-ba1e-07e16200da41",
 *       "Severity": "INFO"
 *     },
 *     {
 *       "ApplicationName": "my-app",
 *       "EnvironmentName": "my-env",
 *       "EventDate": "2015-08-13T19:16:27.561Z",
 *       "Message": "Using elasticbeanstalk-us-west-2-012445113685 as Amazon S3 storage bucket for environment data.",
 *       "RequestId": "ca8dfbf6-41ef-11e5-988b-651aa638f46b",
 *       "Severity": "INFO"
 *     },
 *     {
 *       "ApplicationName": "my-app",
 *       "EnvironmentName": "my-env",
 *       "EventDate": "2015-08-13T19:16:26.581Z",
 *       "Message": "createEnvironment is starting.",
 *       "RequestId": "cdfba8f6-41ef-11e5-988b-65638f41aa6b",
 *       "Severity": "INFO"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-events-for-an-environment-1456277367589
 * ```
 *
 */
export class DescribeEventsCommand extends $Command<
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DescribeEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventsCommandInput, DescribeEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventsCommandOutput> {
    return de_DescribeEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
