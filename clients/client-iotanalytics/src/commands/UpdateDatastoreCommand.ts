// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { UpdateDatastoreRequest } from "../models/models_0";
import { UpdateDatastore } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatastoreCommand}.
 */
export interface UpdateDatastoreCommandInput extends UpdateDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatastoreCommand}.
 */
export interface UpdateDatastoreCommandOutput extends __MetadataBearer {}

/**
 * <p>Used to update the settings of a data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, UpdateDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, UpdateDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // UpdateDatastoreRequest
 *   datastoreName: "STRING_VALUE", // required
 *   retentionPeriod: { // RetentionPeriod
 *     unlimited: true || false,
 *     numberOfDays: Number("int"),
 *   },
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
 * };
 * const command = new UpdateDatastoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDatastoreCommandInput - {@link UpdateDatastoreCommandInput}
 * @returns {@link UpdateDatastoreCommandOutput}
 * @see {@link UpdateDatastoreCommandInput} for command's `input` shape.
 * @see {@link UpdateDatastoreCommandOutput} for command's `response` shape.
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
export class UpdateDatastoreCommand extends $Command
  .classBuilder<
    UpdateDatastoreCommandInput,
    UpdateDatastoreCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "UpdateDatastore", {})
  .n("IoTAnalyticsClient", "UpdateDatastoreCommand")
  .sc(UpdateDatastore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDatastoreRequest;
      output: {};
    };
    sdk: {
      input: UpdateDatastoreCommandInput;
      output: UpdateDatastoreCommandOutput;
    };
  };
}
