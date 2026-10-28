// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartIndexRebuildInput, StartIndexRebuildOutput } from "../models/models_0";
import { StartIndexRebuild$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartIndexRebuildCommand}.
 */
export interface StartIndexRebuildCommandInput extends StartIndexRebuildInput {}
/**
 * @public
 *
 * The output of {@link StartIndexRebuildCommand}.
 */
export interface StartIndexRebuildCommandOutput extends StartIndexRebuildOutput, __MetadataBearer {}

/**
 * <p>Initiates an index rebuild operation to optimize storage and improve query performance. The rebuild operation reorganizes index to reclaim space and improve efficiency.</p> <p>When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startindexrebuild">neptune-db:StartIndexRebuild</a> IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, StartIndexRebuildCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, StartIndexRebuildCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // StartIndexRebuildInput
 *   scope: "ALL" || "QUADS" || "DICTIONARIES",
 *   concurrency: Number("int"),
 *   writeBufferSize: "LOW" || "MEDIUM" || "HIGH",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartIndexRebuildCommand(input);
 * const response = await client.send(command);
 * // { // StartIndexRebuildOutput
 * //   status: "PREPARING" || "REBUILDING" || "COMPLETED" || "FAILED" || "CANCELLED" || "CANCELLING", // required
 * //   rebuildId: "STRING_VALUE", // required
 * //   scope: "ALL" || "QUADS" || "DICTIONARIES", // required
 * //   concurrency: Number("int"), // required
 * //   writeBufferSize: "LOW" || "MEDIUM" || "HIGH", // required
 * // };
 *
 * ```
 *
 * @param StartIndexRebuildCommandInput - {@link StartIndexRebuildCommandInput}
 * @returns {@link StartIndexRebuildCommandOutput}
 * @see {@link StartIndexRebuildCommandInput} for command's `input` shape.
 * @see {@link StartIndexRebuildCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Raised when a request attempts to modify data that is concurrently being modified by another process.</p>
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
 * @throws {@link MemoryLimitExceededException} (server fault)
 *  <p>Raised when a request fails because of insufficient memory resources. The request can be retried.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Raised when the HTTP method used by a request is not supported by the endpoint being used.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *  <p>Raised when a request attempts to write to a read-only resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Raised when the specified resource could not be found. The resource might have been deleted or the identifier might be incorrect.</p>
 *
 * @throws {@link ServerShutdownException} (server fault)
 *  <p>Raised when the server shuts down while processing a request.</p>
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
export class StartIndexRebuildCommand extends command<StartIndexRebuildCommandInput, StartIndexRebuildCommandOutput>(
  _ep0,
  _mw0,
  "StartIndexRebuild",
  StartIndexRebuild$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartIndexRebuildInput;
      output: StartIndexRebuildOutput;
    };
    sdk: {
      input: StartIndexRebuildCommandInput;
      output: StartIndexRebuildCommandOutput;
    };
  };
}
