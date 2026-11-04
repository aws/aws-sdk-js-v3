// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIngestionDestinationRequest, CreateIngestionDestinationResponse } from "../models/models_0";
import { CreateIngestionDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIngestionDestinationCommand}.
 */
export interface CreateIngestionDestinationCommandInput extends CreateIngestionDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreateIngestionDestinationCommand}.
 */
export interface CreateIngestionDestinationCommandOutput extends CreateIngestionDestinationResponse, __MetadataBearer {}

/**
 * Creates an ingestion destination, which specifies how an application's ingested data is processed by Amazon Web Services AppFabric and where it's delivered.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, CreateIngestionDestinationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, CreateIngestionDestinationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // CreateIngestionDestinationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   ingestionIdentifier: "STRING_VALUE", // required
 *   processingConfiguration: { // ProcessingConfiguration Union: only one key present
 *     auditLog: { // AuditLogProcessingConfiguration
 *       schema: "ocsf" || "raw", // required
 *       format: "json" || "parquet", // required
 *     },
 *   },
 *   destinationConfiguration: { // DestinationConfiguration Union: only one key present
 *     auditLog: { // AuditLogDestinationConfiguration
 *       destination: { // Destination Union: only one key present
 *         s3Bucket: { // S3Bucket
 *           bucketName: "STRING_VALUE", // required
 *           prefix: "STRING_VALUE",
 *         },
 *         firehoseStream: { // FirehoseStream
 *           streamName: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateIngestionDestinationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIngestionDestinationResponse
 * //   ingestionDestination: { // IngestionDestination
 * //     arn: "STRING_VALUE", // required
 * //     ingestionArn: "STRING_VALUE", // required
 * //     processingConfiguration: { // ProcessingConfiguration Union: only one key present
 * //       auditLog: { // AuditLogProcessingConfiguration
 * //         schema: "ocsf" || "raw", // required
 * //         format: "json" || "parquet", // required
 * //       },
 * //     },
 * //     destinationConfiguration: { // DestinationConfiguration Union: only one key present
 * //       auditLog: { // AuditLogDestinationConfiguration
 * //         destination: { // Destination Union: only one key present
 * //           s3Bucket: { // S3Bucket
 * //             bucketName: "STRING_VALUE", // required
 * //             prefix: "STRING_VALUE",
 * //           },
 * //           firehoseStream: { // FirehoseStream
 * //             streamName: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     status: "Active" || "Failed",
 * //     statusReason: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIngestionDestinationCommandInput - {@link CreateIngestionDestinationCommandInput}
 * @returns {@link CreateIngestionDestinationCommandOutput}
 * @see {@link CreateIngestionDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateIngestionDestinationCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has created a conflict. Check the request parameters and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AppFabricServiceException}
 *
 * Base exception class for all service exceptions from AppFabric service.
 *
 * @public
 */
export class CreateIngestionDestinationCommand extends command<CreateIngestionDestinationCommandInput, CreateIngestionDestinationCommandOutput>(
  _ep0,
  _mw0,
  "CreateIngestionDestination",
  CreateIngestionDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIngestionDestinationRequest;
      output: CreateIngestionDestinationResponse;
    };
    sdk: {
      input: CreateIngestionDestinationCommandInput;
      output: CreateIngestionDestinationCommandOutput;
    };
  };
}
