// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOptedOutNumberRequest, DeleteOptedOutNumberResult } from "../models/models_0";
import { DeleteOptedOutNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOptedOutNumberCommand}.
 */
export interface DeleteOptedOutNumberCommandInput extends DeleteOptedOutNumberRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOptedOutNumberCommand}.
 */
export interface DeleteOptedOutNumberCommandOutput extends DeleteOptedOutNumberResult, __MetadataBearer {}

/**
 * Deletes an existing opted out destination phone number from the specified opt-out list.
 *
 * Each destination phone number can only be deleted once every 30 days.
 *
 * If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an error is returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteOptedOutNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteOptedOutNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteOptedOutNumberRequest
 *   OptOutListName: "STRING_VALUE", // required
 *   OptedOutNumber: "STRING_VALUE", // required
 * };
 * const command = new DeleteOptedOutNumberCommand(input);
 * const response = await client.send(command);
 * // { // DeleteOptedOutNumberResult
 * //   OptOutListArn: "STRING_VALUE",
 * //   OptOutListName: "STRING_VALUE",
 * //   OptedOutNumber: "STRING_VALUE",
 * //   OptedOutTimestamp: new Date("TIMESTAMP"),
 * //   EndUserOptedOut: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteOptedOutNumberCommandInput - {@link DeleteOptedOutNumberCommandInput}
 * @returns {@link DeleteOptedOutNumberCommandOutput}
 * @see {@link DeleteOptedOutNumberCommandInput} for command's `input` shape.
 * @see {@link DeleteOptedOutNumberCommandOutput} for command's `response` shape.
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
export class DeleteOptedOutNumberCommand extends command<DeleteOptedOutNumberCommandInput, DeleteOptedOutNumberCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOptedOutNumber",
  DeleteOptedOutNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOptedOutNumberRequest;
      output: DeleteOptedOutNumberResult;
    };
    sdk: {
      input: DeleteOptedOutNumberCommandInput;
      output: DeleteOptedOutNumberCommandOutput;
    };
  };
}
