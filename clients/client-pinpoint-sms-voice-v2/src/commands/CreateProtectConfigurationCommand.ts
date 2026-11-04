// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProtectConfigurationRequest, CreateProtectConfigurationResult } from "../models/models_0";
import { CreateProtectConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProtectConfigurationCommand}.
 */
export interface CreateProtectConfigurationCommandInput extends CreateProtectConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateProtectConfigurationCommand}.
 */
export interface CreateProtectConfigurationCommandOutput extends CreateProtectConfigurationResult, __MetadataBearer {}

/**
 * Create a new protect configuration. By default all country rule sets for each capability are set to `ALLOW`. Update the country rule sets using `UpdateProtectConfigurationCountryRuleSet`. A protect configurations name is stored as a Tag with the key set to `Name` and value as the name of the protect configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreateProtectConfigurationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreateProtectConfigurationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // CreateProtectConfigurationRequest
 *   ClientToken: "STRING_VALUE",
 *   DeletionProtectionEnabled: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateProtectConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateProtectConfigurationResult
 * //   ProtectConfigurationArn: "STRING_VALUE", // required
 * //   ProtectConfigurationId: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //   AccountDefault: true || false, // required
 * //   DeletionProtectionEnabled: true || false, // required
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateProtectConfigurationCommandInput - {@link CreateProtectConfigurationCommandInput}
 * @returns {@link CreateProtectConfigurationCommandOutput}
 * @see {@link CreateProtectConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateProtectConfigurationCommandOutput} for command's `response` shape.
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
export class CreateProtectConfigurationCommand extends command<CreateProtectConfigurationCommandInput, CreateProtectConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateProtectConfiguration",
  CreateProtectConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProtectConfigurationRequest;
      output: CreateProtectConfigurationResult;
    };
    sdk: {
      input: CreateProtectConfigurationCommandInput;
      output: CreateProtectConfigurationCommandOutput;
    };
  };
}
