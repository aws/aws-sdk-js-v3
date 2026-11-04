// smithy-typescript generated code
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SendDurableExecutionCallbackSuccessRequest,
  SendDurableExecutionCallbackSuccessResponse,
} from "../models/models_0";
import { SendDurableExecutionCallbackSuccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type SendDurableExecutionCallbackSuccessCommandInputType = Omit<SendDurableExecutionCallbackSuccessRequest, "Result"> & {
  Result?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link SendDurableExecutionCallbackSuccessCommand}.
 */
export interface SendDurableExecutionCallbackSuccessCommandInput extends SendDurableExecutionCallbackSuccessCommandInputType {}
/**
 * @public
 *
 * The output of {@link SendDurableExecutionCallbackSuccessCommand}.
 */
export interface SendDurableExecutionCallbackSuccessCommandOutput extends SendDurableExecutionCallbackSuccessResponse, __MetadataBearer {}

/**
 * Sends a successful completion response for a callback operation in a durable execution. Use this API when an external system has successfully completed a callback operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, SendDurableExecutionCallbackSuccessCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, SendDurableExecutionCallbackSuccessCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // SendDurableExecutionCallbackSuccessRequest
 *   CallbackId: "STRING_VALUE", // required
 *   Result: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new SendDurableExecutionCallbackSuccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendDurableExecutionCallbackSuccessCommandInput - {@link SendDurableExecutionCallbackSuccessCommandInput}
 * @returns {@link SendDurableExecutionCallbackSuccessCommandOutput}
 * @see {@link SendDurableExecutionCallbackSuccessCommandInput} for command's `input` shape.
 * @see {@link SendDurableExecutionCallbackSuccessCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CallbackTimeoutException} (client fault)
 *
 * The callback ID token has either expired or the callback associated with the token has already been closed.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link KMSAccessDeniedException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because KMS access was denied. Check the Lambda function's KMS permissions.
 *
 * @throws {@link KMSDisabledException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because the KMS key used is disabled. Check the Lambda function's KMS key settings.
 *
 * @throws {@link KMSInvalidStateException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because the state of the KMS key used is not valid for Decrypt. Check the function's KMS key settings.
 *
 * @throws {@link KMSNotFoundException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because the KMS key was not found. Check the function's KMS key settings.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @public
 */
export class SendDurableExecutionCallbackSuccessCommand extends command<SendDurableExecutionCallbackSuccessCommandInput, SendDurableExecutionCallbackSuccessCommandOutput>(
  _ep0,
  _mw0,
  "SendDurableExecutionCallbackSuccess",
  SendDurableExecutionCallbackSuccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDurableExecutionCallbackSuccessRequest;
      output: {};
    };
    sdk: {
      input: SendDurableExecutionCallbackSuccessCommandInput;
      output: SendDurableExecutionCallbackSuccessCommandOutput;
    };
  };
}
