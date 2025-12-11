// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { DeleteRouterNetworkInterfaceRequest, DeleteRouterNetworkInterfaceResponse } from "../models/models_0";
import { DeleteRouterNetworkInterface } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouterNetworkInterfaceCommand}.
 */
export interface DeleteRouterNetworkInterfaceCommandInput extends DeleteRouterNetworkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouterNetworkInterfaceCommand}.
 */
export interface DeleteRouterNetworkInterfaceCommandOutput
  extends DeleteRouterNetworkInterfaceResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a router network interface from AWS Elemental MediaConnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DeleteRouterNetworkInterfaceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DeleteRouterNetworkInterfaceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // DeleteRouterNetworkInterfaceRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRouterNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRouterNetworkInterfaceResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   State: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "ERROR" || "RECOVERING", // required
 * // };
 *
 * ```
 *
 * @param DeleteRouterNetworkInterfaceCommandInput - {@link DeleteRouterNetworkInterfaceCommandInput}
 * @returns {@link DeleteRouterNetworkInterfaceCommandOutput}
 * @see {@link DeleteRouterNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DeleteRouterNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
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
export class DeleteRouterNetworkInterfaceCommand extends $Command
  .classBuilder<
    DeleteRouterNetworkInterfaceCommandInput,
    DeleteRouterNetworkInterfaceCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "DeleteRouterNetworkInterface", {})
  .n("MediaConnectClient", "DeleteRouterNetworkInterfaceCommand")
  .sc(DeleteRouterNetworkInterface)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouterNetworkInterfaceRequest;
      output: DeleteRouterNetworkInterfaceResponse;
    };
    sdk: {
      input: DeleteRouterNetworkInterfaceCommandInput;
      output: DeleteRouterNetworkInterfaceCommandOutput;
    };
  };
}
