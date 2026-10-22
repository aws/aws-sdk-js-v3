// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIngestionStreamRequest, GetIngestionStreamResponse } from "../models/models_0";
import { GetIngestionStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIngestionStreamCommand}.
 */
export interface GetIngestionStreamCommandInput extends GetIngestionStreamRequest {}
/**
 * @public
 *
 * The output of {@link GetIngestionStreamCommand}.
 */
export interface GetIngestionStreamCommandOutput extends GetIngestionStreamResponse, __MetadataBearer {}

/**
 * <p>Returns information about an ingestion stream, including its configuration, status, and processing state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, GetIngestionStreamCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, GetIngestionStreamCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // GetIngestionStreamRequest
 *   collectionId: "STRING_VALUE", // required
 *   ingestionStreamId: "STRING_VALUE", // required
 * };
 * const command = new GetIngestionStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetIngestionStreamResponse
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
 * @param GetIngestionStreamCommandInput - {@link GetIngestionStreamCommandInput}
 * @returns {@link GetIngestionStreamCommandOutput}
 * @see {@link GetIngestionStreamCommandInput} for command's `input` shape.
 * @see {@link GetIngestionStreamCommandOutput} for command's `response` shape.
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
export class GetIngestionStreamCommand extends command<GetIngestionStreamCommandInput, GetIngestionStreamCommandOutput>(
  _ep0,
  _mw0,
  "GetIngestionStream",
  GetIngestionStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIngestionStreamRequest;
      output: GetIngestionStreamResponse;
    };
    sdk: {
      input: GetIngestionStreamCommandInput;
      output: GetIngestionStreamCommandOutput;
    };
  };
}
