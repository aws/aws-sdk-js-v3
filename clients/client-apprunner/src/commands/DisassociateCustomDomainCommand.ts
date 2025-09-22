// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateCustomDomainRequest, DisassociateCustomDomainResponse } from "../models/models_0";
import { DisassociateCustomDomain } from "../schemas/schemas_1_Service";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateCustomDomainCommand}.
 */
export interface DisassociateCustomDomainCommandInput extends DisassociateCustomDomainRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateCustomDomainCommand}.
 */
export interface DisassociateCustomDomainCommandOutput extends DisassociateCustomDomainResponse, __MetadataBearer {}

/**
 * <p>Disassociate a custom domain name from an App Runner service.</p>
 *          <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS
 *         Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for
 *       30 days after a domain is disassociated from your service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DisassociateCustomDomainCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DisassociateCustomDomainCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // DisassociateCustomDomainRequest
 *   ServiceArn: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateCustomDomainCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateCustomDomainResponse
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
 * @param DisassociateCustomDomainCommandInput - {@link DisassociateCustomDomainCommandInput}
 * @returns {@link DisassociateCustomDomainCommandOutput}
 * @see {@link DisassociateCustomDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateCustomDomainCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 *
 * @public
 */
export class DisassociateCustomDomainCommand extends $Command
  .classBuilder<
    DisassociateCustomDomainCommandInput,
    DisassociateCustomDomainCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "DisassociateCustomDomain", {})
  .n("AppRunnerClient", "DisassociateCustomDomainCommand")
  .sc(DisassociateCustomDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateCustomDomainRequest;
      output: DisassociateCustomDomainResponse;
    };
    sdk: {
      input: DisassociateCustomDomainCommandInput;
      output: DisassociateCustomDomainCommandOutput;
    };
  };
}
