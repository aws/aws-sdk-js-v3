// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutProtectConfigurationRuleSetNumberOverrideRequest,
  PutProtectConfigurationRuleSetNumberOverrideResult,
} from "../models/models_0";
import { PutProtectConfigurationRuleSetNumberOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutProtectConfigurationRuleSetNumberOverrideCommand}.
 */
export interface PutProtectConfigurationRuleSetNumberOverrideCommandInput extends PutProtectConfigurationRuleSetNumberOverrideRequest {}
/**
 * @public
 *
 * The output of {@link PutProtectConfigurationRuleSetNumberOverrideCommand}.
 */
export interface PutProtectConfigurationRuleSetNumberOverrideCommandOutput extends PutProtectConfigurationRuleSetNumberOverrideResult, __MetadataBearer {}

/**
 * Create or update a phone number rule override and associate it with a protect configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, PutProtectConfigurationRuleSetNumberOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, PutProtectConfigurationRuleSetNumberOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // PutProtectConfigurationRuleSetNumberOverrideRequest
 *   ClientToken: "STRING_VALUE",
 *   ProtectConfigurationId: "STRING_VALUE", // required
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 *   Action: "STRING_VALUE", // required
 *   ExpirationTimestamp: new Date("TIMESTAMP"),
 * };
 * const command = new PutProtectConfigurationRuleSetNumberOverrideCommand(input);
 * const response = await client.send(command);
 * // { // PutProtectConfigurationRuleSetNumberOverrideResult
 * //   ProtectConfigurationArn: "STRING_VALUE", // required
 * //   ProtectConfigurationId: "STRING_VALUE", // required
 * //   DestinationPhoneNumber: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //   Action: "STRING_VALUE", // required
 * //   IsoCountryCode: "STRING_VALUE",
 * //   ExpirationTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutProtectConfigurationRuleSetNumberOverrideCommandInput - {@link PutProtectConfigurationRuleSetNumberOverrideCommandInput}
 * @returns {@link PutProtectConfigurationRuleSetNumberOverrideCommandOutput}
 * @see {@link PutProtectConfigurationRuleSetNumberOverrideCommandInput} for command's `input` shape.
 * @see {@link PutProtectConfigurationRuleSetNumberOverrideCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because you don't have sufficient permissions to access the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource couldn't be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation exception for a field.
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 *
 * Base exception class for all service exceptions from PinpointSMSVoiceV2 service.
 *
 * @public
 */
export class PutProtectConfigurationRuleSetNumberOverrideCommand extends command<PutProtectConfigurationRuleSetNumberOverrideCommandInput, PutProtectConfigurationRuleSetNumberOverrideCommandOutput>(
  _ep0,
  _mw0,
  "PutProtectConfigurationRuleSetNumberOverride",
  PutProtectConfigurationRuleSetNumberOverride$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProtectConfigurationRuleSetNumberOverrideRequest;
      output: PutProtectConfigurationRuleSetNumberOverrideResult;
    };
    sdk: {
      input: PutProtectConfigurationRuleSetNumberOverrideCommandInput;
      output: PutProtectConfigurationRuleSetNumberOverrideCommandOutput;
    };
  };
}
