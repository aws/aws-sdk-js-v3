// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisableDefaultKeyReplicationRegionsInput,
  DisableDefaultKeyReplicationRegionsOutput,
} from "../models/models_0";
import { DisableDefaultKeyReplicationRegions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableDefaultKeyReplicationRegionsCommand}.
 */
export interface DisableDefaultKeyReplicationRegionsCommandInput extends DisableDefaultKeyReplicationRegionsInput {}
/**
 * @public
 *
 * The output of {@link DisableDefaultKeyReplicationRegionsCommand}.
 */
export interface DisableDefaultKeyReplicationRegionsCommandOutput extends DisableDefaultKeyReplicationRegionsOutput, __MetadataBearer {}

/**
 * Disables [Multi-Region key replication](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html) settings for the specified Amazon Web Services Regions in your Amazon Web Services account, preventing new keys from being automatically replicated to those regions.
 *
 * After disabling Multi-Region key replication for specific regions, new keys created in your account will not be automatically replicated to those regions. You can still manually add replication to those regions for individual keys using the [AddKeyReplicationRegions](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_AddKeyReplicationRegions.html) operation.
 *
 * This operation does not affect existing keys or their current replication configuration.
 *
 * **Cross-account use:** This operation can't be used across different Amazon Web Services accounts.
 *
 * **Related operations:**
 *
 * - [EnableDefaultKeyReplicationRegions](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_EnableDefaultKeyReplicationRegions.html)
 * - [GetDefaultKeyReplicationRegions](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetDefaultKeyReplicationRegions.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, DisableDefaultKeyReplicationRegionsCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, DisableDefaultKeyReplicationRegionsCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // DisableDefaultKeyReplicationRegionsInput
 *   ReplicationRegions: [ // Regions // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisableDefaultKeyReplicationRegionsCommand(input);
 * const response = await client.send(command);
 * // { // DisableDefaultKeyReplicationRegionsOutput
 * //   EnabledReplicationRegions: [ // Regions // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisableDefaultKeyReplicationRegionsCommandInput - {@link DisableDefaultKeyReplicationRegionsCommandInput}
 * @returns {@link DisableDefaultKeyReplicationRegionsCommandOutput}
 * @see {@link DisableDefaultKeyReplicationRegionsCommandInput} for command's `input` shape.
 * @see {@link DisableDefaultKeyReplicationRegionsCommandOutput} for command's `response` shape.
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
export class DisableDefaultKeyReplicationRegionsCommand extends command<DisableDefaultKeyReplicationRegionsCommandInput, DisableDefaultKeyReplicationRegionsCommandOutput>(
  _ep0,
  _mw0,
  "DisableDefaultKeyReplicationRegions",
  DisableDefaultKeyReplicationRegions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableDefaultKeyReplicationRegionsInput;
      output: DisableDefaultKeyReplicationRegionsOutput;
    };
    sdk: {
      input: DisableDefaultKeyReplicationRegionsCommandInput;
      output: DisableDefaultKeyReplicationRegionsCommandOutput;
    };
  };
}
