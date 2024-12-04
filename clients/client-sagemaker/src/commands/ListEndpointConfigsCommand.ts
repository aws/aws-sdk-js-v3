// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListEndpointConfigsInput, ListEndpointConfigsOutput } from "../models/models_4";
import { de_ListEndpointConfigsCommand, se_ListEndpointConfigsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEndpointConfigsCommand}.
 */
export interface ListEndpointConfigsCommandInput extends ListEndpointConfigsInput {}
/**
 * @public
 *
 * The output of {@link ListEndpointConfigsCommand}.
 */
export interface ListEndpointConfigsCommandOutput extends ListEndpointConfigsOutput, __MetadataBearer {}

/**
 * <p>Lists endpoint configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListEndpointConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListEndpointConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListEndpointConfigsInput
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 * };
 * const command = new ListEndpointConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListEndpointConfigsOutput
 * //   EndpointConfigs: [ // EndpointConfigSummaryList // required
 * //     { // EndpointConfigSummary
 * //       EndpointConfigName: "STRING_VALUE", // required
 * //       EndpointConfigArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEndpointConfigsCommandInput - {@link ListEndpointConfigsCommandInput}
 * @returns {@link ListEndpointConfigsCommandOutput}
 * @see {@link ListEndpointConfigsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListEndpointConfigsCommand extends $Command
  .classBuilder<
    ListEndpointConfigsCommandInput,
    ListEndpointConfigsCommandOutput,
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
  .s("SageMaker", "ListEndpointConfigs", {})
  .n("SageMakerClient", "ListEndpointConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListEndpointConfigsCommand)
  .de(de_ListEndpointConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEndpointConfigsInput;
      output: ListEndpointConfigsOutput;
    };
    sdk: {
      input: ListEndpointConfigsCommandInput;
      output: ListEndpointConfigsCommandOutput;
    };
  };
}
