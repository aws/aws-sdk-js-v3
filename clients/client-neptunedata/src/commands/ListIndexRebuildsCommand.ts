// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIndexRebuildsOutput } from "../models/models_0";
import { ListIndexRebuilds$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIndexRebuildsCommand}.
 */
export interface ListIndexRebuildsCommandInput {}
/**
 * @public
 *
 * The output of {@link ListIndexRebuildsCommand}.
 */
export interface ListIndexRebuildsCommandOutput extends ListIndexRebuildsOutput, __MetadataBearer {}

/**
 * Retrieves a list of all index rebuild operation identifiers.
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:ListIndexRebuilds](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listindexrebuilds) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ListIndexRebuildsCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ListIndexRebuildsCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = {};
 * const command = new ListIndexRebuildsCommand(input);
 * const response = await client.send(command);
 * // { // ListIndexRebuildsOutput
 * //   rebuildIds: [ // RebuildIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIndexRebuildsCommandInput - {@link ListIndexRebuildsCommandInput}
 * @returns {@link ListIndexRebuildsCommandOutput}
 * @see {@link ListIndexRebuildsCommandInput} for command's `input` shape.
 * @see {@link ListIndexRebuildsCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Raised in case of an authentication or authorization failure.
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
 * @throws {@link InternalFailureException} (server fault)
 *
 * Raised when the processing of the request failed unexpectedly.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * Raised when an argument in a request has an invalid value.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Raised when a parameter value is not valid.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * Raised when the HTTP method used by a request is not supported by the endpoint being used.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
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
export class ListIndexRebuildsCommand extends command<ListIndexRebuildsCommandInput, ListIndexRebuildsCommandOutput>(
  _ep0,
  _mw0,
  "ListIndexRebuilds",
  ListIndexRebuilds$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListIndexRebuildsOutput;
    };
    sdk: {
      input: ListIndexRebuildsCommandInput;
      output: ListIndexRebuildsCommandOutput;
    };
  };
}
