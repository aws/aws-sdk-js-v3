// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeGlobalNetworksRequest, DescribeGlobalNetworksResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DescribeGlobalNetworks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGlobalNetworksCommand}.
 */
export interface DescribeGlobalNetworksCommandInput extends DescribeGlobalNetworksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGlobalNetworksCommand}.
 */
export interface DescribeGlobalNetworksCommandOutput extends DescribeGlobalNetworksResponse, __MetadataBearer {}

/**
 * <p>Describes one or more global networks. By default, all global networks are
 *             described. To describe the objects in your global network, you must use the appropriate
 *                 <code>Get*</code> action. For example, to list the transit gateways in your global
 *             network, use <a>GetTransitGatewayRegistrations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DescribeGlobalNetworksCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DescribeGlobalNetworksCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DescribeGlobalNetworksRequest
 *   GlobalNetworkIds: [ // GlobalNetworkIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeGlobalNetworksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGlobalNetworksResponse
 * //   GlobalNetworks: [ // GlobalNetworkList
 * //     { // GlobalNetwork
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       GlobalNetworkArn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeGlobalNetworksCommandInput - {@link DescribeGlobalNetworksCommandInput}
 * @returns {@link DescribeGlobalNetworksCommandOutput}
 * @see {@link DescribeGlobalNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalNetworksCommandOutput} for command's `response` shape.
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
export class DescribeGlobalNetworksCommand extends $Command
  .classBuilder<
    DescribeGlobalNetworksCommandInput,
    DescribeGlobalNetworksCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "DescribeGlobalNetworks", {})
  .n("NetworkManagerClient", "DescribeGlobalNetworksCommand")
  .sc(DescribeGlobalNetworks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGlobalNetworksRequest;
      output: DescribeGlobalNetworksResponse;
    };
    sdk: {
      input: DescribeGlobalNetworksCommandInput;
      output: DescribeGlobalNetworksCommandOutput;
    };
  };
}
