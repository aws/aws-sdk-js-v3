// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListNotebookInstanceLifecycleConfigsInput,
  ListNotebookInstanceLifecycleConfigsOutput,
} from "../models/models_4";
import {
  de_ListNotebookInstanceLifecycleConfigsCommand,
  se_ListNotebookInstanceLifecycleConfigsCommand,
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
 * The input for {@link ListNotebookInstanceLifecycleConfigsCommand}.
 */
export interface ListNotebookInstanceLifecycleConfigsCommandInput extends ListNotebookInstanceLifecycleConfigsInput {}
/**
 * @public
 *
 * The output of {@link ListNotebookInstanceLifecycleConfigsCommand}.
 */
export interface ListNotebookInstanceLifecycleConfigsCommandOutput
  extends ListNotebookInstanceLifecycleConfigsOutput,
    __MetadataBearer {}

/**
 * <p>Lists notebook instance lifestyle configurations created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateNotebookInstanceLifecycleConfig.html">CreateNotebookInstanceLifecycleConfig</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListNotebookInstanceLifecycleConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListNotebookInstanceLifecycleConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListNotebookInstanceLifecycleConfigsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortBy: "Name" || "CreationTime" || "LastModifiedTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 * };
 * const command = new ListNotebookInstanceLifecycleConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotebookInstanceLifecycleConfigsOutput
 * //   NextToken: "STRING_VALUE",
 * //   NotebookInstanceLifecycleConfigs: [ // NotebookInstanceLifecycleConfigSummaryList
 * //     { // NotebookInstanceLifecycleConfigSummary
 * //       NotebookInstanceLifecycleConfigName: "STRING_VALUE", // required
 * //       NotebookInstanceLifecycleConfigArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListNotebookInstanceLifecycleConfigsCommandInput - {@link ListNotebookInstanceLifecycleConfigsCommandInput}
 * @returns {@link ListNotebookInstanceLifecycleConfigsCommandOutput}
 * @see {@link ListNotebookInstanceLifecycleConfigsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookInstanceLifecycleConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListNotebookInstanceLifecycleConfigsCommand extends $Command
  .classBuilder<
    ListNotebookInstanceLifecycleConfigsCommandInput,
    ListNotebookInstanceLifecycleConfigsCommandOutput,
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
  .s("SageMaker", "ListNotebookInstanceLifecycleConfigs", {})
  .n("SageMakerClient", "ListNotebookInstanceLifecycleConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListNotebookInstanceLifecycleConfigsCommand)
  .de(de_ListNotebookInstanceLifecycleConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotebookInstanceLifecycleConfigsInput;
      output: ListNotebookInstanceLifecycleConfigsOutput;
    };
    sdk: {
      input: ListNotebookInstanceLifecycleConfigsCommandInput;
      output: ListNotebookInstanceLifecycleConfigsCommandOutput;
    };
  };
}
