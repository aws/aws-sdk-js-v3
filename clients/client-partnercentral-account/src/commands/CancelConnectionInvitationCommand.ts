// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelConnectionInvitationRequest, CancelConnectionInvitationResponse } from "../models/models_0";
import { CancelConnectionInvitation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelConnectionInvitationCommand}.
 */
export interface CancelConnectionInvitationCommandInput extends CancelConnectionInvitationRequest {}
/**
 * @public
 *
 * The output of {@link CancelConnectionInvitationCommand}.
 */
export interface CancelConnectionInvitationCommandOutput extends CancelConnectionInvitationResponse, __MetadataBearer {}

/**
 * Cancels a pending connection invitation before it has been accepted or rejected.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, CancelConnectionInvitationCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, CancelConnectionInvitationCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // CancelConnectionInvitationRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new CancelConnectionInvitationCommand(input);
 * const response = await client.send(command);
 * // { // CancelConnectionInvitationResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   ConnectionId: "STRING_VALUE",
 * //   ConnectionType: "OPPORTUNITY_COLLABORATION" || "SUBSIDIARY", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * //   ExpiresAt: new Date("TIMESTAMP"),
 * //   OtherParticipantIdentifier: "STRING_VALUE", // required
 * //   ParticipantType: "SENDER" || "RECEIVER", // required
 * //   Status: "PENDING" || "ACCEPTED" || "REJECTED" || "CANCELED" || "EXPIRED", // required
 * //   InvitationMessage: "STRING_VALUE", // required
 * //   InviterEmail: "STRING_VALUE", // required
 * //   InviterName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CancelConnectionInvitationCommandInput - {@link CancelConnectionInvitationCommandInput}
 * @returns {@link CancelConnectionInvitationCommandOutput}
 * @see {@link CancelConnectionInvitationCommandInput} for command's `input` shape.
 * @see {@link CancelConnectionInvitationCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource. This typically occurs when trying to create a resource that already exists or modify a resource that has been changed by another process.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found. This may occur when referencing a resource that does not exist or has been deleted.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.
 *
 * @throws {@link PartnerCentralAccountServiceException}
 *
 * Base exception class for all service exceptions from PartnerCentralAccount service.
 *
 * @public
 */
export class CancelConnectionInvitationCommand extends command<CancelConnectionInvitationCommandInput, CancelConnectionInvitationCommandOutput>(
  _ep0,
  _mw0,
  "CancelConnectionInvitation",
  CancelConnectionInvitation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelConnectionInvitationRequest;
      output: CancelConnectionInvitationResponse;
    };
    sdk: {
      input: CancelConnectionInvitationCommandInput;
      output: CancelConnectionInvitationCommandOutput;
    };
  };
}
