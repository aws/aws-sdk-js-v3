// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { VerifyTargetDomainInput, VerifyTargetDomainOutput } from "../models/models_0";
import { VerifyTargetDomain$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyTargetDomainCommand}.
 */
export interface VerifyTargetDomainCommandInput extends VerifyTargetDomainInput {}
/**
 * @public
 *
 * The output of {@link VerifyTargetDomainCommand}.
 */
export interface VerifyTargetDomainCommandOutput extends VerifyTargetDomainOutput, __MetadataBearer {}

/**
 * <p>Initiates verification of a target domain. This checks whether the domain ownership verification token has been properly configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, VerifyTargetDomainCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, VerifyTargetDomainCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // VerifyTargetDomainInput
 *   targetDomainId: "STRING_VALUE", // required
 * };
 * const command = new VerifyTargetDomainCommand(input);
 * const response = await client.send(command);
 * // { // VerifyTargetDomainOutput
 * //   targetDomainId: "STRING_VALUE",
 * //   domainName: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   verifiedAt: new Date("TIMESTAMP"),
 * //   status: "PENDING" || "VERIFIED" || "FAILED" || "UNREACHABLE",
 * //   verificationStatusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param VerifyTargetDomainCommandInput - {@link VerifyTargetDomainCommandInput}
 * @returns {@link VerifyTargetDomainCommandOutput}
 * @see {@link VerifyTargetDomainCommandInput} for command's `input` shape.
 * @see {@link VerifyTargetDomainCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class VerifyTargetDomainCommand extends $Command
  .classBuilder<
    VerifyTargetDomainCommandInput,
    VerifyTargetDomainCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "VerifyTargetDomain", {})
  .n("SecurityAgentClient", "VerifyTargetDomainCommand")
  .sc(VerifyTargetDomain$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyTargetDomainInput;
      output: VerifyTargetDomainOutput;
    };
    sdk: {
      input: VerifyTargetDomainCommandInput;
      output: VerifyTargetDomainCommandOutput;
    };
  };
}
