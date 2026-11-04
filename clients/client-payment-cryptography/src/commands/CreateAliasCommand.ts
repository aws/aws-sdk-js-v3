// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAliasInput, CreateAliasOutput } from "../models/models_0";
import { CreateAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandInput extends CreateAliasInput {}
/**
 * @public
 *
 * The output of {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandOutput extends CreateAliasOutput, __MetadataBearer {}

/**
 * Creates an *alias*, or a friendly name, for an Amazon Web Services Payment Cryptography key. You can use an alias to identify a key in the console and when you call cryptographic operations such as [EncryptData](https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_EncryptData.html) or [DecryptData](https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_DecryptData.html).
 *
 * You can associate the alias with any key in the same Amazon Web Services Region. Each alias is associated with only one key at a time, but a key can have multiple aliases. You can't create an alias without a key. The alias must be unique in the account and Amazon Web Services Region, but you can create another alias with the same name in a different Amazon Web Services Region.
 *
 * To change the key that's associated with the alias, call [UpdateAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html). To delete the alias, call [DeleteAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html). These operations don't affect the underlying key. To get the alias that you created, call [ListAliases](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html).
 *
 * **Cross-account use**: This operation can't be used across different Amazon Web Services accounts.
 *
 * **Related operations:**
 *
 * - [DeleteAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html)
 * - [GetAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetAlias.html)
 * - [ListAliases](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html)
 * - [UpdateAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, CreateAliasCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, CreateAliasCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // CreateAliasInput
 *   AliasName: "STRING_VALUE", // required
 *   KeyArn: "STRING_VALUE",
 * };
 * const command = new CreateAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateAliasOutput
 * //   Alias: { // Alias
 * //     AliasName: "STRING_VALUE", // required
 * //     KeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAliasCommandInput - {@link CreateAliasCommandInput}
 * @returns {@link CreateAliasCommandOutput}
 * @see {@link CreateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAliasCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * This exception is thrown when the caller lacks the necessary IAM permissions to perform the requested operation. Verify that your IAM policy includes the required permissions for the specific Amazon Web Services Payment Cryptography action you're attempting.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This request can cause an inconsistent state for the resource.
 *
 * The requested operation conflicts with the current state of the resource. For example, attempting to delete a key that is currently being used, or trying to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * This indicates a server-side error within the Amazon Web Services Payment Cryptography service. If this error persists, contact support for assistance.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was denied due to resource not found.
 *
 * The specified key, alias, or other resource does not exist in your account or region. Verify that the resource identifier is correct and that the resource exists in the expected region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request would cause a service quota to be exceeded.
 *
 * You have reached the maximum number of keys, aliases, or other resources allowed in your account. Review your current usage and consider deleting unused resources or requesting a quota increase.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * The Amazon Web Services Payment Cryptography service is temporarily unavailable. This is typically a temporary condition - retry your request after a brief delay.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * You have exceeded the rate limits for Amazon Web Services Payment Cryptography API calls. Implement exponential backoff and retry logic in your application to handle throttling gracefully.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was denied due to an invalid request error.
 *
 * One or more parameters in your request are invalid. Check the parameter values, formats, and constraints specified in the API documentation.
 *
 * @throws {@link PaymentCryptographyServiceException}
 *
 * Base exception class for all service exceptions from PaymentCryptography service.
 *
 * @public
 */
export class CreateAliasCommand extends command<CreateAliasCommandInput, CreateAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateAlias",
  CreateAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAliasInput;
      output: CreateAliasOutput;
    };
    sdk: {
      input: CreateAliasCommandInput;
      output: CreateAliasCommandOutput;
    };
  };
}
