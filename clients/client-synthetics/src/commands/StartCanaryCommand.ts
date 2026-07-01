// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartCanaryRequest, StartCanaryResponse } from "../models/models_0";
import { StartCanary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartCanaryCommand}.
 */
export interface StartCanaryCommandInput extends StartCanaryRequest {}
/**
 * @public
 *
 * The output of {@link StartCanaryCommand}.
 */
export interface StartCanaryCommandOutput extends StartCanaryResponse, __MetadataBearer {}

/**
 * <p>Use this operation to run a canary that has already been created.
 *          The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule,
 *          use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, StartCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, StartCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // StartCanaryRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StartCanaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartCanaryCommandInput - {@link StartCanaryCommandInput}
 * @returns {@link StartCanaryCommandOutput}
 * @see {@link StartCanaryCommandInput} for command's `input` shape.
 * @see {@link StartCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflicting operation is already in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class StartCanaryCommand extends command<StartCanaryCommandInput, StartCanaryCommandOutput>(
  _ep0,
  _mw0,
  "StartCanary",
  StartCanary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCanaryRequest;
      output: {};
    };
    sdk: {
      input: StartCanaryCommandInput;
      output: StartCanaryCommandOutput;
    };
  };
}
