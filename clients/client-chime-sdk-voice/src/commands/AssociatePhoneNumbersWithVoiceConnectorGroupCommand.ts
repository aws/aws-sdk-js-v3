// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociatePhoneNumbersWithVoiceConnectorGroupRequest,
  AssociatePhoneNumbersWithVoiceConnectorGroupResponse,
} from "../models/models_0";
import { AssociatePhoneNumbersWithVoiceConnectorGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociatePhoneNumbersWithVoiceConnectorGroupCommand}.
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput
  extends AssociatePhoneNumbersWithVoiceConnectorGroupRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePhoneNumbersWithVoiceConnectorGroupCommand}.
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput
  extends AssociatePhoneNumbersWithVoiceConnectorGroupResponse,
    __MetadataBearer {}

/**
 * <p>Associates phone numbers with the specified Amazon Chime SDK Voice Connector group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, AssociatePhoneNumbersWithVoiceConnectorGroupCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, AssociatePhoneNumbersWithVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // AssociatePhoneNumbersWithVoiceConnectorGroupRequest
 *   VoiceConnectorGroupId: "STRING_VALUE", // required
 *   E164PhoneNumbers: [ // E164PhoneNumberList // required
 *     "STRING_VALUE",
 *   ],
 *   ForceAssociate: true || false,
 * };
 * const command = new AssociatePhoneNumbersWithVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * // { // AssociatePhoneNumbersWithVoiceConnectorGroupResponse
 * //   PhoneNumberErrors: [ // PhoneNumberErrorList
 * //     { // PhoneNumberError
 * //       PhoneNumberId: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist" || "Gone",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput - {@link AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput}
 * @returns {@link AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput}
 * @see {@link AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class AssociatePhoneNumbersWithVoiceConnectorGroupCommand extends $Command
  .classBuilder<
    AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "AssociatePhoneNumbersWithVoiceConnectorGroup", {})
  .n("ChimeSDKVoiceClient", "AssociatePhoneNumbersWithVoiceConnectorGroupCommand")
  .sc(AssociatePhoneNumbersWithVoiceConnectorGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePhoneNumbersWithVoiceConnectorGroupRequest;
      output: AssociatePhoneNumbersWithVoiceConnectorGroupResponse;
    };
    sdk: {
      input: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput;
      output: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput;
    };
  };
}
