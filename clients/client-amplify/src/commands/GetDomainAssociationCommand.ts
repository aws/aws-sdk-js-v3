// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDomainAssociationRequest, GetDomainAssociationResult } from "../models/models_0";
import { GetDomainAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainAssociationCommand}.
 */
export interface GetDomainAssociationCommandInput extends GetDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainAssociationCommand}.
 */
export interface GetDomainAssociationCommandOutput extends GetDomainAssociationResult, __MetadataBearer {}

/**
 * <p>Returns the domain information for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetDomainAssociationCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // GetDomainAssociationRequest
 *   appId: "STRING_VALUE", // required
 *   domainName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainAssociationResult
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
 * @param GetDomainAssociationCommandInput - {@link GetDomainAssociationCommandInput}
 * @returns {@link GetDomainAssociationCommandOutput}
 * @see {@link GetDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link GetDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
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
export class GetDomainAssociationCommand extends $Command
  .classBuilder<
    GetDomainAssociationCommandInput,
    GetDomainAssociationCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Amplify", "GetDomainAssociation", {})
  .n("AmplifyClient", "GetDomainAssociationCommand")
  .sc(GetDomainAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainAssociationRequest;
      output: GetDomainAssociationResult;
    };
    sdk: {
      input: GetDomainAssociationCommandInput;
      output: GetDomainAssociationCommandOutput;
    };
  };
}
