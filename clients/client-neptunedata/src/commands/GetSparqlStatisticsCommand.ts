// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSparqlStatisticsOutput } from "../models/models_0";
import type { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { GetSparqlStatistics } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSparqlStatisticsCommand}.
 */
export interface GetSparqlStatisticsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetSparqlStatisticsCommand}.
 */
export interface GetSparqlStatisticsCommandOutput extends GetSparqlStatisticsOutput, __MetadataBearer {}

/**
 * <p>Gets RDF statistics (SPARQL).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetSparqlStatisticsCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetSparqlStatisticsCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = {};
 * const command = new GetSparqlStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetSparqlStatisticsOutput
 * //   status: "STRING_VALUE", // required
 * //   payload: { // Statistics
 * //     autoCompute: true || false,
 * //     active: true || false,
 * //     statisticsId: "STRING_VALUE",
 * //     date: new Date("TIMESTAMP"),
 * //     note: "STRING_VALUE",
 * //     signatureInfo: { // StatisticsSummary
 * //       signatureCount: Number("int"),
 * //       instanceCount: Number("int"),
 * //       predicateCount: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSparqlStatisticsCommandInput - {@link GetSparqlStatisticsCommandInput}
 * @returns {@link GetSparqlStatisticsCommandOutput}
 * @see {@link GetSparqlStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetSparqlStatisticsCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
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
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *  <p>Raised when a request attempts to write to a read-only resource.</p>
 *
 * @throws {@link StatisticsNotAvailableException} (client fault)
 *  <p>Raised when statistics needed to satisfy a request are not available.</p>
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
 *
 * @public
 */
export class GetSparqlStatisticsCommand extends $Command
  .classBuilder<
    GetSparqlStatisticsCommandInput,
    GetSparqlStatisticsCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneDataplane", "GetSparqlStatistics", {})
  .n("NeptunedataClient", "GetSparqlStatisticsCommand")
  .sc(GetSparqlStatistics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetSparqlStatisticsOutput;
    };
    sdk: {
      input: GetSparqlStatisticsCommandInput;
      output: GetSparqlStatisticsCommandOutput;
    };
  };
}
