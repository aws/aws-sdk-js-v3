// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { DescribeAcmeAccountRequest, DescribeAcmeAccountResponse } from "../models/models_0";
import { DescribeAcmeAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAcmeAccountCommand}.
 */
export interface DescribeAcmeAccountCommandInput extends DescribeAcmeAccountRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAcmeAccountCommand}.
 */
export interface DescribeAcmeAccountCommandOutput extends DescribeAcmeAccountResponse, __MetadataBearer {}

/**
 * <p>Returns detailed metadata about the specified ACME account, including its status, public key thumbprint, and associated external account binding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DescribeAcmeAccountCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DescribeAcmeAccountCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // DescribeAcmeAccountRequest
 *   AcmeEndpointArn: "STRING_VALUE", // required
 *   AccountUrl: "STRING_VALUE", // required
 * };
 * const command = new DescribeAcmeAccountCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAcmeAccountResponse
 * //   AcmeAccount: { // AcmeAccount
 * //     AccountUrl: "STRING_VALUE",
 * //     PublicKeyThumbprint: "STRING_VALUE",
 * //     Status: "VALID" || "DEACTIVATED" || "REVOKED",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     AcmeExternalAccountBindingArn: "STRING_VALUE",
 * //     Contacts: [ // ContactList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAcmeAccountCommandInput - {@link DescribeAcmeAccountCommandInput}
 * @returns {@link DescribeAcmeAccountCommandOutput}
 * @see {@link DescribeAcmeAccountCommandInput} for command's `input` shape.
 * @see {@link DescribeAcmeAccountCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class DescribeAcmeAccountCommand extends command<DescribeAcmeAccountCommandInput, DescribeAcmeAccountCommandOutput>(
  _ep1,
  _mw0,
  "DescribeAcmeAccount",
  DescribeAcmeAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAcmeAccountRequest;
      output: DescribeAcmeAccountResponse;
    };
    sdk: {
      input: DescribeAcmeAccountCommandInput;
      output: DescribeAcmeAccountCommandOutput;
    };
  };
}
