// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHubContentRequest, DescribeHubContentResponse } from "../models/models_2";
import { de_DescribeHubContentCommand, se_DescribeHubContentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHubContentCommand}.
 */
export interface DescribeHubContentCommandInput extends DescribeHubContentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHubContentCommand}.
 */
export interface DescribeHubContentCommandOutput extends DescribeHubContentResponse, __MetadataBearer {}

/**
 * <p>Describe the content of a hub.</p>
 *          <note>
 *             <p>Hub APIs are only callable through SageMaker Studio.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeHubContentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeHubContentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeHubContentRequest
 *   HubName: "STRING_VALUE", // required
 *   HubContentType: "Model" || "Notebook", // required
 *   HubContentName: "STRING_VALUE", // required
 *   HubContentVersion: "STRING_VALUE",
 * };
 * const command = new DescribeHubContentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHubContentResponse
 * //   HubContentName: "STRING_VALUE", // required
 * //   HubContentArn: "STRING_VALUE", // required
 * //   HubContentVersion: "STRING_VALUE", // required
 * //   HubContentType: "Model" || "Notebook", // required
 * //   DocumentSchemaVersion: "STRING_VALUE", // required
 * //   HubName: "STRING_VALUE", // required
 * //   HubArn: "STRING_VALUE", // required
 * //   HubContentDisplayName: "STRING_VALUE",
 * //   HubContentDescription: "STRING_VALUE",
 * //   HubContentMarkdown: "STRING_VALUE",
 * //   HubContentDocument: "STRING_VALUE", // required
 * //   HubContentSearchKeywords: [ // HubContentSearchKeywordList
 * //     "STRING_VALUE",
 * //   ],
 * //   HubContentDependencies: [ // HubContentDependencyList
 * //     { // HubContentDependency
 * //       DependencyOriginPath: "STRING_VALUE",
 * //       DependencyCopyPath: "STRING_VALUE",
 * //     },
 * //   ],
 * //   HubContentStatus: "Available" || "Importing" || "Deleting" || "ImportFailed" || "DeleteFailed", // required
 * //   FailureReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeHubContentCommandInput - {@link DescribeHubContentCommandInput}
 * @returns {@link DescribeHubContentCommandOutput}
 * @see {@link DescribeHubContentCommandInput} for command's `input` shape.
 * @see {@link DescribeHubContentCommandOutput} for command's `response` shape.
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
export class DescribeHubContentCommand extends $Command
  .classBuilder<
    DescribeHubContentCommandInput,
    DescribeHubContentCommandOutput,
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
  .s("SageMaker", "DescribeHubContent", {})
  .n("SageMakerClient", "DescribeHubContentCommand")
  .f(void 0, void 0)
  .ser(se_DescribeHubContentCommand)
  .de(de_DescribeHubContentCommand)
  .build() {}
