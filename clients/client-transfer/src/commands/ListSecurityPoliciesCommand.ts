// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSecurityPoliciesRequest, ListSecurityPoliciesResponse } from "../models/models_0";
import { ListSecurityPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the security policies that are attached to your servers and SFTP connectors. For more information about security policies, see [Working with security policies for servers](https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html) or [Working with security policies for SFTP connectors](https://docs.aws.amazon.com/transfer/latest/userguide/security-policies-connectors.html).
 *
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
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` parameter that was passed is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed because the Amazon Web ServicesTransfer Family service is not available.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class ListSecurityPoliciesCommand extends command<ListSecurityPoliciesCommandInput, ListSecurityPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListSecurityPolicies",
  ListSecurityPolicies$
) {
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
