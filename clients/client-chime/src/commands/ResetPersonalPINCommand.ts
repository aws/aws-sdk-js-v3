// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ResetPersonalPINRequest,
  ResetPersonalPINResponse,
  ResetPersonalPINResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ResetPersonalPINCommand, se_ResetPersonalPINCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetPersonalPINCommand}.
 */
export interface ResetPersonalPINCommandInput extends ResetPersonalPINRequest {}
/**
 * @public
 *
 * The output of {@link ResetPersonalPINCommand}.
 */
export interface ResetPersonalPINCommandOutput extends ResetPersonalPINResponse, __MetadataBearer {}

/**
 * <p>Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns
 *             the <a>User</a> object with the updated personal meeting PIN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ResetPersonalPINCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ResetPersonalPINCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // ResetPersonalPINRequest
 *   AccountId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new ResetPersonalPINCommand(input);
 * const response = await client.send(command);
 * // { // ResetPersonalPINResponse
 * //   User: { // User
 * //     UserId: "STRING_VALUE", // required
 * //     AccountId: "STRING_VALUE",
 * //     PrimaryEmail: "STRING_VALUE",
 * //     PrimaryProvisionedNumber: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     LicenseType: "Basic" || "Plus" || "Pro" || "ProTrial",
 * //     UserType: "PrivateUser" || "SharedDevice",
 * //     UserRegistrationStatus: "Unregistered" || "Registered" || "Suspended",
 * //     UserInvitationStatus: "Pending" || "Accepted" || "Failed",
 * //     RegisteredOn: new Date("TIMESTAMP"),
 * //     InvitedOn: new Date("TIMESTAMP"),
 * //     AlexaForBusinessMetadata: { // AlexaForBusinessMetadata
 * //       IsAlexaForBusinessEnabled: true || false,
 * //       AlexaForBusinessRoomArn: "STRING_VALUE",
 * //     },
 * //     PersonalPIN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ResetPersonalPINCommandInput - {@link ResetPersonalPINCommandInput}
 * @returns {@link ResetPersonalPINCommandOutput}
 * @see {@link ResetPersonalPINCommandInput} for command's `input` shape.
 * @see {@link ResetPersonalPINCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ResetPersonalPINCommand extends $Command
  .classBuilder<
    ResetPersonalPINCommandInput,
    ResetPersonalPINCommandOutput,
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
  .s("UCBuzzConsoleService", "ResetPersonalPIN", {})
  .n("ChimeClient", "ResetPersonalPINCommand")
  .f(void 0, ResetPersonalPINResponseFilterSensitiveLog)
  .ser(se_ResetPersonalPINCommand)
  .de(de_ResetPersonalPINCommand)
  .build() {}
