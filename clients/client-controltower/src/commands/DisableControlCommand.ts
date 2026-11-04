// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableControlInput, DisableControlOutput } from "../models/models_0";
import { DisableControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableControlCommand}.
 */
export interface DisableControlCommandInput extends DisableControlInput {}
/**
 * @public
 *
 * The output of {@link DisableControlCommand}.
 */
export interface DisableControlCommandOutput extends DisableControlOutput, __MetadataBearer {}

/**
 * This API call turns off a control. It starts an asynchronous operation that deletes Amazon Web Services resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify. For usage examples, see the [*Controls Reference Guide*](https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, DisableControlCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, DisableControlCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // DisableControlInput
 *   controlIdentifier: "STRING_VALUE",
 *   targetIdentifier: "STRING_VALUE",
 *   enabledControlIdentifier: "STRING_VALUE",
 * };
 * const command = new DisableControlCommand(input);
 * const response = await client.send(command);
 * // { // DisableControlOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DisableControlCommandInput - {@link DisableControlCommandInput}
 * @returns {@link DisableControlCommandOutput}
 * @see {@link DisableControlCommandInput} for command's `input` shape.
 * @see {@link DisableControlCommandOutput} for command's `response` shape.
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
export class DisableControlCommand extends command<DisableControlCommandInput, DisableControlCommandOutput>(
  _ep0,
  _mw0,
  "DisableControl",
  DisableControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableControlInput;
      output: DisableControlOutput;
    };
    sdk: {
      input: DisableControlCommandInput;
      output: DisableControlCommandOutput;
    };
  };
}
