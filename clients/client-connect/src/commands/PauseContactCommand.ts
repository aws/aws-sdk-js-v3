// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PauseContactRequest, PauseContactResponse } from "../models/models_2";
import { de_PauseContactCommand, se_PauseContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PauseContactCommand}.
 */
export interface PauseContactCommandInput extends PauseContactRequest {}
/**
 * @public
 *
 * The output of {@link PauseContactCommand}.
 */
export interface PauseContactCommandOutput extends PauseContactResponse, __MetadataBearer {}

/**
 * <p>Allows pausing an ongoing task contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, PauseContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, PauseContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // PauseContactRequest
 *   ContactId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE",
 * };
 * const command = new PauseContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PauseContactCommandInput - {@link PauseContactCommandInput}
 * @returns {@link PauseContactCommandOutput}
 * @see {@link PauseContactCommandInput} for command's `input` shape.
 * @see {@link PauseContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Operation cannot be performed at this time as there is a conflict with another operation or
 *    contact state.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class PauseContactCommand extends $Command
  .classBuilder<
    PauseContactCommandInput,
    PauseContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "PauseContact", {})
  .n("ConnectClient", "PauseContactCommand")
  .f(void 0, void 0)
  .ser(se_PauseContactCommand)
  .de(de_PauseContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PauseContactRequest;
      output: {};
    };
    sdk: {
      input: PauseContactCommandInput;
      output: PauseContactCommandOutput;
    };
  };
}
