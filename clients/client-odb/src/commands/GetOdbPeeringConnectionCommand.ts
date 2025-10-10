// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOdbPeeringConnectionInput, GetOdbPeeringConnectionOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { de_GetOdbPeeringConnectionCommand, se_GetOdbPeeringConnectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOdbPeeringConnectionCommand}.
 */
export interface GetOdbPeeringConnectionCommandInput extends GetOdbPeeringConnectionInput {}
/**
 * @public
 *
 * The output of {@link GetOdbPeeringConnectionCommand}.
 */
export interface GetOdbPeeringConnectionCommandOutput extends GetOdbPeeringConnectionOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about an ODB peering connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetOdbPeeringConnectionCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetOdbPeeringConnectionCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // GetOdbPeeringConnectionInput
 *   odbPeeringConnectionId: "STRING_VALUE", // required
 * };
 * const command = new GetOdbPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // { // GetOdbPeeringConnectionOutput
 * //   odbPeeringConnection: { // OdbPeeringConnection
 * //     odbPeeringConnectionId: "STRING_VALUE", // required
 * //     displayName: "STRING_VALUE",
 * //     status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //     statusReason: "STRING_VALUE",
 * //     odbPeeringConnectionArn: "STRING_VALUE",
 * //     odbNetworkArn: "STRING_VALUE",
 * //     peerNetworkArn: "STRING_VALUE",
 * //     odbPeeringConnectionType: "STRING_VALUE",
 * //     peerNetworkCidrs: [ // PeeredCidrList
 * //       "STRING_VALUE",
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     percentProgress: Number("float"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOdbPeeringConnectionCommandInput - {@link GetOdbPeeringConnectionCommandInput}
 * @returns {@link GetOdbPeeringConnectionCommandOutput}
 * @see {@link GetOdbPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link GetOdbPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
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
export class GetOdbPeeringConnectionCommand extends $Command
  .classBuilder<
    GetOdbPeeringConnectionCommandInput,
    GetOdbPeeringConnectionCommandOutput,
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
  .s("Odb", "GetOdbPeeringConnection", {})
  .n("OdbClient", "GetOdbPeeringConnectionCommand")
  .f(void 0, void 0)
  .ser(se_GetOdbPeeringConnectionCommand)
  .de(de_GetOdbPeeringConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOdbPeeringConnectionInput;
      output: GetOdbPeeringConnectionOutput;
    };
    sdk: {
      input: GetOdbPeeringConnectionCommandInput;
      output: GetOdbPeeringConnectionCommandOutput;
    };
  };
}
