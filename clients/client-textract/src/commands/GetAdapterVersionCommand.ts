// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAdapterVersionRequest, GetAdapterVersionResponse } from "../models/models_0";
import { GetAdapterVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAdapterVersionCommand}.
 */
export interface GetAdapterVersionCommandInput extends GetAdapterVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetAdapterVersionCommand}.
 */
export interface GetAdapterVersionCommandOutput extends GetAdapterVersionResponse, __MetadataBearer {}

/**
 * Gets configuration information for the specified adapter version, including: AdapterId, AdapterVersion, FeatureTypes, Status, StatusMessage, DatasetConfig, KMSKeyId, OutputConfig, Tags and EvaluationMetrics.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetAdapterVersionCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetAdapterVersionCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // GetAdapterVersionRequest
 *   AdapterId: "STRING_VALUE", // required
 *   AdapterVersion: "STRING_VALUE", // required
 * };
 * const command = new GetAdapterVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetAdapterVersionResponse
 * //   AdapterId: "STRING_VALUE",
 * //   AdapterVersion: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   FeatureTypes: [ // FeatureTypes
 * //     "TABLES" || "FORMS" || "QUERIES" || "SIGNATURES" || "LAYOUT",
 * //   ],
 * //   Status: "ACTIVE" || "AT_RISK" || "DEPRECATED" || "CREATION_ERROR" || "CREATION_IN_PROGRESS",
 * //   StatusMessage: "STRING_VALUE",
 * //   DatasetConfig: { // AdapterVersionDatasetConfig
 * //     ManifestS3Object: { // S3Object
 * //       Bucket: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   },
 * //   KMSKeyId: "STRING_VALUE",
 * //   OutputConfig: { // OutputConfig
 * //     S3Bucket: "STRING_VALUE", // required
 * //     S3Prefix: "STRING_VALUE",
 * //   },
 * //   EvaluationMetrics: [ // AdapterVersionEvaluationMetrics
 * //     { // AdapterVersionEvaluationMetric
 * //       Baseline: { // EvaluationMetric
 * //         F1Score: Number("float"),
 * //         Precision: Number("float"),
 * //         Recall: Number("float"),
 * //       },
 * //       AdapterVersion: {
 * //         F1Score: Number("float"),
 * //         Precision: Number("float"),
 * //         Recall: Number("float"),
 * //       },
 * //       FeatureType: "TABLES" || "FORMS" || "QUERIES" || "SIGNATURES" || "LAYOUT",
 * //     },
 * //   ],
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAdapterVersionCommandInput - {@link GetAdapterVersionCommandInput}
 * @returns {@link GetAdapterVersionCommandOutput}
 * @see {@link GetAdapterVersionCommandInput} for command's `input` shape.
 * @see {@link GetAdapterVersionCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You aren't authorized to perform the action. Use the Amazon Resource Name (ARN) of an authorized user or IAM role to perform the operation.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Textract experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An input parameter violated a constraint. For example, in synchronous operations, an `InvalidParameterException` exception occurs when neither of the `S3Object` or `Bytes` values are supplied in the `Document` request parameter. Validate your parameter before calling the API operation again.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Returned when an operation tried to access a nonexistent resource.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Textract is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that a request was not valid. Check request for proper formatting.
 *
 * @throws {@link TextractServiceException}
 *
 * Base exception class for all service exceptions from Textract service.
 *
 * @public
 */
export class GetAdapterVersionCommand extends command<GetAdapterVersionCommandInput, GetAdapterVersionCommandOutput>(
  _ep0,
  _mw0,
  "GetAdapterVersion",
  GetAdapterVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAdapterVersionRequest;
      output: GetAdapterVersionResponse;
    };
    sdk: {
      input: GetAdapterVersionCommandInput;
      output: GetAdapterVersionCommandOutput;
    };
  };
}
