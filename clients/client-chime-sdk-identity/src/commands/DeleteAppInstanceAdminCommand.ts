// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppInstanceAdminRequest } from "../models/models_0";
import { de_DeleteAppInstanceAdminCommand, se_DeleteAppInstanceAdminCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppInstanceAdminCommand}.
 */
export interface DeleteAppInstanceAdminCommandInput extends DeleteAppInstanceAdminRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppInstanceAdminCommand}.
 */
export interface DeleteAppInstanceAdminCommandOutput extends __MetadataBearer {}

/**
 * <p>Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code> or
 *          <code>AppInstanceBot</code>. This action
 *          does not delete the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DeleteAppInstanceAdminCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DeleteAppInstanceAdminCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DeleteAppInstanceAdminRequest
 *   AppInstanceAdminArn: "STRING_VALUE", // required
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppInstanceAdminCommandInput - {@link DeleteAppInstanceAdminCommandInput}
 * @returns {@link DeleteAppInstanceAdminCommandOutput}
 * @see {@link DeleteAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceAdminCommandOutput} for command's `response` shape.
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
export class DeleteAppInstanceAdminCommand extends $Command
  .classBuilder<
    DeleteAppInstanceAdminCommandInput,
    DeleteAppInstanceAdminCommandOutput,
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
  .s("ChimeIdentityService", "DeleteAppInstanceAdmin", {})
  .n("ChimeSDKIdentityClient", "DeleteAppInstanceAdminCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppInstanceAdminCommand)
  .de(de_DeleteAppInstanceAdminCommand)
  .build() {}
