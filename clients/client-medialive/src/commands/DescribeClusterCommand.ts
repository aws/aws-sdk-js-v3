// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeClusterRequest, DescribeClusterResponse } from "../models/models_2";
import { de_DescribeClusterCommand, se_DescribeClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandInput extends DescribeClusterRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandOutput extends DescribeClusterResponse, __MetadataBearer {}

/**
 * Get details about a Cluster.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeClusterCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeClusterCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeClusterRequest
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterResponse
 * //   Arn: "STRING_VALUE",
 * //   ChannelIds: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   ClusterType: "ON_PREMISES",
 * //   Id: "STRING_VALUE",
 * //   InstanceRoleArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   NetworkSettings: { // ClusterNetworkSettings
 * //     DefaultRoute: "STRING_VALUE",
 * //     InterfaceMappings: [ // __listOfInterfaceMapping
 * //       { // InterfaceMapping
 * //         LogicalInterfaceName: "STRING_VALUE",
 * //         NetworkId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   State: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETE_FAILED" || "DELETED",
 * // };
 *
 * ```
 *
 * @param DescribeClusterCommandInput - {@link DescribeClusterCommandInput}
 * @returns {@link DescribeClusterCommandOutput}
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
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
export class DescribeClusterCommand extends $Command
  .classBuilder<
    DescribeClusterCommandInput,
    DescribeClusterCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "DescribeCluster", {})
  .n("MediaLiveClient", "DescribeClusterCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClusterCommand)
  .de(de_DescribeClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterRequest;
      output: DescribeClusterResponse;
    };
    sdk: {
      input: DescribeClusterCommandInput;
      output: DescribeClusterCommandOutput;
    };
  };
}
