// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVerifiedAccessGroupRequest, DeleteVerifiedAccessGroupResult } from "../models/models_3";
import { de_DeleteVerifiedAccessGroupCommand, se_DeleteVerifiedAccessGroupCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVerifiedAccessGroupCommand}.
 */
export interface DeleteVerifiedAccessGroupCommandInput extends DeleteVerifiedAccessGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVerifiedAccessGroupCommand}.
 */
export interface DeleteVerifiedAccessGroupCommandOutput extends DeleteVerifiedAccessGroupResult, __MetadataBearer {}

/**
 * <p>Delete an Amazon Web Services Verified Access group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVerifiedAccessGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVerifiedAccessGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteVerifiedAccessGroupRequest
 *   VerifiedAccessGroupId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DeleteVerifiedAccessGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVerifiedAccessGroupResult
 * //   VerifiedAccessGroup: { // VerifiedAccessGroup
 * //     VerifiedAccessGroupId: "STRING_VALUE",
 * //     VerifiedAccessInstanceId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     VerifiedAccessGroupArn: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     LastUpdatedTime: "STRING_VALUE",
 * //     DeletionTime: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //       CustomerManagedKeyEnabled: true || false,
 * //       KmsKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVerifiedAccessGroupCommandInput - {@link DeleteVerifiedAccessGroupCommandInput}
 * @returns {@link DeleteVerifiedAccessGroupCommandOutput}
 * @see {@link DeleteVerifiedAccessGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedAccessGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVerifiedAccessGroupCommand extends $Command
  .classBuilder<
    DeleteVerifiedAccessGroupCommandInput,
    DeleteVerifiedAccessGroupCommandOutput,
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
  .s("AmazonEC2", "DeleteVerifiedAccessGroup", {})
  .n("EC2Client", "DeleteVerifiedAccessGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVerifiedAccessGroupCommand)
  .de(de_DeleteVerifiedAccessGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVerifiedAccessGroupRequest;
      output: DeleteVerifiedAccessGroupResult;
    };
    sdk: {
      input: DeleteVerifiedAccessGroupCommandInput;
      output: DeleteVerifiedAccessGroupCommandOutput;
    };
  };
}
