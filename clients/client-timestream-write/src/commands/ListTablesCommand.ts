// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTablesRequest, ListTablesResponse } from "../models/models_0";
import { ListTables$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Provides a list of tables, along with the name, status, and retention properties of each table. See [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html) for details.
 *
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
 *
 * You are not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Timestream was unable to fully process this request because of an internal server error.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * The requested endpoint was not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests were made by a user and they exceeded the service quotas. The request was throttled.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An invalid or malformed request.
 *
 * @throws {@link TimestreamWriteServiceException}
 *
 * Base exception class for all service exceptions from TimestreamWrite service.
 *
 * @public
 */
export class ListTablesCommand extends command<ListTablesCommandInput, ListTablesCommandOutput>(
  _ep0,
  _mw0,
  "ListTables",
  ListTables$
) {
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
