// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { DescribeNetworkRequest, DescribeNetworkResponse } from "../models/models_1";
import { DescribeNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkCommand}.
 */
export interface DescribeNetworkCommandInput extends DescribeNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkCommand}.
 */
export interface DescribeNetworkCommandOutput extends DescribeNetworkResponse, __MetadataBearer {}

/**
 * Get details about a Network.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeNetworkCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeNetworkCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeNetworkRequest
 *   NetworkId: "STRING_VALUE", // required
 * };
 * const command = new DescribeNetworkCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkResponse
 * //   Arn: "STRING_VALUE",
 * //   AssociatedClusterIds: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   Id: "STRING_VALUE",
 * //   IpPools: [ // __listOfIpPool
 * //     { // IpPool
 * //       Cidr: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Name: "STRING_VALUE",
 * //   Routes: [ // __listOfRoute
 * //     { // Route
 * //       Cidr: "STRING_VALUE",
 * //       Gateway: "STRING_VALUE",
 * //     },
 * //   ],
 * //   State: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "IDLE" || "IN_USE" || "UPDATING" || "DELETE_FAILED" || "DELETED",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkCommandInput - {@link DescribeNetworkCommandInput}
 * @returns {@link DescribeNetworkCommandOutput}
 * @see {@link DescribeNetworkCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class DescribeNetworkCommand extends $Command
  .classBuilder<
    DescribeNetworkCommandInput,
    DescribeNetworkCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DescribeNetwork", {})
  .n("MediaLiveClient", "DescribeNetworkCommand")
  .sc(DescribeNetwork$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNetworkRequest;
      output: DescribeNetworkResponse;
    };
    sdk: {
      input: DescribeNetworkCommandInput;
      output: DescribeNetworkCommandOutput;
    };
  };
}
