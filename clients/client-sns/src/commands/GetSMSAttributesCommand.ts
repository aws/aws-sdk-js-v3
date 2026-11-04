// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSMSAttributesInput, GetSMSAttributesResponse } from "../models/models_0";
import { GetSMSAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSMSAttributesCommand}.
 */
export interface GetSMSAttributesCommandInput extends GetSMSAttributesInput {}
/**
 * @public
 *
 * The output of {@link GetSMSAttributesCommand}.
 */
export interface GetSMSAttributesCommandOutput extends GetSMSAttributesResponse, __MetadataBearer {}

/**
 * Returns the settings for sending SMS messages from your Amazon Web Services account.
 *
 * These settings are set with the `SetSMSAttributes` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSMSAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSMSAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // GetSMSAttributesInput
 *   attributes: [ // ListString
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetSMSAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetSMSAttributesResponse
 * //   attributes: { // MapStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSMSAttributesCommandInput - {@link GetSMSAttributesCommandInput}
 * @returns {@link GetSMSAttributesCommandOutput}
 * @see {@link GetSMSAttributesCommandInput} for command's `input` shape.
 * @see {@link GetSMSAttributesCommandOutput} for command's `response` shape.
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
export class GetSMSAttributesCommand extends command<GetSMSAttributesCommandInput, GetSMSAttributesCommandOutput>(
  _ep0,
  _mw0,
  "GetSMSAttributes",
  GetSMSAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSMSAttributesInput;
      output: GetSMSAttributesResponse;
    };
    sdk: {
      input: GetSMSAttributesCommandInput;
      output: GetSMSAttributesCommandOutput;
    };
  };
}
