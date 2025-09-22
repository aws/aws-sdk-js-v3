// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDomainAssociationRequest, DeleteDomainAssociationResult } from "../models/models_0";
import { DeleteDomainAssociation } from "../schemas/schemas_2_Domain";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDomainAssociationCommand}.
 */
export interface DeleteDomainAssociationCommandInput extends DeleteDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDomainAssociationCommand}.
 */
export interface DeleteDomainAssociationCommandOutput extends DeleteDomainAssociationResult, __MetadataBearer {}

/**
 * <p>Deletes a domain association for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteDomainAssociationCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // DeleteDomainAssociationRequest
 *   appId: "STRING_VALUE", // required
 *   domainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDomainAssociationResult
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
 * @param DeleteDomainAssociationCommandInput - {@link DeleteDomainAssociationCommandInput}
 * @returns {@link DeleteDomainAssociationCommandOutput}
 * @see {@link DeleteDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainAssociationCommandOutput} for command's `response` shape.
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
export class DeleteDomainAssociationCommand extends $Command
  .classBuilder<
    DeleteDomainAssociationCommandInput,
    DeleteDomainAssociationCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Amplify", "DeleteDomainAssociation", {})
  .n("AmplifyClient", "DeleteDomainAssociationCommand")
  .sc(DeleteDomainAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDomainAssociationRequest;
      output: DeleteDomainAssociationResult;
    };
    sdk: {
      input: DeleteDomainAssociationCommandInput;
      output: DeleteDomainAssociationCommandOutput;
    };
  };
}
