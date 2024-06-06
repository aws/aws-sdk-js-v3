// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHubRequest, DescribeHubResponse } from "../models/models_2";
import { de_DescribeHubCommand, se_DescribeHubCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHubCommand}.
 */
export interface DescribeHubCommandInput extends DescribeHubRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHubCommand}.
 */
export interface DescribeHubCommandOutput extends DescribeHubResponse, __MetadataBearer {}

/**
 * <p>Describe a hub.</p>
 *          <note>
 *             <p>Hub APIs are only callable through SageMaker Studio.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeHubCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeHubCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeHubRequest
 *   HubName: "STRING_VALUE", // required
 * };
 * const command = new DescribeHubCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHubResponse
 * //   HubName: "STRING_VALUE", // required
 * //   HubArn: "STRING_VALUE", // required
 * //   HubDisplayName: "STRING_VALUE",
 * //   HubDescription: "STRING_VALUE",
 * //   HubSearchKeywords: [ // HubSearchKeywordList
 * //     "STRING_VALUE",
 * //   ],
 * //   S3StorageConfig: { // HubS3StorageConfig
 * //     S3OutputPath: "STRING_VALUE",
 * //   },
 * //   HubStatus: "InService" || "Creating" || "Updating" || "Deleting" || "CreateFailed" || "UpdateFailed" || "DeleteFailed", // required
 * //   FailureReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeHubCommandInput - {@link DescribeHubCommandInput}
 * @returns {@link DescribeHubCommandOutput}
 * @see {@link DescribeHubCommandInput} for command's `input` shape.
 * @see {@link DescribeHubCommandOutput} for command's `response` shape.
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
export class DescribeHubCommand extends $Command
  .classBuilder<
    DescribeHubCommandInput,
    DescribeHubCommandOutput,
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
  .s("SageMaker", "DescribeHub", {})
  .n("SageMakerClient", "DescribeHubCommand")
  .f(void 0, void 0)
  .ser(se_DescribeHubCommand)
  .de(de_DescribeHubCommand)
  .build() {}
