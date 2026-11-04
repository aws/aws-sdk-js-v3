// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeletePhoneNumberRequest, BatchDeletePhoneNumberResponse } from "../models/models_0";
import { BatchDeletePhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeletePhoneNumberCommand}.
 */
export interface BatchDeletePhoneNumberCommandInput extends BatchDeletePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeletePhoneNumberCommand}.
 */
export interface BatchDeletePhoneNumberCommandOutput extends BatchDeletePhoneNumberResponse, __MetadataBearer {}

/**
 * Moves phone numbers into the **Deletion queue**. Phone numbers must be disassociated from any users or Amazon Chime SDK Voice Connectors before they can be deleted.
 *
 * Phone numbers remain in the **Deletion queue** for 7 days before they are deleted permanently.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, BatchDeletePhoneNumberCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, BatchDeletePhoneNumberCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // BatchDeletePhoneNumberRequest
 *   PhoneNumberIds: [ // NonEmptyStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeletePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeletePhoneNumberResponse
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
 * @param BatchDeletePhoneNumberCommandInput - {@link BatchDeletePhoneNumberCommandInput}
 * @returns {@link BatchDeletePhoneNumberCommandOutput}
 * @see {@link BatchDeletePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link BatchDeletePhoneNumberCommandOutput} for command's `response` shape.
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
export class BatchDeletePhoneNumberCommand extends command<BatchDeletePhoneNumberCommandInput, BatchDeletePhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeletePhoneNumber",
  BatchDeletePhoneNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeletePhoneNumberRequest;
      output: BatchDeletePhoneNumberResponse;
    };
    sdk: {
      input: BatchDeletePhoneNumberCommandInput;
      output: BatchDeletePhoneNumberCommandOutput;
    };
  };
}
