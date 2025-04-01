// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDomainAssociationsRequest, ListDomainAssociationsResult } from "../models/models_0";
import { de_ListDomainAssociationsCommand, se_ListDomainAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainAssociationsCommand}.
 */
export interface ListDomainAssociationsCommandInput extends ListDomainAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainAssociationsCommand}.
 */
export interface ListDomainAssociationsCommandOutput extends ListDomainAssociationsResult, __MetadataBearer {}

/**
 * <p>Returns the domain associations for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListDomainAssociationsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListDomainAssociationsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // ListDomainAssociationsRequest
 *   appId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainAssociationsResult
 * //   domainAssociations: [ // DomainAssociations // required
 * //     { // DomainAssociation
 * //       domainAssociationArn: "STRING_VALUE", // required
 * //       domainName: "STRING_VALUE", // required
 * //       enableAutoSubDomain: true || false, // required
 * //       autoSubDomainCreationPatterns: [ // AutoSubDomainCreationPatterns
 * //         "STRING_VALUE",
 * //       ],
 * //       autoSubDomainIAMRole: "STRING_VALUE",
 * //       domainStatus: "PENDING_VERIFICATION" || "IN_PROGRESS" || "AVAILABLE" || "IMPORTING_CUSTOM_CERTIFICATE" || "PENDING_DEPLOYMENT" || "AWAITING_APP_CNAME" || "FAILED" || "CREATING" || "REQUESTING_CERTIFICATE" || "UPDATING", // required
 * //       updateStatus: "REQUESTING_CERTIFICATE" || "PENDING_VERIFICATION" || "IMPORTING_CUSTOM_CERTIFICATE" || "PENDING_DEPLOYMENT" || "AWAITING_APP_CNAME" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //       statusReason: "STRING_VALUE", // required
 * //       certificateVerificationDNSRecord: "STRING_VALUE",
 * //       subDomains: [ // SubDomains // required
 * //         { // SubDomain
 * //           subDomainSetting: { // SubDomainSetting
 * //             prefix: "STRING_VALUE", // required
 * //             branchName: "STRING_VALUE", // required
 * //           },
 * //           verified: true || false, // required
 * //           dnsRecord: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       certificate: { // Certificate
 * //         type: "AMPLIFY_MANAGED" || "CUSTOM", // required
 * //         customCertificateArn: "STRING_VALUE",
 * //         certificateVerificationDNSRecord: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainAssociationsCommandInput - {@link ListDomainAssociationsCommandInput}
 * @returns {@link ListDomainAssociationsCommandOutput}
 * @see {@link ListDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
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
export class ListDomainAssociationsCommand extends $Command
  .classBuilder<
    ListDomainAssociationsCommandInput,
    ListDomainAssociationsCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Amplify", "ListDomainAssociations", {})
  .n("AmplifyClient", "ListDomainAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListDomainAssociationsCommand)
  .de(de_ListDomainAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainAssociationsRequest;
      output: ListDomainAssociationsResult;
    };
    sdk: {
      input: ListDomainAssociationsCommandInput;
      output: ListDomainAssociationsCommandOutput;
    };
  };
}
