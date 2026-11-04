// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEnabledControlInput, UpdateEnabledControlOutput } from "../models/models_0";
import { UpdateEnabledControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEnabledControlCommand}.
 */
export interface UpdateEnabledControlCommandInput extends UpdateEnabledControlInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnabledControlCommand}.
 */
export interface UpdateEnabledControlCommandOutput extends UpdateEnabledControlOutput, __MetadataBearer {}

/**
 * Updates the configuration of an already enabled control.
 *
 * If the enabled control shows an `EnablementStatus` of SUCCEEDED, supply parameters that are different from the currently configured parameters. Otherwise, Amazon Web Services Control Tower will not accept the request.
 *
 * If the enabled control shows an `EnablementStatus` of FAILED, Amazon Web Services Control Tower updates the control to match any valid parameters that you supply.
 *
 * If the `DriftSummary` status for the control shows as `DRIFTED`, you cannot call this API. Instead, you can update the control by calling the `ResetEnabledControl` API. Alternatively, you can call `DisableControl` and then call `EnableControl` again. Also, you can run an extending governance operation to repair drift. For usage examples, see the [*Controls Reference Guide*](https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, UpdateEnabledControlCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, UpdateEnabledControlCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // UpdateEnabledControlInput
 *   parameters: [ // EnabledControlParameters // required
 *     { // EnabledControlParameter
 *       key: "STRING_VALUE", // required
 *       value: "DOCUMENT_VALUE", // required
 *     },
 *   ],
 *   enabledControlIdentifier: "STRING_VALUE", // required
 * };
 * const command = new UpdateEnabledControlCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnabledControlOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateEnabledControlCommandInput - {@link UpdateEnabledControlCommandInput}
 * @returns {@link UpdateEnabledControlCommandOutput}
 * @see {@link UpdateEnabledControlCommandInput} for command's `input` shape.
 * @see {@link UpdateEnabledControlCommandOutput} for command's `response` shape.
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
export class UpdateEnabledControlCommand extends command<UpdateEnabledControlCommandInput, UpdateEnabledControlCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEnabledControl",
  UpdateEnabledControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnabledControlInput;
      output: UpdateEnabledControlOutput;
    };
    sdk: {
      input: UpdateEnabledControlCommandInput;
      output: UpdateEnabledControlCommandOutput;
    };
  };
}
