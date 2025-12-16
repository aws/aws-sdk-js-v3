// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { CreateDatastoreRequest, CreateDatastoreResponse } from "../models/models_0";
import { CreateDatastore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatastoreCommand}.
 */
export interface CreateDatastoreCommandInput extends CreateDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatastoreCommand}.
 */
export interface CreateDatastoreCommandOutput extends CreateDatastoreResponse, __MetadataBearer {}

/**
 * <p>Creates a data store, which is a repository for messages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreateDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreateDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // CreateDatastoreRequest
 *   datastoreName: "STRING_VALUE", // required
 *   datastoreStorage: { // DatastoreStorage Union: only one key present
 *     serviceManagedS3: {},
 *     customerManagedS3: { // CustomerManagedDatastoreS3Storage
 *       bucket: "STRING_VALUE", // required
 *       keyPrefix: "STRING_VALUE",
 *       roleArn: "STRING_VALUE", // required
 *     },
 *     iotSiteWiseMultiLayerStorage: { // DatastoreIotSiteWiseMultiLayerStorage
 *       customerManagedS3Storage: { // IotSiteWiseCustomerManagedDatastoreS3Storage
 *         bucket: "STRING_VALUE", // required
 *         keyPrefix: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   retentionPeriod: { // RetentionPeriod
 *     unlimited: true || false,
 *     numberOfDays: Number("int"),
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   fileFormatConfiguration: { // FileFormatConfiguration
 *     jsonConfiguration: {},
 *     parquetConfiguration: { // ParquetConfiguration
 *       schemaDefinition: { // SchemaDefinition
 *         columns: [ // Columns
 *           { // Column
 *             name: "STRING_VALUE", // required
 *             type: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   datastorePartitions: { // DatastorePartitions
 *     partitions: [ // Partitions
 *       { // DatastorePartition
 *         attributePartition: { // Partition
 *           attributeName: "STRING_VALUE", // required
 *         },
 *         timestampPartition: { // TimestampPartition
 *           attributeName: "STRING_VALUE", // required
 *           timestampFormat: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatastoreResponse
 * //   datastoreName: "STRING_VALUE",
 * //   datastoreArn: "STRING_VALUE",
 * //   retentionPeriod: { // RetentionPeriod
 * //     unlimited: true || false,
 * //     numberOfDays: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDatastoreCommandInput - {@link CreateDatastoreCommandInput}
 * @returns {@link CreateDatastoreCommandOutput}
 * @see {@link CreateDatastoreCommandInput} for command's `input` shape.
 * @see {@link CreateDatastoreCommandOutput} for command's `response` shape.
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
export class CreateDatastoreCommand extends $Command
  .classBuilder<
    CreateDatastoreCommandInput,
    CreateDatastoreCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "CreateDatastore", {})
  .n("IoTAnalyticsClient", "CreateDatastoreCommand")
  .sc(CreateDatastore$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatastoreRequest;
      output: CreateDatastoreResponse;
    };
    sdk: {
      input: CreateDatastoreCommandInput;
      output: CreateDatastoreCommandOutput;
    };
  };
}
