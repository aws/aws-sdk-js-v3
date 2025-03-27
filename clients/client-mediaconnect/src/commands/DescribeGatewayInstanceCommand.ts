// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DescribeGatewayInstanceRequest, DescribeGatewayInstanceResponse } from "../models/models_0";
import { de_DescribeGatewayInstanceCommand, se_DescribeGatewayInstanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGatewayInstanceCommand}.
 */
export interface DescribeGatewayInstanceCommandInput extends DescribeGatewayInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGatewayInstanceCommand}.
 */
export interface DescribeGatewayInstanceCommandOutput extends DescribeGatewayInstanceResponse, __MetadataBearer {}

/**
 * <p>
 *    Displays the details of an instance.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DescribeGatewayInstanceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DescribeGatewayInstanceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // DescribeGatewayInstanceRequest
 *   GatewayInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeGatewayInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGatewayInstanceResponse
 * //   GatewayInstance: { // GatewayInstance
 * //     BridgePlacement: "AVAILABLE" || "LOCKED", // required
 * //     ConnectionStatus: "CONNECTED" || "DISCONNECTED", // required
 * //     GatewayArn: "STRING_VALUE", // required
 * //     GatewayInstanceArn: "STRING_VALUE", // required
 * //     InstanceId: "STRING_VALUE", // required
 * //     InstanceMessages: [ // __listOfMessageDetail
 * //       { // MessageDetail
 * //         Code: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //         ResourceName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     InstanceState: "REGISTERING" || "ACTIVE" || "DEREGISTERING" || "DEREGISTERED" || "REGISTRATION_ERROR" || "DEREGISTRATION_ERROR", // required
 * //     RunningBridgeCount: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeGatewayInstanceCommandInput - {@link DescribeGatewayInstanceCommandInput}
 * @returns {@link DescribeGatewayInstanceCommandOutput}
 * @see {@link DescribeGatewayInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayInstanceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 * </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 * </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 * </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.
 * </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.
 * </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy.
 * </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling.
 * </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class DescribeGatewayInstanceCommand extends $Command
  .classBuilder<
    DescribeGatewayInstanceCommandInput,
    DescribeGatewayInstanceCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "DescribeGatewayInstance", {})
  .n("MediaConnectClient", "DescribeGatewayInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeGatewayInstanceCommand)
  .de(de_DescribeGatewayInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGatewayInstanceRequest;
      output: DescribeGatewayInstanceResponse;
    };
    sdk: {
      input: DescribeGatewayInstanceCommandInput;
      output: DescribeGatewayInstanceCommandOutput;
    };
  };
}
