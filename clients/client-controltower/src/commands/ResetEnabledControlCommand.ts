// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResetEnabledControlInput, ResetEnabledControlOutput } from "../models/models_0";
import { ResetEnabledControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResetEnabledControlCommand}.
 */
export interface ResetEnabledControlCommandInput extends ResetEnabledControlInput {}
/**
 * @public
 *
 * The output of {@link ResetEnabledControlCommand}.
 */
export interface ResetEnabledControlCommandOutput extends ResetEnabledControlOutput, __MetadataBearer {}

/**
 * Resets an enabled control. Does not work for controls implemented with SCPs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ResetEnabledControlCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ResetEnabledControlCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // ResetEnabledControlInput
 *   enabledControlIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ResetEnabledControlCommand(input);
 * const response = await client.send(command);
 * // { // ResetEnabledControlOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ResetEnabledControlCommandInput - {@link ResetEnabledControlCommandInput}
 * @returns {@link ResetEnabledControlCommandOutput}
 * @see {@link ResetEnabledControlCommandInput} for command's `input` shape.
 * @see {@link ResetEnabledControlCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded. See [Service quotas](https://docs.aws.amazon.com/controltower/latest/userguide/request-an-increase.html).
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link ControlTowerServiceException}
 *
 * Base exception class for all service exceptions from ControlTower service.
 *
 * @public
 */
export class ResetEnabledControlCommand extends command<ResetEnabledControlCommandInput, ResetEnabledControlCommandOutput>(
  _ep0,
  _mw0,
  "ResetEnabledControl",
  ResetEnabledControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetEnabledControlInput;
      output: ResetEnabledControlOutput;
    };
    sdk: {
      input: ResetEnabledControlCommandInput;
      output: ResetEnabledControlCommandOutput;
    };
  };
}
