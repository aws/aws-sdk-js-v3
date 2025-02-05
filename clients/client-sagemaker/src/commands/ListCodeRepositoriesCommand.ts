// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCodeRepositoriesInput, ListCodeRepositoriesOutput } from "../models/models_3";
import { de_ListCodeRepositoriesCommand, se_ListCodeRepositoriesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCodeRepositoriesCommand}.
 */
export interface ListCodeRepositoriesCommandInput extends ListCodeRepositoriesInput {}
/**
 * @public
 *
 * The output of {@link ListCodeRepositoriesCommand}.
 */
export interface ListCodeRepositoriesCommandOutput extends ListCodeRepositoriesOutput, __MetadataBearer {}

/**
 * <p>Gets a list of the Git repositories in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListCodeRepositoriesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListCodeRepositoriesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // ListCodeRepositoriesInput
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime" || "LastModifiedTime",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListCodeRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeRepositoriesOutput
 * //   CodeRepositorySummaryList: [ // CodeRepositorySummaryList // required
 * //     { // CodeRepositorySummary
 * //       CodeRepositoryName: "STRING_VALUE", // required
 * //       CodeRepositoryArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       GitConfig: { // GitConfig
 * //         RepositoryUrl: "STRING_VALUE", // required
 * //         Branch: "STRING_VALUE",
 * //         SecretArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCodeRepositoriesCommandInput - {@link ListCodeRepositoriesCommandInput}
 * @returns {@link ListCodeRepositoriesCommandOutput}
 * @see {@link ListCodeRepositoriesCommandInput} for command's `input` shape.
 * @see {@link ListCodeRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListCodeRepositoriesCommand extends $Command
  .classBuilder<
    ListCodeRepositoriesCommandInput,
    ListCodeRepositoriesCommandOutput,
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
  .s("SageMaker", "ListCodeRepositories", {})
  .n("SageMakerClient", "ListCodeRepositoriesCommand")
  .f(void 0, void 0)
  .ser(se_ListCodeRepositoriesCommand)
  .de(de_ListCodeRepositoriesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCodeRepositoriesInput;
      output: ListCodeRepositoriesOutput;
    };
    sdk: {
      input: ListCodeRepositoriesCommandInput;
      output: ListCodeRepositoriesCommandOutput;
    };
  };
}
