// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLandingZoneInput, DeleteLandingZoneOutput } from "../models/models_0";
import { DeleteLandingZone } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLandingZoneCommand}.
 */
export interface DeleteLandingZoneCommandInput extends DeleteLandingZoneInput {}
/**
 * @public
 *
 * The output of {@link DeleteLandingZoneCommand}.
 */
export interface DeleteLandingZoneCommandOutput extends DeleteLandingZoneOutput, __MetadataBearer {}

/**
 * <p>Decommissions a landing zone. This API call starts an asynchronous operation that deletes Amazon Web Services Control Tower resources deployed in accounts managed by Amazon Web Services Control Tower.</p> <p>Decommissioning a landing zone is a process with significant consequences, and it cannot be undone. We strongly recommend that you perform this decommissioning process only if you intend to stop using your landing zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, DeleteLandingZoneCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, DeleteLandingZoneCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // DeleteLandingZoneInput
 *   landingZoneIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteLandingZoneCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLandingZoneOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteLandingZoneCommandInput - {@link DeleteLandingZoneCommandInput}
 * @returns {@link DeleteLandingZoneCommandOutput}
 * @see {@link DeleteLandingZoneCommandInput} for command's `input` shape.
 * @see {@link DeleteLandingZoneCommandOutput} for command's `response` shape.
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
export class DeleteLandingZoneCommand extends $Command
  .classBuilder<
    DeleteLandingZoneCommandInput,
    DeleteLandingZoneCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSControlTowerApis", "DeleteLandingZone", {})
  .n("ControlTowerClient", "DeleteLandingZoneCommand")
  .sc(DeleteLandingZone)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLandingZoneInput;
      output: DeleteLandingZoneOutput;
    };
    sdk: {
      input: DeleteLandingZoneCommandInput;
      output: DeleteLandingZoneCommandOutput;
    };
  };
}
