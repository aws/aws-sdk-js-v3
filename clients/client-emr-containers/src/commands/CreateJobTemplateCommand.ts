// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateJobTemplateRequest,
  CreateJobTemplateRequestFilterSensitiveLog,
  CreateJobTemplateResponse,
} from "../models/models_0";
import { de_CreateJobTemplateCommand, se_CreateJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateJobTemplateCommand}.
 */
export interface CreateJobTemplateCommandInput extends CreateJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobTemplateCommand}.
 */
export interface CreateJobTemplateCommandOutput extends CreateJobTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a job template. Job template stores values of StartJobRun API request in a
 *          template and can be used to start a job run. Job template allows two use cases: avoid
 *          repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun
 *          API request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CreateJobTemplateCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CreateJobTemplateCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRContainersClient(config);
 * const input = { // CreateJobTemplateRequest
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   jobTemplateData: { // JobTemplateData
 *     executionRoleArn: "STRING_VALUE", // required
 *     releaseLabel: "STRING_VALUE", // required
 *     configurationOverrides: { // ParametricConfigurationOverrides
 *       applicationConfiguration: [ // ConfigurationList
 *         { // Configuration
 *           classification: "STRING_VALUE", // required
 *           properties: { // SensitivePropertiesMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *           configurations: [
 *             {
 *               classification: "STRING_VALUE", // required
 *               properties: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               configurations: "<ConfigurationList>",
 *             },
 *           ],
 *         },
 *       ],
 *       monitoringConfiguration: { // ParametricMonitoringConfiguration
 *         persistentAppUI: "STRING_VALUE",
 *         cloudWatchMonitoringConfiguration: { // ParametricCloudWatchMonitoringConfiguration
 *           logGroupName: "STRING_VALUE",
 *           logStreamNamePrefix: "STRING_VALUE",
 *         },
 *         s3MonitoringConfiguration: { // ParametricS3MonitoringConfiguration
 *           logUri: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     jobDriver: { // JobDriver
 *       sparkSubmitJobDriver: { // SparkSubmitJobDriver
 *         entryPoint: "STRING_VALUE", // required
 *         entryPointArguments: [ // EntryPointArguments
 *           "STRING_VALUE",
 *         ],
 *         sparkSubmitParameters: "STRING_VALUE",
 *       },
 *       sparkSqlJobDriver: { // SparkSqlJobDriver
 *         entryPoint: "STRING_VALUE",
 *         sparkSqlParameters: "STRING_VALUE",
 *       },
 *     },
 *     parameterConfiguration: { // TemplateParameterConfigurationMap
 *       "<keys>": { // TemplateParameterConfiguration
 *         type: "NUMBER" || "STRING",
 *         defaultValue: "STRING_VALUE",
 *       },
 *     },
 *     jobTags: { // TagMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   kmsKeyArn: "STRING_VALUE",
 * };
 * const command = new CreateJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobTemplateResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateJobTemplateCommandInput - {@link CreateJobTemplateCommandInput}
 * @returns {@link CreateJobTemplateCommandOutput}
 * @see {@link CreateJobTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateJobTemplateCommandOutput} for command's `response` shape.
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
export class CreateJobTemplateCommand extends $Command
  .classBuilder<
    CreateJobTemplateCommandInput,
    CreateJobTemplateCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "CreateJobTemplate", {})
  .n("EMRContainersClient", "CreateJobTemplateCommand")
  .f(CreateJobTemplateRequestFilterSensitiveLog, void 0)
  .ser(se_CreateJobTemplateCommand)
  .de(de_CreateJobTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateJobTemplateRequest;
      output: CreateJobTemplateResponse;
    };
    sdk: {
      input: CreateJobTemplateCommandInput;
      output: CreateJobTemplateCommandOutput;
    };
  };
}
