// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetConnectionInvitationRequest, GetConnectionInvitationResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { GetConnectionInvitation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectionInvitationCommand}.
 */
export interface GetConnectionInvitationCommandInput extends GetConnectionInvitationRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionInvitationCommand}.
 */
export interface GetConnectionInvitationCommandOutput extends GetConnectionInvitationResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific connection invitation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, GetConnectionInvitationCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, GetConnectionInvitationCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // GetConnectionInvitationRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetConnectionInvitationCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionInvitationResponse
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
 * @param GetConnectionInvitationCommandInput - {@link GetConnectionInvitationCommandInput}
 * @returns {@link GetConnectionInvitationCommandOutput}
 * @see {@link GetConnectionInvitationCommandInput} for command's `input` shape.
 * @see {@link GetConnectionInvitationCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. This may occur when referencing a resource that does not exist or has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.</p>
 *
 * @throws {@link PartnerCentralAccountServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralAccount service.</p>
 *
 *
 * @public
 */
export class GetConnectionInvitationCommand extends $Command
  .classBuilder<
    GetConnectionInvitationCommandInput,
    GetConnectionInvitationCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "GetConnectionInvitation", {})
  .n("PartnerCentralAccountClient", "GetConnectionInvitationCommand")
  .sc(GetConnectionInvitation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectionInvitationRequest;
      output: GetConnectionInvitationResponse;
    };
    sdk: {
      input: GetConnectionInvitationCommandInput;
      output: GetConnectionInvitationCommandOutput;
    };
  };
}
