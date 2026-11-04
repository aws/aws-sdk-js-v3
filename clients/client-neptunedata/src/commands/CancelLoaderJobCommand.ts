// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelLoaderJobInput, CancelLoaderJobOutput } from "../models/models_0";
import { CancelLoaderJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelLoaderJobCommand}.
 */
export interface CancelLoaderJobCommandInput extends CancelLoaderJobInput {}
/**
 * @public
 *
 * The output of {@link CancelLoaderJobCommand}.
 */
export interface CancelLoaderJobCommandOutput extends CancelLoaderJobOutput, __MetadataBearer {}

/**
 * Cancels a specified load job. This is an HTTP `DELETE` request. See [Neptune Loader Get-Status API](https://docs.aws.amazon.com/neptune/latest/userguide/load-api-reference-status.htm) for more information.
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:CancelLoaderJob](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelloaderjob) IAM action in that cluster..
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, CancelLoaderJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, CancelLoaderJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // CancelLoaderJobInput
 *   loadId: "STRING_VALUE", // required
 * };
 * const command = new CancelLoaderJobCommand(input);
 * const response = await client.send(command);
 * // { // CancelLoaderJobOutput
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelLoaderJobCommandInput - {@link CancelLoaderJobCommandInput}
 * @returns {@link CancelLoaderJobCommandOutput}
 * @see {@link CancelLoaderJobCommandInput} for command's `input` shape.
 * @see {@link CancelLoaderJobCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Raised when a request is submitted that cannot be processed.
 *
 * @throws {@link BulkLoadIdNotFoundException} (client fault)
 *
 * Raised when a specified bulk-load job ID cannot be found.
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
 * @throws {@link LoadUrlAccessDeniedException} (client fault)
 *
 * Raised when access is denied to a specified load URL.
 *
 * @throws {@link MissingParameterException} (client fault)
 *
 * Raised when a required parameter is missing.
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
export class CancelLoaderJobCommand extends command<CancelLoaderJobCommandInput, CancelLoaderJobCommandOutput>(
  _ep0,
  _mw0,
  "CancelLoaderJob",
  CancelLoaderJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelLoaderJobInput;
      output: CancelLoaderJobOutput;
    };
    sdk: {
      input: CancelLoaderJobCommandInput;
      output: CancelLoaderJobCommandOutput;
    };
  };
}
