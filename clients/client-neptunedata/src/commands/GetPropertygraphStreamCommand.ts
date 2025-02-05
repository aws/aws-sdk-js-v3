// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPropertygraphStreamInput, GetPropertygraphStreamOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_GetPropertygraphStreamCommand, se_GetPropertygraphStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPropertygraphStreamCommand}.
 */
export interface GetPropertygraphStreamCommandInput extends GetPropertygraphStreamInput {}
/**
 * @public
 *
 * The output of {@link GetPropertygraphStreamCommand}.
 */
export interface GetPropertygraphStreamCommandOutput extends GetPropertygraphStreamOutput, __MetadataBearer {}

/**
 * <p>Gets a stream for a property graph.</p>
 *          <p>With the Neptune Streams feature, you can generate a complete
 *       sequence of change-log entries that record every change made to your
 *       graph data as it happens. <code>GetPropertygraphStream</code> lets
 *       you collect these change-log entries for a property graph.</p>
 *          <p>The Neptune streams feature needs to be enabled on your Neptune
 *       DBcluster. To enable streams, set the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/parameters.html#parameters-db-cluster-parameters-neptune_streams">neptune_streams</a>
 *       DB cluster parameter to <code>1</code>.</p>
 *          <p>See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/streams.html">Capturing
 *       graph changes in real time using Neptune streams</a>.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getstreamrecords">neptune-db:GetStreamRecords</a>
 *       IAM action in that cluster.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that enables one of the following IAM actions,
 *       depending on the query:</p>
 *          <p>Note that you can restrict property-graph queries using the
 *       following IAM context keys:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys">neptune-db:QueryLanguage:Gremlin</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys">neptune-db:QueryLanguage:OpenCypher</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html">Condition
 *       keys available in Neptune IAM data-access policy statements</a>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetPropertygraphStreamCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetPropertygraphStreamCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NeptunedataClient(config);
 * const input = { // GetPropertygraphStreamInput
 *   limit: Number("long"),
 *   iteratorType: "AT_SEQUENCE_NUMBER" || "AFTER_SEQUENCE_NUMBER" || "TRIM_HORIZON" || "LATEST",
 *   commitNum: Number("long"),
 *   opNum: Number("long"),
 *   encoding: "gzip",
 * };
 * const command = new GetPropertygraphStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetPropertygraphStreamOutput
 * //   lastEventId: { // StringValuedMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   lastTrxTimestampInMillis: Number("long"), // required
 * //   format: "STRING_VALUE", // required
 * //   records: [ // PropertygraphRecordsList // required
 * //     { // PropertygraphRecord
 * //       commitTimestampInMillis: Number("long"), // required
 * //       eventId: { // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       data: { // PropertygraphData
 * //         id: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         key: "STRING_VALUE", // required
 * //         value: "DOCUMENT_VALUE", // required
 * //         from: "STRING_VALUE",
 * //         to: "STRING_VALUE",
 * //       },
 * //       op: "STRING_VALUE", // required
 * //       isLastOp: true || false,
 * //     },
 * //   ],
 * //   totalRecords: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetPropertygraphStreamCommandInput - {@link GetPropertygraphStreamCommandInput}
 * @returns {@link GetPropertygraphStreamCommandOutput}
 * @see {@link GetPropertygraphStreamCommandInput} for command's `input` shape.
 * @see {@link GetPropertygraphStreamCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link ExpiredStreamException} (client fault)
 *  <p>Raised when a request attempts to access an stream that has expired.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MemoryLimitExceededException} (server fault)
 *  <p>Raised when a request fails because of insufficient memory resources. The
 *       request can be retried.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link StreamRecordsNotFoundException} (client fault)
 *  <p>Raised when stream records requested by a query cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Raised when the rate of requests exceeds the maximum throughput. Requests can
 *       be retried after encountering this exception.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 * @public
 */
export class GetPropertygraphStreamCommand extends $Command
  .classBuilder<
    GetPropertygraphStreamCommandInput,
    GetPropertygraphStreamCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneDataplane", "GetPropertygraphStream", {})
  .n("NeptunedataClient", "GetPropertygraphStreamCommand")
  .f(void 0, void 0)
  .ser(se_GetPropertygraphStreamCommand)
  .de(de_GetPropertygraphStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPropertygraphStreamInput;
      output: GetPropertygraphStreamOutput;
    };
    sdk: {
      input: GetPropertygraphStreamCommandInput;
      output: GetPropertygraphStreamCommandOutput;
    };
  };
}
