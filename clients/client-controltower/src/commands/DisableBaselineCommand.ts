// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableBaselineInput, DisableBaselineOutput } from "../models/models_0";
import { DisableBaseline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableBaselineCommand}.
 */
export interface DisableBaselineCommandInput extends DisableBaselineInput {}
/**
 * @public
 *
 * The output of {@link DisableBaselineCommand}.
 */
export interface DisableBaselineCommandOutput extends DisableBaselineOutput, __MetadataBearer {}

/**
 * Disable an `EnabledBaseline` resource on the specified Target. This API starts an asynchronous operation to remove all resources deployed as part of the baseline enablement. The resource will vary depending on the enabled baseline. For usage examples, see [*the Amazon Web Services Control Tower User Guide*](https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, DisableBaselineCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, DisableBaselineCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // DisableBaselineInput
 *   enabledBaselineIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DisableBaselineCommand(input);
 * const response = await client.send(command);
 * // { // DisableBaselineOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DisableBaselineCommandInput - {@link DisableBaselineCommandInput}
 * @returns {@link DisableBaselineCommandOutput}
 * @see {@link DisableBaselineCommandInput} for command's `input` shape.
 * @see {@link DisableBaselineCommandOutput} for command's `response` shape.
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
export class DisableBaselineCommand extends command<DisableBaselineCommandInput, DisableBaselineCommandOutput>(
  _ep0,
  _mw0,
  "DisableBaseline",
  DisableBaseline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableBaselineInput;
      output: DisableBaselineOutput;
    };
    sdk: {
      input: DisableBaselineCommandInput;
      output: DisableBaselineCommandOutput;
    };
  };
}
