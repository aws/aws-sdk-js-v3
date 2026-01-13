// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartContactMediaProcessingRequest, StartContactMediaProcessingResponse } from "../models/models_2";
import { StartContactMediaProcessing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartContactMediaProcessingCommand}.
 */
export interface StartContactMediaProcessingCommandInput extends StartContactMediaProcessingRequest {}
/**
 * @public
 *
 * The output of {@link StartContactMediaProcessingCommand}.
 */
export interface StartContactMediaProcessingCommandOutput extends StartContactMediaProcessingResponse, __MetadataBearer {}

/**
 * <p> Enables in-flight message processing for an ongoing chat session. Message processing will stay active for the
 *    rest of the chat, even if an individual contact segment ends. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartContactMediaProcessingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartContactMediaProcessingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartContactMediaProcessingRequest
 *   InstanceId: "STRING_VALUE",
 *   ContactId: "STRING_VALUE",
 *   ProcessorArn: "STRING_VALUE",
 *   FailureMode: "DELIVER_UNPROCESSED_MESSAGE" || "DO_NOT_DELIVER_UNPROCESSED_MESSAGE",
 * };
 * const command = new StartContactMediaProcessingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartContactMediaProcessingCommandInput - {@link StartContactMediaProcessingCommandInput}
 * @returns {@link StartContactMediaProcessingCommandOutput}
 * @see {@link StartContactMediaProcessingCommandInput} for command's `input` shape.
 * @see {@link StartContactMediaProcessingCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class StartContactMediaProcessingCommand extends $Command
  .classBuilder<
    StartContactMediaProcessingCommandInput,
    StartContactMediaProcessingCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "StartContactMediaProcessing", {})
  .n("ConnectClient", "StartContactMediaProcessingCommand")
  .sc(StartContactMediaProcessing$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartContactMediaProcessingRequest;
      output: {};
    };
    sdk: {
      input: StartContactMediaProcessingCommandInput;
      output: StartContactMediaProcessingCommandOutput;
    };
  };
}
