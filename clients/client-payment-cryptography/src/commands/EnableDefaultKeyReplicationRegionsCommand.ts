// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EnableDefaultKeyReplicationRegionsInput, EnableDefaultKeyReplicationRegionsOutput } from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { EnableDefaultKeyReplicationRegions } from "../schemas/schemas_8_Key";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface EnableDefaultKeyReplicationRegionsCommandOutput
  extends EnableDefaultKeyReplicationRegionsOutput,
    __MetadataBearer {}

/**
 * <p>Enables multi-region key replication settings for your account, causing new keys to be automatically replicated to the specified Amazon Web Services Regions when created.</p> <p>When default Replication Regions are enabled, any new keys created in your account will automatically be replicated to these regions unless you explicitly override this behavior during key creation. This simplifies key management for applications that operate across multiple regions.</p> <p>Existing keys are not affected by this operation - only keys created after enabling default replication will be automatically replicated.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DisableDefaultKeyReplicationRegions.html">DisableDefaultKeyReplicationRegions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetDefaultKeyReplicationRegions.html">GetDefaultKeyReplicationRegions</a> </p> </li> </ul>
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
 *  <p>You do not have sufficient access to perform this action.</p> <p>This exception is thrown when the caller lacks the necessary IAM permissions to perform the requested operation. Verify that your IAM policy includes the required permissions for the specific Amazon Web Services Payment Cryptography action you're attempting.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request can cause an inconsistent state for the resource.</p> <p>The requested operation conflicts with the current state of the resource. For example, attempting to delete a key that is currently being used, or trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p> <p>This indicates a server-side error within the Amazon Web Services Payment Cryptography service. If this error persists, contact support for assistance.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to resource not found.</p> <p>The specified key, alias, or other resource does not exist in your account or region. Verify that the resource identifier is correct and that the resource exists in the expected region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request would cause a service quota to be exceeded.</p> <p>You have reached the maximum number of keys, aliases, or other resources allowed in your account. Review your current usage and consider deleting unused resources or requesting a quota increase.</p>
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
export class EnableDefaultKeyReplicationRegionsCommand extends $Command
  .classBuilder<
    EnableDefaultKeyReplicationRegionsCommandInput,
    EnableDefaultKeyReplicationRegionsCommandOutput,
    PaymentCryptographyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyControlPlane", "EnableDefaultKeyReplicationRegions", {})
  .n("PaymentCryptographyClient", "EnableDefaultKeyReplicationRegionsCommand")
  .sc(EnableDefaultKeyReplicationRegions)
  .build() {
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
