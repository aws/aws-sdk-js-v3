// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOdbPeeringConnectionsInput, ListOdbPeeringConnectionsOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { ListOdbPeeringConnections } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOdbPeeringConnectionsCommand}.
 */
export interface ListOdbPeeringConnectionsCommandInput extends ListOdbPeeringConnectionsInput {}
/**
 * @public
 *
 * The output of {@link ListOdbPeeringConnectionsCommand}.
 */
export interface ListOdbPeeringConnectionsCommandOutput extends ListOdbPeeringConnectionsOutput, __MetadataBearer {}

/**
 * <p>Lists all ODB peering connections or those associated with a specific ODB network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListOdbPeeringConnectionsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListOdbPeeringConnectionsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListOdbPeeringConnectionsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   odbNetworkId: "STRING_VALUE",
 * };
 * const command = new ListOdbPeeringConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListOdbPeeringConnectionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   odbPeeringConnections: [ // OdbPeeringConnectionList // required
 * //     { // OdbPeeringConnectionSummary
 * //       odbPeeringConnectionId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //       status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //       statusReason: "STRING_VALUE",
 * //       odbPeeringConnectionArn: "STRING_VALUE",
 * //       odbNetworkArn: "STRING_VALUE",
 * //       peerNetworkArn: "STRING_VALUE",
 * //       odbPeeringConnectionType: "STRING_VALUE",
 * //       peerNetworkCidrs: [ // PeeredCidrList
 * //         "STRING_VALUE",
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"),
 * //       percentProgress: Number("float"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOdbPeeringConnectionsCommandInput - {@link ListOdbPeeringConnectionsCommandInput}
 * @returns {@link ListOdbPeeringConnectionsCommandOutput}
 * @see {@link ListOdbPeeringConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListOdbPeeringConnectionsCommandOutput} for command's `response` shape.
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
export class ListOdbPeeringConnectionsCommand extends $Command
  .classBuilder<
    ListOdbPeeringConnectionsCommandInput,
    ListOdbPeeringConnectionsCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "ListOdbPeeringConnections", {})
  .n("OdbClient", "ListOdbPeeringConnectionsCommand")
  .sc(ListOdbPeeringConnections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOdbPeeringConnectionsInput;
      output: ListOdbPeeringConnectionsOutput;
    };
    sdk: {
      input: ListOdbPeeringConnectionsCommandInput;
      output: ListOdbPeeringConnectionsCommandOutput;
    };
  };
}
