// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RegisterAppInstanceUserEndpointRequest,
  RegisterAppInstanceUserEndpointRequestFilterSensitiveLog,
  RegisterAppInstanceUserEndpointResponse,
} from "../models/models_0";
import {
  de_RegisterAppInstanceUserEndpointCommand,
  se_RegisterAppInstanceUserEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterAppInstanceUserEndpointCommand}.
 */
export interface RegisterAppInstanceUserEndpointCommandInput extends RegisterAppInstanceUserEndpointRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAppInstanceUserEndpointCommand}.
 */
export interface RegisterAppInstanceUserEndpointCommandOutput
  extends RegisterAppInstanceUserEndpointResponse,
    __MetadataBearer {}

/**
 * <p>Registers an endpoint under an Amazon Chime <code>AppInstanceUser</code>. The endpoint receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, RegisterAppInstanceUserEndpointCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, RegisterAppInstanceUserEndpointCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // RegisterAppInstanceUserEndpointRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Type: "APNS" || "APNS_SANDBOX" || "GCM", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   EndpointAttributes: { // EndpointAttributes
 *     DeviceToken: "STRING_VALUE", // required
 *     VoipDeviceToken: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE", // required
 *   AllowMessages: "ALL" || "NONE",
 * };
 * const command = new RegisterAppInstanceUserEndpointCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAppInstanceUserEndpointResponse
 * //   AppInstanceUserArn: "STRING_VALUE",
 * //   EndpointId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterAppInstanceUserEndpointCommandInput - {@link RegisterAppInstanceUserEndpointCommandInput}
 * @returns {@link RegisterAppInstanceUserEndpointCommandOutput}
 * @see {@link RegisterAppInstanceUserEndpointCommandInput} for command's `input` shape.
 * @see {@link RegisterAppInstanceUserEndpointCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKIdentity service.</p>
 *
 * @public
 */
export class RegisterAppInstanceUserEndpointCommand extends $Command
  .classBuilder<
    RegisterAppInstanceUserEndpointCommandInput,
    RegisterAppInstanceUserEndpointCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeIdentityService", "RegisterAppInstanceUserEndpoint", {})
  .n("ChimeSDKIdentityClient", "RegisterAppInstanceUserEndpointCommand")
  .f(RegisterAppInstanceUserEndpointRequestFilterSensitiveLog, void 0)
  .ser(se_RegisterAppInstanceUserEndpointCommand)
  .de(de_RegisterAppInstanceUserEndpointCommand)
  .build() {}
