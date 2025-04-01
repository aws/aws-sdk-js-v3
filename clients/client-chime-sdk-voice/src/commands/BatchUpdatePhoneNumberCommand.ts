// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchUpdatePhoneNumberRequest,
  BatchUpdatePhoneNumberRequestFilterSensitiveLog,
  BatchUpdatePhoneNumberResponse,
  BatchUpdatePhoneNumberResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchUpdatePhoneNumberCommand, se_BatchUpdatePhoneNumberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdatePhoneNumberCommand}.
 */
export interface BatchUpdatePhoneNumberCommandInput extends BatchUpdatePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdatePhoneNumberCommand}.
 */
export interface BatchUpdatePhoneNumberCommandOutput extends BatchUpdatePhoneNumberResponse, __MetadataBearer {}

/**
 * <p>Updates phone number product types, calling names, or phone number names. You can update one attribute at a time for each
 *          <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type, the calling name, or phone name.
 *         </p>
 *          <note>
 *             <p>You cannot have a duplicate <code>phoneNumberId</code> in a request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, BatchUpdatePhoneNumberCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, BatchUpdatePhoneNumberCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // BatchUpdatePhoneNumberRequest
 *   UpdatePhoneNumberRequestItems: [ // UpdatePhoneNumberRequestItemList // required
 *     { // UpdatePhoneNumberRequestItem
 *       PhoneNumberId: "STRING_VALUE", // required
 *       ProductType: "VoiceConnector" || "SipMediaApplicationDialIn",
 *       CallingName: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdatePhoneNumberResponse
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
 * @param BatchUpdatePhoneNumberCommandInput - {@link BatchUpdatePhoneNumberCommandInput}
 * @returns {@link BatchUpdatePhoneNumberCommandOutput}
 * @see {@link BatchUpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link BatchUpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
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
export class BatchUpdatePhoneNumberCommand extends $Command
  .classBuilder<
    BatchUpdatePhoneNumberCommandInput,
    BatchUpdatePhoneNumberCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "BatchUpdatePhoneNumber", {})
  .n("ChimeSDKVoiceClient", "BatchUpdatePhoneNumberCommand")
  .f(BatchUpdatePhoneNumberRequestFilterSensitiveLog, BatchUpdatePhoneNumberResponseFilterSensitiveLog)
  .ser(se_BatchUpdatePhoneNumberCommand)
  .de(de_BatchUpdatePhoneNumberCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdatePhoneNumberRequest;
      output: BatchUpdatePhoneNumberResponse;
    };
    sdk: {
      input: BatchUpdatePhoneNumberCommandInput;
      output: BatchUpdatePhoneNumberCommandOutput;
    };
  };
}
