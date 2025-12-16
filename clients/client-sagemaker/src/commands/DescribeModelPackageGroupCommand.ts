// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeModelPackageGroupInput, DescribeModelPackageGroupOutput } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeModelPackageGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeModelPackageGroupCommand}.
 */
export interface DescribeModelPackageGroupCommandInput extends DescribeModelPackageGroupInput {}
/**
 * @public
 *
 * The output of {@link DescribeModelPackageGroupCommand}.
 */
export interface DescribeModelPackageGroupCommandOutput extends DescribeModelPackageGroupOutput, __MetadataBearer {}

/**
 * <p>Gets a description for the specified model group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelPackageGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelPackageGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeModelPackageGroupInput
 *   ModelPackageGroupName: "STRING_VALUE", // required
 * };
 * const command = new DescribeModelPackageGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelPackageGroupOutput
 * //   ModelPackageGroupName: "STRING_VALUE", // required
 * //   ModelPackageGroupArn: "STRING_VALUE", // required
 * //   ModelPackageGroupDescription: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
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
 * //   ModelPackageGroupStatus: "Pending" || "InProgress" || "Completed" || "Failed" || "Deleting" || "DeleteFailed", // required
 * // };
 *
 * ```
 *
 * @param DescribeModelPackageGroupCommandInput - {@link DescribeModelPackageGroupCommandInput}
 * @returns {@link DescribeModelPackageGroupCommandOutput}
 * @see {@link DescribeModelPackageGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeModelPackageGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeModelPackageGroupCommand extends $Command
  .classBuilder<
    DescribeModelPackageGroupCommandInput,
    DescribeModelPackageGroupCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DescribeModelPackageGroup", {})
  .n("SageMakerClient", "DescribeModelPackageGroupCommand")
  .sc(DescribeModelPackageGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeModelPackageGroupInput;
      output: DescribeModelPackageGroupOutput;
    };
    sdk: {
      input: DescribeModelPackageGroupCommandInput;
      output: DescribeModelPackageGroupCommandOutput;
    };
  };
}
