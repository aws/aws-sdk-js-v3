// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import { CreateDataset } from "../schemas/schemas_3_Datastore";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandInput extends CreateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandOutput extends CreateDatasetResponse, __MetadataBearer {}

/**
 * <p>Used to create a dataset. A dataset stores data retrieved from a data store by applying a
 *         <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a
 *       containerized application). This operation creates the skeleton of a dataset. The dataset can
 *       be populated manually by calling <code>CreateDatasetContent</code> or automatically according
 *       to a trigger you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreateDatasetCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreateDatasetCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // CreateDatasetRequest
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
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
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
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetResponse
 * //   datasetName: "STRING_VALUE",
 * //   datasetArn: "STRING_VALUE",
 * //   retentionPeriod: { // RetentionPeriod
 * //     unlimited: true || false,
 * //     numberOfDays: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDatasetCommandInput - {@link CreateDatasetCommandInput}
 * @returns {@link CreateDatasetCommandOutput}
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The command caused an internal limit to be exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource with the same name already exists.</p>
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
 *
 * @public
 */
export class CreateDatasetCommand extends $Command
  .classBuilder<
    CreateDatasetCommandInput,
    CreateDatasetCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "CreateDataset", {})
  .n("IoTAnalyticsClient", "CreateDatasetCommand")
  .sc(CreateDataset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetRequest;
      output: CreateDatasetResponse;
    };
    sdk: {
      input: CreateDatasetCommandInput;
      output: CreateDatasetCommandOutput;
    };
  };
}
