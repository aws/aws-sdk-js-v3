// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateRcsAgentRequest, CreateRcsAgentResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { CreateRcsAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRcsAgentCommand}.
 */
export interface CreateRcsAgentCommandInput extends CreateRcsAgentRequest {}
/**
 * @public
 *
 * The output of {@link CreateRcsAgentCommand}.
 */
export interface CreateRcsAgentCommandOutput extends CreateRcsAgentResult, __MetadataBearer {}

/**
 * <p>Creates a new RCS agent for sending rich messages through the RCS channel. The RCS agent serves as an origination identity for sending RCS messages to your recipients.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreateRcsAgentCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreateRcsAgentCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // CreateRcsAgentRequest
 *   DeletionProtectionEnabled: true || false,
 *   OptOutListName: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateRcsAgentCommand(input);
 * const response = await client.send(command);
 * // { // CreateRcsAgentResult
 * //   RcsAgentArn: "STRING_VALUE", // required
 * //   RcsAgentId: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * //   DeletionProtectionEnabled: true || false, // required
 * //   OptOutListName: "STRING_VALUE",
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //   SelfManagedOptOutsEnabled: true || false, // required
 * //   TwoWayChannelArn: "STRING_VALUE",
 * //   TwoWayChannelRole: "STRING_VALUE",
 * //   TwoWayEnabled: true || false, // required
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
 * @param CreateRcsAgentCommandInput - {@link CreateRcsAgentCommandInput}
 * @returns {@link CreateRcsAgentCommandOutput}
 * @see {@link CreateRcsAgentCommandInput} for command's `input` shape.
 * @see {@link CreateRcsAgentCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class CreateRcsAgentCommand extends $Command
  .classBuilder<
    CreateRcsAgentCommandInput,
    CreateRcsAgentCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "CreateRcsAgent", {})
  .n("PinpointSMSVoiceV2Client", "CreateRcsAgentCommand")
  .sc(CreateRcsAgent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRcsAgentRequest;
      output: CreateRcsAgentResult;
    };
    sdk: {
      input: CreateRcsAgentCommandInput;
      output: CreateRcsAgentCommandOutput;
    };
  };
}
