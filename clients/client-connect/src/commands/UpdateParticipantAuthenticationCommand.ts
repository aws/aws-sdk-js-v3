// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateParticipantAuthenticationRequest,
  UpdateParticipantAuthenticationRequestFilterSensitiveLog,
  UpdateParticipantAuthenticationResponse,
} from "../models/models_3";
import {
  de_UpdateParticipantAuthenticationCommand,
  se_UpdateParticipantAuthenticationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateParticipantAuthenticationCommand}.
 */
export interface UpdateParticipantAuthenticationCommandInput extends UpdateParticipantAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateParticipantAuthenticationCommand}.
 */
export interface UpdateParticipantAuthenticationCommandOutput
  extends UpdateParticipantAuthenticationResponse,
    __MetadataBearer {}

/**
 * <p>Instructs Amazon Connect to resume the authentication process. The subsequent actions
 *    depend on the request body contents:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>If a code is provided</b>: Connect retrieves the identity
 *      information from Amazon Cognito and imports it into Connect Customer Profiles.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If an error is provided</b>: The error branch of the
 *      Authenticate Customer block is executed.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The API returns a success response to acknowledge the request. However, the interaction and
 *     exchange of identity information occur asynchronously after the response is returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateParticipantAuthenticationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateParticipantAuthenticationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateParticipantAuthenticationRequest
 *   State: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   Code: "STRING_VALUE",
 *   Error: "STRING_VALUE",
 *   ErrorDescription: "STRING_VALUE",
 * };
 * const command = new UpdateParticipantAuthenticationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateParticipantAuthenticationCommandInput - {@link UpdateParticipantAuthenticationCommandInput}
 * @returns {@link UpdateParticipantAuthenticationCommandOutput}
 * @see {@link UpdateParticipantAuthenticationCommandInput} for command's `input` shape.
 * @see {@link UpdateParticipantAuthenticationCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateParticipantAuthenticationCommand extends $Command
  .classBuilder<
    UpdateParticipantAuthenticationCommandInput,
    UpdateParticipantAuthenticationCommandOutput,
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
  .s("AmazonConnectService", "UpdateParticipantAuthentication", {})
  .n("ConnectClient", "UpdateParticipantAuthenticationCommand")
  .f(UpdateParticipantAuthenticationRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateParticipantAuthenticationCommand)
  .de(de_UpdateParticipantAuthenticationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateParticipantAuthenticationRequest;
      output: {};
    };
    sdk: {
      input: UpdateParticipantAuthenticationCommandInput;
      output: UpdateParticipantAuthenticationCommandOutput;
    };
  };
}
