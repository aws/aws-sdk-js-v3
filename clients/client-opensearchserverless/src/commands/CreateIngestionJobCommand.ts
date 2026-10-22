// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIngestionJobRequest, CreateIngestionJobResponse } from "../models/models_0";
import { CreateIngestionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIngestionJobCommand}.
 */
export interface CreateIngestionJobCommandInput extends CreateIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateIngestionJobCommand}.
 */
export interface CreateIngestionJobCommandOutput extends CreateIngestionJobResponse, __MetadataBearer {}

/**
 * <p>Creates an ingestion job that performs a one-time bulk ingestion of data from an Amazon S3 bucket into an index in an OpenSearch Serverless collection. An ingestion job scans the source bucket, indexes the documents it finds, and then completes. To continuously ingest new data as it arrives, use <code>CreateIngestionStream</code> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, CreateIngestionJobCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, CreateIngestionJobCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // CreateIngestionJobRequest
 *   collectionId: "STRING_VALUE", // required
 *   ingestionJobName: "STRING_VALUE", // required
 *   indexName: "STRING_VALUE", // required
 *   failureIndexName: "STRING_VALUE",
 *   source: { // IngestionJobSource
 *     s3: { // IngestionJobS3Source
 *       bucket: "STRING_VALUE",
 *       bucketOwnerAccountId: "STRING_VALUE",
 *       keyPrefix: "STRING_VALUE",
 *     },
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateIngestionJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateIngestionJobResponse
 * //   ingestionJobDetail: { // IngestionJobDetail
 * //     ingestionJobId: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     collectionId: "STRING_VALUE",
 * //     ingestionJobName: "STRING_VALUE",
 * //     indexName: "STRING_VALUE",
 * //     failureIndexName: "STRING_VALUE",
 * //     source: { // IngestionJobSource
 * //       s3: { // IngestionJobS3Source
 * //         bucket: "STRING_VALUE",
 * //         bucketOwnerAccountId: "STRING_VALUE",
 * //         keyPrefix: "STRING_VALUE",
 * //       },
 * //     },
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
 * @param CreateIngestionJobCommandInput - {@link CreateIngestionJobCommandInput}
 * @returns {@link CreateIngestionJobCommandOutput}
 * @see {@link CreateIngestionJobCommandInput} for command's `input` shape.
 * @see {@link CreateIngestionJobCommandOutput} for command's `response` shape.
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
export class CreateIngestionJobCommand extends command<CreateIngestionJobCommandInput, CreateIngestionJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateIngestionJob",
  CreateIngestionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIngestionJobRequest;
      output: CreateIngestionJobResponse;
    };
    sdk: {
      input: CreateIngestionJobCommandInput;
      output: CreateIngestionJobCommandOutput;
    };
  };
}
