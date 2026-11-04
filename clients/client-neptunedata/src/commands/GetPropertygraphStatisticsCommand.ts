// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPropertygraphStatisticsOutput } from "../models/models_0";
import { GetPropertygraphStatistics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPropertygraphStatisticsCommand}.
 */
export interface GetPropertygraphStatisticsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetPropertygraphStatisticsCommand}.
 */
export interface GetPropertygraphStatisticsCommandOutput extends GetPropertygraphStatisticsOutput, __MetadataBearer {}

/**
 * Gets property graph statistics (Gremlin and openCypher).
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:GetStatisticsStatus](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getstatisticsstatus) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetPropertygraphStatisticsCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetPropertygraphStatisticsCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = {};
 * const command = new GetPropertygraphStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetPropertygraphStatisticsOutput
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
 * @param GetPropertygraphStatisticsCommandInput - {@link GetPropertygraphStatisticsCommandInput}
 * @returns {@link GetPropertygraphStatisticsCommandOutput}
 * @see {@link GetPropertygraphStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetPropertygraphStatisticsCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Raised in case of an authentication or authorization failure.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Raised when a request is submitted that cannot be processed.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *
 * Raised when a request timed out in the client.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *
 * Raised when a value in a request field did not satisfy required constraints.
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
 * @throws {@link MissingParameterException} (client fault)
 *
 * Raised when a required parameter is missing.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *
 * Raised when a request attempts to write to a read-only resource.
 *
 * @throws {@link StatisticsNotAvailableException} (client fault)
 *
 * Raised when statistics needed to satisfy a request are not available.
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
export class GetPropertygraphStatisticsCommand extends command<GetPropertygraphStatisticsCommandInput, GetPropertygraphStatisticsCommandOutput>(
  _ep0,
  _mw0,
  "GetPropertygraphStatistics",
  GetPropertygraphStatistics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPropertygraphStatisticsOutput;
    };
    sdk: {
      input: GetPropertygraphStatisticsCommandInput;
      output: GetPropertygraphStatisticsCommandOutput;
    };
  };
}
