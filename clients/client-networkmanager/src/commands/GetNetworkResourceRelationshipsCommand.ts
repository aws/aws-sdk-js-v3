// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetNetworkResourceRelationshipsRequest,
  GetNetworkResourceRelationshipsResponse,
} from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { GetNetworkResourceRelationships } from "../schemas/schemas_0";

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
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "GetNetworkResourceRelationships", {})
  .n("NetworkManagerClient", "GetNetworkResourceRelationshipsCommand")
  .sc(GetNetworkResourceRelationships)
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
