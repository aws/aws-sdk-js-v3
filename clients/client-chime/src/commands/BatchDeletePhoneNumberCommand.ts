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
 * Moves phone numbers into the **Deletion queue**. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted.
 *
 * Phone numbers remain in the **Deletion queue** for 7 days before they are deleted permanently.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchDeletePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchDeletePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
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
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist",
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
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
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
