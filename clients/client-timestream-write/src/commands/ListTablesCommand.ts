// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTablesRequest, ListTablesResponse } from "../models/models_0";
import { ListTables } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  TimestreamWriteClientResolvedConfig,
} from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTablesCommand}.
 */
export interface ListTablesCommandInput extends ListTablesRequest {}
/**
 * @public
 *
 * The output of {@link ListTablesCommand}.
 */
export interface ListTablesCommandOutput extends ListTablesResponse, __MetadataBearer {}

/**
 * <p>Provides a list of tables, along with the name, status, and retention properties of each
 *          table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a>
 *          for details. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, ListTablesCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, ListTablesCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
 * const config = {}; // type is TimestreamWriteClientConfig
 * const client = new TimestreamWriteClient(config);
 * const input = { // ListTablesRequest
 *   DatabaseName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * // { // ListTablesResponse
 * //   Tables: [ // TableList
 * //     { // Table
 * //       Arn: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       TableStatus: "ACTIVE" || "DELETING" || "RESTORING",
 * //       RetentionProperties: { // RetentionProperties
 * //         MemoryStoreRetentionPeriodInHours: Number("long"), // required
 * //         MagneticStoreRetentionPeriodInDays: Number("long"), // required
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       MagneticStoreWriteProperties: { // MagneticStoreWriteProperties
 * //         EnableMagneticStoreWrites: true || false, // required
 * //         MagneticStoreRejectedDataLocation: { // MagneticStoreRejectedDataLocation
 * //           S3Configuration: { // S3Configuration
 * //             BucketName: "STRING_VALUE",
 * //             ObjectKeyPrefix: "STRING_VALUE",
 * //             EncryptionOption: "SSE_S3" || "SSE_KMS",
 * //             KmsKeyId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       Schema: { // Schema
 * //         CompositePartitionKey: [ // PartitionKeyList
 * //           { // PartitionKey
 * //             Type: "DIMENSION" || "MEASURE", // required
 * //             Name: "STRING_VALUE",
 * //             EnforcementInRecord: "REQUIRED" || "OPTIONAL",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTablesCommandInput - {@link ListTablesCommandInput}
 * @returns {@link ListTablesCommandOutput}
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListTablesCommand extends $Command
  .classBuilder<
    ListTablesCommandInput,
    ListTablesCommandOutput,
    TimestreamWriteClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamWriteClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "ListTables", {})
  .n("TimestreamWriteClient", "ListTablesCommand")
  .sc(ListTables)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTablesRequest;
      output: ListTablesResponse;
    };
    sdk: {
      input: ListTablesCommandInput;
      output: ListTablesCommandOutput;
    };
  };
}
