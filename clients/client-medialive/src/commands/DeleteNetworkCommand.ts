// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteNetworkRequest, DeleteNetworkResponse } from "../models/models_2";
import { de_DeleteNetworkCommand, se_DeleteNetworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkCommand}.
 */
export interface DeleteNetworkCommandInput extends DeleteNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkCommand}.
 */
export interface DeleteNetworkCommandOutput extends DeleteNetworkResponse, __MetadataBearer {}

/**
 * Delete a Network. The Network must have no resources associated with it.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteNetworkCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteNetworkCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteNetworkRequest
 *   NetworkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkResponse
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
 * @param DeleteNetworkCommandInput - {@link DeleteNetworkCommandInput}
 * @returns {@link DeleteNetworkCommandOutput}
 * @see {@link DeleteNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkCommandOutput} for command's `response` shape.
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
export class DeleteNetworkCommand extends $Command
  .classBuilder<
    DeleteNetworkCommandInput,
    DeleteNetworkCommandOutput,
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
  .s("MediaLive", "DeleteNetwork", {})
  .n("MediaLiveClient", "DeleteNetworkCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNetworkCommand)
  .de(de_DeleteNetworkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkRequest;
      output: DeleteNetworkResponse;
    };
    sdk: {
      input: DeleteNetworkCommandInput;
      output: DeleteNetworkCommandOutput;
    };
  };
}
