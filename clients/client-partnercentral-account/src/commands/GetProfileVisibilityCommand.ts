// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetProfileVisibilityRequest, GetProfileVisibilityResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { GetProfileVisibility$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProfileVisibilityCommand}.
 */
export interface GetProfileVisibilityCommandInput extends GetProfileVisibilityRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileVisibilityCommand}.
 */
export interface GetProfileVisibilityCommandOutput extends GetProfileVisibilityResponse, __MetadataBearer {}

/**
 * <p>Retrieves the visibility settings for a partner profile, determining who can see the profile information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, GetProfileVisibilityCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, GetProfileVisibilityCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // GetProfileVisibilityRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetProfileVisibilityCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileVisibilityResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Visibility: "PRIVATE" || "PUBLIC", // required
 * //   ProfileId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetProfileVisibilityCommandInput - {@link GetProfileVisibilityCommandInput}
 * @returns {@link GetProfileVisibilityCommandOutput}
 * @see {@link GetProfileVisibilityCommandInput} for command's `input` shape.
 * @see {@link GetProfileVisibilityCommandOutput} for command's `response` shape.
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
export class GetProfileVisibilityCommand extends $Command
  .classBuilder<
    GetProfileVisibilityCommandInput,
    GetProfileVisibilityCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "GetProfileVisibility", {})
  .n("PartnerCentralAccountClient", "GetProfileVisibilityCommand")
  .sc(GetProfileVisibility$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProfileVisibilityRequest;
      output: GetProfileVisibilityResponse;
    };
    sdk: {
      input: GetProfileVisibilityCommandInput;
      output: GetProfileVisibilityCommandOutput;
    };
  };
}
