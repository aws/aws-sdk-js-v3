// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TerminateMicrovmRequest, TerminateMicrovmResponse } from "../models/models_0";
import { TerminateMicrovm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TerminateMicrovmCommand}.
 */
export interface TerminateMicrovmCommandInput extends TerminateMicrovmRequest {}
/**
 * @public
 *
 * The output of {@link TerminateMicrovmCommand}.
 */
export interface TerminateMicrovmCommandOutput extends TerminateMicrovmResponse, __MetadataBearer {}

/**
 * Terminates a MicroVM. This operation is idempotent; terminating a MicroVM that has already been terminated succeeds without error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, TerminateMicrovmCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, TerminateMicrovmCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // TerminateMicrovmRequest
 *   microvmIdentifier: "STRING_VALUE", // required
 * };
 * const command = new TerminateMicrovmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateMicrovmCommandInput - {@link TerminateMicrovmCommandInput}
 * @returns {@link TerminateMicrovmCommandOutput}
 * @see {@link TerminateMicrovmCommandInput} for command's `input` shape.
 * @see {@link TerminateMicrovmCommandOutput} for command's `response` shape.
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
export class TerminateMicrovmCommand extends command<TerminateMicrovmCommandInput, TerminateMicrovmCommandOutput>(
  _ep0,
  _mw0,
  "TerminateMicrovm",
  TerminateMicrovm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateMicrovmRequest;
      output: {};
    };
    sdk: {
      input: TerminateMicrovmCommandInput;
      output: TerminateMicrovmCommandOutput;
    };
  };
}
