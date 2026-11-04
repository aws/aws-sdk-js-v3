// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ReplaceImageInstanceTypeSpecificationRequest,
  ReplaceImageInstanceTypeSpecificationResult,
} from "../models/models_8";
import { ReplaceImageInstanceTypeSpecification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReplaceImageInstanceTypeSpecificationCommand}.
 */
export interface ReplaceImageInstanceTypeSpecificationCommandInput extends ReplaceImageInstanceTypeSpecificationRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceImageInstanceTypeSpecificationCommand}.
 */
export interface ReplaceImageInstanceTypeSpecificationCommandOutput extends ReplaceImageInstanceTypeSpecificationResult, __MetadataBearer {}

/**
 * Replaces or removes the instance type specification for an AMI. The instance type specification defines which instance types are compatible with the AMI.
 *
 * When you launch an instance using [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html), Amazon EC2 validates the requested instance type against the AMI's instance type specification. If the instance type is not compatible, the request fails with an `InvalidParameterCombination` error.
 *
 * You can specify supported instance types, unsupported instance types, or both. The evaluation logic is as follows:
 *
 * - No specification set – all instance types are allowed.
 * - Only `UnsupportedInstanceTypes` set – All instance types are allowed except those that match the unsupported list.
 * - `SupportedInstanceTypes` set – The instance type must match the supported list and must not match the unsupported list.
 *
 * Instance type entries support wildcard patterns using `*` (for example, `t3.*` matches all t3 sizes).
 *
 * To remove an existing instance type specification, omit the `InstanceTypeSpecification` parameter or set it to `null`.
 *
 * To set the instance type specification, you must be the AMI owner. You cannot set an instance type specification on an AMI that is listed in Amazon Web Services Marketplace, and you cannot list an AMI in Amazon Web Services Marketplace if it has an instance type specification set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceImageInstanceTypeSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceImageInstanceTypeSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ReplaceImageInstanceTypeSpecificationRequest
 *   ImageId: "STRING_VALUE", // required
 *   InstanceTypeSpecification: { // InstanceTypeSpecificationRequest
 *     SupportedInstanceTypes: [ // SupportedInstanceTypeRequestSet
 *       "STRING_VALUE",
 *     ],
 *     UnsupportedInstanceTypes: [ // UnsupportedInstanceTypeRequestSet
 *       "STRING_VALUE",
 *     ],
 *   },
 *   DryRun: true || false,
 * };
 * const command = new ReplaceImageInstanceTypeSpecificationCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceImageInstanceTypeSpecificationResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param ReplaceImageInstanceTypeSpecificationCommandInput - {@link ReplaceImageInstanceTypeSpecificationCommandInput}
 * @returns {@link ReplaceImageInstanceTypeSpecificationCommandOutput}
 * @see {@link ReplaceImageInstanceTypeSpecificationCommandInput} for command's `input` shape.
 * @see {@link ReplaceImageInstanceTypeSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class ReplaceImageInstanceTypeSpecificationCommand extends command<ReplaceImageInstanceTypeSpecificationCommandInput, ReplaceImageInstanceTypeSpecificationCommandOutput>(
  _ep0,
  _mw0,
  "ReplaceImageInstanceTypeSpecification",
  ReplaceImageInstanceTypeSpecification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplaceImageInstanceTypeSpecificationRequest;
      output: ReplaceImageInstanceTypeSpecificationResult;
    };
    sdk: {
      input: ReplaceImageInstanceTypeSpecificationCommandInput;
      output: ReplaceImageInstanceTypeSpecificationCommandOutput;
    };
  };
}
