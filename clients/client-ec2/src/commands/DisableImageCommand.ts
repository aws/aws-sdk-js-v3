// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableImageRequest, DisableImageResult } from "../models/models_5";
import { DisableImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableImageCommand}.
 */
export interface DisableImageCommandInput extends DisableImageRequest {}
/**
 * @public
 *
 * The output of {@link DisableImageCommand}.
 */
export interface DisableImageCommandOutput extends DisableImageResult, __MetadataBearer {}

/**
 * Sets the AMI state to `disabled` and removes all launch permissions from the AMI. A disabled AMI can't be used for instance launches.
 *
 * A disabled AMI can't be shared. If an AMI was public or previously shared, it is made private. If an AMI was shared with an Amazon Web Services account, organization, or Organizational Unit, they lose access to the disabled AMI.
 *
 * A disabled AMI does not appear in [DescribeImages](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html) API calls by default.
 *
 * Only the AMI owner can disable an AMI.
 *
 * You can re-enable a disabled AMI using [EnableImage](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableImage.html).
 *
 * For more information, see [Disable an AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/disable-an-ami.html) in the *Amazon EC2 User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableImageRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisableImageCommand(input);
 * const response = await client.send(command);
 * // { // DisableImageResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisableImageCommandInput - {@link DisableImageCommandInput}
 * @returns {@link DisableImageCommandOutput}
 * @see {@link DisableImageCommandInput} for command's `input` shape.
 * @see {@link DisableImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DisableImageCommand extends command<DisableImageCommandInput, DisableImageCommandOutput>(
  _ep0,
  _mw0,
  "DisableImage",
  DisableImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableImageRequest;
      output: DisableImageResult;
    };
    sdk: {
      input: DisableImageCommandInput;
      output: DisableImageCommandOutput;
    };
  };
}
