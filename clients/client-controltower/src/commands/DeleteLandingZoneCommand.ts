// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLandingZoneInput, DeleteLandingZoneOutput } from "../models/models_0";
import { de_DeleteLandingZoneCommand, se_DeleteLandingZoneCommand } from "../protocols/Aws_restJson1";

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
 * <p>Decommissions a landing zone. This API call starts an asynchronous operation that deletes Amazon Web Services Control Tower
 *          resources deployed in accounts managed by Amazon Web Services Control Tower.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, DeleteLandingZoneCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, DeleteLandingZoneCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "DeleteLandingZone", {})
  .n("ControlTowerClient", "DeleteLandingZoneCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLandingZoneCommand)
  .de(de_DeleteLandingZoneCommand)
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
