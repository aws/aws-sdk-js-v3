// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeCustomDomainsRequest, DescribeCustomDomainsResponse } from "../models/models_0";
import { DescribeCustomDomains } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomDomainsCommand}.
 */
export interface DescribeCustomDomainsCommandInput extends DescribeCustomDomainsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomDomainsCommand}.
 */
export interface DescribeCustomDomainsCommandOutput extends DescribeCustomDomainsResponse, __MetadataBearer {}

/**
 * <p>Return a description of custom domain names that are associated with an App Runner service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeCustomDomainsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeCustomDomainsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // DescribeCustomDomainsRequest
 *   ServiceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeCustomDomainsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomDomainsResponse
 * //   DNSTarget: "STRING_VALUE", // required
 * //   ServiceArn: "STRING_VALUE", // required
 * //   CustomDomains: [ // CustomDomainList // required
 * //     { // CustomDomain
 * //       DomainName: "STRING_VALUE", // required
 * //       EnableWWWSubdomain: true || false, // required
 * //       CertificateValidationRecords: [ // CertificateValidationRecordList
 * //         { // CertificateValidationRecord
 * //           Name: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           Status: "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 * //         },
 * //       ],
 * //       Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETE_FAILED" || "PENDING_CERTIFICATE_DNS_VALIDATION" || "BINDING_CERTIFICATE", // required
 * //     },
 * //   ],
 * //   VpcDNSTargets: [ // VpcDNSTargetList // required
 * //     { // VpcDNSTarget
 * //       VpcIngressConnectionArn: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCustomDomainsCommandInput - {@link DescribeCustomDomainsCommandInput}
 * @returns {@link DescribeCustomDomainsCommandOutput}
 * @see {@link DescribeCustomDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomDomainsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
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
export class DescribeCustomDomainsCommand extends $Command
  .classBuilder<
    DescribeCustomDomainsCommandInput,
    DescribeCustomDomainsCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "DescribeCustomDomains", {})
  .n("AppRunnerClient", "DescribeCustomDomainsCommand")
  .sc(DescribeCustomDomains)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomDomainsRequest;
      output: DescribeCustomDomainsResponse;
    };
    sdk: {
      input: DescribeCustomDomainsCommandInput;
      output: DescribeCustomDomainsCommandOutput;
    };
  };
}
