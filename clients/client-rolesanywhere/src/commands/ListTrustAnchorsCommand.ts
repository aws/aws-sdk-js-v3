// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRequest, ListTrustAnchorsResponse } from "../models/models_0";
import { de_ListTrustAnchorsCommand, se_ListTrustAnchorsCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrustAnchorsCommand}.
 */
export interface ListTrustAnchorsCommandInput extends ListRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustAnchorsCommand}.
 */
export interface ListTrustAnchorsCommandOutput extends ListTrustAnchorsResponse, __MetadataBearer {}

/**
 * <p>Lists the trust anchors in the authenticated account and Amazon Web Services Region.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:ListTrustAnchors</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, ListTrustAnchorsCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, ListTrustAnchorsCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const input = { // ListRequest
 *   nextToken: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListTrustAnchorsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustAnchorsResponse
 * //   nextToken: "STRING_VALUE",
 * //   trustAnchors: [ // TrustAnchorDetails
 * //     { // TrustAnchorDetail
 * //       trustAnchorId: "STRING_VALUE",
 * //       trustAnchorArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       source: { // Source
 * //         sourceType: "STRING_VALUE",
 * //         sourceData: { // SourceData Union: only one key present
 * //           x509CertificateData: "STRING_VALUE",
 * //           acmPcaArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       enabled: true || false,
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       notificationSettings: [ // NotificationSettingDetails
 * //         { // NotificationSettingDetail
 * //           enabled: true || false, // required
 * //           event: "STRING_VALUE", // required
 * //           threshold: Number("int"),
 * //           channel: "STRING_VALUE",
 * //           configuredBy: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTrustAnchorsCommandInput - {@link ListTrustAnchorsCommandInput}
 * @returns {@link ListTrustAnchorsCommandOutput}
 * @see {@link ListTrustAnchorsCommandInput} for command's `input` shape.
 * @see {@link ListTrustAnchorsCommandOutput} for command's `response` shape.
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
export class ListTrustAnchorsCommand extends $Command
  .classBuilder<
    ListTrustAnchorsCommandInput,
    ListTrustAnchorsCommandOutput,
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
  .s("RolesAnywhere", "ListTrustAnchors", {})
  .n("RolesAnywhereClient", "ListTrustAnchorsCommand")
  .f(void 0, void 0)
  .ser(se_ListTrustAnchorsCommand)
  .de(de_ListTrustAnchorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRequest;
      output: ListTrustAnchorsResponse;
    };
    sdk: {
      input: ListTrustAnchorsCommandInput;
      output: ListTrustAnchorsCommandOutput;
    };
  };
}
