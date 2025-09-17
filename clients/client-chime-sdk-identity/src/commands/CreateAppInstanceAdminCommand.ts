// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAppInstanceAdminRequest,
  CreateAppInstanceAdminResponse,
  CreateAppInstanceAdminResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAppInstanceAdminCommand, se_CreateAppInstanceAdminCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppInstanceAdminCommand}.
 */
export interface CreateAppInstanceAdminCommandInput extends CreateAppInstanceAdminRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppInstanceAdminCommand}.
 */
export interface CreateAppInstanceAdminCommandOutput extends CreateAppInstanceAdminResponse, __MetadataBearer {}

/**
 * <p>Promotes an <code>AppInstanceUser</code> or <code>AppInstanceBot</code> to an
 *          <code>AppInstanceAdmin</code>. The
 *          promoted entity can perform the following actions. </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ChannelModerator</code> actions across all channels in the
 *                   <code>AppInstance</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteChannelMessage</code> actions.</p>
 *             </li>
 *          </ul>
 *          <p>Only an <code>AppInstanceUser</code> and <code>AppInstanceBot</code> can be promoted to an <code>AppInstanceAdmin</code>
 *          role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, CreateAppInstanceAdminCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, CreateAppInstanceAdminCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // CreateAppInstanceAdminRequest
 *   AppInstanceAdminArn: "STRING_VALUE", // required
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new CreateAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppInstanceAdminResponse
 * //   AppInstanceAdmin: { // Identity
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * //   AppInstanceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAppInstanceAdminCommandInput - {@link CreateAppInstanceAdminCommandInput}
 * @returns {@link CreateAppInstanceAdminCommandOutput}
 * @see {@link CreateAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceAdminCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateAppInstanceAdminCommand extends $Command
  .classBuilder<
    CreateAppInstanceAdminCommandInput,
    CreateAppInstanceAdminCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeIdentityService", "CreateAppInstanceAdmin", {})
  .n("ChimeSDKIdentityClient", "CreateAppInstanceAdminCommand")
  .f(void 0, CreateAppInstanceAdminResponseFilterSensitiveLog)
  .ser(se_CreateAppInstanceAdminCommand)
  .de(de_CreateAppInstanceAdminCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppInstanceAdminRequest;
      output: CreateAppInstanceAdminResponse;
    };
    sdk: {
      input: CreateAppInstanceAdminCommandInput;
      output: CreateAppInstanceAdminCommandOutput;
    };
  };
}
