// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeGlobalNetworksRequest, DescribeGlobalNetworksResponse } from "../models/models_0";
import { DescribeGlobalNetworks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes one or more global networks. By default, all global networks are described. To describe the objects in your global network, you must use the appropriate `Get*` action. For example, to list the transit gateways in your global network, use GetTransitGatewayRegistrations.
 *
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
export class DescribeGlobalNetworksCommand extends command<DescribeGlobalNetworksCommandInput, DescribeGlobalNetworksCommandOutput>(
  _ep0,
  _mw0,
  "DescribeGlobalNetworks",
  DescribeGlobalNetworks$
) {
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
