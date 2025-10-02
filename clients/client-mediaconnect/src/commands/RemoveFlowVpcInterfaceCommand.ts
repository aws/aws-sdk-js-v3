// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveFlowVpcInterfaceRequest, RemoveFlowVpcInterfaceResponse } from "../models/models_0";
import { de_RemoveFlowVpcInterfaceCommand, se_RemoveFlowVpcInterfaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveFlowVpcInterfaceCommand}.
 */
export interface RemoveFlowVpcInterfaceCommandInput extends RemoveFlowVpcInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link RemoveFlowVpcInterfaceCommand}.
 */
export interface RemoveFlowVpcInterfaceCommandOutput extends RemoveFlowVpcInterfaceResponse, __MetadataBearer {}

/**
 * <p> Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowVpcInterfaceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowVpcInterfaceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // RemoveFlowVpcInterfaceRequest
 *   FlowArn: "STRING_VALUE", // required
 *   VpcInterfaceName: "STRING_VALUE", // required
 * };
 * const command = new RemoveFlowVpcInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // RemoveFlowVpcInterfaceResponse
 * //   FlowArn: "STRING_VALUE",
 * //   NonDeletedNetworkInterfaceIds: [ // __listOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   VpcInterfaceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveFlowVpcInterfaceCommandInput - {@link RemoveFlowVpcInterfaceCommandInput}
 * @returns {@link RemoveFlowVpcInterfaceCommandOutput}
 * @see {@link RemoveFlowVpcInterfaceCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowVpcInterfaceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class RemoveFlowVpcInterfaceCommand extends $Command
  .classBuilder<
    RemoveFlowVpcInterfaceCommandInput,
    RemoveFlowVpcInterfaceCommandOutput,
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
  .s("MediaConnect", "RemoveFlowVpcInterface", {})
  .n("MediaConnectClient", "RemoveFlowVpcInterfaceCommand")
  .f(void 0, void 0)
  .ser(se_RemoveFlowVpcInterfaceCommand)
  .de(de_RemoveFlowVpcInterfaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveFlowVpcInterfaceRequest;
      output: RemoveFlowVpcInterfaceResponse;
    };
    sdk: {
      input: RemoveFlowVpcInterfaceCommandInput;
      output: RemoveFlowVpcInterfaceCommandOutput;
    };
  };
}
