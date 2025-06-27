// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLineageGroupRequest, DescribeLineageGroupResponse } from "../models/models_3";
import { de_DescribeLineageGroupCommand, se_DescribeLineageGroupCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLineageGroupCommand}.
 */
export interface DescribeLineageGroupCommandInput extends DescribeLineageGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLineageGroupCommand}.
 */
export interface DescribeLineageGroupCommandOutput extends DescribeLineageGroupResponse, __MetadataBearer {}

/**
 * <p>Provides a list of properties for the requested lineage group. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html"> Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeLineageGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeLineageGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeLineageGroupRequest
 *   LineageGroupName: "STRING_VALUE", // required
 * };
 * const command = new DescribeLineageGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLineageGroupResponse
 * //   LineageGroupName: "STRING_VALUE",
 * //   LineageGroupArn: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   CreatedBy: { // UserContext
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: { // IamIdentity
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedBy: {
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: {
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeLineageGroupCommandInput - {@link DescribeLineageGroupCommandInput}
 * @returns {@link DescribeLineageGroupCommandOutput}
 * @see {@link DescribeLineageGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeLineageGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeLineageGroupCommand extends $Command
  .classBuilder<
    DescribeLineageGroupCommandInput,
    DescribeLineageGroupCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeLineageGroup", {})
  .n("SageMakerClient", "DescribeLineageGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLineageGroupCommand)
  .de(de_DescribeLineageGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLineageGroupRequest;
      output: DescribeLineageGroupResponse;
    };
    sdk: {
      input: DescribeLineageGroupCommandInput;
      output: DescribeLineageGroupCommandOutput;
    };
  };
}
