// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ResetLandingZoneInput, ResetLandingZoneOutput } from "../models/models_0";
import { ResetLandingZone } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetLandingZoneCommand}.
 */
export interface ResetLandingZoneCommandInput extends ResetLandingZoneInput {}
/**
 * @public
 *
 * The output of {@link ResetLandingZoneCommand}.
 */
export interface ResetLandingZoneCommandOutput extends ResetLandingZoneOutput, __MetadataBearer {}

/**
 * <p>This API call resets a landing zone. It starts an asynchronous operation that resets the landing zone to the parameters specified in the original configuration, which you specified in the manifest file. Nothing in the manifest file's original landing zone configuration is changed during the reset process, by default. This API is not the same as a rollback of a landing zone version, which is not a supported operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ResetLandingZoneCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ResetLandingZoneCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // ResetLandingZoneInput
 *   landingZoneIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ResetLandingZoneCommand(input);
 * const response = await client.send(command);
 * // { // ResetLandingZoneOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ResetLandingZoneCommandInput - {@link ResetLandingZoneCommandInput}
 * @returns {@link ResetLandingZoneCommandOutput}
 * @see {@link ResetLandingZoneCommandInput} for command's `input` shape.
 * @see {@link ResetLandingZoneCommandOutput} for command's `response` shape.
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
export class ResetLandingZoneCommand extends $Command
  .classBuilder<
    ResetLandingZoneCommandInput,
    ResetLandingZoneCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSControlTowerApis", "ResetLandingZone", {})
  .n("ControlTowerClient", "ResetLandingZoneCommand")
  .sc(ResetLandingZone)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetLandingZoneInput;
      output: ResetLandingZoneOutput;
    };
    sdk: {
      input: ResetLandingZoneCommandInput;
      output: ResetLandingZoneCommandOutput;
    };
  };
}
