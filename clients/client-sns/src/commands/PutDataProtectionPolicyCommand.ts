// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDataProtectionPolicyInput } from "../models/models_0";
import { PutDataProtectionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutDataProtectionPolicyCommand}.
 */
export interface PutDataProtectionPolicyCommandInput extends PutDataProtectionPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutDataProtectionPolicyCommand}.
 */
export interface PutDataProtectionPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or updates an inline policy document that is stored in the specified Amazon SNS
 *             topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, PutDataProtectionPolicyCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, PutDataProtectionPolicyCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // PutDataProtectionPolicyInput
 *   ResourceArn: "STRING_VALUE", // required
 *   DataProtectionPolicy: "STRING_VALUE", // required
 * };
 * const command = new PutDataProtectionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDataProtectionPolicyCommandInput - {@link PutDataProtectionPolicyCommandInput}
 * @returns {@link PutDataProtectionPolicyCommandOutput}
 * @see {@link PutDataProtectionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutDataProtectionPolicyCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *  <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class PutDataProtectionPolicyCommand extends command<PutDataProtectionPolicyCommandInput, PutDataProtectionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutDataProtectionPolicy",
  PutDataProtectionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDataProtectionPolicyInput;
      output: {};
    };
    sdk: {
      input: PutDataProtectionPolicyCommandInput;
      output: PutDataProtectionPolicyCommandOutput;
    };
  };
}
