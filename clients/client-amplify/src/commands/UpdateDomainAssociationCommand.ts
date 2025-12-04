// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDomainAssociationRequest, UpdateDomainAssociationResult } from "../models/models_0";
import { UpdateDomainAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainAssociationCommand}.
 */
export interface UpdateDomainAssociationCommandInput extends UpdateDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainAssociationCommand}.
 */
export interface UpdateDomainAssociationCommandOutput extends UpdateDomainAssociationResult, __MetadataBearer {}

/**
 * <p>Creates a new domain association for an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, UpdateDomainAssociationCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, UpdateDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // UpdateDomainAssociationRequest
 *   appId: "STRING_VALUE", // required
 *   domainName: "STRING_VALUE", // required
 *   enableAutoSubDomain: true || false,
 *   subDomainSettings: [ // SubDomainSettings
 *     { // SubDomainSetting
 *       prefix: "STRING_VALUE", // required
 *       branchName: "STRING_VALUE", // required
 *     },
 *   ],
 *   autoSubDomainCreationPatterns: [ // AutoSubDomainCreationPatterns
 *     "STRING_VALUE",
 *   ],
 *   autoSubDomainIAMRole: "STRING_VALUE",
 *   certificateSettings: { // CertificateSettings
 *     type: "AMPLIFY_MANAGED" || "CUSTOM", // required
 *     customCertificateArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainAssociationResult
 * //   domainAssociation: { // DomainAssociation
 * //     domainAssociationArn: "STRING_VALUE", // required
 * //     domainName: "STRING_VALUE", // required
 * //     enableAutoSubDomain: true || false, // required
 * //     autoSubDomainCreationPatterns: [ // AutoSubDomainCreationPatterns
 * //       "STRING_VALUE",
 * //     ],
 * //     autoSubDomainIAMRole: "STRING_VALUE",
 * //     domainStatus: "PENDING_VERIFICATION" || "IN_PROGRESS" || "AVAILABLE" || "IMPORTING_CUSTOM_CERTIFICATE" || "PENDING_DEPLOYMENT" || "AWAITING_APP_CNAME" || "FAILED" || "CREATING" || "REQUESTING_CERTIFICATE" || "UPDATING", // required
 * //     updateStatus: "REQUESTING_CERTIFICATE" || "PENDING_VERIFICATION" || "IMPORTING_CUSTOM_CERTIFICATE" || "PENDING_DEPLOYMENT" || "AWAITING_APP_CNAME" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //     statusReason: "STRING_VALUE", // required
 * //     certificateVerificationDNSRecord: "STRING_VALUE",
 * //     subDomains: [ // SubDomains // required
 * //       { // SubDomain
 * //         subDomainSetting: { // SubDomainSetting
 * //           prefix: "STRING_VALUE", // required
 * //           branchName: "STRING_VALUE", // required
 * //         },
 * //         verified: true || false, // required
 * //         dnsRecord: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     certificate: { // Certificate
 * //       type: "AMPLIFY_MANAGED" || "CUSTOM", // required
 * //       customCertificateArn: "STRING_VALUE",
 * //       certificateVerificationDNSRecord: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDomainAssociationCommandInput - {@link UpdateDomainAssociationCommandInput}
 * @returns {@link UpdateDomainAssociationCommandOutput}
 * @see {@link UpdateDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link DependentServiceFailureException} (server fault)
 *  <p>An operation failed because a dependent service threw an exception. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 *
 * @public
 */
export class UpdateDomainAssociationCommand extends $Command
  .classBuilder<
    UpdateDomainAssociationCommandInput,
    UpdateDomainAssociationCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Amplify", "UpdateDomainAssociation", {})
  .n("AmplifyClient", "UpdateDomainAssociationCommand")
  .sc(UpdateDomainAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainAssociationRequest;
      output: UpdateDomainAssociationResult;
    };
    sdk: {
      input: UpdateDomainAssociationCommandInput;
      output: UpdateDomainAssociationCommandOutput;
    };
  };
}
