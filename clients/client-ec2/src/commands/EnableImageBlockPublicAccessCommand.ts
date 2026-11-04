// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableImageBlockPublicAccessRequest, EnableImageBlockPublicAccessResult } from "../models/models_6";
import { EnableImageBlockPublicAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableImageBlockPublicAccessCommand}.
 */
export interface EnableImageBlockPublicAccessCommandInput extends EnableImageBlockPublicAccessRequest {}
/**
 * @public
 *
 * The output of {@link EnableImageBlockPublicAccessCommand}.
 */
export interface EnableImageBlockPublicAccessCommandOutput extends EnableImageBlockPublicAccessResult, __MetadataBearer {}

/**
 * Enables *block public access for AMIs* at the account level in the specified Amazon Web Services Region. This prevents the public sharing of your AMIs. However, if you already have public AMIs, they will remain publicly available.
 *
 * The API can take up to 10 minutes to configure this setting. During this time, if you run [GetImageBlockPublicAccessState](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetImageBlockPublicAccessState.html), the response will be `unblocked`. When the API has completed the configuration, the response will be `block-new-sharing`.
 *
 * For more information, see [Block public access to your AMIs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-public-access-to-amis.html) in the *Amazon EC2 User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableImageBlockPublicAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableImageBlockPublicAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableImageBlockPublicAccessRequest
 *   ImageBlockPublicAccessState: "block-new-sharing", // required
 *   DryRun: true || false,
 * };
 * const command = new EnableImageBlockPublicAccessCommand(input);
 * const response = await client.send(command);
 * // { // EnableImageBlockPublicAccessResult
 * //   ImageBlockPublicAccessState: "block-new-sharing",
 * // };
 *
 * ```
 *
 * @param EnableImageBlockPublicAccessCommandInput - {@link EnableImageBlockPublicAccessCommandInput}
 * @returns {@link EnableImageBlockPublicAccessCommandOutput}
 * @see {@link EnableImageBlockPublicAccessCommandInput} for command's `input` shape.
 * @see {@link EnableImageBlockPublicAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class EnableImageBlockPublicAccessCommand extends command<EnableImageBlockPublicAccessCommandInput, EnableImageBlockPublicAccessCommandOutput>(
  _ep0,
  _mw0,
  "EnableImageBlockPublicAccess",
  EnableImageBlockPublicAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableImageBlockPublicAccessRequest;
      output: EnableImageBlockPublicAccessResult;
    };
    sdk: {
      input: EnableImageBlockPublicAccessCommandInput;
      output: EnableImageBlockPublicAccessCommandOutput;
    };
  };
}
