// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ManageSparqlStatisticsInput, ManageSparqlStatisticsOutput } from "../models/models_0";
import { ManageSparqlStatistics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ManageSparqlStatisticsCommand}.
 */
export interface ManageSparqlStatisticsCommandInput extends ManageSparqlStatisticsInput {}
/**
 * @public
 *
 * The output of {@link ManageSparqlStatisticsCommand}.
 */
export interface ManageSparqlStatisticsCommandOutput extends ManageSparqlStatisticsOutput, __MetadataBearer {}

/**
 * Manages the generation and use of RDF graph statistics.
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:ManageStatistics](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#managestatistics) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ManageSparqlStatisticsCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ManageSparqlStatisticsCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // ManageSparqlStatisticsInput
 *   mode: "disableAutoCompute" || "enableAutoCompute" || "refresh",
 * };
 * const command = new ManageSparqlStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // ManageSparqlStatisticsOutput
 * //   status: "STRING_VALUE", // required
 * //   payload: { // RefreshStatisticsIdMap
 * //     statisticsId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ManageSparqlStatisticsCommandInput - {@link ManageSparqlStatisticsCommandInput}
 * @returns {@link ManageSparqlStatisticsCommandOutput}
 * @see {@link ManageSparqlStatisticsCommandInput} for command's `input` shape.
 * @see {@link ManageSparqlStatisticsCommandOutput} for command's `response` shape.
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
export class ManageSparqlStatisticsCommand extends command<ManageSparqlStatisticsCommandInput, ManageSparqlStatisticsCommandOutput>(
  _ep0,
  _mw0,
  "ManageSparqlStatistics",
  ManageSparqlStatistics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ManageSparqlStatisticsInput;
      output: ManageSparqlStatisticsOutput;
    };
    sdk: {
      input: ManageSparqlStatisticsCommandInput;
      output: ManageSparqlStatisticsCommandOutput;
    };
  };
}
