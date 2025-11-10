// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopContactStreamingRequest, StopContactStreamingResponse } from "../models/models_3";
import { StopContactStreaming } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopContactStreamingCommand}.
 */
export interface StopContactStreamingCommandInput extends StopContactStreamingRequest {}
/**
 * @public
 *
 * The output of {@link StopContactStreamingCommand}.
 */
export interface StopContactStreamingCommandOutput extends StopContactStreamingResponse, __MetadataBearer {}

/**
 * <p> Ends message streaming on a specified contact. To restart message streaming on that
 *    contact, call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a>
 *    API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactStreamingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactStreamingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StopContactStreamingRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   StreamingId: "STRING_VALUE", // required
 * };
 * const command = new StopContactStreamingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopContactStreamingCommandInput - {@link StopContactStreamingCommandInput}
 * @returns {@link StopContactStreamingCommandOutput}
 * @see {@link StopContactStreamingCommandInput} for command's `input` shape.
 * @see {@link StopContactStreamingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class StopContactStreamingCommand extends $Command
  .classBuilder<
    StopContactStreamingCommandInput,
    StopContactStreamingCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "StopContactStreaming", {})
  .n("ConnectClient", "StopContactStreamingCommand")
  .sc(StopContactStreaming)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopContactStreamingRequest;
      output: {};
    };
    sdk: {
      input: StopContactStreamingCommandInput;
      output: StopContactStreamingCommandOutput;
    };
  };
}
