// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTargetDomainInput, UpdateTargetDomainOutput } from "../models/models_0";
import { UpdateTargetDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTargetDomainCommand}.
 */
export interface UpdateTargetDomainCommandInput extends UpdateTargetDomainInput {}
/**
 * @public
 *
 * The output of {@link UpdateTargetDomainCommand}.
 */
export interface UpdateTargetDomainCommandOutput extends UpdateTargetDomainOutput, __MetadataBearer {}

/**
 * <p>Updates the verification method for a target domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateTargetDomainCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateTargetDomainCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateTargetDomainInput
 *   targetDomainId: "STRING_VALUE", // required
 *   verificationMethod: "DNS_TXT" || "HTTP_ROUTE" || "PRIVATE_VPC", // required
 * };
 * const command = new UpdateTargetDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTargetDomainOutput
 * //   targetDomainId: "STRING_VALUE", // required
 * //   domainName: "STRING_VALUE", // required
 * //   verificationStatus: "PENDING" || "VERIFIED" || "FAILED" || "UNREACHABLE", // required
 * //   verificationStatusReason: "STRING_VALUE",
 * //   verificationDetails: { // VerificationDetails
 * //     method: "DNS_TXT" || "HTTP_ROUTE" || "PRIVATE_VPC",
 * //     dnsTxt: { // DnsVerification
 * //       token: "STRING_VALUE",
 * //       dnsRecordName: "STRING_VALUE",
 * //       dnsRecordType: "TXT",
 * //     },
 * //     httpRoute: { // HttpVerification
 * //       token: "STRING_VALUE",
 * //       routePath: "STRING_VALUE",
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   verifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateTargetDomainCommandInput - {@link UpdateTargetDomainCommandInput}
 * @returns {@link UpdateTargetDomainCommandOutput}
 * @see {@link UpdateTargetDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateTargetDomainCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class UpdateTargetDomainCommand extends command<UpdateTargetDomainCommandInput, UpdateTargetDomainCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTargetDomain",
  UpdateTargetDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTargetDomainInput;
      output: UpdateTargetDomainOutput;
    };
    sdk: {
      input: UpdateTargetDomainCommandInput;
      output: UpdateTargetDomainCommandOutput;
    };
  };
}
