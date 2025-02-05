// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApplicationVersionDescriptionsMessage, DescribeApplicationVersionsMessage } from "../models/models_0";
import { de_DescribeApplicationVersionsCommand, se_DescribeApplicationVersionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationVersionsCommand}.
 */
export interface DescribeApplicationVersionsCommandInput extends DescribeApplicationVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationVersionsCommand}.
 */
export interface DescribeApplicationVersionsCommandOutput
  extends ApplicationVersionDescriptionsMessage,
    __MetadataBearer {}

/**
 * <p>Retrieve a list of application versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeApplicationVersionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeApplicationVersionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeApplicationVersionsMessage
 *   ApplicationName: "STRING_VALUE",
 *   VersionLabels: [ // VersionLabelsList
 *     "STRING_VALUE",
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationVersionDescriptionsMessage
 * //   ApplicationVersions: [ // ApplicationVersionDescriptionList
 * //     { // ApplicationVersionDescription
 * //       ApplicationVersionArn: "STRING_VALUE",
 * //       ApplicationName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       VersionLabel: "STRING_VALUE",
 * //       SourceBuildInformation: { // SourceBuildInformation
 * //         SourceType: "Git" || "Zip", // required
 * //         SourceRepository: "CodeCommit" || "S3", // required
 * //         SourceLocation: "STRING_VALUE", // required
 * //       },
 * //       BuildArn: "STRING_VALUE",
 * //       SourceBundle: { // S3Location
 * //         S3Bucket: "STRING_VALUE",
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateUpdated: new Date("TIMESTAMP"),
 * //       Status: "Processed" || "Unprocessed" || "Failed" || "Processing" || "Building",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationVersionsCommandInput - {@link DescribeApplicationVersionsCommandInput}
 * @returns {@link DescribeApplicationVersionsCommandOutput}
 * @see {@link DescribeApplicationVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 * @example To view information about an application version
 * ```javascript
 * // The following operation retrieves information about an application version labeled v2:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "VersionLabels": [
 *     "v2"
 *   ]
 * };
 * const command = new DescribeApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationVersions": [
 *     {
 *       "ApplicationName": "my-app",
 *       "DateCreated": "2015-07-23T01:32:26.079Z",
 *       "DateUpdated": "2015-07-23T01:32:26.079Z",
 *       "Description": "update cover page",
 *       "SourceBundle": {
 *         "S3Bucket": "elasticbeanstalk-us-west-2-015321684451",
 *         "S3Key": "my-app/5026-stage-150723_224258.war"
 *       },
 *       "VersionLabel": "v2"
 *     },
 *     {
 *       "ApplicationName": "my-app",
 *       "DateCreated": "2015-07-23T22:26:10.816Z",
 *       "DateUpdated": "2015-07-23T22:26:10.816Z",
 *       "Description": "initial version",
 *       "SourceBundle": {
 *         "S3Bucket": "elasticbeanstalk-us-west-2-015321684451",
 *         "S3Key": "my-app/5026-stage-150723_222618.war"
 *       },
 *       "VersionLabel": "v1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-information-about-an-application-version-1456269947428
 * ```
 *
 */
export class DescribeApplicationVersionsCommand extends $Command
  .classBuilder<
    DescribeApplicationVersionsCommandInput,
    DescribeApplicationVersionsCommandOutput,
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
  .s("AWSElasticBeanstalkService", "DescribeApplicationVersions", {})
  .n("ElasticBeanstalkClient", "DescribeApplicationVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeApplicationVersionsCommand)
  .de(de_DescribeApplicationVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationVersionsMessage;
      output: ApplicationVersionDescriptionsMessage;
    };
    sdk: {
      input: DescribeApplicationVersionsCommandInput;
      output: DescribeApplicationVersionsCommandOutput;
    };
  };
}
