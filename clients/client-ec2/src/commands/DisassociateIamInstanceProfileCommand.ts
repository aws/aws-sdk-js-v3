// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateIamInstanceProfileRequest, DisassociateIamInstanceProfileResult } from "../models/models_5";
import { DisassociateIamInstanceProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateIamInstanceProfileCommand}.
 */
export interface DisassociateIamInstanceProfileCommandInput extends DisassociateIamInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateIamInstanceProfileCommand}.
 */
export interface DisassociateIamInstanceProfileCommandOutput
  extends DisassociateIamInstanceProfileResult,
    __MetadataBearer {}

/**
 * <p>Disassociates an IAM instance profile from a running or stopped instance.</p>
 *          <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateIamInstanceProfileCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateIamInstanceProfileCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateIamInstanceProfileRequest
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateIamInstanceProfileResult
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
 * @param DisassociateIamInstanceProfileCommandInput - {@link DisassociateIamInstanceProfileCommandInput}
 * @returns {@link DisassociateIamInstanceProfileCommandOutput}
 * @see {@link DisassociateIamInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DisassociateIamInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To disassociate an IAM instance profile
 * ```javascript
 * // This example disassociates the specified IAM instance profile from an instance.
 * const input = {
 *   AssociationId: "iip-assoc-05020b59952902f5f"
 * };
 * const command = new DisassociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   IamInstanceProfileAssociation: {
 *     AssociationId: "iip-assoc-05020b59952902f5f",
 *     IamInstanceProfile: {
 *       Arn: "arn:aws:iam::123456789012:instance-profile/admin-role",
 *       Id: "AIPAI5IVIHMFFYY2DKV5Y"
 *     },
 *     InstanceId: "i-123456789abcde123",
 *     State: "disassociating"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateIamInstanceProfileCommand extends $Command
  .classBuilder<
    DisassociateIamInstanceProfileCommandInput,
    DisassociateIamInstanceProfileCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisassociateIamInstanceProfile", {})
  .n("EC2Client", "DisassociateIamInstanceProfileCommand")
  .sc(DisassociateIamInstanceProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateIamInstanceProfileRequest;
      output: DisassociateIamInstanceProfileResult;
    };
    sdk: {
      input: DisassociateIamInstanceProfileCommandInput;
      output: DisassociateIamInstanceProfileCommandOutput;
    };
  };
}
