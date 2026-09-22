// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIntelligenceConfigurationInput, GetIntelligenceConfigurationOutput } from "../models/models_0";
import { GetIntelligenceConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIntelligenceConfigurationCommand}.
 */
export interface GetIntelligenceConfigurationCommandInput extends GetIntelligenceConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetIntelligenceConfigurationCommand}.
 */
export interface GetIntelligenceConfigurationCommandOutput extends GetIntelligenceConfigurationOutput, __MetadataBearer {}

/**
 * Retrieves the intelligence configuration for the calling account.
 * Account is identified via FAS (caller identity).
 * Returns the default configuration if none exists yet.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetIntelligenceConfigurationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetIntelligenceConfigurationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = {};
 * const command = new GetIntelligenceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetIntelligenceConfigurationOutput
 * //   accountId: "STRING_VALUE", // required
 * //   kmsKeyArn: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetIntelligenceConfigurationCommandInput - {@link GetIntelligenceConfigurationCommandInput}
 * @returns {@link GetIntelligenceConfigurationCommandOutput}
 * @see {@link GetIntelligenceConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetIntelligenceConfigurationCommandOutput} for command's `response` shape.
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
 * @example Retrieve the intelligence configuration
 * ```javascript
 * // The following example retrieves the intelligence configuration for the calling account. The request carries no parameters; the account is taken from the caller identity. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = { /* empty *\/ };
 * const command = new GetIntelligenceConfigurationCommand(input);
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
export class GetIntelligenceConfigurationCommand extends command<GetIntelligenceConfigurationCommandInput, GetIntelligenceConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetIntelligenceConfiguration",
  GetIntelligenceConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetIntelligenceConfigurationOutput;
    };
    sdk: {
      input: GetIntelligenceConfigurationCommandInput;
      output: GetIntelligenceConfigurationCommandOutput;
    };
  };
}
