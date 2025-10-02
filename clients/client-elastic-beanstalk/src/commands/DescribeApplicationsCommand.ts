// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApplicationDescriptionsMessage, DescribeApplicationsMessage } from "../models/models_0";
import { de_DescribeApplicationsCommand, se_DescribeApplicationsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandInput extends DescribeApplicationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandOutput extends ApplicationDescriptionsMessage, __MetadataBearer {}

/**
 * <p>Returns the descriptions of existing applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeApplicationsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeApplicationsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeApplicationsMessage
 *   ApplicationNames: [ // ApplicationNamesList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationDescriptionsMessage
 * //   Applications: [ // ApplicationDescriptionList
 * //     { // ApplicationDescription
 * //       ApplicationArn: "STRING_VALUE",
 * //       ApplicationName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateUpdated: new Date("TIMESTAMP"),
 * //       Versions: [ // VersionLabelsList
 * //         "STRING_VALUE",
 * //       ],
 * //       ConfigurationTemplates: [ // ConfigurationTemplateNamesList
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceLifecycleConfig: { // ApplicationResourceLifecycleConfig
 * //         ServiceRole: "STRING_VALUE",
 * //         VersionLifecycleConfig: { // ApplicationVersionLifecycleConfig
 * //           MaxCountRule: { // MaxCountRule
 * //             Enabled: true || false, // required
 * //             MaxCount: Number("int"),
 * //             DeleteSourceFromS3: true || false,
 * //           },
 * //           MaxAgeRule: { // MaxAgeRule
 * //             Enabled: true || false, // required
 * //             MaxAgeInDays: Number("int"),
 * //             DeleteSourceFromS3: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeApplicationsCommandInput - {@link DescribeApplicationsCommandInput}
 * @returns {@link DescribeApplicationsCommandOutput}
 * @see {@link DescribeApplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To view a list of applications
 * ```javascript
 * // The following operation retrieves information about applications in the current region:
 * const input = { /* empty *\/ };
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Applications: [
 *     {
 *       ApplicationName: "ruby",
 *       ConfigurationTemplates:       [],
 *       DateCreated: "2015-08-13T21:05:44.376Z",
 *       DateUpdated: "2015-08-13T21:05:44.376Z",
 *       Versions: [
 *         "Sample Application"
 *       ]
 *     },
 *     {
 *       ApplicationName: "pythonsample",
 *       ConfigurationTemplates:       [],
 *       DateCreated: "2015-08-13T19:05:43.637Z",
 *       DateUpdated: "2015-08-13T19:05:43.637Z",
 *       Description: `Application created from the EB CLI using "eb init"`,
 *       Versions: [
 *         "Sample Application"
 *       ]
 *     },
 *     {
 *       ApplicationName: "nodejs-example",
 *       ConfigurationTemplates:       [],
 *       DateCreated: "2015-08-06T17:50:02.486Z",
 *       DateUpdated: "2015-08-06T17:50:02.486Z",
 *       Versions: [
 *         "add elasticache",
 *         "First Release"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeApplicationsCommand extends $Command
  .classBuilder<
    DescribeApplicationsCommandInput,
    DescribeApplicationsCommandOutput,
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
  .s("AWSElasticBeanstalkService", "DescribeApplications", {})
  .n("ElasticBeanstalkClient", "DescribeApplicationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeApplicationsCommand)
  .de(de_DescribeApplicationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationsMessage;
      output: ApplicationDescriptionsMessage;
    };
    sdk: {
      input: DescribeApplicationsCommandInput;
      output: DescribeApplicationsCommandOutput;
    };
  };
}
