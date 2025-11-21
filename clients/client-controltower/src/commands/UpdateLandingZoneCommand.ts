// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLandingZoneInput, UpdateLandingZoneOutput } from "../models/models_0";
import { UpdateLandingZone } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLandingZoneCommand}.
 */
export interface UpdateLandingZoneCommandInput extends UpdateLandingZoneInput {}
/**
 * @public
 *
 * The output of {@link UpdateLandingZoneCommand}.
 */
export interface UpdateLandingZoneCommandOutput extends UpdateLandingZoneOutput, __MetadataBearer {}

/**
 * <p>This API call updates the landing zone. It starts an asynchronous operation that updates the landing zone based on the new landing zone version, or on the changed parameters specified in the updated manifest file. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, UpdateLandingZoneCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, UpdateLandingZoneCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // UpdateLandingZoneInput
 *   version: "STRING_VALUE", // required
 *   remediationTypes: [ // RemediationTypes
 *     "INHERITANCE_DRIFT",
 *   ],
 *   landingZoneIdentifier: "STRING_VALUE", // required
 *   manifest: "DOCUMENT_VALUE",
 * };
 * const command = new UpdateLandingZoneCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLandingZoneOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateLandingZoneCommandInput - {@link UpdateLandingZoneCommandInput}
 * @returns {@link UpdateLandingZoneCommandOutput}
 * @see {@link UpdateLandingZoneCommandInput} for command's `input` shape.
 * @see {@link UpdateLandingZoneCommandOutput} for command's `response` shape.
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
export class UpdateLandingZoneCommand extends $Command
  .classBuilder<
    UpdateLandingZoneCommandInput,
    UpdateLandingZoneCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSControlTowerApis", "UpdateLandingZone", {})
  .n("ControlTowerClient", "UpdateLandingZoneCommand")
  .sc(UpdateLandingZone)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLandingZoneInput;
      output: UpdateLandingZoneOutput;
    };
    sdk: {
      input: UpdateLandingZoneCommandInput;
      output: UpdateLandingZoneCommandOutput;
    };
  };
}
