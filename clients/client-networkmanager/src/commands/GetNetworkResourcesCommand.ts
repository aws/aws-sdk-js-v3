// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetNetworkResourcesRequest, GetNetworkResourcesResponse } from "../models/models_0";
import { GetNetworkResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetNetworkResourcesCommand}.
 */
export interface GetNetworkResourcesCommandInput extends GetNetworkResourcesRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkResourcesCommand}.
 */
export interface GetNetworkResourcesCommandOutput extends GetNetworkResourcesResponse, __MetadataBearer {}

/**
 * Describes the network resources for the specified global network.
 *
 * The results include information from the corresponding Describe call for the resource, minus any sensitive information such as pre-shared keys.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetNetworkResourcesCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetNetworkResourcesCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetNetworkResourcesRequest
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
 * const command = new GetNetworkResourcesCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkResourcesResponse
 * //   NetworkResources: [ // NetworkResourceList
 * //     { // NetworkResource
 * //       RegisteredGatewayArn: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       AwsRegion: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       Definition: "STRING_VALUE",
 * //       DefinitionTimestamp: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Metadata: { // NetworkResourceMetadataMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNetworkResourcesCommandInput - {@link GetNetworkResourcesCommandInput}
 * @returns {@link GetNetworkResourcesCommandOutput}
 * @see {@link GetNetworkResourcesCommandInput} for command's `input` shape.
 * @see {@link GetNetworkResourcesCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class GetNetworkResourcesCommand extends command<GetNetworkResourcesCommandInput, GetNetworkResourcesCommandOutput>(
  _ep0,
  _mw0,
  "GetNetworkResources",
  GetNetworkResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkResourcesRequest;
      output: GetNetworkResourcesResponse;
    };
    sdk: {
      input: GetNetworkResourcesCommandInput;
      output: GetNetworkResourcesCommandOutput;
    };
  };
}
