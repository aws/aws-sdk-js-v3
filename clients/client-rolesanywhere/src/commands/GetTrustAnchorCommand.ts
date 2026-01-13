// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ScalarTrustAnchorRequest, TrustAnchorDetailResponse } from "../models/models_0";
import type { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";
import { GetTrustAnchor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrustAnchorCommand}.
 */
export interface GetTrustAnchorCommandInput extends ScalarTrustAnchorRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustAnchorCommand}.
 */
export interface GetTrustAnchorCommandOutput extends TrustAnchorDetailResponse, __MetadataBearer {}

/**
 * <p>Gets a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetTrustAnchor</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, GetTrustAnchorCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, GetTrustAnchorCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // ScalarTrustAnchorRequest
 *   trustAnchorId: "STRING_VALUE", // required
 * };
 * const command = new GetTrustAnchorCommand(input);
 * const response = await client.send(command);
 * // { // TrustAnchorDetailResponse
 * //   trustAnchor: { // TrustAnchorDetail
 * //     trustAnchorId: "STRING_VALUE",
 * //     trustAnchorArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     source: { // Source
 * //       sourceType: "STRING_VALUE",
 * //       sourceData: { // SourceData Union: only one key present
 * //         x509CertificateData: "STRING_VALUE",
 * //         acmPcaArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     enabled: true || false,
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     notificationSettings: [ // NotificationSettingDetails
 * //       { // NotificationSettingDetail
 * //         enabled: true || false, // required
 * //         event: "STRING_VALUE", // required
 * //         threshold: Number("int"),
 * //         channel: "STRING_VALUE",
 * //         configuredBy: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrustAnchorCommandInput - {@link GetTrustAnchorCommandInput}
 * @returns {@link GetTrustAnchorCommandOutput}
 * @see {@link GetTrustAnchorCommandInput} for command's `input` shape.
 * @see {@link GetTrustAnchorCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 *
 * @public
 */
export class GetTrustAnchorCommand extends $Command
  .classBuilder<
    GetTrustAnchorCommandInput,
    GetTrustAnchorCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RolesAnywhere", "GetTrustAnchor", {})
  .n("RolesAnywhereClient", "GetTrustAnchorCommand")
  .sc(GetTrustAnchor$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ScalarTrustAnchorRequest;
      output: TrustAnchorDetailResponse;
    };
    sdk: {
      input: GetTrustAnchorCommandInput;
      output: GetTrustAnchorCommandOutput;
    };
  };
}
