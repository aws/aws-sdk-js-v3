// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { UpdateClusterRequest, UpdateClusterResponse } from "../models/models_1";
import { UpdateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandInput extends UpdateClusterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandOutput extends UpdateClusterResponse, __MetadataBearer {}

/**
 * Change the settings for a Cluster.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateClusterCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateClusterCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateClusterRequest
 *   ClusterId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   NetworkSettings: { // ClusterNetworkSettingsUpdateRequest
 *     DefaultRoute: "STRING_VALUE",
 *     InterfaceMappings: [ // __listOfInterfaceMappingUpdateRequest
 *       { // InterfaceMappingUpdateRequest
 *         LogicalInterfaceName: "STRING_VALUE",
 *         NetworkId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterResponse
 * //   Arn: "STRING_VALUE",
 * //   ChannelIds: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   ClusterType: "ON_PREMISES",
 * //   Id: "STRING_VALUE",
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
 * @param UpdateClusterCommandInput - {@link UpdateClusterCommandInput}
 * @returns {@link UpdateClusterCommandOutput}
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class UpdateClusterCommand extends $Command
  .classBuilder<
    UpdateClusterCommandInput,
    UpdateClusterCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "UpdateCluster", {})
  .n("MediaLiveClient", "UpdateClusterCommand")
  .sc(UpdateCluster$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterRequest;
      output: UpdateClusterResponse;
    };
    sdk: {
      input: UpdateClusterCommandInput;
      output: UpdateClusterCommandOutput;
    };
  };
}
