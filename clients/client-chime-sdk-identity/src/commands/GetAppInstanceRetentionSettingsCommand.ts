// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAppInstanceRetentionSettingsRequest, GetAppInstanceRetentionSettingsResponse } from "../models/models_0";
import {
  de_GetAppInstanceRetentionSettingsCommand,
  se_GetAppInstanceRetentionSettingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAppInstanceRetentionSettingsCommand}.
 */
export interface GetAppInstanceRetentionSettingsCommandInput extends GetAppInstanceRetentionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetAppInstanceRetentionSettingsCommand}.
 */
export interface GetAppInstanceRetentionSettingsCommandOutput
  extends GetAppInstanceRetentionSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Gets the retention settings for an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, GetAppInstanceRetentionSettingsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, GetAppInstanceRetentionSettingsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // GetAppInstanceRetentionSettingsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new GetAppInstanceRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetAppInstanceRetentionSettingsResponse
 * //   AppInstanceRetentionSettings: { // AppInstanceRetentionSettings
 * //     ChannelRetentionSettings: { // ChannelRetentionSettings
 * //       RetentionDays: Number("int"),
 * //     },
 * //   },
 * //   InitiateDeletionTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAppInstanceRetentionSettingsCommandInput - {@link GetAppInstanceRetentionSettingsCommandInput}
 * @returns {@link GetAppInstanceRetentionSettingsCommandOutput}
 * @see {@link GetAppInstanceRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAppInstanceRetentionSettingsCommandOutput} for command's `response` shape.
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
export class GetAppInstanceRetentionSettingsCommand extends $Command
  .classBuilder<
    GetAppInstanceRetentionSettingsCommandInput,
    GetAppInstanceRetentionSettingsCommandOutput,
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
  .s("ChimeIdentityService", "GetAppInstanceRetentionSettings", {})
  .n("ChimeSDKIdentityClient", "GetAppInstanceRetentionSettingsCommand")
  .f(void 0, void 0)
  .ser(se_GetAppInstanceRetentionSettingsCommand)
  .de(de_GetAppInstanceRetentionSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppInstanceRetentionSettingsRequest;
      output: GetAppInstanceRetentionSettingsResponse;
    };
    sdk: {
      input: GetAppInstanceRetentionSettingsCommandInput;
      output: GetAppInstanceRetentionSettingsCommandOutput;
    };
  };
}
