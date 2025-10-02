// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListHumanTaskUisRequest, ListHumanTaskUisResponse } from "../models/models_4";
import { de_ListHumanTaskUisCommand, se_ListHumanTaskUisCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHumanTaskUisCommand}.
 */
export interface ListHumanTaskUisCommandInput extends ListHumanTaskUisRequest {}
/**
 * @public
 *
 * The output of {@link ListHumanTaskUisCommand}.
 */
export interface ListHumanTaskUisCommandOutput extends ListHumanTaskUisResponse, __MetadataBearer {}

/**
 * <p>Returns information about the human task user interfaces in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHumanTaskUisCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHumanTaskUisCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListHumanTaskUisRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHumanTaskUisCommand(input);
 * const response = await client.send(command);
 * // { // ListHumanTaskUisResponse
 * //   HumanTaskUiSummaries: [ // HumanTaskUiSummaries // required
 * //     { // HumanTaskUiSummary
 * //       HumanTaskUiName: "STRING_VALUE", // required
 * //       HumanTaskUiArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHumanTaskUisCommandInput - {@link ListHumanTaskUisCommandInput}
 * @returns {@link ListHumanTaskUisCommandOutput}
 * @see {@link ListHumanTaskUisCommandInput} for command's `input` shape.
 * @see {@link ListHumanTaskUisCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListHumanTaskUisCommand extends $Command
  .classBuilder<
    ListHumanTaskUisCommandInput,
    ListHumanTaskUisCommandOutput,
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
  .s("SageMaker", "ListHumanTaskUis", {})
  .n("SageMakerClient", "ListHumanTaskUisCommand")
  .f(void 0, void 0)
  .ser(se_ListHumanTaskUisCommand)
  .de(de_ListHumanTaskUisCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHumanTaskUisRequest;
      output: ListHumanTaskUisResponse;
    };
    sdk: {
      input: ListHumanTaskUisCommandInput;
      output: ListHumanTaskUisCommandOutput;
    };
  };
}
