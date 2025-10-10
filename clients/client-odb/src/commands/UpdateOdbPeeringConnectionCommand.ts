// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateOdbPeeringConnectionInput, UpdateOdbPeeringConnectionOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { de_UpdateOdbPeeringConnectionCommand, se_UpdateOdbPeeringConnectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOdbPeeringConnectionCommand}.
 */
export interface UpdateOdbPeeringConnectionCommandInput extends UpdateOdbPeeringConnectionInput {}
/**
 * @public
 *
 * The output of {@link UpdateOdbPeeringConnectionCommand}.
 */
export interface UpdateOdbPeeringConnectionCommandOutput extends UpdateOdbPeeringConnectionOutput, __MetadataBearer {}

/**
 * <p>Modifies the settings of an Oracle Database@Amazon Web Services peering connection. You can update the display name and add or remove CIDR blocks from the peering connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, UpdateOdbPeeringConnectionCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, UpdateOdbPeeringConnectionCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // UpdateOdbPeeringConnectionInput
 *   odbPeeringConnectionId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   peerNetworkCidrsToBeAdded: [ // PeeredCidrList
 *     "STRING_VALUE",
 *   ],
 *   peerNetworkCidrsToBeRemoved: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateOdbPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOdbPeeringConnectionOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   odbPeeringConnectionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateOdbPeeringConnectionCommandInput - {@link UpdateOdbPeeringConnectionCommandInput}
 * @returns {@link UpdateOdbPeeringConnectionCommandOutput}
 * @see {@link UpdateOdbPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateOdbPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class UpdateOdbPeeringConnectionCommand extends $Command
  .classBuilder<
    UpdateOdbPeeringConnectionCommandInput,
    UpdateOdbPeeringConnectionCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Odb", "UpdateOdbPeeringConnection", {})
  .n("OdbClient", "UpdateOdbPeeringConnectionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateOdbPeeringConnectionCommand)
  .de(de_UpdateOdbPeeringConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOdbPeeringConnectionInput;
      output: UpdateOdbPeeringConnectionOutput;
    };
    sdk: {
      input: UpdateOdbPeeringConnectionCommandInput;
      output: UpdateOdbPeeringConnectionCommandOutput;
    };
  };
}
