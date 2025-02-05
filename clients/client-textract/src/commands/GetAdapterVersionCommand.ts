// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAdapterVersionRequest, GetAdapterVersionResponse } from "../models/models_0";
import { de_GetAdapterVersionCommand, se_GetAdapterVersionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets configuration information for the specified adapter version, including:
 *          AdapterId, AdapterVersion, FeatureTypes, Status, StatusMessage, DatasetConfig,
 *          KMSKeyId, OutputConfig, Tags and EvaluationMetrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetAdapterVersionCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetAdapterVersionCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Textract experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> Returned when an operation tried to access a nonexistent resource. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>  Indicates that a request was not valid. Check request for proper formatting. </p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 * @public
 */
export class GetAdapterVersionCommand extends $Command
  .classBuilder<
    GetAdapterVersionCommandInput,
    GetAdapterVersionCommandOutput,
    TextractClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TextractClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Textract", "GetAdapterVersion", {})
  .n("TextractClient", "GetAdapterVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetAdapterVersionCommand)
  .de(de_GetAdapterVersionCommand)
  .build() {
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
