// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateCustomDomainRequest, AssociateCustomDomainResponse } from "../models/models_0";
import { AssociateCustomDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateCustomDomainCommand}.
 */
export interface AssociateCustomDomainCommandInput extends AssociateCustomDomainRequest {}
/**
 * @public
 *
 * The output of {@link AssociateCustomDomainCommand}.
 */
export interface AssociateCustomDomainCommandOutput extends AssociateCustomDomainResponse, __MetadataBearer {}

/**
 * <p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p>
 *          <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record
 *       that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or
 *       more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks
 *       domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, AssociateCustomDomainCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, AssociateCustomDomainCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // AssociateCustomDomainRequest
 *   ServiceArn: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   EnableWWWSubdomain: true || false,
 * };
 * const command = new AssociateCustomDomainCommand(input);
 * const response = await client.send(command);
 * // { // AssociateCustomDomainResponse
 * //   DNSTarget: "STRING_VALUE", // required
 * //   ServiceArn: "STRING_VALUE", // required
 * //   CustomDomain: { // CustomDomain
 * //     DomainName: "STRING_VALUE", // required
 * //     EnableWWWSubdomain: true || false, // required
 * //     CertificateValidationRecords: [ // CertificateValidationRecordList
 * //       { // CertificateValidationRecord
 * //         Name: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //         Status: "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 * //       },
 * //     ],
 * //     Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETE_FAILED" || "PENDING_CERTIFICATE_DNS_VALIDATION" || "BINDING_CERTIFICATE", // required
 * //   },
 * //   VpcDNSTargets: [ // VpcDNSTargetList // required
 * //     { // VpcDNSTarget
 * //       VpcIngressConnectionArn: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateCustomDomainCommandInput - {@link AssociateCustomDomainCommandInput}
 * @returns {@link AssociateCustomDomainCommandOutput}
 * @see {@link AssociateCustomDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateCustomDomainCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>You can't perform this action when the resource is in its current state.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 *
 * @public
 */
export class AssociateCustomDomainCommand extends $Command
  .classBuilder<
    AssociateCustomDomainCommandInput,
    AssociateCustomDomainCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "AssociateCustomDomain", {})
  .n("AppRunnerClient", "AssociateCustomDomainCommand")
  .sc(AssociateCustomDomain$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateCustomDomainRequest;
      output: AssociateCustomDomainResponse;
    };
    sdk: {
      input: AssociateCustomDomainCommandInput;
      output: AssociateCustomDomainCommandOutput;
    };
  };
}
