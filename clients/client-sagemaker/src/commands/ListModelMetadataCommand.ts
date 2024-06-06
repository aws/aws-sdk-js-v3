// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListModelMetadataRequest, ListModelMetadataResponse } from "../models/models_3";
import { de_ListModelMetadataCommand, se_ListModelMetadataCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelMetadataCommand}.
 */
export interface ListModelMetadataCommandInput extends ListModelMetadataRequest {}
/**
 * @public
 *
 * The output of {@link ListModelMetadataCommand}.
 */
export interface ListModelMetadataCommandOutput extends ListModelMetadataResponse, __MetadataBearer {}

/**
 * <p>Lists the domain, framework, task, and model name of standard
 *           machine learning models found in common model zoos.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelMetadataCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelMetadataCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListModelMetadataRequest
 *   SearchExpression: { // ModelMetadataSearchExpression
 *     Filters: [ // ModelMetadataFilters
 *       { // ModelMetadataFilter
 *         Name: "Domain" || "Framework" || "Task" || "FrameworkVersion", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListModelMetadataCommand(input);
 * const response = await client.send(command);
 * // { // ListModelMetadataResponse
 * //   ModelMetadataSummaries: [ // ModelMetadataSummaries // required
 * //     { // ModelMetadataSummary
 * //       Domain: "STRING_VALUE", // required
 * //       Framework: "STRING_VALUE", // required
 * //       Task: "STRING_VALUE", // required
 * //       Model: "STRING_VALUE", // required
 * //       FrameworkVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelMetadataCommandInput - {@link ListModelMetadataCommandInput}
 * @returns {@link ListModelMetadataCommandOutput}
 * @see {@link ListModelMetadataCommandInput} for command's `input` shape.
 * @see {@link ListModelMetadataCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListModelMetadataCommand extends $Command
  .classBuilder<
    ListModelMetadataCommandInput,
    ListModelMetadataCommandOutput,
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
  .s("SageMaker", "ListModelMetadata", {})
  .n("SageMakerClient", "ListModelMetadataCommand")
  .f(void 0, void 0)
  .ser(se_ListModelMetadataCommand)
  .de(de_ListModelMetadataCommand)
  .build() {}
