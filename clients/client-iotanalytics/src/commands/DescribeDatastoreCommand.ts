// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { DescribeDatastoreRequest, DescribeDatastoreResponse } from "../models/models_0";
import { DescribeDatastore } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDatastoreCommand}.
 */
export interface DescribeDatastoreCommandInput extends DescribeDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatastoreCommand}.
 */
export interface DescribeDatastoreCommandOutput extends DescribeDatastoreResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribeDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DescribeDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // DescribeDatastoreRequest
 *   datastoreName: "STRING_VALUE", // required
 *   includeStatistics: true || false,
 * };
 * const command = new DescribeDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatastoreResponse
 * //   datastore: { // Datastore
 * //     name: "STRING_VALUE",
 * //     storage: { // DatastoreStorage Union: only one key present
 * //       serviceManagedS3: {},
 * //       customerManagedS3: { // CustomerManagedDatastoreS3Storage
 * //         bucket: "STRING_VALUE", // required
 * //         keyPrefix: "STRING_VALUE",
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //       iotSiteWiseMultiLayerStorage: { // DatastoreIotSiteWiseMultiLayerStorage
 * //         customerManagedS3Storage: { // IotSiteWiseCustomerManagedDatastoreS3Storage
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     arn: "STRING_VALUE",
 * //     status: "CREATING" || "ACTIVE" || "DELETING",
 * //     retentionPeriod: { // RetentionPeriod
 * //       unlimited: true || false,
 * //       numberOfDays: Number("int"),
 * //     },
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //     lastMessageArrivalTime: new Date("TIMESTAMP"),
 * //     fileFormatConfiguration: { // FileFormatConfiguration
 * //       jsonConfiguration: {},
 * //       parquetConfiguration: { // ParquetConfiguration
 * //         schemaDefinition: { // SchemaDefinition
 * //           columns: [ // Columns
 * //             { // Column
 * //               name: "STRING_VALUE", // required
 * //               type: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     datastorePartitions: { // DatastorePartitions
 * //       partitions: [ // Partitions
 * //         { // DatastorePartition
 * //           attributePartition: { // Partition
 * //             attributeName: "STRING_VALUE", // required
 * //           },
 * //           timestampPartition: { // TimestampPartition
 * //             attributeName: "STRING_VALUE", // required
 * //             timestampFormat: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   statistics: { // DatastoreStatistics
 * //     size: { // EstimatedResourceSize
 * //       estimatedSizeInBytes: Number("double"),
 * //       estimatedOn: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDatastoreCommandInput - {@link DescribeDatastoreCommandInput}
 * @returns {@link DescribeDatastoreCommandOutput}
 * @see {@link DescribeDatastoreCommandInput} for command's `input` shape.
 * @see {@link DescribeDatastoreCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeDatastoreCommand extends $Command
  .classBuilder<
    DescribeDatastoreCommandInput,
    DescribeDatastoreCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "DescribeDatastore", {})
  .n("IoTAnalyticsClient", "DescribeDatastoreCommand")
  .sc(DescribeDatastore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDatastoreRequest;
      output: DescribeDatastoreResponse;
    };
    sdk: {
      input: DescribeDatastoreCommandInput;
      output: DescribeDatastoreCommandOutput;
    };
  };
}
