// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TrustAnchorDetailResponse, UpdateTrustAnchorRequest } from "../models/models_0";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";
import { UpdateTrustAnchor } from "../schemas/schemas_1_Trust";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTrustAnchorCommand}.
 */
export interface UpdateTrustAnchorCommandInput extends UpdateTrustAnchorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrustAnchorCommand}.
 */
export interface UpdateTrustAnchorCommandOutput extends TrustAnchorDetailResponse, __MetadataBearer {}

/**
 * <p>Updates a trust anchor. You establish trust between IAM Roles Anywhere
 *          and your certificate authority (CA) by configuring a trust anchor. You can define a trust
 *          anchor as a reference to an Private Certificate Authority (Private CA) or by uploading a
 *          CA certificate. Your Amazon Web Services workloads can authenticate with the trust anchor
 *          using certificates issued by the CA in exchange for temporary Amazon Web Services
 *          credentials.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:UpdateTrustAnchor</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, UpdateTrustAnchorCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, UpdateTrustAnchorCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // UpdateTrustAnchorRequest
 *   trustAnchorId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   source: { // Source
 *     sourceType: "STRING_VALUE",
 *     sourceData: { // SourceData Union: only one key present
 *       x509CertificateData: "STRING_VALUE",
 *       acmPcaArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateTrustAnchorCommand(input);
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
 * @param UpdateTrustAnchorCommandInput - {@link UpdateTrustAnchorCommandInput}
 * @returns {@link UpdateTrustAnchorCommandOutput}
 * @see {@link UpdateTrustAnchorCommandInput} for command's `input` shape.
 * @see {@link UpdateTrustAnchorCommandOutput} for command's `response` shape.
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
export class UpdateTrustAnchorCommand extends $Command
  .classBuilder<
    UpdateTrustAnchorCommandInput,
    UpdateTrustAnchorCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RolesAnywhere", "UpdateTrustAnchor", {})
  .n("RolesAnywhereClient", "UpdateTrustAnchorCommand")
  .sc(UpdateTrustAnchor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTrustAnchorRequest;
      output: TrustAnchorDetailResponse;
    };
    sdk: {
      input: UpdateTrustAnchorCommandInput;
      output: UpdateTrustAnchorCommandOutput;
    };
  };
}
