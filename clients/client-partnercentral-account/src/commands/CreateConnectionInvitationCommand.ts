// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateConnectionInvitationRequest, CreateConnectionInvitationResponse } from "../models/models_0";
import { CreateConnectionInvitation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateConnectionInvitationCommand}.
 */
export interface CreateConnectionInvitationCommandInput extends CreateConnectionInvitationRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectionInvitationCommand}.
 */
export interface CreateConnectionInvitationCommandOutput extends CreateConnectionInvitationResponse, __MetadataBearer {}

/**
 * Creates a new connection invitation to establish a partnership with another organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, CreateConnectionInvitationCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, CreateConnectionInvitationCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // CreateConnectionInvitationRequest
 *   Catalog: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   ConnectionType: "OPPORTUNITY_COLLABORATION" || "SUBSIDIARY", // required
 *   Email: "STRING_VALUE", // required
 *   Message: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ReceiverIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CreateConnectionInvitationCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectionInvitationResponse
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
 * @param CreateConnectionInvitationCommandInput - {@link CreateConnectionInvitationCommandInput}
 * @returns {@link CreateConnectionInvitationCommandOutput}
 * @see {@link CreateConnectionInvitationCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionInvitationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request was rejected because it would exceed a service quota or limit. This may occur when trying to create more resources than allowed by the service limits.
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
export class CreateConnectionInvitationCommand extends command<CreateConnectionInvitationCommandInput, CreateConnectionInvitationCommandOutput>(
  _ep0,
  _mw0,
  "CreateConnectionInvitation",
  CreateConnectionInvitation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectionInvitationRequest;
      output: CreateConnectionInvitationResponse;
    };
    sdk: {
      input: CreateConnectionInvitationCommandInput;
      output: CreateConnectionInvitationCommandOutput;
    };
  };
}
