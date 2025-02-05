// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTableRequest, UpdateTableResponse } from "../models/models_0";
import { de_UpdateTableCommand, se_UpdateTableCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTableCommand}.
 */
export interface UpdateTableCommandInput extends UpdateTableRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableCommand}.
 */
export interface UpdateTableCommandOutput extends UpdateTableResponse, __MetadataBearer {}

/**
 * <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately.
 *          For example, if the retention period of the memory store was initially set to 2 hours and
 *          then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but
 *          will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p>
 *          <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code
 *             sample</a> for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, UpdateTableCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, UpdateTableCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TimestreamWriteClient(config);
 * const input = { // UpdateTableRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   RetentionProperties: { // RetentionProperties
 *     MemoryStoreRetentionPeriodInHours: Number("long"), // required
 *     MagneticStoreRetentionPeriodInDays: Number("long"), // required
 *   },
 *   MagneticStoreWriteProperties: { // MagneticStoreWriteProperties
 *     EnableMagneticStoreWrites: true || false, // required
 *     MagneticStoreRejectedDataLocation: { // MagneticStoreRejectedDataLocation
 *       S3Configuration: { // S3Configuration
 *         BucketName: "STRING_VALUE",
 *         ObjectKeyPrefix: "STRING_VALUE",
 *         EncryptionOption: "SSE_S3" || "SSE_KMS",
 *         KmsKeyId: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   Schema: { // Schema
 *     CompositePartitionKey: [ // PartitionKeyList
 *       { // PartitionKey
 *         Type: "DIMENSION" || "MEASURE", // required
 *         Name: "STRING_VALUE",
 *         EnforcementInRecord: "REQUIRED" || "OPTIONAL",
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTableResponse
 * //   Table: { // Table
 * //     Arn: "STRING_VALUE",
 * //     TableName: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     TableStatus: "ACTIVE" || "DELETING" || "RESTORING",
 * //     RetentionProperties: { // RetentionProperties
 * //       MemoryStoreRetentionPeriodInHours: Number("long"), // required
 * //       MagneticStoreRetentionPeriodInDays: Number("long"), // required
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     MagneticStoreWriteProperties: { // MagneticStoreWriteProperties
 * //       EnableMagneticStoreWrites: true || false, // required
 * //       MagneticStoreRejectedDataLocation: { // MagneticStoreRejectedDataLocation
 * //         S3Configuration: { // S3Configuration
 * //           BucketName: "STRING_VALUE",
 * //           ObjectKeyPrefix: "STRING_VALUE",
 * //           EncryptionOption: "SSE_S3" || "SSE_KMS",
 * //           KmsKeyId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     Schema: { // Schema
 * //       CompositePartitionKey: [ // PartitionKeyList
 * //         { // PartitionKey
 * //           Type: "DIMENSION" || "MEASURE", // required
 * //           Name: "STRING_VALUE",
 * //           EnforcementInRecord: "REQUIRED" || "OPTIONAL",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateTableCommandInput - {@link UpdateTableCommandInput}
 * @returns {@link UpdateTableCommandOutput}
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          Timestream was unable to fully process this request because of an internal server
 *          error.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> Too many requests were made by a user and they exceeded the service quotas. The request
 *          was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> An invalid or malformed request.</p>
 *
 * @throws {@link TimestreamWriteServiceException}
 * <p>Base exception class for all service exceptions from TimestreamWrite service.</p>
 *
 * @public
 */
export class UpdateTableCommand extends $Command
  .classBuilder<
    UpdateTableCommandInput,
    UpdateTableCommandOutput,
    TimestreamWriteClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamWriteClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "UpdateTable", {})
  .n("TimestreamWriteClient", "UpdateTableCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTableCommand)
  .de(de_UpdateTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTableRequest;
      output: UpdateTableResponse;
    };
    sdk: {
      input: UpdateTableCommandInput;
      output: UpdateTableCommandOutput;
    };
  };
}
