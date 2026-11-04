// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSipMediaApplicationRequest, CreateSipMediaApplicationResponse } from "../models/models_0";
import { CreateSipMediaApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSipMediaApplicationCommand}.
 */
export interface CreateSipMediaApplicationCommandInput extends CreateSipMediaApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSipMediaApplicationCommand}.
 */
export interface CreateSipMediaApplicationCommandOutput extends CreateSipMediaApplicationResponse, __MetadataBearer {}

/**
 * Creates a SIP media application. For more information about SIP media applications, see [Managing SIP media applications and rules](https://docs.aws.amazon.com/chime-sdk/latest/ag/manage-sip-applications.html) in the *Amazon Chime SDK Administrator Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreateSipMediaApplicationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreateSipMediaApplicationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreateSipMediaApplicationRequest
 *   AwsRegion: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Endpoints: [ // SipMediaApplicationEndpointList // required
 *     { // SipMediaApplicationEndpoint
 *       LambdaArn: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSipMediaApplicationResponse
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
 * @param CreateSipMediaApplicationCommandInput - {@link CreateSipMediaApplicationCommandInput}
 * @returns {@link CreateSipMediaApplicationCommandOutput}
 * @see {@link CreateSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have the permissions needed to run this action.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
export class CreateSipMediaApplicationCommand extends command<CreateSipMediaApplicationCommandInput, CreateSipMediaApplicationCommandOutput>(
  _ep0,
  _mw0,
  "CreateSipMediaApplication",
  CreateSipMediaApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSipMediaApplicationRequest;
      output: CreateSipMediaApplicationResponse;
    };
    sdk: {
      input: CreateSipMediaApplicationCommandInput;
      output: CreateSipMediaApplicationCommandOutput;
    };
  };
}
