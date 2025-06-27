// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetNetworkResourceRelationshipsRequest, GetNetworkResourceRelationshipsResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_GetNetworkResourceRelationshipsCommand,
  se_GetNetworkResourceRelationshipsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkResourceRelationshipsCommand}.
 */
export interface GetNetworkResourceRelationshipsCommandInput extends GetNetworkResourceRelationshipsRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkResourceRelationshipsCommand}.
 */
export interface GetNetworkResourceRelationshipsCommandOutput
  extends GetNetworkResourceRelationshipsResponse,
    __MetadataBearer {}

/**
 * <p>Gets the network resource relationships for the specified global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetNetworkResourceRelationshipsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetNetworkResourceRelationshipsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetNetworkResourceRelationshipsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   CoreNetworkId: "STRING_VALUE",
 *   RegisteredGatewayArn: "STRING_VALUE",
 *   AwsRegion: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 *   ResourceType: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetNetworkResourceRelationshipsCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkResourceRelationshipsResponse
 * //   Relationships: [ // RelationshipList
 * //     { // Relationship
 * //       From: "STRING_VALUE",
 * //       To: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNetworkResourceRelationshipsCommandInput - {@link GetNetworkResourceRelationshipsCommandInput}
 * @returns {@link GetNetworkResourceRelationshipsCommandOutput}
 * @see {@link GetNetworkResourceRelationshipsCommandInput} for command's `input` shape.
 * @see {@link GetNetworkResourceRelationshipsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class GetNetworkResourceRelationshipsCommand extends $Command
  .classBuilder<
    GetNetworkResourceRelationshipsCommandInput,
    GetNetworkResourceRelationshipsCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "GetNetworkResourceRelationships", {})
  .n("NetworkManagerClient", "GetNetworkResourceRelationshipsCommand")
  .f(void 0, void 0)
  .ser(se_GetNetworkResourceRelationshipsCommand)
  .de(de_GetNetworkResourceRelationshipsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkResourceRelationshipsRequest;
      output: GetNetworkResourceRelationshipsResponse;
    };
    sdk: {
      input: GetNetworkResourceRelationshipsCommandInput;
      output: GetNetworkResourceRelationshipsCommandOutput;
    };
  };
}
