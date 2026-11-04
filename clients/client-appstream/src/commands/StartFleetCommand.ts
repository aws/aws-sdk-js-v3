// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartFleetRequest, StartFleetResult } from "../models/models_0";
import { StartFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartFleetCommand}.
 */
export interface StartFleetCommandInput extends StartFleetRequest {}
/**
 * @public
 *
 * The output of {@link StartFleetCommand}.
 */
export interface StartFleetCommandOutput extends StartFleetResult, __MetadataBearer {}

/**
 * Starts the specified fleet.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StartFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StartFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // StartFleetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StartFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartFleetCommandInput - {@link StartFleetCommandInput}
 * @returns {@link StartFleetCommandOutput}
 * @see {@link StartFleetCommandInput} for command's `input` shape.
 * @see {@link StartFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *
 * The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support.
 *
 * @throws {@link InvalidRoleException} (client fault)
 *
 * The specified role is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested limit exceeds the permitted limit for an account.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link RequestLimitExceededException} (client fault)
 *
 * WorkSpaces Applications can’t process the request right now because the Describe calls from your AWS account are being throttled by Amazon EC2. Try again later.
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *
 * The specified resource exists and is not in use, but isn't available.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class StartFleetCommand extends command<StartFleetCommandInput, StartFleetCommandOutput>(
  _ep0,
  _mw0,
  "StartFleet",
  StartFleet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFleetRequest;
      output: {};
    };
    sdk: {
      input: StartFleetCommandInput;
      output: StartFleetCommandOutput;
    };
  };
}
