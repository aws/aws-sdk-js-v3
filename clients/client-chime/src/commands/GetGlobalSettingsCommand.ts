// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetGlobalSettingsResponse } from "../models/models_0";
import { de_GetGlobalSettingsCommand, se_GetGlobalSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGlobalSettingsCommand}.
 */
export interface GetGlobalSettingsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetGlobalSettingsCommand}.
 */
export interface GetGlobalSettingsCommandOutput extends GetGlobalSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business
 *             Calling and Amazon Chime Voice Connector settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetGlobalSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetGlobalSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = {};
 * const command = new GetGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetGlobalSettingsResponse
 * //   BusinessCalling: { // BusinessCallingSettings
 * //     CdrBucket: "STRING_VALUE",
 * //   },
 * //   VoiceConnector: { // VoiceConnectorSettings
 * //     CdrBucket: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGlobalSettingsCommandInput - {@link GetGlobalSettingsCommandInput}
 * @returns {@link GetGlobalSettingsCommandOutput}
 * @see {@link GetGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link GetGlobalSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetGlobalSettingsCommand extends $Command
  .classBuilder<
    GetGlobalSettingsCommandInput,
    GetGlobalSettingsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "GetGlobalSettings", {})
  .n("ChimeClient", "GetGlobalSettingsCommand")
  .f(void 0, void 0)
  .ser(se_GetGlobalSettingsCommand)
  .de(de_GetGlobalSettingsCommand)
  .build() {}
