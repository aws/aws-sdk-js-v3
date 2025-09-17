// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ScalarTrustAnchorRequest, TrustAnchorDetailResponse } from "../models/models_0";
import { de_DisableTrustAnchorCommand, se_DisableTrustAnchorCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableTrustAnchorCommand}.
 */
export interface DisableTrustAnchorCommandInput extends ScalarTrustAnchorRequest {}
/**
 * @public
 *
 * The output of {@link DisableTrustAnchorCommand}.
 */
export interface DisableTrustAnchorCommandOutput extends TrustAnchorDetailResponse, __MetadataBearer {}

/**
 * <p>Disables a trust anchor. When disabled, temporary credential requests specifying this trust anchor are unauthorized.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:DisableTrustAnchor</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, DisableTrustAnchorCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, DisableTrustAnchorCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // ScalarTrustAnchorRequest
 *   trustAnchorId: "STRING_VALUE", // required
 * };
 * const command = new DisableTrustAnchorCommand(input);
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
 * @param DisableTrustAnchorCommandInput - {@link DisableTrustAnchorCommandInput}
 * @returns {@link DisableTrustAnchorCommandOutput}
 * @see {@link DisableTrustAnchorCommandInput} for command's `input` shape.
 * @see {@link DisableTrustAnchorCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 *
 * @public
 */
export class DisableTrustAnchorCommand extends $Command
  .classBuilder<
    DisableTrustAnchorCommandInput,
    DisableTrustAnchorCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RolesAnywhere", "DisableTrustAnchor", {})
  .n("RolesAnywhereClient", "DisableTrustAnchorCommand")
  .f(void 0, void 0)
  .ser(se_DisableTrustAnchorCommand)
  .de(de_DisableTrustAnchorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ScalarTrustAnchorRequest;
      output: TrustAnchorDetailResponse;
    };
    sdk: {
      input: DisableTrustAnchorCommandInput;
      output: DisableTrustAnchorCommandOutput;
    };
  };
}
