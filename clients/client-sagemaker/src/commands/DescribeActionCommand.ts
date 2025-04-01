// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeActionRequest, DescribeActionResponse } from "../models/models_2";
import { de_DescribeActionCommand, se_DescribeActionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeActionCommand}.
 */
export interface DescribeActionCommandInput extends DescribeActionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActionCommand}.
 */
export interface DescribeActionCommandOutput extends DescribeActionResponse, __MetadataBearer {}

/**
 * <p>Describes an action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeActionRequest
 *   ActionName: "STRING_VALUE", // required
 * };
 * const command = new DescribeActionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActionResponse
 * //   ActionName: "STRING_VALUE",
 * //   ActionArn: "STRING_VALUE",
 * //   Source: { // ActionSource
 * //     SourceUri: "STRING_VALUE", // required
 * //     SourceType: "STRING_VALUE",
 * //     SourceId: "STRING_VALUE",
 * //   },
 * //   ActionType: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Status: "Unknown" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * //   Properties: { // LineageEntityParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
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
 * //   MetadataProperties: { // MetadataProperties
 * //     CommitId: "STRING_VALUE",
 * //     Repository: "STRING_VALUE",
 * //     GeneratedBy: "STRING_VALUE",
 * //     ProjectId: "STRING_VALUE",
 * //   },
 * //   LineageGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeActionCommandInput - {@link DescribeActionCommandInput}
 * @returns {@link DescribeActionCommandOutput}
 * @see {@link DescribeActionCommandInput} for command's `input` shape.
 * @see {@link DescribeActionCommandOutput} for command's `response` shape.
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
export class DescribeActionCommand extends $Command
  .classBuilder<
    DescribeActionCommandInput,
    DescribeActionCommandOutput,
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
  .s("SageMaker", "DescribeAction", {})
  .n("SageMakerClient", "DescribeActionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeActionCommand)
  .de(de_DescribeActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeActionRequest;
      output: DescribeActionResponse;
    };
    sdk: {
      input: DescribeActionCommandInput;
      output: DescribeActionCommandOutput;
    };
  };
}
