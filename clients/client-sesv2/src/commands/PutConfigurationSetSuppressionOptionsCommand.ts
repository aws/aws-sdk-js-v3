// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutConfigurationSetSuppressionOptionsRequest,
  PutConfigurationSetSuppressionOptionsResponse,
} from "../models/models_0";
import { PutConfigurationSetSuppressionOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutConfigurationSetSuppressionOptionsCommand}.
 */
export interface PutConfigurationSetSuppressionOptionsCommandInput extends PutConfigurationSetSuppressionOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationSetSuppressionOptionsCommand}.
 */
export interface PutConfigurationSetSuppressionOptionsCommandOutput extends PutConfigurationSetSuppressionOptionsResponse, __MetadataBearer {}

/**
 * <p>Specify the suppression list preferences for a configuration set. You can
 *             also use this operation to specify a <code>SuppressionScope</code> to override the
 *             suppression scope of the tenant or account for emails sent using this configuration
 *             set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetSuppressionOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetSuppressionOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutConfigurationSetSuppressionOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   SuppressionScope: "ACCOUNT" || "TENANT",
 *   SuppressedReasons: [ // SuppressionListReasons
 *     "BOUNCE" || "COMPLAINT",
 *   ],
 *   ValidationOptions: { // SuppressionValidationOptions
 *     ConditionThreshold: { // SuppressionConditionThreshold
 *       ConditionThresholdEnabled: "ENABLED" || "DISABLED", // required
 *       OverallConfidenceThreshold: { // SuppressionConfidenceThreshold
 *         ConfidenceVerdictThreshold: "MEDIUM" || "HIGH" || "MANAGED", // required
 *       },
 *     },
 *   },
 * };
 * const command = new PutConfigurationSetSuppressionOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationSetSuppressionOptionsCommandInput - {@link PutConfigurationSetSuppressionOptionsCommandInput}
 * @returns {@link PutConfigurationSetSuppressionOptionsCommandOutput}
 * @see {@link PutConfigurationSetSuppressionOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetSuppressionOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class PutConfigurationSetSuppressionOptionsCommand extends command<PutConfigurationSetSuppressionOptionsCommandInput, PutConfigurationSetSuppressionOptionsCommandOutput>(
  _ep0,
  _mw0,
  "PutConfigurationSetSuppressionOptions",
  PutConfigurationSetSuppressionOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConfigurationSetSuppressionOptionsRequest;
      output: {};
    };
    sdk: {
      input: PutConfigurationSetSuppressionOptionsCommandInput;
      output: PutConfigurationSetSuppressionOptionsCommandOutput;
    };
  };
}
