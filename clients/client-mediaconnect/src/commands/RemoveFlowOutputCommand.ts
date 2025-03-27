// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveFlowOutputRequest, RemoveFlowOutputResponse } from "../models/models_0";
import { de_RemoveFlowOutputCommand, se_RemoveFlowOutputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveFlowOutputCommand}.
 */
export interface RemoveFlowOutputCommandInput extends RemoveFlowOutputRequest {}
/**
 * @public
 *
 * The output of {@link RemoveFlowOutputCommand}.
 */
export interface RemoveFlowOutputCommandOutput extends RemoveFlowOutputResponse, __MetadataBearer {}

/**
 * <p> Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // RemoveFlowOutputRequest
 *   FlowArn: "STRING_VALUE", // required
 *   OutputArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveFlowOutputCommand(input);
 * const response = await client.send(command);
 * // { // RemoveFlowOutputResponse
 * //   FlowArn: "STRING_VALUE",
 * //   OutputArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveFlowOutputCommandInput - {@link RemoveFlowOutputCommandInput}
 * @returns {@link RemoveFlowOutputCommandOutput}
 * @see {@link RemoveFlowOutputCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowOutputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
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
export class RemoveFlowOutputCommand extends $Command
  .classBuilder<
    RemoveFlowOutputCommandInput,
    RemoveFlowOutputCommandOutput,
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
  .s("MediaConnect", "RemoveFlowOutput", {})
  .n("MediaConnectClient", "RemoveFlowOutputCommand")
  .f(void 0, void 0)
  .ser(se_RemoveFlowOutputCommand)
  .de(de_RemoveFlowOutputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveFlowOutputRequest;
      output: RemoveFlowOutputResponse;
    };
    sdk: {
      input: RemoveFlowOutputCommandInput;
      output: RemoveFlowOutputCommandOutput;
    };
  };
}
