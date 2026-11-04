// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGlobalSettingsResponse } from "../models/models_0";
import { GetGlobalSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetGlobalSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetGlobalSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class GetGlobalSettingsCommand extends command<GetGlobalSettingsCommandInput, GetGlobalSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetGlobalSettings",
  GetGlobalSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetGlobalSettingsResponse;
    };
    sdk: {
      input: GetGlobalSettingsCommandInput;
      output: GetGlobalSettingsCommandOutput;
    };
  };
}
