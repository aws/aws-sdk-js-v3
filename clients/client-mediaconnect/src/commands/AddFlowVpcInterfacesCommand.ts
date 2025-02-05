// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddFlowVpcInterfacesRequest, AddFlowVpcInterfacesResponse } from "../models/models_0";
import { de_AddFlowVpcInterfacesCommand, se_AddFlowVpcInterfacesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddFlowVpcInterfacesCommand}.
 */
export interface AddFlowVpcInterfacesCommandInput extends AddFlowVpcInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link AddFlowVpcInterfacesCommand}.
 */
export interface AddFlowVpcInterfacesCommandOutput extends AddFlowVpcInterfacesResponse, __MetadataBearer {}

/**
 * Adds VPC interfaces to flow
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowVpcInterfacesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowVpcInterfacesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaConnectClient(config);
 * const input = { // AddFlowVpcInterfacesRequest
 *   FlowArn: "STRING_VALUE", // required
 *   VpcInterfaces: [ // __listOfVpcInterfaceRequest // required
 *     { // VpcInterfaceRequest
 *       Name: "STRING_VALUE", // required
 *       NetworkInterfaceType: "ena" || "efa",
 *       RoleArn: "STRING_VALUE", // required
 *       SecurityGroupIds: [ // __listOf__string // required
 *         "STRING_VALUE",
 *       ],
 *       SubnetId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AddFlowVpcInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // AddFlowVpcInterfacesResponse
 * //   FlowArn: "STRING_VALUE",
 * //   VpcInterfaces: [ // __listOfVpcInterface
 * //     { // VpcInterface
 * //       Name: "STRING_VALUE", // required
 * //       NetworkInterfaceIds: [ // __listOf__string // required
 * //         "STRING_VALUE",
 * //       ],
 * //       NetworkInterfaceType: "ena" || "efa", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       SecurityGroupIds: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddFlowVpcInterfacesCommandInput - {@link AddFlowVpcInterfacesCommandInput}
 * @returns {@link AddFlowVpcInterfacesCommandOutput}
 * @see {@link AddFlowVpcInterfacesCommandInput} for command's `input` shape.
 * @see {@link AddFlowVpcInterfacesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 * @public
 */
export class AddFlowVpcInterfacesCommand extends $Command
  .classBuilder<
    AddFlowVpcInterfacesCommandInput,
    AddFlowVpcInterfacesCommandOutput,
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
  .s("MediaConnect", "AddFlowVpcInterfaces", {})
  .n("MediaConnectClient", "AddFlowVpcInterfacesCommand")
  .f(void 0, void 0)
  .ser(se_AddFlowVpcInterfacesCommand)
  .de(de_AddFlowVpcInterfacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddFlowVpcInterfacesRequest;
      output: AddFlowVpcInterfacesResponse;
    };
    sdk: {
      input: AddFlowVpcInterfacesCommandInput;
      output: AddFlowVpcInterfacesCommandOutput;
    };
  };
}
