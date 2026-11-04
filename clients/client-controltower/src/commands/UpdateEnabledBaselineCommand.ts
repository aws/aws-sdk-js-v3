// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEnabledBaselineInput, UpdateEnabledBaselineOutput } from "../models/models_0";
import { UpdateEnabledBaseline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEnabledBaselineCommand}.
 */
export interface UpdateEnabledBaselineCommandInput extends UpdateEnabledBaselineInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnabledBaselineCommand}.
 */
export interface UpdateEnabledBaselineCommandOutput extends UpdateEnabledBaselineOutput, __MetadataBearer {}

/**
 * Updates an `EnabledBaseline` resource's applied parameters or version. For usage examples, see [*the Amazon Web Services Control Tower User Guide*](https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, UpdateEnabledBaselineCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, UpdateEnabledBaselineCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // UpdateEnabledBaselineInput
 *   baselineVersion: "STRING_VALUE", // required
 *   parameters: [ // EnabledBaselineParameters
 *     { // EnabledBaselineParameter
 *       key: "STRING_VALUE", // required
 *       value: "DOCUMENT_VALUE", // required
 *     },
 *   ],
 *   enabledBaselineIdentifier: "STRING_VALUE", // required
 * };
 * const command = new UpdateEnabledBaselineCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnabledBaselineOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateEnabledBaselineCommandInput - {@link UpdateEnabledBaselineCommandInput}
 * @returns {@link UpdateEnabledBaselineCommandOutput}
 * @see {@link UpdateEnabledBaselineCommandInput} for command's `input` shape.
 * @see {@link UpdateEnabledBaselineCommandOutput} for command's `response` shape.
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
export class UpdateEnabledBaselineCommand extends command<UpdateEnabledBaselineCommandInput, UpdateEnabledBaselineCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEnabledBaseline",
  UpdateEnabledBaseline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnabledBaselineInput;
      output: UpdateEnabledBaselineOutput;
    };
    sdk: {
      input: UpdateEnabledBaselineCommandInput;
      output: UpdateEnabledBaselineCommandOutput;
    };
  };
}
