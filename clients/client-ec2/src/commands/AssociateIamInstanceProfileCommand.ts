// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateIamInstanceProfileRequest, AssociateIamInstanceProfileResult } from "../models/models_0";
import { de_AssociateIamInstanceProfileCommand, se_AssociateIamInstanceProfileCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateIamInstanceProfileCommand}.
 */
export interface AssociateIamInstanceProfileCommandInput extends AssociateIamInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link AssociateIamInstanceProfileCommand}.
 */
export interface AssociateIamInstanceProfileCommandOutput extends AssociateIamInstanceProfileResult, __MetadataBearer {}

/**
 * <p>Associates an IAM instance profile with a running or stopped instance. You cannot
 *             associate more than one IAM instance profile with an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateIamInstanceProfileCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateIamInstanceProfileCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateIamInstanceProfileRequest
 *   IamInstanceProfile: { // IamInstanceProfileSpecification
 *     Arn: "STRING_VALUE",
 *     Name: "STRING_VALUE",
 *   },
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new AssociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // AssociateIamInstanceProfileResult
 * //   IamInstanceProfileAssociation: { // IamInstanceProfileAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     IamInstanceProfile: { // IamInstanceProfile
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //     },
 * //     State: "associating" || "associated" || "disassociating" || "disassociated",
 * //     Timestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateIamInstanceProfileCommandInput - {@link AssociateIamInstanceProfileCommandInput}
 * @returns {@link AssociateIamInstanceProfileCommandOutput}
 * @see {@link AssociateIamInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link AssociateIamInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To associate an IAM instance profile with an instance
 * ```javascript
 * // This example associates an IAM instance profile named admin-role with the specified instance.
 * const input = {
 *   "IamInstanceProfile": {
 *     "Name": "admin-role"
 *   },
 *   "InstanceId": "i-123456789abcde123"
 * };
 * const command = new AssociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IamInstanceProfileAssociation": {
 *     "AssociationId": "iip-assoc-0e7736511a163c209",
 *     "IamInstanceProfile": {
 *       "Arn": "arn:aws:iam::123456789012:instance-profile/admin-role",
 *       "Id": "AIPAJBLK7RKJKWDXVHIEC"
 *     },
 *     "InstanceId": "i-123456789abcde123",
 *     "State": "associating"
 *   }
 * }
 * *\/
 * // example id: to-associate-an-iam-instance-profile-with-an-instance-1528928429850
 * ```
 *
 */
export class AssociateIamInstanceProfileCommand extends $Command
  .classBuilder<
    AssociateIamInstanceProfileCommandInput,
    AssociateIamInstanceProfileCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "AssociateIamInstanceProfile", {})
  .n("EC2Client", "AssociateIamInstanceProfileCommand")
  .f(void 0, void 0)
  .ser(se_AssociateIamInstanceProfileCommand)
  .de(de_AssociateIamInstanceProfileCommand)
  .build() {}
