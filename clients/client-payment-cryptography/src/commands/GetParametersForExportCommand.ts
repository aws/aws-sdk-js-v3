// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetParametersForExportInput, GetParametersForExportOutput } from "../models/models_0";
import { GetParametersForExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetParametersForExportCommand}.
 */
export interface GetParametersForExportCommandInput extends GetParametersForExportInput {}
/**
 * @public
 *
 * The output of {@link GetParametersForExportCommand}.
 */
export interface GetParametersForExportCommandOutput extends GetParametersForExportOutput, __MetadataBearer {}

/**
 * Gets the export token and the signing key certificate to initiate a TR-34 key export from Amazon Web Services Payment Cryptography.
 *
 * The signing key certificate signs the wrapped key under export within the TR-34 key payload. The export token and signing key certificate must be in place and operational before calling [ExportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ExportKey.html). The export token expires in 30 days. You can use the same export token to export multiple keys from your service account.
 *
 * To return a previously generated export token and signing key certificate instead of generating new ones, set `ReuseLastGeneratedToken` to `true`.
 *
 * **Cross-account use:** This operation can't be used across different Amazon Web Services accounts.
 *
 * **Related operations:**
 *
 * - [ExportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ExportKey.html)
 * - [GetParametersForImport](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetParametersForExportCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetParametersForExportCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // GetParametersForExportInput
 *   KeyMaterialType: "STRING_VALUE", // required
 *   SigningKeyAlgorithm: "STRING_VALUE", // required
 *   ReuseLastGeneratedToken: true || false,
 * };
 * const command = new GetParametersForExportCommand(input);
 * const response = await client.send(command);
 * // { // GetParametersForExportOutput
 * //   SigningKeyCertificate: "STRING_VALUE", // required
 * //   SigningKeyCertificateChain: "STRING_VALUE", // required
 * //   SigningKeyAlgorithm: "STRING_VALUE", // required
 * //   ExportToken: "STRING_VALUE", // required
 * //   ParametersValidUntilTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetParametersForExportCommandInput - {@link GetParametersForExportCommandInput}
 * @returns {@link GetParametersForExportCommandOutput}
 * @see {@link GetParametersForExportCommandInput} for command's `input` shape.
 * @see {@link GetParametersForExportCommandOutput} for command's `response` shape.
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
export class GetParametersForExportCommand extends command<GetParametersForExportCommandInput, GetParametersForExportCommandOutput>(
  _ep0,
  _mw0,
  "GetParametersForExport",
  GetParametersForExport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParametersForExportInput;
      output: GetParametersForExportOutput;
    };
    sdk: {
      input: GetParametersForExportCommandInput;
      output: GetParametersForExportCommandOutput;
    };
  };
}
