// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeJobTemplateRequest,
  DescribeJobTemplateResponse,
  DescribeJobTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeJobTemplateCommand, se_DescribeJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobTemplateCommand}.
 */
export interface DescribeJobTemplateCommandInput extends DescribeJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobTemplateCommand}.
 */
export interface DescribeJobTemplateCommandOutput extends DescribeJobTemplateResponse, __MetadataBearer {}

/**
 * <p>Displays detailed information about a specified job template. Job template stores values
 *          of StartJobRun API request in a template and can be used to start a job run. Job template
 *          allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing
 *          certain values in StartJobRun API request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeJobTemplateCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeJobTemplateCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // DescribeJobTemplateRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobTemplateResponse
 * //   jobTemplate: { // JobTemplate
 * //     name: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     jobTemplateData: { // JobTemplateData
 * //       executionRoleArn: "STRING_VALUE", // required
 * //       releaseLabel: "STRING_VALUE", // required
 * //       configurationOverrides: { // ParametricConfigurationOverrides
 * //         applicationConfiguration: [ // ConfigurationList
 * //           { // Configuration
 * //             classification: "STRING_VALUE", // required
 * //             properties: { // SensitivePropertiesMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             configurations: [
 * //               {
 * //                 classification: "STRING_VALUE", // required
 * //                 properties: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 configurations: "<ConfigurationList>",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         monitoringConfiguration: { // ParametricMonitoringConfiguration
 * //           persistentAppUI: "STRING_VALUE",
 * //           cloudWatchMonitoringConfiguration: { // ParametricCloudWatchMonitoringConfiguration
 * //             logGroupName: "STRING_VALUE",
 * //             logStreamNamePrefix: "STRING_VALUE",
 * //           },
 * //           s3MonitoringConfiguration: { // ParametricS3MonitoringConfiguration
 * //             logUri: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       jobDriver: { // JobDriver
 * //         sparkSubmitJobDriver: { // SparkSubmitJobDriver
 * //           entryPoint: "STRING_VALUE", // required
 * //           entryPointArguments: [ // EntryPointArguments
 * //             "STRING_VALUE",
 * //           ],
 * //           sparkSubmitParameters: "STRING_VALUE",
 * //         },
 * //         sparkSqlJobDriver: { // SparkSqlJobDriver
 * //           entryPoint: "STRING_VALUE",
 * //           sparkSqlParameters: "STRING_VALUE",
 * //         },
 * //       },
 * //       parameterConfiguration: { // TemplateParameterConfigurationMap
 * //         "<keys>": { // TemplateParameterConfiguration
 * //           type: "NUMBER" || "STRING",
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //       },
 * //       jobTags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     kmsKeyArn: "STRING_VALUE",
 * //     decryptionError: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobTemplateCommandInput - {@link DescribeJobTemplateCommandInput}
 * @returns {@link DescribeJobTemplateCommandOutput}
 * @see {@link DescribeJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 * @public
 */
export class DescribeJobTemplateCommand extends $Command
  .classBuilder<
    DescribeJobTemplateCommandInput,
    DescribeJobTemplateCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "DescribeJobTemplate", {})
  .n("EMRContainersClient", "DescribeJobTemplateCommand")
  .f(void 0, DescribeJobTemplateResponseFilterSensitiveLog)
  .ser(se_DescribeJobTemplateCommand)
  .de(de_DescribeJobTemplateCommand)
  .build() {}
