// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateNodeRequest, CreateNodeResponse } from "../models/models_2";
import { de_CreateNodeCommand, se_CreateNodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNodeCommand}.
 */
export interface CreateNodeCommandInput extends CreateNodeRequest {}
/**
 * @public
 *
 * The output of {@link CreateNodeCommand}.
 */
export interface CreateNodeCommandOutput extends CreateNodeResponse, __MetadataBearer {}

/**
 * Create a Node in the specified Cluster. You can also create Nodes using the CreateNodeRegistrationScript. Note that you can't move a Node to another Cluster.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateNodeCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateNodeCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // CreateNodeRequest
 *   ClusterId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   NodeInterfaceMappings: [ // __listOfNodeInterfaceMappingCreateRequest
 *     { // NodeInterfaceMappingCreateRequest
 *       LogicalInterfaceName: "STRING_VALUE",
 *       NetworkInterfaceMode: "NAT" || "BRIDGE",
 *       PhysicalInterfaceName: "STRING_VALUE",
 *     },
 *   ],
 *   RequestId: "STRING_VALUE",
 *   Role: "BACKUP" || "ACTIVE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateNodeCommand(input);
 * const response = await client.send(command);
 * // { // CreateNodeResponse
 * //   Arn: "STRING_VALUE",
 * //   ChannelPlacementGroups: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   ClusterId: "STRING_VALUE",
 * //   ConnectionState: "CONNECTED" || "DISCONNECTED",
 * //   Id: "STRING_VALUE",
 * //   InstanceArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   NodeInterfaceMappings: [ // __listOfNodeInterfaceMapping
 * //     { // NodeInterfaceMapping
 * //       LogicalInterfaceName: "STRING_VALUE",
 * //       NetworkInterfaceMode: "NAT" || "BRIDGE",
 * //       PhysicalInterfaceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Role: "BACKUP" || "ACTIVE",
 * //   State: "CREATED" || "REGISTERING" || "READY_TO_ACTIVATE" || "REGISTRATION_FAILED" || "ACTIVATION_FAILED" || "ACTIVE" || "READY" || "IN_USE" || "DEREGISTERING" || "DRAINING" || "DEREGISTRATION_FAILED" || "DEREGISTERED",
 * // };
 *
 * ```
 *
 * @param CreateNodeCommandInput - {@link CreateNodeCommandInput}
 * @returns {@link CreateNodeCommandOutput}
 * @see {@link CreateNodeCommandInput} for command's `input` shape.
 * @see {@link CreateNodeCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class CreateNodeCommand extends $Command
  .classBuilder<
    CreateNodeCommandInput,
    CreateNodeCommandOutput,
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
  .s("MediaLive", "CreateNode", {})
  .n("MediaLiveClient", "CreateNodeCommand")
  .f(void 0, void 0)
  .ser(se_CreateNodeCommand)
  .de(de_CreateNodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNodeRequest;
      output: CreateNodeResponse;
    };
    sdk: {
      input: CreateNodeCommandInput;
      output: CreateNodeCommandOutput;
    };
  };
}
