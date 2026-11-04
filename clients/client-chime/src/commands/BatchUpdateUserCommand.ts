// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchUpdateUserRequest, BatchUpdateUserResponse } from "../models/models_0";
import { BatchUpdateUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchUpdateUserCommand}.
 */
export interface BatchUpdateUserCommandInput extends BatchUpdateUserRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateUserCommand}.
 */
export interface BatchUpdateUserCommandOutput extends BatchUpdateUserResponse, __MetadataBearer {}

/**
 * Updates user details within the UpdateUserRequestItem object for up to 20 users for the specified Amazon Chime account. Currently, only `LicenseType` updates are supported for this action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUpdateUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUpdateUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // BatchUpdateUserRequest
 *   AccountId: "STRING_VALUE", // required
 *   UpdateUserRequestItems: [ // UpdateUserRequestItemList // required
 *     { // UpdateUserRequestItem
 *       UserId: "STRING_VALUE", // required
 *       LicenseType: "Basic" || "Plus" || "Pro" || "ProTrial",
 *       UserType: "PrivateUser" || "SharedDevice",
 *       AlexaForBusinessMetadata: { // AlexaForBusinessMetadata
 *         IsAlexaForBusinessEnabled: true || false,
 *         AlexaForBusinessRoomArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchUpdateUserCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateUserResponse
 * //   UserErrors: [ // UserErrorList
 * //     { // UserError
 * //       UserId: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateUserCommandInput - {@link BatchUpdateUserCommandInput}
 * @returns {@link BatchUpdateUserCommandOutput}
 * @see {@link BatchUpdateUserCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateUserCommandOutput} for command's `response` shape.
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
export class BatchUpdateUserCommand extends command<BatchUpdateUserCommandInput, BatchUpdateUserCommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateUser",
  BatchUpdateUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateUserRequest;
      output: BatchUpdateUserResponse;
    };
    sdk: {
      input: BatchUpdateUserCommandInput;
      output: BatchUpdateUserCommandOutput;
    };
  };
}
