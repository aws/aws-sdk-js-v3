// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendTaskSuccessInput, SendTaskSuccessOutput } from "../models/models_0";
import { SendTaskSuccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendTaskSuccessCommand}.
 */
export interface SendTaskSuccessCommandInput extends SendTaskSuccessInput {}
/**
 * @public
 *
 * The output of {@link SendTaskSuccessCommand}.
 */
export interface SendTaskSuccessCommandOutput extends SendTaskSuccessOutput, __MetadataBearer {}

/**
 * Used by activity workers, Task states using the [callback](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token) pattern, and optionally Task states using the [job run](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync) pattern to report that the task identified by the `taskToken` completed successfully.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskSuccessCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskSuccessCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // SendTaskSuccessInput
 *   taskToken: "STRING_VALUE", // required
 *   output: "STRING_VALUE", // required
 * };
 * const command = new SendTaskSuccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendTaskSuccessCommandInput - {@link SendTaskSuccessCommandInput}
 * @returns {@link SendTaskSuccessCommandOutput}
 * @see {@link SendTaskSuccessCommandInput} for command's `input` shape.
 * @see {@link SendTaskSuccessCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidOutput} (client fault)
 *
 * The provided JSON output data is not valid.
 *
 * @throws {@link InvalidToken} (client fault)
 *
 * The provided token is not valid.
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *
 * Either your KMS key policy or API caller does not have the required permissions.
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *
 * The KMS key is not in valid state, for example: Disabled or Deleted.
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *
 * Received when KMS returns `ThrottlingException` for a KMS call that Step Functions makes on behalf of the caller.
 *
 * @throws {@link TaskDoesNotExist} (client fault)
 *
 * The activity does not exist.
 *
 * @throws {@link TaskTimedOut} (client fault)
 *
 * The task token has either expired or the task associated with the token has already been closed.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class SendTaskSuccessCommand extends command<SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput>(
  _ep0,
  _mw0,
  "SendTaskSuccess",
  SendTaskSuccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendTaskSuccessInput;
      output: {};
    };
    sdk: {
      input: SendTaskSuccessCommandInput;
      output: SendTaskSuccessCommandOutput;
    };
  };
}
