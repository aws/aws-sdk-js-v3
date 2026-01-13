// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetConnectionPreferencesRequest, GetConnectionPreferencesResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { GetConnectionPreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectionPreferencesCommand}.
 */
export interface GetConnectionPreferencesCommandInput extends GetConnectionPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionPreferencesCommand}.
 */
export interface GetConnectionPreferencesCommandOutput extends GetConnectionPreferencesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the connection preferences for a partner account, including access settings and exclusions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, GetConnectionPreferencesCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, GetConnectionPreferencesCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // GetConnectionPreferencesRequest
 *   Catalog: "STRING_VALUE", // required
 * };
 * const command = new GetConnectionPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionPreferencesResponse
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
 * @param GetConnectionPreferencesCommandInput - {@link GetConnectionPreferencesCommandInput}
 * @returns {@link GetConnectionPreferencesCommandOutput}
 * @see {@link GetConnectionPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetConnectionPreferencesCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
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
export class GetConnectionPreferencesCommand extends $Command
  .classBuilder<
    GetConnectionPreferencesCommandInput,
    GetConnectionPreferencesCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "GetConnectionPreferences", {})
  .n("PartnerCentralAccountClient", "GetConnectionPreferencesCommand")
  .sc(GetConnectionPreferences$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectionPreferencesRequest;
      output: GetConnectionPreferencesResponse;
    };
    sdk: {
      input: GetConnectionPreferencesCommandInput;
      output: GetConnectionPreferencesCommandOutput;
    };
  };
}
