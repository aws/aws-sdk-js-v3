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
 * <p>Retrieves a list of all index rebuild operation identifiers.</p> <p>When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listindexrebuilds">neptune-db:ListIndexRebuilds</a> IAM action in that cluster.</p>
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
 *  <p>Raised in case of an authentication or authorization failure.</p>
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
 * @throws {@link InternalFailureException} (server fault)
 *  <p>Raised when the processing of the request failed unexpectedly.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Raised when the HTTP method used by a request is not supported by the endpoint being used.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
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
