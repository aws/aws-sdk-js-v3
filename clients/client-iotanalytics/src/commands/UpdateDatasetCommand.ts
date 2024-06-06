// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { UpdateDatasetRequest } from "../models/models_0";
import { de_UpdateDatasetCommand, se_UpdateDatasetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandInput extends UpdateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the settings of a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, UpdateDatasetCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, UpdateDatasetCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // UpdateDatasetRequest
 *   datasetName: "STRING_VALUE", // required
 *   actions: [ // DatasetActions // required
 *     { // DatasetAction
 *       actionName: "STRING_VALUE",
 *       queryAction: { // SqlQueryDatasetAction
 *         sqlQuery: "STRING_VALUE", // required
 *         filters: [ // QueryFilters
 *           { // QueryFilter
 *             deltaTime: { // DeltaTime
 *               offsetSeconds: Number("int"), // required
 *               timeExpression: "STRING_VALUE", // required
 *             },
 *           },
 *         ],
 *       },
 *       containerAction: { // ContainerDatasetAction
 *         image: "STRING_VALUE", // required
 *         executionRoleArn: "STRING_VALUE", // required
 *         resourceConfiguration: { // ResourceConfiguration
 *           computeType: "ACU_1" || "ACU_2", // required
 *           volumeSizeInGB: Number("int"), // required
 *         },
 *         variables: [ // Variables
 *           { // Variable
 *             name: "STRING_VALUE", // required
 *             stringValue: "STRING_VALUE",
 *             doubleValue: Number("double"),
 *             datasetContentVersionValue: { // DatasetContentVersionValue
 *               datasetName: "STRING_VALUE", // required
 *             },
 *             outputFileUriValue: { // OutputFileUriValue
 *               fileName: "STRING_VALUE", // required
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   triggers: [ // DatasetTriggers
 *     { // DatasetTrigger
 *       schedule: { // Schedule
 *         expression: "STRING_VALUE",
 *       },
 *       dataset: { // TriggeringDataset
 *         name: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   contentDeliveryRules: [ // DatasetContentDeliveryRules
 *     { // DatasetContentDeliveryRule
 *       entryName: "STRING_VALUE",
 *       destination: { // DatasetContentDeliveryDestination
 *         iotEventsDestinationConfiguration: { // IotEventsDestinationConfiguration
 *           inputName: "STRING_VALUE", // required
 *           roleArn: "STRING_VALUE", // required
 *         },
 *         s3DestinationConfiguration: { // S3DestinationConfiguration
 *           bucket: "STRING_VALUE", // required
 *           key: "STRING_VALUE", // required
 *           glueConfiguration: { // GlueConfiguration
 *             tableName: "STRING_VALUE", // required
 *             databaseName: "STRING_VALUE", // required
 *           },
 *           roleArn: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   retentionPeriod: { // RetentionPeriod
 *     unlimited: true || false,
 *     numberOfDays: Number("int"),
 *   },
 *   versioningConfiguration: { // VersioningConfiguration
 *     unlimited: true || false,
 *     maxVersions: Number("int"),
 *   },
 *   lateDataRules: [ // LateDataRules
 *     { // LateDataRule
 *       ruleName: "STRING_VALUE",
 *       ruleConfiguration: { // LateDataRuleConfiguration
 *         deltaTimeSessionWindowConfiguration: { // DeltaTimeSessionWindowConfiguration
 *           timeoutInMinutes: Number("int"), // required
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDatasetCommandInput - {@link UpdateDatasetCommandInput}
 * @returns {@link UpdateDatasetCommandOutput}
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified name could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link IoTAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from IoTAnalytics service.</p>
 *
 * @public
 */
export class UpdateDatasetCommand extends $Command
  .classBuilder<
    UpdateDatasetCommandInput,
    UpdateDatasetCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTAnalytics", "UpdateDataset", {})
  .n("IoTAnalyticsClient", "UpdateDatasetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDatasetCommand)
  .de(de_UpdateDatasetCommand)
  .build() {}
