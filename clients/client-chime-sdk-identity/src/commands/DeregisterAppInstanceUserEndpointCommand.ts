// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterAppInstanceUserEndpointRequest } from "../models/models_0";
import {
  de_DeregisterAppInstanceUserEndpointCommand,
  se_DeregisterAppInstanceUserEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterAppInstanceUserEndpointCommand}.
 */
export interface DeregisterAppInstanceUserEndpointCommandInput extends DeregisterAppInstanceUserEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterAppInstanceUserEndpointCommand}.
 */
export interface DeregisterAppInstanceUserEndpointCommandOutput extends __MetadataBearer {}

/**
 * <p>Deregisters an <code>AppInstanceUserEndpoint</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DeregisterAppInstanceUserEndpointCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DeregisterAppInstanceUserEndpointCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DeregisterAppInstanceUserEndpointRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterAppInstanceUserEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterAppInstanceUserEndpointCommandInput - {@link DeregisterAppInstanceUserEndpointCommandInput}
 * @returns {@link DeregisterAppInstanceUserEndpointCommandOutput}
 * @see {@link DeregisterAppInstanceUserEndpointCommandInput} for command's `input` shape.
 * @see {@link DeregisterAppInstanceUserEndpointCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
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
export class DeregisterAppInstanceUserEndpointCommand extends $Command
  .classBuilder<
    DeregisterAppInstanceUserEndpointCommandInput,
    DeregisterAppInstanceUserEndpointCommandOutput,
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
  .s("ChimeIdentityService", "DeregisterAppInstanceUserEndpoint", {})
  .n("ChimeSDKIdentityClient", "DeregisterAppInstanceUserEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterAppInstanceUserEndpointCommand)
  .de(de_DeregisterAppInstanceUserEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterAppInstanceUserEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeregisterAppInstanceUserEndpointCommandInput;
      output: DeregisterAppInstanceUserEndpointCommandOutput;
    };
  };
}
