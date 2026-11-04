// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSparqlStreamInput, GetSparqlStreamOutput } from "../models/models_0";
import { GetSparqlStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSparqlStreamCommand}.
 */
export interface GetSparqlStreamCommandInput extends GetSparqlStreamInput {}
/**
 * @public
 *
 * The output of {@link GetSparqlStreamCommand}.
 */
export interface GetSparqlStreamCommandOutput extends GetSparqlStreamOutput, __MetadataBearer {}

/**
 * Gets a stream for an RDF graph.
 *
 * With the Neptune Streams feature, you can generate a complete sequence of change-log entries that record every change made to your graph data as it happens. `GetSparqlStream` lets you collect these change-log entries for an RDF graph.
 *
 * The Neptune streams feature needs to be enabled on your Neptune DBcluster. To enable streams, set the [neptune_streams](https://docs.aws.amazon.com/neptune/latest/userguide/parameters.html#parameters-db-cluster-parameters-neptune_streams) DB cluster parameter to `1`.
 *
 * See [Capturing graph changes in real time using Neptune streams](https://docs.aws.amazon.com/neptune/latest/userguide/streams.html).
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:GetStreamRecords](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getstreamrecords) IAM action in that cluster.
 *
 * Note that the [neptune-db:QueryLanguage:Sparql](https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys) IAM condition key can be used in the policy document to restrict the use of SPARQL queries (see [Condition keys available in Neptune IAM data-access policy statements](https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html)).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetSparqlStreamCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetSparqlStreamCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // GetSparqlStreamInput
 *   limit: Number("long"),
 *   iteratorType: "AT_SEQUENCE_NUMBER" || "AFTER_SEQUENCE_NUMBER" || "TRIM_HORIZON" || "LATEST",
 *   commitNum: Number("long"),
 *   opNum: Number("long"),
 *   encoding: "gzip",
 * };
 * const command = new GetSparqlStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetSparqlStreamOutput
 * //   lastEventId: { // StringValuedMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   lastTrxTimestampInMillis: Number("long"), // required
 * //   format: "STRING_VALUE", // required
 * //   records: [ // SparqlRecordsList // required
 * //     { // SparqlRecord
 * //       commitTimestampInMillis: Number("long"), // required
 * //       eventId: { // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       data: { // SparqlData
 * //         stmt: "STRING_VALUE", // required
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
 * @param GetSparqlStreamCommandInput - {@link GetSparqlStreamCommandInput}
 * @returns {@link GetSparqlStreamCommandOutput}
 * @see {@link GetSparqlStreamCommandInput} for command's `input` shape.
 * @see {@link GetSparqlStreamCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *
 * Raised when a request timed out in the client.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *
 * Raised when a value in a request field did not satisfy required constraints.
 *
 * @throws {@link ExpiredStreamException} (client fault)
 *
 * Raised when a request attempts to access an stream that has expired.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * Raised when an argument in a request is not supported.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * Raised when an argument in a request has an invalid value.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Raised when a parameter value is not valid.
 *
 * @throws {@link MemoryLimitExceededException} (server fault)
 *
 * Raised when a request fails because of insufficient memory resources. The request can be retried.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
 *
 * @throws {@link StreamRecordsNotFoundException} (client fault)
 *
 * Raised when stream records requested by a query cannot be found.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Raised when the rate of requests exceeds the maximum throughput. Requests can be retried after encountering this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Raised when the number of requests being processed exceeds the limit.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * Raised when a request attempts to initiate an operation that is not supported.
 *
 * @throws {@link NeptunedataServiceException}
 *
 * Base exception class for all service exceptions from Neptunedata service.
 *
 * @public
 */
export class GetSparqlStreamCommand extends command<GetSparqlStreamCommandInput, GetSparqlStreamCommandOutput>(
  _ep0,
  _mw0,
  "GetSparqlStream",
  GetSparqlStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSparqlStreamInput;
      output: GetSparqlStreamOutput;
    };
    sdk: {
      input: GetSparqlStreamCommandInput;
      output: GetSparqlStreamCommandOutput;
    };
  };
}
