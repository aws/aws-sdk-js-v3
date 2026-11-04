// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDefaultKeyReplicationRegionsInput, GetDefaultKeyReplicationRegionsOutput } from "../models/models_0";
import { GetDefaultKeyReplicationRegions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDefaultKeyReplicationRegionsCommand}.
 */
export interface GetDefaultKeyReplicationRegionsCommandInput extends GetDefaultKeyReplicationRegionsInput {}
/**
 * @public
 *
 * The output of {@link GetDefaultKeyReplicationRegionsCommand}.
 */
export interface GetDefaultKeyReplicationRegionsCommandOutput extends GetDefaultKeyReplicationRegionsOutput, __MetadataBearer {}

/**
 * Retrieves the list of Amazon Web Services Regions where [Multi-Region key replication](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html) is currently enabled for your Amazon Web Services account.
 *
 * This operation returns the current Multi-Region key replication configuration. New keys created in your account will be automatically replicated to these regions unless explicitly overridden during key creation.
 *
 * **Cross-account use:** This operation can't be used across different Amazon Web Services accounts.
 *
 * **Related operations:**
 *
 * - [EnableDefaultKeyReplicationRegions](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_EnableDefaultKeyReplicationRegions.html)
 * - [DisableDefaultKeyReplicationRegions](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DisableDefaultKeyReplicationRegions.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetDefaultKeyReplicationRegionsCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetDefaultKeyReplicationRegionsCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = {};
 * const command = new GetDefaultKeyReplicationRegionsCommand(input);
 * const response = await client.send(command);
 * // { // GetDefaultKeyReplicationRegionsOutput
 * //   EnabledReplicationRegions: [ // Regions // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDefaultKeyReplicationRegionsCommandInput - {@link GetDefaultKeyReplicationRegionsCommandInput}
 * @returns {@link GetDefaultKeyReplicationRegionsCommandOutput}
 * @see {@link GetDefaultKeyReplicationRegionsCommandInput} for command's `input` shape.
 * @see {@link GetDefaultKeyReplicationRegionsCommandOutput} for command's `response` shape.
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
export class GetDefaultKeyReplicationRegionsCommand extends command<GetDefaultKeyReplicationRegionsCommandInput, GetDefaultKeyReplicationRegionsCommandOutput>(
  _ep0,
  _mw0,
  "GetDefaultKeyReplicationRegions",
  GetDefaultKeyReplicationRegions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDefaultKeyReplicationRegionsOutput;
    };
    sdk: {
      input: GetDefaultKeyReplicationRegionsCommandInput;
      output: GetDefaultKeyReplicationRegionsCommandOutput;
    };
  };
}
