// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SuspendMicrovmRequest, SuspendMicrovmResponse } from "../models/models_0";
import { SuspendMicrovm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SuspendMicrovmCommand}.
 */
export interface SuspendMicrovmCommandInput extends SuspendMicrovmRequest {}
/**
 * @public
 *
 * The output of {@link SuspendMicrovmCommand}.
 */
export interface SuspendMicrovmCommandOutput extends SuspendMicrovmResponse, __MetadataBearer {}

/**
 * Suspends a running MicroVM, preserving its full memory and disk state. The MicroVM transitions through SUSPENDING to SUSPENDED. To restore, call ResumeMicrovm or send traffic to the endpoint if autoResumeEnabled is true.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, SuspendMicrovmCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, SuspendMicrovmCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // SuspendMicrovmRequest
 *   microvmIdentifier: "STRING_VALUE", // required
 * };
 * const command = new SuspendMicrovmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SuspendMicrovmCommandInput - {@link SuspendMicrovmCommandInput}
 * @returns {@link SuspendMicrovmCommandOutput}
 * @see {@link SuspendMicrovmCommandInput} for command's `input` shape.
 * @see {@link SuspendMicrovmCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry the request later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Retry the request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by the service.
 *
 * @throws {@link LambdaMicrovmsServiceException}
 *
 * Base exception class for all service exceptions from LambdaMicrovms service.
 *
 * @public
 */
export class SuspendMicrovmCommand extends command<SuspendMicrovmCommandInput, SuspendMicrovmCommandOutput>(
  _ep0,
  _mw0,
  "SuspendMicrovm",
  SuspendMicrovm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SuspendMicrovmRequest;
      output: {};
    };
    sdk: {
      input: SuspendMicrovmCommandInput;
      output: SuspendMicrovmCommandOutput;
    };
  };
}
