// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTrustAnchorRequest, TrustAnchorDetailResponse } from "../models/models_0";
import type { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";
import { CreateTrustAnchor } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrustAnchorCommand}.
 */
export interface CreateTrustAnchorCommandInput extends CreateTrustAnchorRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrustAnchorCommand}.
 */
export interface CreateTrustAnchorCommandOutput extends TrustAnchorDetailResponse, __MetadataBearer {}

/**
 * <p>Creates a trust anchor to establish trust between IAM Roles Anywhere and your certificate authority (CA). You can define a trust anchor as a reference to an Private Certificate Authority (Private CA) or by uploading a CA certificate. Your Amazon Web Services workloads can authenticate with the trust anchor using certificates issued by the CA in exchange for temporary Amazon Web Services credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateTrustAnchor</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, CreateTrustAnchorCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, CreateTrustAnchorCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // CreateTrustAnchorRequest
 *   name: "STRING_VALUE", // required
 *   source: { // Source
 *     sourceType: "STRING_VALUE",
 *     sourceData: { // SourceData Union: only one key present
 *       x509CertificateData: "STRING_VALUE",
 *       acmPcaArn: "STRING_VALUE",
 *     },
 *   },
 *   enabled: true || false,
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   notificationSettings: [ // NotificationSettings
 *     { // NotificationSetting
 *       enabled: true || false, // required
 *       event: "STRING_VALUE", // required
 *       threshold: Number("int"),
 *       channel: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateTrustAnchorCommand(input);
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
 * @param CreateTrustAnchorCommandInput - {@link CreateTrustAnchorCommandInput}
 * @returns {@link CreateTrustAnchorCommandOutput}
 * @see {@link CreateTrustAnchorCommandInput} for command's `input` shape.
 * @see {@link CreateTrustAnchorCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class CreateTrustAnchorCommand extends $Command
  .classBuilder<
    CreateTrustAnchorCommandInput,
    CreateTrustAnchorCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RolesAnywhere", "CreateTrustAnchor", {})
  .n("RolesAnywhereClient", "CreateTrustAnchorCommand")
  .sc(CreateTrustAnchor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrustAnchorRequest;
      output: TrustAnchorDetailResponse;
    };
    sdk: {
      input: CreateTrustAnchorCommandInput;
      output: CreateTrustAnchorCommandOutput;
    };
  };
}
