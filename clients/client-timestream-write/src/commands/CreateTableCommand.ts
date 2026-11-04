// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTableRequest, CreateTableResponse } from "../models/models_0";
import { CreateTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTableCommand}.
 */
export interface CreateTableCommandInput extends CreateTableRequest {}
/**
 * @public
 *
 * The output of {@link CreateTableCommand}.
 */
export interface CreateTableCommandOutput extends CreateTableResponse, __MetadataBearer {}

/**
 * Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. [Service quotas apply](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html). See [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html) for details.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, CreateTableCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, CreateTableCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
 * const config = {}; // type is TimestreamWriteClientConfig
 * const client = new TimestreamWriteClient(config);
 * const input = { // CreateTableRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   RetentionProperties: { // RetentionProperties
 *     MemoryStoreRetentionPeriodInHours: Number("long"), // required
 *     MagneticStoreRetentionPeriodInDays: Number("long"), // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
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
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateTableResponse
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
 * @param CreateTableCommandInput - {@link CreateTableCommandInput}
 * @returns {@link CreateTableCommandOutput}
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Timestream was unable to process this request because it contains resource that already exists.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The instance quota of resource exceeded for this account.
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
export class CreateTableCommand extends command<CreateTableCommandInput, CreateTableCommandOutput>(
  _ep0,
  _mw0,
  "CreateTable",
  CreateTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTableRequest;
      output: CreateTableResponse;
    };
    sdk: {
      input: CreateTableCommandInput;
      output: CreateTableCommandOutput;
    };
  };
}
