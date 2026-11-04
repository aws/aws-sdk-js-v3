// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DecodeAuthorizationMessageRequest, DecodeAuthorizationMessageResponse } from "../models/models_0";
import { DecodeAuthorizationMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DecodeAuthorizationMessageCommand}.
 */
export interface DecodeAuthorizationMessageCommandInput extends DecodeAuthorizationMessageRequest {}
/**
 * @public
 *
 * The output of {@link DecodeAuthorizationMessageCommand}.
 */
export interface DecodeAuthorizationMessageCommandOutput extends DecodeAuthorizationMessageResponse, __MetadataBearer {}

/**
 * Decodes additional information about the authorization status of a request from an encoded message returned in response to an Amazon Web Services request.
 *
 * For example, if a user is not authorized to perform an operation that he or she has requested, the request returns a `Client.UnauthorizedOperation` response (an HTTP 403 response). Some Amazon Web Services operations additionally return an encoded message that can provide details about this authorization failure.
 *
 * > **Note:** Only certain Amazon Web Services operations return an encoded authorization message. The documentation for an individual operation indicates whether that operation returns an encoded message in addition to returning an HTTP code.
 *
 * The message is encoded because the details of the authorization status can contain privileged information that the user who requested the operation should not see. To decode an authorization status message, a user must be granted permissions through an IAM [policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) to request the `DecodeAuthorizationMessage` (`sts:DecodeAuthorizationMessage`) action.
 *
 * The decoded message includes the following type of information:
 *
 * - Whether the request was denied due to an explicit deny or due to the absence of an explicit allow. For more information, see [Determining Whether a Request is Allowed or Denied](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-denyallow) in the *IAM User Guide*.
 * - The principal who made the request.
 * - The requested action.
 * - The requested resource.
 * - The values of condition keys in the context of the user's request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, DecodeAuthorizationMessageCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, DecodeAuthorizationMessageCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * // import type { STSClientConfig } from "@aws-sdk/client-sts";
 * const config = {}; // type is STSClientConfig
 * const client = new STSClient(config);
 * const input = { // DecodeAuthorizationMessageRequest
 *   EncodedMessage: "STRING_VALUE", // required
 * };
 * const command = new DecodeAuthorizationMessageCommand(input);
 * const response = await client.send(command);
 * // { // DecodeAuthorizationMessageResponse
 * //   DecodedMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DecodeAuthorizationMessageCommandInput - {@link DecodeAuthorizationMessageCommandInput}
 * @returns {@link DecodeAuthorizationMessageCommandOutput}
 * @see {@link DecodeAuthorizationMessageCommandInput} for command's `input` shape.
 * @see {@link DecodeAuthorizationMessageCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link InvalidAuthorizationMessageException} (client fault)
 *
 * The error returned if the message passed to `DecodeAuthorizationMessage` was invalid. This can happen if the token contains invalid characters, such as line breaks, or if the message has expired.
 *
 * @throws {@link STSServiceException}
 *
 * Base exception class for all service exceptions from STS service.
 *
 * @example To decode information about an authorization status of a request
 * ```javascript
 * //
 * const input = {
 *   EncodedMessage: "<encoded-message>"
 * };
 * const command = new DecodeAuthorizationMessageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DecodedMessage: `{"allowed": "false","explicitDeny": "false","matchedStatements": "","failures": "","context": {"principal": {"id": "AIDACKCEVSQ6C2EXAMPLE","name": "Bob","arn": "arn:aws:iam::123456789012:user/Bob"},"action": "ec2:StopInstances","resource": "arn:aws:ec2:us-east-1:123456789012:instance/i-dd01c9bd","conditions": [{"item": {"key": "ec2:Tenancy","values": ["default"]},{"item": {"key": "ec2:ResourceTag/elasticbeanstalk:environment-name","values": ["Default-Environment"]}},(Additional items ...)]}}`
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DecodeAuthorizationMessageCommand extends command<DecodeAuthorizationMessageCommandInput, DecodeAuthorizationMessageCommandOutput>(
  _ep0,
  _mw0,
  "DecodeAuthorizationMessage",
  DecodeAuthorizationMessage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DecodeAuthorizationMessageRequest;
      output: DecodeAuthorizationMessageResponse;
    };
    sdk: {
      input: DecodeAuthorizationMessageCommandInput;
      output: DecodeAuthorizationMessageCommandOutput;
    };
  };
}
