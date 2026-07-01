// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRcsAgentRequest, UpdateRcsAgentResult } from "../models/models_0";
import { UpdateRcsAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRcsAgentCommand}.
 */
export interface UpdateRcsAgentCommandInput extends UpdateRcsAgentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRcsAgentCommand}.
 */
export interface UpdateRcsAgentCommandOutput extends UpdateRcsAgentResult, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing RCS agent. You can update the opt-out list, deletion protection, two-way messaging settings, and self-managed opt-outs configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, UpdateRcsAgentCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, UpdateRcsAgentCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // UpdateRcsAgentRequest
 *   RcsAgentId: "STRING_VALUE", // required
 *   DeletionProtectionEnabled: true || false,
 *   OptOutListName: "STRING_VALUE",
 *   SelfManagedOptOutsEnabled: true || false,
 *   TwoWayChannelArn: "STRING_VALUE",
 *   TwoWayChannelRole: "STRING_VALUE",
 *   TwoWayEnabled: true || false,
 *   TwoWayMediaS3BucketName: "STRING_VALUE",
 *   TwoWayMediaS3KeyPrefix: "STRING_VALUE",
 *   TwoWayMediaS3Role: "STRING_VALUE",
 *   TwoWayRcsEventsEnabled: [ // RcsEventTypeList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateRcsAgentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRcsAgentResult
 * //   RcsAgentArn: "STRING_VALUE", // required
 * //   RcsAgentId: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //   DeletionProtectionEnabled: true || false, // required
 * //   OptOutListName: "STRING_VALUE",
 * //   SelfManagedOptOutsEnabled: true || false, // required
 * //   TwoWayChannelArn: "STRING_VALUE",
 * //   TwoWayChannelRole: "STRING_VALUE",
 * //   TwoWayEnabled: true || false, // required
 * //   TwoWayMediaS3BucketName: "STRING_VALUE",
 * //   TwoWayMediaS3KeyPrefix: "STRING_VALUE",
 * //   TwoWayMediaS3Role: "STRING_VALUE",
 * //   TwoWayRcsEventsEnabled: [ // RcsEventTypeList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateRcsAgentCommandInput - {@link UpdateRcsAgentCommandInput}
 * @returns {@link UpdateRcsAgentCommandOutput}
 * @see {@link UpdateRcsAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateRcsAgentCommandOutput} for command's `response` shape.
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
export class UpdateRcsAgentCommand extends command<UpdateRcsAgentCommandInput, UpdateRcsAgentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRcsAgent",
  UpdateRcsAgent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRcsAgentRequest;
      output: UpdateRcsAgentResult;
    };
    sdk: {
      input: UpdateRcsAgentCommandInput;
      output: UpdateRcsAgentCommandOutput;
    };
  };
}
