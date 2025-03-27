// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ScalarSubjectRequest, SubjectDetailResponse } from "../models/models_0";
import { de_GetSubjectCommand, se_GetSubjectCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSubjectCommand}.
 */
export interface GetSubjectCommandInput extends ScalarSubjectRequest {}
/**
 * @public
 *
 * The output of {@link GetSubjectCommand}.
 */
export interface GetSubjectCommandOutput extends SubjectDetailResponse, __MetadataBearer {}

/**
 * <p>Gets a <i>subject</i>, which associates a certificate identity with
 *          authentication attempts. The subject stores auditing information such as the status
 *          of the last authentication attempt, the certificate data used in the attempt, and the
 *          last time the associated identity attempted authentication. </p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:GetSubject</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, GetSubjectCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, GetSubjectCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const input = { // ScalarSubjectRequest
 *   subjectId: "STRING_VALUE", // required
 * };
 * const command = new GetSubjectCommand(input);
 * const response = await client.send(command);
 * // { // SubjectDetailResponse
 * //   subject: { // SubjectDetail
 * //     subjectArn: "STRING_VALUE",
 * //     subjectId: "STRING_VALUE",
 * //     enabled: true || false,
 * //     x509Subject: "STRING_VALUE",
 * //     lastSeenAt: new Date("TIMESTAMP"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     credentials: [ // CredentialSummaries
 * //       { // CredentialSummary
 * //         seenAt: new Date("TIMESTAMP"),
 * //         serialNumber: "STRING_VALUE",
 * //         issuer: "STRING_VALUE",
 * //         enabled: true || false,
 * //         x509CertificateData: "STRING_VALUE",
 * //         failed: true || false,
 * //       },
 * //     ],
 * //     instanceProperties: [ // InstanceProperties
 * //       { // InstanceProperty
 * //         seenAt: new Date("TIMESTAMP"),
 * //         properties: { // InstancePropertyMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         failed: true || false,
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSubjectCommandInput - {@link GetSubjectCommandInput}
 * @returns {@link GetSubjectCommandOutput}
 * @see {@link GetSubjectCommandInput} for command's `input` shape.
 * @see {@link GetSubjectCommandOutput} for command's `response` shape.
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
export class GetSubjectCommand extends $Command
  .classBuilder<
    GetSubjectCommandInput,
    GetSubjectCommandOutput,
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
  .s("RolesAnywhere", "GetSubject", {})
  .n("RolesAnywhereClient", "GetSubjectCommand")
  .f(void 0, void 0)
  .ser(se_GetSubjectCommand)
  .de(de_GetSubjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ScalarSubjectRequest;
      output: SubjectDetailResponse;
    };
    sdk: {
      input: GetSubjectCommandInput;
      output: GetSubjectCommandOutput;
    };
  };
}
