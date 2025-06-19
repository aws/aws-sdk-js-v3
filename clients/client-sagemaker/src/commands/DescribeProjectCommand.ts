// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProjectInput, DescribeProjectOutput } from "../models/models_3";
import { de_DescribeProjectCommand, se_DescribeProjectCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandInput extends DescribeProjectInput {}
/**
 * @public
 *
 * The output of {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandOutput extends DescribeProjectOutput, __MetadataBearer {}

/**
 * <p>Describes the details of a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeProjectCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeProjectCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeProjectInput
 *   ProjectName: "STRING_VALUE", // required
 * };
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProjectOutput
 * //   ProjectArn: "STRING_VALUE", // required
 * //   ProjectName: "STRING_VALUE", // required
 * //   ProjectId: "STRING_VALUE", // required
 * //   ProjectDescription: "STRING_VALUE",
 * //   ServiceCatalogProvisioningDetails: { // ServiceCatalogProvisioningDetails
 * //     ProductId: "STRING_VALUE", // required
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     PathId: "STRING_VALUE",
 * //     ProvisioningParameters: [ // ProvisioningParameters
 * //       { // ProvisioningParameter
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   ServiceCatalogProvisionedProductDetails: { // ServiceCatalogProvisionedProductDetails
 * //     ProvisionedProductId: "STRING_VALUE",
 * //     ProvisionedProductStatusMessage: "STRING_VALUE",
 * //   },
 * //   ProjectStatus: "Pending" || "CreateInProgress" || "CreateCompleted" || "CreateFailed" || "DeleteInProgress" || "DeleteFailed" || "DeleteCompleted" || "UpdateInProgress" || "UpdateCompleted" || "UpdateFailed", // required
 * //   TemplateProviderDetails: [ // TemplateProviderDetailList
 * //     { // TemplateProviderDetail
 * //       CfnTemplateProviderDetail: { // CfnTemplateProviderDetail
 * //         TemplateName: "STRING_VALUE", // required
 * //         TemplateURL: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE",
 * //         Parameters: [ // CfnStackParameters
 * //           { // CfnStackParameter
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         StackDetail: { // CfnStackDetail
 * //           Name: "STRING_VALUE",
 * //           Id: "STRING_VALUE",
 * //           StatusMessage: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
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
 * //   CreationTime: new Date("TIMESTAMP"), // required
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
 * @param DescribeProjectCommandInput - {@link DescribeProjectCommandInput}
 * @returns {@link DescribeProjectCommandOutput}
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeProjectCommand extends $Command
  .classBuilder<
    DescribeProjectCommandInput,
    DescribeProjectCommandOutput,
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
  .s("SageMaker", "DescribeProject", {})
  .n("SageMakerClient", "DescribeProjectCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProjectCommand)
  .de(de_DescribeProjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProjectInput;
      output: DescribeProjectOutput;
    };
    sdk: {
      input: DescribeProjectCommandInput;
      output: DescribeProjectCommandOutput;
    };
  };
}
