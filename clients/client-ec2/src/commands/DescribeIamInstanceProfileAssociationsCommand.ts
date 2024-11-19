// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeIamInstanceProfileAssociationsRequest,
  DescribeIamInstanceProfileAssociationsResult,
} from "../models/models_4";
import {
  de_DescribeIamInstanceProfileAssociationsCommand,
  se_DescribeIamInstanceProfileAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIamInstanceProfileAssociationsCommand}.
 */
export interface DescribeIamInstanceProfileAssociationsCommandInput
  extends DescribeIamInstanceProfileAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIamInstanceProfileAssociationsCommand}.
 */
export interface DescribeIamInstanceProfileAssociationsCommandOutput
  extends DescribeIamInstanceProfileAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes your IAM instance profile associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIamInstanceProfileAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIamInstanceProfileAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIamInstanceProfileAssociationsRequest
 *   AssociationIds: [ // AssociationIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeIamInstanceProfileAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIamInstanceProfileAssociationsResult
 * //   IamInstanceProfileAssociations: [ // IamInstanceProfileAssociationSet
 * //     { // IamInstanceProfileAssociation
 * //       AssociationId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       IamInstanceProfile: { // IamInstanceProfile
 * //         Arn: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //       },
 * //       State: "associating" || "associated" || "disassociating" || "disassociated",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIamInstanceProfileAssociationsCommandInput - {@link DescribeIamInstanceProfileAssociationsCommandInput}
 * @returns {@link DescribeIamInstanceProfileAssociationsCommandOutput}
 * @see {@link DescribeIamInstanceProfileAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIamInstanceProfileAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe an IAM instance profile association
 * ```javascript
 * // This example describes the specified IAM instance profile association.
 * const input = {
 *   "AssociationIds": [
 *     "iip-assoc-0db249b1f25fa24b8"
 *   ]
 * };
 * const command = new DescribeIamInstanceProfileAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IamInstanceProfileAssociations": [
 *     {
 *       "AssociationId": "iip-assoc-0db249b1f25fa24b8",
 *       "IamInstanceProfile": {
 *         "Arn": "arn:aws:iam::123456789012:instance-profile/admin-role",
 *         "Id": "AIPAJVQN4F5WVLGCJDRGM"
 *       },
 *       "InstanceId": "i-09eb09efa73ec1dee",
 *       "State": "associated"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-an-iam-instance-profile-association-1529025123918
 * ```
 *
 */
export class DescribeIamInstanceProfileAssociationsCommand extends $Command
  .classBuilder<
    DescribeIamInstanceProfileAssociationsCommandInput,
    DescribeIamInstanceProfileAssociationsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeIamInstanceProfileAssociations", {})
  .n("EC2Client", "DescribeIamInstanceProfileAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIamInstanceProfileAssociationsCommand)
  .de(de_DescribeIamInstanceProfileAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIamInstanceProfileAssociationsRequest;
      output: DescribeIamInstanceProfileAssociationsResult;
    };
    sdk: {
      input: DescribeIamInstanceProfileAssociationsCommandInput;
      output: DescribeIamInstanceProfileAssociationsCommandOutput;
    };
  };
}
