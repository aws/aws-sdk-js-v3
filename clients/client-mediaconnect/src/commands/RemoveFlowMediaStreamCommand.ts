// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveFlowMediaStreamRequest, RemoveFlowMediaStreamResponse } from "../models/models_0";
import { de_RemoveFlowMediaStreamCommand, se_RemoveFlowMediaStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveFlowMediaStreamCommand}.
 */
export interface RemoveFlowMediaStreamCommandInput extends RemoveFlowMediaStreamRequest {}
/**
 * @public
 *
 * The output of {@link RemoveFlowMediaStreamCommand}.
 */
export interface RemoveFlowMediaStreamCommandOutput extends RemoveFlowMediaStreamResponse, __MetadataBearer {}

/**
 * <p> Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowMediaStreamCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowMediaStreamCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // RemoveFlowMediaStreamRequest
 *   FlowArn: "STRING_VALUE", // required
 *   MediaStreamName: "STRING_VALUE", // required
 * };
 * const command = new RemoveFlowMediaStreamCommand(input);
 * const response = await client.send(command);
 * // { // RemoveFlowMediaStreamResponse
 * //   FlowArn: "STRING_VALUE",
 * //   MediaStreamName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveFlowMediaStreamCommandInput - {@link RemoveFlowMediaStreamCommandInput}
 * @returns {@link RemoveFlowMediaStreamCommandOutput}
 * @see {@link RemoveFlowMediaStreamCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowMediaStreamCommandOutput} for command's `response` shape.
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
export class RemoveFlowMediaStreamCommand extends $Command
  .classBuilder<
    RemoveFlowMediaStreamCommandInput,
    RemoveFlowMediaStreamCommandOutput,
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
  .s("MediaConnect", "RemoveFlowMediaStream", {})
  .n("MediaConnectClient", "RemoveFlowMediaStreamCommand")
  .f(void 0, void 0)
  .ser(se_RemoveFlowMediaStreamCommand)
  .de(de_RemoveFlowMediaStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveFlowMediaStreamRequest;
      output: RemoveFlowMediaStreamResponse;
    };
    sdk: {
      input: RemoveFlowMediaStreamCommandInput;
      output: RemoveFlowMediaStreamCommandOutput;
    };
  };
}
