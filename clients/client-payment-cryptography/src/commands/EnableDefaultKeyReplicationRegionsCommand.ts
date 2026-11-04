// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  EnableDefaultKeyReplicationRegionsInput,
  EnableDefaultKeyReplicationRegionsOutput,
} from "../models/models_0";
import { EnableDefaultKeyReplicationRegions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableDefaultKeyReplicationRegionsCommand}.
 */
export interface EnableDefaultKeyReplicationRegionsCommandInput extends EnableDefaultKeyReplicationRegionsInput {}
/**
 * @public
 *
 * The output of {@link EnableDefaultKeyReplicationRegionsCommand}.
 */
export interface EnableDefaultKeyReplicationRegionsCommandOutput extends EnableDefaultKeyReplicationRegionsOutput, __MetadataBearer {}

/**
 * Enables [Multi-Region key replication](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html) settings for your Amazon Web Services account, causing new keys to be automatically replicated to the specified Amazon Web Services Regions when created.
 *
 * When Multi-Region key replication are enabled, any new keys created in your account will automatically be replicated to these regions unless you explicitly override this behavior during key creation. This simplifies key management for applications that operate across multiple regions.
 *
 * Existing keys are not affected by this operation - only keys created after enabling default replication will be automatically replicated.
 *
 * **Cross-account use:** This operation can't be used across different Amazon Web Services accounts.
 *
 * **Related operations:**
 *
 * - [DisableDefaultKeyReplicationRegions](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DisableDefaultKeyReplicationRegions.html)
 * - [GetDefaultKeyReplicationRegions](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetDefaultKeyReplicationRegions.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, EnableDefaultKeyReplicationRegionsCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, EnableDefaultKeyReplicationRegionsCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // EnableDefaultKeyReplicationRegionsInput
 *   ReplicationRegions: [ // Regions // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new EnableDefaultKeyReplicationRegionsCommand(input);
 * const response = await client.send(command);
 * // { // EnableDefaultKeyReplicationRegionsOutput
 * //   EnabledReplicationRegions: [ // Regions // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param EnableDefaultKeyReplicationRegionsCommandInput - {@link EnableDefaultKeyReplicationRegionsCommandInput}
 * @returns {@link EnableDefaultKeyReplicationRegionsCommandOutput}
 * @see {@link EnableDefaultKeyReplicationRegionsCommandInput} for command's `input` shape.
 * @see {@link EnableDefaultKeyReplicationRegionsCommandOutput} for command's `response` shape.
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
export class EnableDefaultKeyReplicationRegionsCommand extends command<EnableDefaultKeyReplicationRegionsCommandInput, EnableDefaultKeyReplicationRegionsCommandOutput>(
  _ep0,
  _mw0,
  "EnableDefaultKeyReplicationRegions",
  EnableDefaultKeyReplicationRegions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableDefaultKeyReplicationRegionsInput;
      output: EnableDefaultKeyReplicationRegionsOutput;
    };
    sdk: {
      input: EnableDefaultKeyReplicationRegionsCommandInput;
      output: EnableDefaultKeyReplicationRegionsCommandOutput;
    };
  };
}
