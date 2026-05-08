// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetTargetDomainsInput, BatchGetTargetDomainsOutput } from "../models/models_0";
import { BatchGetTargetDomains$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetTargetDomainsCommand}.
 */
export interface BatchGetTargetDomainsCommandInput extends BatchGetTargetDomainsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetTargetDomainsCommand}.
 */
export interface BatchGetTargetDomainsCommandOutput extends BatchGetTargetDomainsOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about one or more target domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchGetTargetDomainsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchGetTargetDomainsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchGetTargetDomainsInput
 *   targetDomainIds: [ // TargetDomainIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetTargetDomainsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetTargetDomainsOutput
 * //   targetDomains: [ // TargetDomainList
 * //     { // TargetDomain
 * //       targetDomainId: "STRING_VALUE", // required
 * //       domainName: "STRING_VALUE", // required
 * //       verificationStatus: "PENDING" || "VERIFIED" || "FAILED" || "UNREACHABLE",
 * //       verificationStatusReason: "STRING_VALUE",
 * //       verificationDetails: { // VerificationDetails
 * //         method: "DNS_TXT" || "HTTP_ROUTE" || "PRIVATE_VPC",
 * //         dnsTxt: { // DnsVerification
 * //           token: "STRING_VALUE",
 * //           dnsRecordName: "STRING_VALUE",
 * //           dnsRecordType: "TXT",
 * //         },
 * //         httpRoute: { // HttpVerification
 * //           token: "STRING_VALUE",
 * //           routePath: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       verifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   notFound: [ // TargetDomainIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetTargetDomainsCommandInput - {@link BatchGetTargetDomainsCommandInput}
 * @returns {@link BatchGetTargetDomainsCommandOutput}
 * @see {@link BatchGetTargetDomainsCommandInput} for command's `input` shape.
 * @see {@link BatchGetTargetDomainsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchGetTargetDomainsCommand extends $Command
  .classBuilder<
    BatchGetTargetDomainsCommandInput,
    BatchGetTargetDomainsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchGetTargetDomains", {})
  .n("SecurityAgentClient", "BatchGetTargetDomainsCommand")
  .sc(BatchGetTargetDomains$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetTargetDomainsInput;
      output: BatchGetTargetDomainsOutput;
    };
    sdk: {
      input: BatchGetTargetDomainsCommandInput;
      output: BatchGetTargetDomainsCommandOutput;
    };
  };
}
