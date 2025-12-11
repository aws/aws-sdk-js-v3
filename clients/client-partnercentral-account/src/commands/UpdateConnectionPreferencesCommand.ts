// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateConnectionPreferencesRequest, UpdateConnectionPreferencesResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { UpdateConnectionPreferences } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectionPreferencesCommand}.
 */
export interface UpdateConnectionPreferencesCommandInput extends UpdateConnectionPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectionPreferencesCommand}.
 */
export interface UpdateConnectionPreferencesCommandOutput
  extends UpdateConnectionPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Updates the connection preferences for a partner account, modifying access settings and exclusions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, UpdateConnectionPreferencesCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, UpdateConnectionPreferencesCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // UpdateConnectionPreferencesRequest
 *   Catalog: "STRING_VALUE", // required
 *   Revision: Number("long"), // required
 *   AccessType: "ALLOW_ALL" || "DENY_ALL" || "ALLOW_BY_DEFAULT_DENY_SOME", // required
 *   ExcludedParticipantIdentifiers: [ // ParticipantIdentifierList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateConnectionPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectionPreferencesResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   AccessType: "ALLOW_ALL" || "DENY_ALL" || "ALLOW_BY_DEFAULT_DENY_SOME", // required
 * //   ExcludedParticipantIds: [ // ParticipantIdentifierList
 * //     "STRING_VALUE",
 * //   ],
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * //   Revision: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param UpdateConnectionPreferencesCommandInput - {@link UpdateConnectionPreferencesCommandInput}
 * @returns {@link UpdateConnectionPreferencesCommandOutput}
 * @see {@link UpdateConnectionPreferencesCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionPreferencesCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. This typically occurs when trying to create a resource that already exists or modify a resource that has been changed by another process.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
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
export class UpdateConnectionPreferencesCommand extends $Command
  .classBuilder<
    UpdateConnectionPreferencesCommandInput,
    UpdateConnectionPreferencesCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "UpdateConnectionPreferences", {})
  .n("PartnerCentralAccountClient", "UpdateConnectionPreferencesCommand")
  .sc(UpdateConnectionPreferences)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectionPreferencesRequest;
      output: UpdateConnectionPreferencesResponse;
    };
    sdk: {
      input: UpdateConnectionPreferencesCommandInput;
      output: UpdateConnectionPreferencesCommandOutput;
    };
  };
}
