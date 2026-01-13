// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListKeysInput, ListKeysOutput } from "../models/models_0";
import type {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { ListKeys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKeysCommand}.
 */
export interface ListKeysCommandInput extends ListKeysInput {}
/**
 * @public
 *
 * The output of {@link ListKeysCommand}.
 */
export interface ListKeysCommandOutput extends ListKeysOutput, __MetadataBearer {}

/**
 * <p>Lists the keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the list of keys.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the keys. When the response contains only a subset of keys, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListKeys</code> request to get more keys. When you receive a response with no NextToken (or an empty or null value), that means there are no more keys to get.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteKey.html">DeleteKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetKey.html">GetKey</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, ListKeysCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, ListKeysCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // ListKeysInput
 *   KeyState: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListKeysOutput
 * //   Keys: [ // KeySummaryList // required
 * //     { // KeySummary
 * //       KeyArn: "STRING_VALUE", // required
 * //       KeyState: "STRING_VALUE", // required
 * //       KeyAttributes: { // KeyAttributes
 * //         KeyUsage: "STRING_VALUE", // required
 * //         KeyClass: "STRING_VALUE", // required
 * //         KeyAlgorithm: "STRING_VALUE", // required
 * //         KeyModesOfUse: { // KeyModesOfUse
 * //           Encrypt: true || false,
 * //           Decrypt: true || false,
 * //           Wrap: true || false,
 * //           Unwrap: true || false,
 * //           Generate: true || false,
 * //           Sign: true || false,
 * //           Verify: true || false,
 * //           DeriveKey: true || false,
 * //           NoRestrictions: true || false,
 * //         },
 * //       },
 * //       KeyCheckValue: "STRING_VALUE", // required
 * //       Exportable: true || false, // required
 * //       Enabled: true || false, // required
 * //       MultiRegionKeyType: "STRING_VALUE",
 * //       PrimaryRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKeysCommandInput - {@link ListKeysCommandInput}
 * @returns {@link ListKeysCommandOutput}
 * @see {@link ListKeysCommandInput} for command's `input` shape.
 * @see {@link ListKeysCommandOutput} for command's `response` shape.
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
export class ListKeysCommand extends $Command
  .classBuilder<
    ListKeysCommandInput,
    ListKeysCommandOutput,
    PaymentCryptographyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyControlPlane", "ListKeys", {})
  .n("PaymentCryptographyClient", "ListKeysCommand")
  .sc(ListKeys$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKeysInput;
      output: ListKeysOutput;
    };
    sdk: {
      input: ListKeysCommandInput;
      output: ListKeysCommandOutput;
    };
  };
}
