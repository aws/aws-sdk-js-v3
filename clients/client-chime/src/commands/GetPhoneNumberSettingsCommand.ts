// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPhoneNumberSettingsResponse } from "../models/models_0";
import { GetPhoneNumberSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPhoneNumberSettingsCommand}.
 */
export interface GetPhoneNumberSettingsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetPhoneNumberSettingsCommand}.
 */
export interface GetPhoneNumberSettingsCommandOutput extends GetPhoneNumberSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetPhoneNumberSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetPhoneNumberSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = {};
 * const command = new GetPhoneNumberSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetPhoneNumberSettingsResponse
 * //   CallingName: "STRING_VALUE",
 * //   CallingNameUpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPhoneNumberSettingsCommandInput - {@link GetPhoneNumberSettingsCommandInput}
 * @returns {@link GetPhoneNumberSettingsCommandOutput}
 * @see {@link GetPhoneNumberSettingsCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
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
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class GetPhoneNumberSettingsCommand extends $Command
  .classBuilder<
    GetPhoneNumberSettingsCommandInput,
    GetPhoneNumberSettingsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "GetPhoneNumberSettings", {})
  .n("ChimeClient", "GetPhoneNumberSettingsCommand")
  .sc(GetPhoneNumberSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPhoneNumberSettingsResponse;
    };
    sdk: {
      input: GetPhoneNumberSettingsCommandInput;
      output: GetPhoneNumberSettingsCommandOutput;
    };
  };
}
