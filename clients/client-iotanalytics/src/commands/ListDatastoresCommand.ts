// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { ListDatastoresRequest, ListDatastoresResponse } from "../models/models_0";
import { ListDatastores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatastoresCommand}.
 */
export interface ListDatastoresCommandInput extends ListDatastoresRequest {}
/**
 * @public
 *
 * The output of {@link ListDatastoresCommand}.
 */
export interface ListDatastoresCommandOutput extends ListDatastoresResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of data stores.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, ListDatastoresCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, ListDatastoresCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // ListDatastoresRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDatastoresCommand(input);
 * const response = await client.send(command);
 * // { // ListDatastoresResponse
 * //   datastoreSummaries: [ // DatastoreSummaries
 * //     { // DatastoreSummary
 * //       datastoreName: "STRING_VALUE",
 * //       datastoreStorage: { // DatastoreStorageSummary
 * //         serviceManagedS3: {},
 * //         customerManagedS3: { // CustomerManagedDatastoreS3StorageSummary
 * //           bucket: "STRING_VALUE",
 * //           keyPrefix: "STRING_VALUE",
 * //           roleArn: "STRING_VALUE",
 * //         },
 * //         iotSiteWiseMultiLayerStorage: { // DatastoreIotSiteWiseMultiLayerStorageSummary
 * //           customerManagedS3Storage: { // IotSiteWiseCustomerManagedDatastoreS3StorageSummary
 * //             bucket: "STRING_VALUE",
 * //             keyPrefix: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       status: "CREATING" || "ACTIVE" || "DELETING",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       lastMessageArrivalTime: new Date("TIMESTAMP"),
 * //       fileFormatType: "JSON" || "PARQUET",
 * //       datastorePartitions: { // DatastorePartitions
 * //         partitions: [ // Partitions
 * //           { // DatastorePartition
 * //             attributePartition: { // Partition
 * //               attributeName: "STRING_VALUE", // required
 * //             },
 * //             timestampPartition: { // TimestampPartition
 * //               attributeName: "STRING_VALUE", // required
 * //               timestampFormat: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatastoresCommandInput - {@link ListDatastoresCommandInput}
 * @returns {@link ListDatastoresCommandOutput}
 * @see {@link ListDatastoresCommandInput} for command's `input` shape.
 * @see {@link ListDatastoresCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
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
export class ListDatastoresCommand extends $Command
  .classBuilder<
    ListDatastoresCommandInput,
    ListDatastoresCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "ListDatastores", {})
  .n("IoTAnalyticsClient", "ListDatastoresCommand")
  .sc(ListDatastores$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatastoresRequest;
      output: ListDatastoresResponse;
    };
    sdk: {
      input: ListDatastoresCommandInput;
      output: ListDatastoresCommandOutput;
    };
  };
}
