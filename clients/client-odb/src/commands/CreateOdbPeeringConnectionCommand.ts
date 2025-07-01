// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateOdbPeeringConnectionInput, CreateOdbPeeringConnectionOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { de_CreateOdbPeeringConnectionCommand, se_CreateOdbPeeringConnectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOdbPeeringConnectionCommand}.
 */
export interface CreateOdbPeeringConnectionCommandInput extends CreateOdbPeeringConnectionInput {}
/**
 * @public
 *
 * The output of {@link CreateOdbPeeringConnectionCommand}.
 */
export interface CreateOdbPeeringConnectionCommandOutput extends CreateOdbPeeringConnectionOutput, __MetadataBearer {}

/**
 * <p>Creates a peering connection between an ODB network and either another ODB network or a customer-owned VPC.</p> <p>A peering connection enables private connectivity between the networks for application-tier communication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, CreateOdbPeeringConnectionCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, CreateOdbPeeringConnectionCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * const client = new OdbClient(config);
 * const input = { // CreateOdbPeeringConnectionInput
 *   odbNetworkId: "STRING_VALUE", // required
 *   peerNetworkId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateOdbPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateOdbPeeringConnectionOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   odbPeeringConnectionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateOdbPeeringConnectionCommandInput - {@link CreateOdbPeeringConnectionCommandInput}
 * @returns {@link CreateOdbPeeringConnectionCommandOutput}
 * @see {@link CreateOdbPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateOdbPeeringConnectionCommandOutput} for command's `response` shape.
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
export class CreateOdbPeeringConnectionCommand extends $Command
  .classBuilder<
    CreateOdbPeeringConnectionCommandInput,
    CreateOdbPeeringConnectionCommandOutput,
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
  .s("Odb", "CreateOdbPeeringConnection", {})
  .n("OdbClient", "CreateOdbPeeringConnectionCommand")
  .f(void 0, void 0)
  .ser(se_CreateOdbPeeringConnectionCommand)
  .de(de_CreateOdbPeeringConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOdbPeeringConnectionInput;
      output: CreateOdbPeeringConnectionOutput;
    };
    sdk: {
      input: CreateOdbPeeringConnectionCommandInput;
      output: CreateOdbPeeringConnectionCommandOutput;
    };
  };
}
