// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHumanTaskUiRequest, DescribeHumanTaskUiResponse } from "../models/models_3";
import { de_DescribeHumanTaskUiCommand, se_DescribeHumanTaskUiCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHumanTaskUiCommand}.
 */
export interface DescribeHumanTaskUiCommandInput extends DescribeHumanTaskUiRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHumanTaskUiCommand}.
 */
export interface DescribeHumanTaskUiCommandOutput extends DescribeHumanTaskUiResponse, __MetadataBearer {}

/**
 * <p>Returns information about the requested human task user interface (worker task template).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeHumanTaskUiRequest
 *   HumanTaskUiName: "STRING_VALUE", // required
 * };
 * const command = new DescribeHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHumanTaskUiResponse
 * //   HumanTaskUiArn: "STRING_VALUE", // required
 * //   HumanTaskUiName: "STRING_VALUE", // required
 * //   HumanTaskUiStatus: "Active" || "Deleting",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   UiTemplate: { // UiTemplateInfo
 * //     Url: "STRING_VALUE",
 * //     ContentSha256: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeHumanTaskUiCommandInput - {@link DescribeHumanTaskUiCommandInput}
 * @returns {@link DescribeHumanTaskUiCommandOutput}
 * @see {@link DescribeHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link DescribeHumanTaskUiCommandOutput} for command's `response` shape.
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
export class DescribeHumanTaskUiCommand extends $Command
  .classBuilder<
    DescribeHumanTaskUiCommandInput,
    DescribeHumanTaskUiCommandOutput,
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
  .s("SageMaker", "DescribeHumanTaskUi", {})
  .n("SageMakerClient", "DescribeHumanTaskUiCommand")
  .f(void 0, void 0)
  .ser(se_DescribeHumanTaskUiCommand)
  .de(de_DescribeHumanTaskUiCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHumanTaskUiRequest;
      output: DescribeHumanTaskUiResponse;
    };
    sdk: {
      input: DescribeHumanTaskUiCommandInput;
      output: DescribeHumanTaskUiCommandOutput;
    };
  };
}
