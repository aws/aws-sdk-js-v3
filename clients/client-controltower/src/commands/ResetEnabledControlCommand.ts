// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ResetEnabledControlInput, ResetEnabledControlOutput } from "../models/models_0";
import { ResetEnabledControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Resets an enabled control. Does not work for controls implemented with SCPs.</p>
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
export class ResetEnabledControlCommand extends $Command
  .classBuilder<
    ResetEnabledControlCommandInput,
    ResetEnabledControlCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSControlTowerApis", "ResetEnabledControl", {})
  .n("ControlTowerClient", "ResetEnabledControlCommand")
  .sc(ResetEnabledControl$)
  .build() {
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
