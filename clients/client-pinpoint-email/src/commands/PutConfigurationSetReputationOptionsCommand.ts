// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutConfigurationSetReputationOptionsRequest,
  PutConfigurationSetReputationOptionsResponse,
} from "../models/models_0";
import { PutConfigurationSetReputationOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutConfigurationSetReputationOptionsCommand}.
 */
export interface PutConfigurationSetReputationOptionsCommandInput extends PutConfigurationSetReputationOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationSetReputationOptionsCommand}.
 */
export interface PutConfigurationSetReputationOptionsCommandOutput extends PutConfigurationSetReputationOptionsResponse, __MetadataBearer {}

/**
 * Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutConfigurationSetReputationOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutConfigurationSetReputationOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // PutConfigurationSetReputationOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   ReputationMetricsEnabled: true || false,
 * };
 * const command = new PutConfigurationSetReputationOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationSetReputationOptionsCommandInput - {@link PutConfigurationSetReputationOptionsCommandInput}
 * @returns {@link PutConfigurationSetReputationOptionsCommandOutput}
 * @see {@link PutConfigurationSetReputationOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetReputationOptionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link PinpointEmailServiceException}
 *
 * Base exception class for all service exceptions from PinpointEmail service.
 *
 * @public
 */
export class PutConfigurationSetReputationOptionsCommand extends command<PutConfigurationSetReputationOptionsCommandInput, PutConfigurationSetReputationOptionsCommandOutput>(
  _ep0,
  _mw0,
  "PutConfigurationSetReputationOptions",
  PutConfigurationSetReputationOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConfigurationSetReputationOptionsRequest;
      output: {};
    };
    sdk: {
      input: PutConfigurationSetReputationOptionsCommandInput;
      output: PutConfigurationSetReputationOptionsCommandOutput;
    };
  };
}
