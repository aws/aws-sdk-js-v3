// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePoolRequest, CreatePoolResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_CreatePoolCommand, se_CreatePoolCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePoolCommand}.
 */
export interface CreatePoolCommandInput extends CreatePoolRequest {}
/**
 * @public
 *
 * The output of {@link CreatePoolCommand}.
 */
export interface CreatePoolCommandOutput extends CreatePoolResult, __MetadataBearer {}

/**
 * <p>Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p> <p>The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false.</p> <p>If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreatePoolCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreatePoolCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // CreatePoolRequest
 *   OriginationIdentity: "STRING_VALUE", // required
 *   IsoCountryCode: "STRING_VALUE", // required
 *   MessageType: "STRING_VALUE", // required
 *   DeletionProtectionEnabled: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreatePoolCommand(input);
 * const response = await client.send(command);
 * // { // CreatePoolResult
 * //   PoolArn: "STRING_VALUE",
 * //   PoolId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   MessageType: "STRING_VALUE",
 * //   TwoWayEnabled: true || false,
 * //   TwoWayChannelArn: "STRING_VALUE",
 * //   TwoWayChannelRole: "STRING_VALUE",
 * //   SelfManagedOptOutsEnabled: true || false,
 * //   OptOutListName: "STRING_VALUE",
 * //   SharedRoutesEnabled: true || false,
 * //   DeletionProtectionEnabled: true || false,
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreatePoolCommandInput - {@link CreatePoolCommandInput}
 * @returns {@link CreatePoolCommandOutput}
 * @see {@link CreatePoolCommandInput} for command's `input` shape.
 * @see {@link CreatePoolCommandOutput} for command's `response` shape.
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
export class CreatePoolCommand extends $Command
  .classBuilder<
    CreatePoolCommandInput,
    CreatePoolCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "CreatePool", {})
  .n("PinpointSMSVoiceV2Client", "CreatePoolCommand")
  .f(void 0, void 0)
  .ser(se_CreatePoolCommand)
  .de(de_CreatePoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePoolRequest;
      output: CreatePoolResult;
    };
    sdk: {
      input: CreatePoolCommandInput;
      output: CreatePoolCommandOutput;
    };
  };
}
