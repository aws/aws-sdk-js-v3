// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetNetworkResourceCountsRequest, GetNetworkResourceCountsResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { GetNetworkResourceCounts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkResourceCountsCommand}.
 */
export interface GetNetworkResourceCountsCommandInput extends GetNetworkResourceCountsRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkResourceCountsCommand}.
 */
export interface GetNetworkResourceCountsCommandOutput extends GetNetworkResourceCountsResponse, __MetadataBearer {}

/**
 * <p>Gets the count of network resources, by resource type, for the specified global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetNetworkResourceCountsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetNetworkResourceCountsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetNetworkResourceCountsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetNetworkResourceCountsCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkResourceCountsResponse
 * //   NetworkResourceCounts: [ // NetworkResourceCountList
 * //     { // NetworkResourceCount
 * //       ResourceType: "STRING_VALUE",
 * //       Count: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNetworkResourceCountsCommandInput - {@link GetNetworkResourceCountsCommandInput}
 * @returns {@link GetNetworkResourceCountsCommandOutput}
 * @see {@link GetNetworkResourceCountsCommandInput} for command's `input` shape.
 * @see {@link GetNetworkResourceCountsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
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
export class GetNetworkResourceCountsCommand extends $Command
  .classBuilder<
    GetNetworkResourceCountsCommandInput,
    GetNetworkResourceCountsCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "GetNetworkResourceCounts", {})
  .n("NetworkManagerClient", "GetNetworkResourceCountsCommand")
  .sc(GetNetworkResourceCounts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkResourceCountsRequest;
      output: GetNetworkResourceCountsResponse;
    };
    sdk: {
      input: GetNetworkResourceCountsCommandInput;
      output: GetNetworkResourceCountsCommandOutput;
    };
  };
}
