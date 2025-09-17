// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventsMessage, EventDescriptionsMessage } from "../models/models_0";
import { de_DescribeEventsCommand, se_DescribeEventsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
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
 *
 * @example To view events for an environment
 * ```javascript
 * // The following operation retrieves events for an environment named my-env:
 * const input = {
 *   EnvironmentName: "my-env"
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Events: [
 *     {
 *       ApplicationName: "my-app",
 *       EnvironmentName: "my-env",
 *       EventDate: "2015-08-20T07:06:53.535Z",
 *       Message: "Environment health has transitioned from Info to Ok.",
 *       Severity: "INFO"
 *     },
 *     {
 *       ApplicationName: "my-app",
 *       EnvironmentName: "my-env",
 *       EventDate: "2015-08-20T07:06:02.049Z",
 *       Message: "Environment update completed successfully.",
 *       RequestId: "b7f3960b-4709-11e5-ba1e-07e16200da41",
 *       Severity: "INFO"
 *     },
 *     {
 *       ApplicationName: "my-app",
 *       EnvironmentName: "my-env",
 *       EventDate: "2015-08-13T19:16:27.561Z",
 *       Message: "Using elasticbeanstalk-us-west-2-012445113685 as Amazon S3 storage bucket for environment data.",
 *       RequestId: "ca8dfbf6-41ef-11e5-988b-651aa638f46b",
 *       Severity: "INFO"
 *     },
 *     {
 *       ApplicationName: "my-app",
 *       EnvironmentName: "my-env",
 *       EventDate: "2015-08-13T19:16:26.581Z",
 *       Message: "createEnvironment is starting.",
 *       RequestId: "cdfba8f6-41ef-11e5-988b-65638f41aa6b",
 *       Severity: "INFO"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEventsCommand extends $Command
  .classBuilder<
    DescribeEventsCommandInput,
    DescribeEventsCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "DescribeEvents", {})
  .n("ElasticBeanstalkClient", "DescribeEventsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventsCommand)
  .de(de_DescribeEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventsMessage;
      output: EventDescriptionsMessage;
    };
    sdk: {
      input: DescribeEventsCommandInput;
      output: DescribeEventsCommandOutput;
    };
  };
}
