// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { OptInPhoneNumberInput, OptInPhoneNumberResponse } from "../models/models_0";
import { OptInPhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link OptInPhoneNumberCommand}.
 */
export interface OptInPhoneNumberCommandInput extends OptInPhoneNumberInput {}
/**
 * @public
 *
 * The output of {@link OptInPhoneNumberCommand}.
 */
export interface OptInPhoneNumberCommandOutput extends OptInPhoneNumberResponse, __MetadataBearer {}

/**
 * Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number.
 *
 * You can opt in a phone number only once every 30 days.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, OptInPhoneNumberCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, OptInPhoneNumberCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // OptInPhoneNumberInput
 *   phoneNumber: "STRING_VALUE", // required
 * };
 * const command = new OptInPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OptInPhoneNumberCommandInput - {@link OptInPhoneNumberCommandInput}
 * @returns {@link OptInPhoneNumberCommandOutput}
 * @see {@link OptInPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link OptInPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class OptInPhoneNumberCommand extends command<OptInPhoneNumberCommandInput, OptInPhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "OptInPhoneNumber",
  OptInPhoneNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OptInPhoneNumberInput;
      output: {};
    };
    sdk: {
      input: OptInPhoneNumberCommandInput;
      output: OptInPhoneNumberCommandOutput;
    };
  };
}
