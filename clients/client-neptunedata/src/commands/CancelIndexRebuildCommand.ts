// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelIndexRebuildInput, CancelIndexRebuildOutput } from "../models/models_0";
import { CancelIndexRebuild$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelIndexRebuildCommand}.
 */
export interface CancelIndexRebuildCommandInput extends CancelIndexRebuildInput {}
/**
 * @public
 *
 * The output of {@link CancelIndexRebuildCommand}.
 */
export interface CancelIndexRebuildCommandOutput extends CancelIndexRebuildOutput, __MetadataBearer {}

/**
 * Cancels an in-progress index rebuild operation.
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:CancelIndexRebuild](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelindexrebuild) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, CancelIndexRebuildCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, CancelIndexRebuildCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // CancelIndexRebuildInput
 *   rebuildId: "STRING_VALUE", // required
 * };
 * const command = new CancelIndexRebuildCommand(input);
 * const response = await client.send(command);
 * // { // CancelIndexRebuildOutput
 * //   status: "PREPARING" || "REBUILDING" || "COMPLETED" || "FAILED" || "CANCELLED" || "CANCELLING", // required
 * //   concurrency: Number("int"), // required
 * //   writeBufferSize: "LOW" || "MEDIUM" || "HIGH", // required
 * // };
 *
 * ```
 *
 * @param CancelIndexRebuildCommandInput - {@link CancelIndexRebuildCommandInput}
 * @returns {@link CancelIndexRebuildCommandOutput}
 * @see {@link CancelIndexRebuildCommandInput} for command's `input` shape.
 * @see {@link CancelIndexRebuildCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Raised in case of an authentication or authorization failure.
 *
 * @throws {@link CancelledByMaintenanceException} (server fault)
 *
 * Raised when a request is cancelled because the storage layer entered maintenance mode. This typically happens during a customer-initiated operation such as an index rebuild. It should be treated like `ConcurrentModificationException`.
 *
 * @throws {@link CancelledByUserException} (server fault)
 *
 * Raised when a user cancelled a request.
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
 * @throws {@link ValidationException} (client fault)
 *
 * Raised when a parameter value is not valid or is malformed.
 *
 * @throws {@link NeptunedataServiceException}
 *
 * Base exception class for all service exceptions from Neptunedata service.
 *
 * @public
 */
export class CancelIndexRebuildCommand extends command<CancelIndexRebuildCommandInput, CancelIndexRebuildCommandOutput>(
  _ep0,
  _mw0,
  "CancelIndexRebuild",
  CancelIndexRebuild$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelIndexRebuildInput;
      output: CancelIndexRebuildOutput;
    };
    sdk: {
      input: CancelIndexRebuildCommandInput;
      output: CancelIndexRebuildCommandOutput;
    };
  };
}
