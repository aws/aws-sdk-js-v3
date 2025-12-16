// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSecurityPoliciesRequest, ListSecurityPoliciesResponse } from "../models/models_0";
import { ListSecurityPolicies$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityPoliciesCommand}.
 */
export interface ListSecurityPoliciesCommandInput extends ListSecurityPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityPoliciesCommand}.
 */
export interface ListSecurityPoliciesCommandOutput extends ListSecurityPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the security policies that are attached to your servers and SFTP connectors. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies for servers</a> or <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies-connectors.html">Working with security policies for SFTP connectors</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListSecurityPoliciesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListSecurityPoliciesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ListSecurityPoliciesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSecurityPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityPoliciesResponse
 * //   NextToken: "STRING_VALUE",
 * //   SecurityPolicyNames: [ // SecurityPolicyNames // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSecurityPoliciesCommandInput - {@link ListSecurityPoliciesCommandInput}
 * @returns {@link ListSecurityPoliciesCommandOutput}
 * @see {@link ListSecurityPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class ListSecurityPoliciesCommand extends $Command
  .classBuilder<
    ListSecurityPoliciesCommandInput,
    ListSecurityPoliciesCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "ListSecurityPolicies", {})
  .n("TransferClient", "ListSecurityPoliciesCommand")
  .sc(ListSecurityPolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityPoliciesRequest;
      output: ListSecurityPoliciesResponse;
    };
    sdk: {
      input: ListSecurityPoliciesCommandInput;
      output: ListSecurityPoliciesCommandOutput;
    };
  };
}
