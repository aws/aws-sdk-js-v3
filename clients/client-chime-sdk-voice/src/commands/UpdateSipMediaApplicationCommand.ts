// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSipMediaApplicationRequest, UpdateSipMediaApplicationResponse } from "../models/models_0";
import { UpdateSipMediaApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSipMediaApplicationCommand}.
 */
export interface UpdateSipMediaApplicationCommandInput extends UpdateSipMediaApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSipMediaApplicationCommand}.
 */
export interface UpdateSipMediaApplicationCommandOutput extends UpdateSipMediaApplicationResponse, __MetadataBearer {}

/**
 * Updates the details of the specified SIP media application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateSipMediaApplicationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateSipMediaApplicationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateSipMediaApplicationRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Endpoints: [ // SipMediaApplicationEndpointList
 *     { // SipMediaApplicationEndpoint
 *       LambdaArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSipMediaApplicationResponse
 * //   SipMediaApplication: { // SipMediaApplication
 * //     SipMediaApplicationId: "STRING_VALUE",
 * //     AwsRegion: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Endpoints: [ // SipMediaApplicationEndpointList
 * //       { // SipMediaApplicationEndpoint
 * //         LambdaArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     SipMediaApplicationArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSipMediaApplicationCommandInput - {@link UpdateSipMediaApplicationCommandInput}
 * @returns {@link UpdateSipMediaApplicationCommandOutput}
 * @see {@link UpdateSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Multiple instances of the same request were made simultaneously.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource couldn't be found.
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
 * The number of customer requests exceeds the request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client isn't authorized to request a resource.
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKVoice service.
 *
 * @public
 */
export class UpdateSipMediaApplicationCommand extends command<UpdateSipMediaApplicationCommandInput, UpdateSipMediaApplicationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSipMediaApplication",
  UpdateSipMediaApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSipMediaApplicationRequest;
      output: UpdateSipMediaApplicationResponse;
    };
    sdk: {
      input: UpdateSipMediaApplicationCommandInput;
      output: UpdateSipMediaApplicationCommandOutput;
    };
  };
}
