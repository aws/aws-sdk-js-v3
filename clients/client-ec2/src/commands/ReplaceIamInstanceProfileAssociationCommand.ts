// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ReplaceIamInstanceProfileAssociationRequest,
  ReplaceIamInstanceProfileAssociationResult,
} from "../models/models_7";
import { ReplaceIamInstanceProfileAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReplaceIamInstanceProfileAssociationCommand}.
 */
export interface ReplaceIamInstanceProfileAssociationCommandInput extends ReplaceIamInstanceProfileAssociationRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceIamInstanceProfileAssociationCommand}.
 */
export interface ReplaceIamInstanceProfileAssociationCommandOutput
  extends ReplaceIamInstanceProfileAssociationResult,
    __MetadataBearer {}

/**
 * <p>Replaces an IAM instance profile for the specified running instance. You can use
 *             this action to change the IAM instance profile that's associated with an instance
 *             without having to disassociate the existing IAM instance profile first.</p>
 *          <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceIamInstanceProfileAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceIamInstanceProfileAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ReplaceIamInstanceProfileAssociationRequest
 *   IamInstanceProfile: { // IamInstanceProfileSpecification
 *     Arn: "STRING_VALUE",
 *     Name: "STRING_VALUE",
 *   },
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new ReplaceIamInstanceProfileAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceIamInstanceProfileAssociationResult
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
 * @param ReplaceIamInstanceProfileAssociationCommandInput - {@link ReplaceIamInstanceProfileAssociationCommandInput}
 * @returns {@link ReplaceIamInstanceProfileAssociationCommandOutput}
 * @see {@link ReplaceIamInstanceProfileAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceIamInstanceProfileAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ReplaceIamInstanceProfileAssociationCommand extends $Command
  .classBuilder<
    ReplaceIamInstanceProfileAssociationCommandInput,
    ReplaceIamInstanceProfileAssociationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ReplaceIamInstanceProfileAssociation", {})
  .n("EC2Client", "ReplaceIamInstanceProfileAssociationCommand")
  .sc(ReplaceIamInstanceProfileAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplaceIamInstanceProfileAssociationRequest;
      output: ReplaceIamInstanceProfileAssociationResult;
    };
    sdk: {
      input: ReplaceIamInstanceProfileAssociationCommandInput;
      output: ReplaceIamInstanceProfileAssociationCommandOutput;
    };
  };
}
