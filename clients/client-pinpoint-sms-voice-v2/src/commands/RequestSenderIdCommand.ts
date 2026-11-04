// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RequestSenderIdRequest, RequestSenderIdResult } from "../models/models_0";
import { RequestSenderId$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RequestSenderIdCommand}.
 */
export interface RequestSenderIdCommandInput extends RequestSenderIdRequest {}
/**
 * @public
 *
 * The output of {@link RequestSenderIdCommand}.
 */
export interface RequestSenderIdCommandOutput extends RequestSenderIdResult, __MetadataBearer {}

/**
 * Request a new sender ID that doesn't require registration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, RequestSenderIdCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, RequestSenderIdCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // RequestSenderIdRequest
 *   SenderId: "STRING_VALUE", // required
 *   IsoCountryCode: "STRING_VALUE", // required
 *   MessageTypes: [ // MessageTypeList
 *     "STRING_VALUE",
 *   ],
 *   DeletionProtectionEnabled: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new RequestSenderIdCommand(input);
 * const response = await client.send(command);
 * // { // RequestSenderIdResult
 * //   SenderIdArn: "STRING_VALUE", // required
 * //   SenderId: "STRING_VALUE", // required
 * //   IsoCountryCode: "STRING_VALUE", // required
 * //   MessageTypes: [ // MessageTypeList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   MonthlyLeasingPrice: "STRING_VALUE", // required
 * //   DeletionProtectionEnabled: true || false, // required
 * //   Registered: true || false, // required
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
 * @param RequestSenderIdCommandInput - {@link RequestSenderIdCommandInput}
 * @returns {@link RequestSenderIdCommandOutput}
 * @see {@link RequestSenderIdCommandInput} for command's `input` shape.
 * @see {@link RequestSenderIdCommandOutput} for command's `response` shape.
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
export class RequestSenderIdCommand extends command<RequestSenderIdCommandInput, RequestSenderIdCommandOutput>(
  _ep0,
  _mw0,
  "RequestSenderId",
  RequestSenderId$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RequestSenderIdRequest;
      output: RequestSenderIdResult;
    };
    sdk: {
      input: RequestSenderIdCommandInput;
      output: RequestSenderIdCommandOutput;
    };
  };
}
