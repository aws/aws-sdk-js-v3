// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ResumeContactRequest, ResumeContactResponse } from "../models/models_2";
import { ResumeContact } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResumeContactCommand}.
 */
export interface ResumeContactCommandInput extends ResumeContactRequest {}
/**
 * @public
 *
 * The output of {@link ResumeContactCommand}.
 */
export interface ResumeContactCommandOutput extends ResumeContactResponse, __MetadataBearer {}

/**
 * <p>Allows resuming a task contact in a paused state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ResumeContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ResumeContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ResumeContactRequest
 *   ContactId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE",
 * };
 * const command = new ResumeContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeContactCommandInput - {@link ResumeContactCommandInput}
 * @returns {@link ResumeContactCommandOutput}
 * @see {@link ResumeContactCommandInput} for command's `input` shape.
 * @see {@link ResumeContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Operation cannot be performed at this time as there is a conflict with another operation or contact
 *    state.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ResumeContactCommand extends $Command
  .classBuilder<
    ResumeContactCommandInput,
    ResumeContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ResumeContact", {})
  .n("ConnectClient", "ResumeContactCommand")
  .sc(ResumeContact)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResumeContactRequest;
      output: {};
    };
    sdk: {
      input: ResumeContactCommandInput;
      output: ResumeContactCommandOutput;
    };
  };
}
