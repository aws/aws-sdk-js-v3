// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateNetworkRequest, CreateNetworkResponse } from "../models/models_2";
import { de_CreateNetworkCommand, se_CreateNetworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkCommand}.
 */
export interface CreateNetworkCommandInput extends CreateNetworkRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkCommand}.
 */
export interface CreateNetworkCommandOutput extends CreateNetworkResponse, __MetadataBearer {}

/**
 * Create as many Networks as you need. You will associate one or more Clusters with each Network.Each Network provides MediaLive Anywhere with required information about the network in your organization that you are using for video encoding using MediaLive.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateNetworkCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateNetworkCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // CreateNetworkRequest
 *   IpPools: [ // __listOfIpPoolCreateRequest
 *     { // IpPoolCreateRequest
 *       Cidr: "STRING_VALUE",
 *     },
 *   ],
 *   Name: "STRING_VALUE",
 *   RequestId: "STRING_VALUE",
 *   Routes: [ // __listOfRouteCreateRequest
 *     { // RouteCreateRequest
 *       Cidr: "STRING_VALUE",
 *       Gateway: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateNetworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkResponse
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
 * @param CreateNetworkCommandInput - {@link CreateNetworkCommandInput}
 * @returns {@link CreateNetworkCommandOutput}
 * @see {@link CreateNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateNetworkCommand extends $Command
  .classBuilder<
    CreateNetworkCommandInput,
    CreateNetworkCommandOutput,
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
  .s("MediaLive", "CreateNetwork", {})
  .n("MediaLiveClient", "CreateNetworkCommand")
  .f(void 0, void 0)
  .ser(se_CreateNetworkCommand)
  .de(de_CreateNetworkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkRequest;
      output: CreateNetworkResponse;
    };
    sdk: {
      input: CreateNetworkCommandInput;
      output: CreateNetworkCommandOutput;
    };
  };
}
