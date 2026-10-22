// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIngestionJobRequest, GetIngestionJobResponse } from "../models/models_0";
import { GetIngestionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIngestionJobCommand}.
 */
export interface GetIngestionJobCommandInput extends GetIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link GetIngestionJobCommand}.
 */
export interface GetIngestionJobCommandOutput extends GetIngestionJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about an ingestion job, including its configuration, status, and processing state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, GetIngestionJobCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, GetIngestionJobCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // GetIngestionJobRequest
 *   collectionId: "STRING_VALUE", // required
 *   ingestionJobId: "STRING_VALUE", // required
 * };
 * const command = new GetIngestionJobCommand(input);
 * const response = await client.send(command);
 * // { // GetIngestionJobResponse
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
 * @param GetIngestionJobCommandInput - {@link GetIngestionJobCommandInput}
 * @returns {@link GetIngestionJobCommandOutput}
 * @see {@link GetIngestionJobCommandInput} for command's `input` shape.
 * @see {@link GetIngestionJobCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when accessing or deleting a resource that does not exist.</p>
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
export class GetIngestionJobCommand extends command<GetIngestionJobCommandInput, GetIngestionJobCommandOutput>(
  _ep0,
  _mw0,
  "GetIngestionJob",
  GetIngestionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIngestionJobRequest;
      output: GetIngestionJobResponse;
    };
    sdk: {
      input: GetIngestionJobCommandInput;
      output: GetIngestionJobCommandOutput;
    };
  };
}
