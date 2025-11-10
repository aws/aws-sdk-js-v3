// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEnabledControlInput, UpdateEnabledControlOutput } from "../models/models_0";
import { UpdateEnabledControl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Updates the configuration of an already enabled control.</p> <p>If the enabled control shows an <code>EnablementStatus</code> of SUCCEEDED, supply parameters that are different from the currently configured parameters. Otherwise, Amazon Web Services Control Tower will not accept the request.</p> <p>If the enabled control shows an <code>EnablementStatus</code> of FAILED, Amazon Web Services Control Tower updates the control to match any valid parameters that you supply.</p> <p>If the <code>DriftSummary</code> status for the control shows as <code>DRIFTED</code>, you cannot call this API. Instead, you can update the control by calling the <code>ResetEnabledControl</code> API. Alternatively, you can call <code>DisableControl</code> and then call <code>EnableControl</code> again. Also, you can run an extending governance operation to repair drift. For usage examples, see the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html"> <i>Controls Reference Guide</i> </a>. </p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded. See <a href="https://docs.aws.amazon.com/controltower/latest/userguide/request-an-increase.html">Service quotas</a>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 *
 * @public
 */
export class UpdateEnabledControlCommand extends $Command
  .classBuilder<
    UpdateEnabledControlCommandInput,
    UpdateEnabledControlCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSControlTowerApis", "UpdateEnabledControl", {})
  .n("ControlTowerClient", "UpdateEnabledControlCommand")
  .sc(UpdateEnabledControl)
  .build() {
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
