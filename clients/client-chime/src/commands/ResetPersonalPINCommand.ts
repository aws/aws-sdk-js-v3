// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResetPersonalPINRequest, ResetPersonalPINResponse } from "../models/models_0";
import { ResetPersonalPIN$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the User object with the updated personal meeting PIN.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ResetPersonalPINCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ResetPersonalPINCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
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
export class ResetPersonalPINCommand extends command<ResetPersonalPINCommandInput, ResetPersonalPINCommandOutput>(
  _ep0,
  _mw0,
  "ResetPersonalPIN",
  ResetPersonalPIN$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetPersonalPINRequest;
      output: ResetPersonalPINResponse;
    };
    sdk: {
      input: ResetPersonalPINCommandInput;
      output: ResetPersonalPINCommandOutput;
    };
  };
}
