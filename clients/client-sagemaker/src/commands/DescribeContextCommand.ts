// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeContextRequest, DescribeContextResponse } from "../models/models_2";
import { de_DescribeContextCommand, se_DescribeContextCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContextCommand}.
 */
export interface DescribeContextCommandInput extends DescribeContextRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContextCommand}.
 */
export interface DescribeContextCommandOutput extends DescribeContextResponse, __MetadataBearer {}

/**
 * <p>Describes a context.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeContextRequest
 *   ContextName: "STRING_VALUE", // required
 * };
 * const command = new DescribeContextCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContextResponse
 * //   ContextName: "STRING_VALUE",
 * //   ContextArn: "STRING_VALUE",
 * //   Source: { // ContextSource
 * //     SourceUri: "STRING_VALUE", // required
 * //     SourceType: "STRING_VALUE",
 * //     SourceId: "STRING_VALUE",
 * //   },
 * //   ContextType: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
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
 * //   LineageGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeContextCommandInput - {@link DescribeContextCommandInput}
 * @returns {@link DescribeContextCommandOutput}
 * @see {@link DescribeContextCommandInput} for command's `input` shape.
 * @see {@link DescribeContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DescribeContextCommand extends $Command
  .classBuilder<
    DescribeContextCommandInput,
    DescribeContextCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeContext", {})
  .n("SageMakerClient", "DescribeContextCommand")
  .f(void 0, void 0)
  .ser(se_DescribeContextCommand)
  .de(de_DescribeContextCommand)
  .build() {}
