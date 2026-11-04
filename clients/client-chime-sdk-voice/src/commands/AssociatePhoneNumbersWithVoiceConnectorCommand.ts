// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociatePhoneNumbersWithVoiceConnectorRequest,
  AssociatePhoneNumbersWithVoiceConnectorResponse,
} from "../models/models_0";
import { AssociatePhoneNumbersWithVoiceConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociatePhoneNumbersWithVoiceConnectorCommand}.
 */
export interface AssociatePhoneNumbersWithVoiceConnectorCommandInput extends AssociatePhoneNumbersWithVoiceConnectorRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePhoneNumbersWithVoiceConnectorCommand}.
 */
export interface AssociatePhoneNumbersWithVoiceConnectorCommandOutput extends AssociatePhoneNumbersWithVoiceConnectorResponse, __MetadataBearer {}

/**
 * Associates phone numbers with the specified Amazon Chime SDK Voice Connector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, AssociatePhoneNumbersWithVoiceConnectorCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, AssociatePhoneNumbersWithVoiceConnectorCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // AssociatePhoneNumbersWithVoiceConnectorRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   E164PhoneNumbers: [ // E164PhoneNumberList // required
 *     "STRING_VALUE",
 *   ],
 *   ForceAssociate: true || false,
 * };
 * const command = new AssociatePhoneNumbersWithVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * // { // AssociatePhoneNumbersWithVoiceConnectorResponse
 * //   PhoneNumberErrors: [ // PhoneNumberErrorList
 * //     { // PhoneNumberError
 * //       PhoneNumberId: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist" || "Gone" || "Validation",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociatePhoneNumbersWithVoiceConnectorCommandInput - {@link AssociatePhoneNumbersWithVoiceConnectorCommandInput}
 * @returns {@link AssociatePhoneNumbersWithVoiceConnectorCommandOutput}
 * @see {@link AssociatePhoneNumbersWithVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link AssociatePhoneNumbersWithVoiceConnectorCommandOutput} for command's `response` shape.
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
export class AssociatePhoneNumbersWithVoiceConnectorCommand extends command<AssociatePhoneNumbersWithVoiceConnectorCommandInput, AssociatePhoneNumbersWithVoiceConnectorCommandOutput>(
  _ep0,
  _mw0,
  "AssociatePhoneNumbersWithVoiceConnector",
  AssociatePhoneNumbersWithVoiceConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePhoneNumbersWithVoiceConnectorRequest;
      output: AssociatePhoneNumbersWithVoiceConnectorResponse;
    };
    sdk: {
      input: AssociatePhoneNumbersWithVoiceConnectorCommandInput;
      output: AssociatePhoneNumbersWithVoiceConnectorCommandOutput;
    };
  };
}
