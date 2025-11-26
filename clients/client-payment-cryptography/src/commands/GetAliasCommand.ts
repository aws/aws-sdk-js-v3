// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAliasInput, GetAliasOutput } from "../models/models_0";
import type {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { GetAlias } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAliasCommand}.
 */
export interface GetAliasCommandInput extends GetAliasInput {}
/**
 * @public
 *
 * The output of {@link GetAliasCommand}.
 */
export interface GetAliasCommandOutput extends GetAliasOutput, __MetadataBearer {}

/**
 * <p>Gets the Amazon Web Services Payment Cryptography key associated with the alias.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateAlias.html">CreateAlias</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html">DeleteAlias</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html">ListAliases</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html">UpdateAlias</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetAliasCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetAliasCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // GetAliasInput
 *   AliasName: "STRING_VALUE", // required
 * };
 * const command = new GetAliasCommand(input);
 * const response = await client.send(command);
 * // { // GetAliasOutput
 * //   Alias: { // Alias
 * //     AliasName: "STRING_VALUE", // required
 * //     KeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAliasCommandInput - {@link GetAliasCommandInput}
 * @returns {@link GetAliasCommandOutput}
 * @see {@link GetAliasCommandInput} for command's `input` shape.
 * @see {@link GetAliasCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p>This exception is thrown when the caller lacks the necessary IAM permissions to perform the requested operation. Verify that your IAM policy includes the required permissions for the specific Amazon Web Services Payment Cryptography action you're attempting.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p> <p>This indicates a server-side error within the Amazon Web Services Payment Cryptography service. If this error persists, contact support for assistance.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to resource not found.</p> <p>The specified key, alias, or other resource does not exist in your account or region. Verify that the resource identifier is correct and that the resource exists in the expected region.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p> <p>The Amazon Web Services Payment Cryptography service is temporarily unavailable. This is typically a temporary condition - retry your request after a brief delay.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p> <p>You have exceeded the rate limits for Amazon Web Services Payment Cryptography API calls. Implement exponential backoff and retry logic in your application to handle throttling gracefully.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p> <p>One or more parameters in your request are invalid. Check the parameter values, formats, and constraints specified in the API documentation.</p>
 *
 * @throws {@link PaymentCryptographyServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptography service.</p>
 *
 *
 * @public
 */
export class GetAliasCommand extends $Command
  .classBuilder<
    GetAliasCommandInput,
    GetAliasCommandOutput,
    PaymentCryptographyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyControlPlane", "GetAlias", {})
  .n("PaymentCryptographyClient", "GetAliasCommand")
  .sc(GetAlias)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAliasInput;
      output: GetAliasOutput;
    };
    sdk: {
      input: GetAliasCommandInput;
      output: GetAliasCommandOutput;
    };
  };
}
