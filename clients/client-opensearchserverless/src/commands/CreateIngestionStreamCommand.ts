// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIngestionStreamRequest, CreateIngestionStreamResponse } from "../models/models_0";
import { CreateIngestionStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIngestionStreamCommand}.
 */
export interface CreateIngestionStreamCommandInput extends CreateIngestionStreamRequest {}
/**
 * @public
 *
 * The output of {@link CreateIngestionStreamCommand}.
 */
export interface CreateIngestionStreamCommandOutput extends CreateIngestionStreamResponse, __MetadataBearer {}

/**
 * <p>Creates an ingestion stream that continuously ingests data from an Amazon S3 bucket into an index in an OpenSearch Serverless collection. An ingestion stream processes Amazon S3 event notifications delivered to an Amazon SQS queue and ingests new objects as they arrive. The stream continues to ingest data until you delete it. To perform a one-time bulk ingestion instead, use <code>CreateIngestionJob</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, CreateIngestionStreamCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, CreateIngestionStreamCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // CreateIngestionStreamRequest
 *   collectionId: "STRING_VALUE", // required
 *   ingestionStreamName: "STRING_VALUE", // required
 *   indexName: "STRING_VALUE", // required
 *   failureIndexName: "STRING_VALUE",
 *   source: { // IngestionStreamSource
 *     s3: { // IngestionStreamS3Source
 *       sqsArn: "STRING_VALUE", // required
 *       buckets: [ // StreamBucketConfigs
 *         { // StreamBucketConfig
 *           bucket: "STRING_VALUE", // required
 *           bucketOwnerAccountId: "STRING_VALUE",
 *           initialScan: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateIngestionStreamCommand(input);
 * const response = await client.send(command);
 * // { // CreateIngestionStreamResponse
 * //   ingestionStreamDetail: { // IngestionStreamDetail
 * //     ingestionStreamId: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     collectionId: "STRING_VALUE",
 * //     ingestionStreamName: "STRING_VALUE",
 * //     indexName: "STRING_VALUE",
 * //     failureIndexName: "STRING_VALUE",
 * //     source: { // IngestionStreamSource
 * //       s3: { // IngestionStreamS3Source
 * //         sqsArn: "STRING_VALUE", // required
 * //         buckets: [ // StreamBucketConfigs
 * //           { // StreamBucketConfig
 * //             bucket: "STRING_VALUE", // required
 * //             bucketOwnerAccountId: "STRING_VALUE",
 * //             initialScan: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     roleArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     state: "STRING_VALUE",
 * //     statistics: { // IngestionStatistics
 * //       s3: { // S3Statistics
 * //         objectsDiscovered: Number("long"),
 * //         objectsIngested: Number("long"),
 * //         objectsFailed: Number("long"),
 * //       },
 * //     },
 * //     revision: Number("long"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     failureReasons: [ // IngestionFailureReasons
 * //       { // IngestionFailureReason
 * //         code: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //     ],
 * //     activeAlerts: [ // IngestionAlerts
 * //       { // IngestionAlert
 * //         code: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIngestionStreamCommandInput - {@link CreateIngestionStreamCommandInput}
 * @returns {@link CreateIngestionStreamCommandOutput}
 * @see {@link CreateIngestionStreamCommandInput} for command's `input` shape.
 * @see {@link CreateIngestionStreamCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists or is being created. When deleting a resource, thrown when the resource is not in the ACTIVE, FAILED, or UPDATE_FAILED state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when accessing or deleting a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Thrown when you attempt to create more resources than the service allows based on service quotas.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class CreateIngestionStreamCommand extends command<CreateIngestionStreamCommandInput, CreateIngestionStreamCommandOutput>(
  _ep0,
  _mw0,
  "CreateIngestionStream",
  CreateIngestionStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIngestionStreamRequest;
      output: CreateIngestionStreamResponse;
    };
    sdk: {
      input: CreateIngestionStreamCommandInput;
      output: CreateIngestionStreamCommandOutput;
    };
  };
}
