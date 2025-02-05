// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAppInstanceUserEndpointRequest,
  UpdateAppInstanceUserEndpointRequestFilterSensitiveLog,
  UpdateAppInstanceUserEndpointResponse,
} from "../models/models_0";
import {
  de_UpdateAppInstanceUserEndpointCommand,
  se_UpdateAppInstanceUserEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppInstanceUserEndpointCommand}.
 */
export interface UpdateAppInstanceUserEndpointCommandInput extends UpdateAppInstanceUserEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppInstanceUserEndpointCommand}.
 */
export interface UpdateAppInstanceUserEndpointCommandOutput
  extends UpdateAppInstanceUserEndpointResponse,
    __MetadataBearer {}

/**
 * <p>Updates the details of an <code>AppInstanceUserEndpoint</code>. You can update the name and <code>AllowMessage</code> values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, UpdateAppInstanceUserEndpointCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, UpdateAppInstanceUserEndpointCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // UpdateAppInstanceUserEndpointRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   AllowMessages: "ALL" || "NONE",
 * };
 * const command = new UpdateAppInstanceUserEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppInstanceUserEndpointResponse
 * //   AppInstanceUserArn: "STRING_VALUE",
 * //   EndpointId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAppInstanceUserEndpointCommandInput - {@link UpdateAppInstanceUserEndpointCommandInput}
 * @returns {@link UpdateAppInstanceUserEndpointCommandOutput}
 * @see {@link UpdateAppInstanceUserEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateAppInstanceUserEndpointCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateAppInstanceUserEndpointCommand extends $Command
  .classBuilder<
    UpdateAppInstanceUserEndpointCommandInput,
    UpdateAppInstanceUserEndpointCommandOutput,
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
  .s("ChimeIdentityService", "UpdateAppInstanceUserEndpoint", {})
  .n("ChimeSDKIdentityClient", "UpdateAppInstanceUserEndpointCommand")
  .f(UpdateAppInstanceUserEndpointRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateAppInstanceUserEndpointCommand)
  .de(de_UpdateAppInstanceUserEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppInstanceUserEndpointRequest;
      output: UpdateAppInstanceUserEndpointResponse;
    };
    sdk: {
      input: UpdateAppInstanceUserEndpointCommandInput;
      output: UpdateAppInstanceUserEndpointCommandOutput;
    };
  };
}
