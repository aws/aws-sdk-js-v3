// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResumeMicrovmRequest, ResumeMicrovmResponse } from "../models/models_0";
import { ResumeMicrovm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResumeMicrovmCommand}.
 */
export interface ResumeMicrovmCommandInput extends ResumeMicrovmRequest {}
/**
 * @public
 *
 * The output of {@link ResumeMicrovmCommand}.
 */
export interface ResumeMicrovmCommandOutput extends ResumeMicrovmResponse, __MetadataBearer {}

/**
 * Resumes a suspended MicroVM, restoring it to RUNNING state with all state intact. The MicroVM must be in SUSPENDED state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, ResumeMicrovmCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, ResumeMicrovmCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // ResumeMicrovmRequest
 *   microvmIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ResumeMicrovmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeMicrovmCommandInput - {@link ResumeMicrovmCommandInput}
 * @returns {@link ResumeMicrovmCommandOutput}
 * @see {@link ResumeMicrovmCommandInput} for command's `input` shape.
 * @see {@link ResumeMicrovmCommandOutput} for command's `response` shape.
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
export class ResumeMicrovmCommand extends command<ResumeMicrovmCommandInput, ResumeMicrovmCommandOutput>(
  _ep0,
  _mw0,
  "ResumeMicrovm",
  ResumeMicrovm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResumeMicrovmRequest;
      output: {};
    };
    sdk: {
      input: ResumeMicrovmCommandInput;
      output: ResumeMicrovmCommandOutput;
    };
  };
}
