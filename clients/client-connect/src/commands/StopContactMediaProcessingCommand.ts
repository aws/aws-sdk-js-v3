// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopContactMediaProcessingRequest, StopContactMediaProcessingResponse } from "../models/models_3";
import { StopContactMediaProcessing } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopContactMediaProcessingCommand}.
 */
export interface StopContactMediaProcessingCommandInput extends StopContactMediaProcessingRequest {}
/**
 * @public
 *
 * The output of {@link StopContactMediaProcessingCommand}.
 */
export interface StopContactMediaProcessingCommandOutput extends StopContactMediaProcessingResponse, __MetadataBearer {}

/**
 * <p> Stops in-flight message processing for an ongoing chat session. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactMediaProcessingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactMediaProcessingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StopContactMediaProcessingRequest
 *   InstanceId: "STRING_VALUE",
 *   ContactId: "STRING_VALUE",
 * };
 * const command = new StopContactMediaProcessingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopContactMediaProcessingCommandInput - {@link StopContactMediaProcessingCommandInput}
 * @returns {@link StopContactMediaProcessingCommandOutput}
 * @see {@link StopContactMediaProcessingCommandInput} for command's `input` shape.
 * @see {@link StopContactMediaProcessingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
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
export class StopContactMediaProcessingCommand extends $Command
  .classBuilder<
    StopContactMediaProcessingCommandInput,
    StopContactMediaProcessingCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "StopContactMediaProcessing", {})
  .n("ConnectClient", "StopContactMediaProcessingCommand")
  .sc(StopContactMediaProcessing)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopContactMediaProcessingRequest;
      output: {};
    };
    sdk: {
      input: StopContactMediaProcessingCommandInput;
      output: StopContactMediaProcessingCommandOutput;
    };
  };
}
