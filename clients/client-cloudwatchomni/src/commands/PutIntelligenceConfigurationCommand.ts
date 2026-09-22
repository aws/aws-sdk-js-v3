// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutIntelligenceConfigurationInput, PutIntelligenceConfigurationOutput } from "../models/models_0";
import { PutIntelligenceConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutIntelligenceConfigurationCommand}.
 */
export interface PutIntelligenceConfigurationCommandInput extends PutIntelligenceConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutIntelligenceConfigurationCommand}.
 */
export interface PutIntelligenceConfigurationCommandOutput extends PutIntelligenceConfigurationOutput, __MetadataBearer {}

/**
 * Creates or updates the intelligence configuration for the calling account.
 * Account is identified via FAS (caller identity).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, PutIntelligenceConfigurationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, PutIntelligenceConfigurationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // PutIntelligenceConfigurationInput
 *   kmsKeyArn: "STRING_VALUE",
 *   removeKmsKey: true || false,
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutIntelligenceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutIntelligenceConfigurationOutput
 * //   accountId: "STRING_VALUE", // required
 * //   kmsKeyArn: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param PutIntelligenceConfigurationCommandInput - {@link PutIntelligenceConfigurationCommandInput}
 * @returns {@link PutIntelligenceConfigurationCommandOutput}
 * @see {@link PutIntelligenceConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutIntelligenceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Configure a customer-managed KMS key
 * ```javascript
 * // The following example sets the customer-managed KMS key used to encrypt the account's intelligence data. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   clientToken: "b3f8c7d6-5b4a-4c3d-9e2f-1a0b2c3d4e5f",
 *   kmsKeyArn: "arn:aws:kms:us-east-1:123456789012:key/1a2b3c4d-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new PutIntelligenceConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accountId: "123456789012",
 *   createdAt: "2026-01-15T08:30:00Z",
 *   kmsKeyArn: "arn:aws:kms:us-east-1:123456789012:key/1a2b3c4d-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *   updatedAt: "2026-09-16T12:00:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutIntelligenceConfigurationCommand extends command<PutIntelligenceConfigurationCommandInput, PutIntelligenceConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutIntelligenceConfiguration",
  PutIntelligenceConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutIntelligenceConfigurationInput;
      output: PutIntelligenceConfigurationOutput;
    };
    sdk: {
      input: PutIntelligenceConfigurationCommandInput;
      output: PutIntelligenceConfigurationCommandOutput;
    };
  };
}
