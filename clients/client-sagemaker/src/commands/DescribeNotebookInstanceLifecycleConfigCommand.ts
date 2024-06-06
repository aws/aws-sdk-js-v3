// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeNotebookInstanceLifecycleConfigInput,
  DescribeNotebookInstanceLifecycleConfigOutput,
} from "../models/models_2";
import {
  de_DescribeNotebookInstanceLifecycleConfigCommand,
  se_DescribeNotebookInstanceLifecycleConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotebookInstanceLifecycleConfigCommand}.
 */
export interface DescribeNotebookInstanceLifecycleConfigCommandInput
  extends DescribeNotebookInstanceLifecycleConfigInput {}
/**
 * @public
 *
 * The output of {@link DescribeNotebookInstanceLifecycleConfigCommand}.
 */
export interface DescribeNotebookInstanceLifecycleConfigCommandOutput
  extends DescribeNotebookInstanceLifecycleConfigOutput,
    __MetadataBearer {}

/**
 * <p>Returns a description of a notebook instance lifecycle configuration.</p>
 *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *          2.1: (Optional) Customize a Notebook Instance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeNotebookInstanceLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeNotebookInstanceLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeNotebookInstanceLifecycleConfigInput
 *   NotebookInstanceLifecycleConfigName: "STRING_VALUE", // required
 * };
 * const command = new DescribeNotebookInstanceLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotebookInstanceLifecycleConfigOutput
 * //   NotebookInstanceLifecycleConfigArn: "STRING_VALUE",
 * //   NotebookInstanceLifecycleConfigName: "STRING_VALUE",
 * //   OnCreate: [ // NotebookInstanceLifecycleConfigList
 * //     { // NotebookInstanceLifecycleHook
 * //       Content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   OnStart: [
 * //     {
 * //       Content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeNotebookInstanceLifecycleConfigCommandInput - {@link DescribeNotebookInstanceLifecycleConfigCommandInput}
 * @returns {@link DescribeNotebookInstanceLifecycleConfigCommandOutput}
 * @see {@link DescribeNotebookInstanceLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookInstanceLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DescribeNotebookInstanceLifecycleConfigCommand extends $Command
  .classBuilder<
    DescribeNotebookInstanceLifecycleConfigCommandInput,
    DescribeNotebookInstanceLifecycleConfigCommandOutput,
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
  .s("SageMaker", "DescribeNotebookInstanceLifecycleConfig", {})
  .n("SageMakerClient", "DescribeNotebookInstanceLifecycleConfigCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNotebookInstanceLifecycleConfigCommand)
  .de(de_DescribeNotebookInstanceLifecycleConfigCommand)
  .build() {}
