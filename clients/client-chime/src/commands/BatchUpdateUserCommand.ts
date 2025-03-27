// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchUpdateUserRequest,
  BatchUpdateUserRequestFilterSensitiveLog,
  BatchUpdateUserResponse,
} from "../models/models_0";
import { de_BatchUpdateUserCommand, se_BatchUpdateUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates user details within the <a>UpdateUserRequestItem</a> object for up to 20 users for the specified Amazon Chime account. Currently, only <code>LicenseType</code> updates are supported for this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUpdateUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUpdateUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class BatchUpdateUserCommand extends $Command
  .classBuilder<
    BatchUpdateUserCommandInput,
    BatchUpdateUserCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "BatchUpdateUser", {})
  .n("ChimeClient", "BatchUpdateUserCommand")
  .f(BatchUpdateUserRequestFilterSensitiveLog, void 0)
  .ser(se_BatchUpdateUserCommand)
  .de(de_BatchUpdateUserCommand)
  .build() {
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
