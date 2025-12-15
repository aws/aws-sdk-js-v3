// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableControlInput, DisableControlOutput } from "../models/models_0";
import { DisableControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This API call turns off a control. It starts an asynchronous operation that deletes Amazon Web Services resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify. For usage examples, see the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html"> <i>Controls Reference Guide</i> </a>.</p>
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
export class DisableControlCommand extends $Command
  .classBuilder<
    DisableControlCommandInput,
    DisableControlCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSControlTowerApis", "DisableControl", {})
  .n("ControlTowerClient", "DisableControlCommand")
  .sc(DisableControl$)
  .build() {
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
