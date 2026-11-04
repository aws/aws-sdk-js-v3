// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteFastResetInput, ExecuteFastResetOutput } from "../models/models_0";
import { ExecuteFastReset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExecuteFastResetCommand}.
 */
export interface ExecuteFastResetCommandInput extends ExecuteFastResetInput {}
/**
 * @public
 *
 * The output of {@link ExecuteFastResetCommand}.
 */
export interface ExecuteFastResetCommandOutput extends ExecuteFastResetOutput, __MetadataBearer {}

/**
 * The fast reset REST API lets you reset a Neptune graph quicky and easily, removing all of its data.
 *
 * Neptune fast reset is a two-step process. First you call `ExecuteFastReset` with `action` set to `initiateDatabaseReset`. This returns a UUID token which you then include when calling `ExecuteFastReset` again with `action` set to `performDatabaseReset`. See [Empty an Amazon Neptune DB cluster using the fast reset API](https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-fast-reset.html).
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:ResetDatabase](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#resetdatabase) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ExecuteFastResetCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ExecuteFastResetCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // ExecuteFastResetInput
 *   action: "initiateDatabaseReset" || "performDatabaseReset", // required
 *   token: "STRING_VALUE",
 * };
 * const command = new ExecuteFastResetCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteFastResetOutput
 * //   status: "STRING_VALUE", // required
 * //   payload: { // FastResetToken
 * //     token: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExecuteFastResetCommandInput - {@link ExecuteFastResetCommandInput}
 * @returns {@link ExecuteFastResetCommandOutput}
 * @see {@link ExecuteFastResetCommandInput} for command's `input` shape.
 * @see {@link ExecuteFastResetCommandOutput} for command's `response` shape.
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
 * @throws {@link ServerShutdownException} (server fault)
 *
 * Raised when the server shuts down while processing a request.
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
export class ExecuteFastResetCommand extends command<ExecuteFastResetCommandInput, ExecuteFastResetCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteFastReset",
  ExecuteFastReset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteFastResetInput;
      output: ExecuteFastResetOutput;
    };
    sdk: {
      input: ExecuteFastResetCommandInput;
      output: ExecuteFastResetCommandOutput;
    };
  };
}
