// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataProtectionPolicyInput, GetDataProtectionPolicyResponse } from "../models/models_0";
import { GetDataProtectionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataProtectionPolicyCommand}.
 */
export interface GetDataProtectionPolicyCommandInput extends GetDataProtectionPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetDataProtectionPolicyCommand}.
 */
export interface GetDataProtectionPolicyCommandOutput extends GetDataProtectionPolicyResponse, __MetadataBearer {}

/**
 * > **Important:** Amazon SNS message data protection is no longer available to new customers. For more information and guidance on alternatives, see [Amazon SNS message data protection availability change](https://docs.aws.amazon.com/sns/latest/dg/sns-message-data-protection-availability-change.html).
 *
 * Retrieves the specified inline `DataProtectionPolicy` document that is stored in the specified Amazon SNS topic.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetDataProtectionPolicyCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetDataProtectionPolicyCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // GetDataProtectionPolicyInput
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetDataProtectionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetDataProtectionPolicyResponse
 * //   DataProtectionPolicy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataProtectionPolicyCommandInput - {@link GetDataProtectionPolicyCommandInput}
 * @returns {@link GetDataProtectionPolicyCommandOutput}
 * @see {@link GetDataProtectionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDataProtectionPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidSecurityException} (client fault)
 *
 * The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Indicates that the requested resource does not exist.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class GetDataProtectionPolicyCommand extends command<GetDataProtectionPolicyCommandInput, GetDataProtectionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetDataProtectionPolicy",
  GetDataProtectionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataProtectionPolicyInput;
      output: GetDataProtectionPolicyResponse;
    };
    sdk: {
      input: GetDataProtectionPolicyCommandInput;
      output: GetDataProtectionPolicyCommandOutput;
    };
  };
}
