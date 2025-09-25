// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAppInstanceRequest, UpdateAppInstanceResponse } from "../models/models_0";
import { UpdateAppInstance } from "../schemas/schemas_9_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppInstanceCommand}.
 */
export interface UpdateAppInstanceCommandInput extends UpdateAppInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppInstanceCommand}.
 */
export interface UpdateAppInstanceCommandOutput extends UpdateAppInstanceResponse, __MetadataBearer {}

/**
 * <p>Updates <code>AppInstance</code> metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, UpdateAppInstanceCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, UpdateAppInstanceCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // UpdateAppInstanceRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Metadata: "STRING_VALUE", // required
 * };
 * const command = new UpdateAppInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppInstanceResponse
 * //   AppInstanceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAppInstanceCommandInput - {@link UpdateAppInstanceCommandInput}
 * @returns {@link UpdateAppInstanceCommandOutput}
 * @see {@link UpdateAppInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateAppInstanceCommandOutput} for command's `response` shape.
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
export class UpdateAppInstanceCommand extends $Command
  .classBuilder<
    UpdateAppInstanceCommandInput,
    UpdateAppInstanceCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeIdentityService", "UpdateAppInstance", {})
  .n("ChimeSDKIdentityClient", "UpdateAppInstanceCommand")
  .sc(UpdateAppInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppInstanceRequest;
      output: UpdateAppInstanceResponse;
    };
    sdk: {
      input: UpdateAppInstanceCommandInput;
      output: UpdateAppInstanceCommandOutput;
    };
  };
}
