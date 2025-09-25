// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppInstanceRequest } from "../models/models_0";
import { DeleteAppInstance } from "../schemas/schemas_4_DeleteAppInstance";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppInstanceCommand}.
 */
export interface DeleteAppInstanceCommandInput extends DeleteAppInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppInstanceCommand}.
 */
export interface DeleteAppInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an <code>AppInstance</code> and all associated data asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DeleteAppInstanceCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DeleteAppInstanceCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DeleteAppInstanceRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppInstanceCommandInput - {@link DeleteAppInstanceCommandInput}
 * @returns {@link DeleteAppInstanceCommandOutput}
 * @see {@link DeleteAppInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
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
export class DeleteAppInstanceCommand extends $Command
  .classBuilder<
    DeleteAppInstanceCommandInput,
    DeleteAppInstanceCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeIdentityService", "DeleteAppInstance", {})
  .n("ChimeSDKIdentityClient", "DeleteAppInstanceCommand")
  .sc(DeleteAppInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppInstanceRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppInstanceCommandInput;
      output: DeleteAppInstanceCommandOutput;
    };
  };
}
