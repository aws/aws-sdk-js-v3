// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGremlinQueryStatusInput, GetGremlinQueryStatusOutput } from "../models/models_0";
import { GetGremlinQueryStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGremlinQueryStatusCommand}.
 */
export interface GetGremlinQueryStatusCommandInput extends GetGremlinQueryStatusInput {}
/**
 * @public
 *
 * The output of {@link GetGremlinQueryStatusCommand}.
 */
export interface GetGremlinQueryStatusCommandOutput extends GetGremlinQueryStatusOutput, __MetadataBearer {}

/**
 * Gets the status of a specified Gremlin query.
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:GetQueryStatus](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getquerystatus) IAM action in that cluster.
 *
 * Note that the [neptune-db:QueryLanguage:Gremlin](https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys) IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see [Condition keys available in Neptune IAM data-access policy statements](https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html)).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetGremlinQueryStatusCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetGremlinQueryStatusCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // GetGremlinQueryStatusInput
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new GetGremlinQueryStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetGremlinQueryStatusOutput
 * //   queryId: "STRING_VALUE",
 * //   queryString: "STRING_VALUE",
 * //   queryEvalStats: { // QueryEvalStats
 * //     waited: Number("int"),
 * //     elapsed: Number("int"),
 * //     cancelled: true || false,
 * //     subqueries: "DOCUMENT_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGremlinQueryStatusCommandInput - {@link GetGremlinQueryStatusCommandInput}
 * @returns {@link GetGremlinQueryStatusCommandOutput}
 * @see {@link GetGremlinQueryStatusCommandInput} for command's `input` shape.
 * @see {@link GetGremlinQueryStatusCommandOutput} for command's `response` shape.
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
 * @throws {@link ConcurrentModificationException} (server fault)
 *
 * Raised when a request attempts to modify data that is concurrently being modified by another process.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *
 * Raised when a value in a request field did not satisfy required constraints.
 *
 * @throws {@link FailureByQueryException} (server fault)
 *
 * Raised when a request fails.
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
 * @throws {@link ParsingException} (client fault)
 *
 * Raised when a parsing issue is encountered.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *
 * Raised when a request attempts to write to a read-only resource.
 *
 * @throws {@link TimeLimitExceededException} (server fault)
 *
 * Raised when the an operation exceeds the time limit allowed for it.
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
export class GetGremlinQueryStatusCommand extends command<GetGremlinQueryStatusCommandInput, GetGremlinQueryStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetGremlinQueryStatus",
  GetGremlinQueryStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGremlinQueryStatusInput;
      output: GetGremlinQueryStatusOutput;
    };
    sdk: {
      input: GetGremlinQueryStatusCommandInput;
      output: GetGremlinQueryStatusCommandOutput;
    };
  };
}
