// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSipMediaApplicationsRequest, ListSipMediaApplicationsResponse } from "../models/models_0";
import { ListSipMediaApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSipMediaApplicationsCommand}.
 */
export interface ListSipMediaApplicationsCommandInput extends ListSipMediaApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSipMediaApplicationsCommand}.
 */
export interface ListSipMediaApplicationsCommandOutput extends ListSipMediaApplicationsResponse, __MetadataBearer {}

/**
 * Lists the SIP media applications under the administrator's AWS account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListSipMediaApplicationsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListSipMediaApplicationsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListSipMediaApplicationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSipMediaApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSipMediaApplicationsResponse
 * //   SipMediaApplications: [ // SipMediaApplicationList
 * //     { // SipMediaApplication
 * //       SipMediaApplicationId: "STRING_VALUE",
 * //       AwsRegion: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Endpoints: [ // SipMediaApplicationEndpointList
 * //         { // SipMediaApplicationEndpoint
 * //           LambdaArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       SipMediaApplicationArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSipMediaApplicationsCommandInput - {@link ListSipMediaApplicationsCommandInput}
 * @returns {@link ListSipMediaApplicationsCommandOutput}
 * @see {@link ListSipMediaApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSipMediaApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
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
export class ListSipMediaApplicationsCommand extends command<ListSipMediaApplicationsCommandInput, ListSipMediaApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "ListSipMediaApplications",
  ListSipMediaApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSipMediaApplicationsRequest;
      output: ListSipMediaApplicationsResponse;
    };
    sdk: {
      input: ListSipMediaApplicationsCommandInput;
      output: ListSipMediaApplicationsCommandOutput;
    };
  };
}
