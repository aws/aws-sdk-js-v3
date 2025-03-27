// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListModelPackageGroupsInput, ListModelPackageGroupsOutput } from "../models/models_4";
import { de_ListModelPackageGroupsCommand, se_ListModelPackageGroupsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelPackageGroupsCommand}.
 */
export interface ListModelPackageGroupsCommandInput extends ListModelPackageGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListModelPackageGroupsCommand}.
 */
export interface ListModelPackageGroupsCommandOutput extends ListModelPackageGroupsOutput, __MetadataBearer {}

/**
 * <p>Gets a list of the model groups in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelPackageGroupsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelPackageGroupsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListModelPackageGroupsInput
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   CrossAccountFilterOption: "SameAccount" || "CrossAccount",
 * };
 * const command = new ListModelPackageGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelPackageGroupsOutput
 * //   ModelPackageGroupSummaryList: [ // ModelPackageGroupSummaryList // required
 * //     { // ModelPackageGroupSummary
 * //       ModelPackageGroupName: "STRING_VALUE", // required
 * //       ModelPackageGroupArn: "STRING_VALUE", // required
 * //       ModelPackageGroupDescription: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       ModelPackageGroupStatus: "Pending" || "InProgress" || "Completed" || "Failed" || "Deleting" || "DeleteFailed", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelPackageGroupsCommandInput - {@link ListModelPackageGroupsCommandInput}
 * @returns {@link ListModelPackageGroupsCommandOutput}
 * @see {@link ListModelPackageGroupsCommandInput} for command's `input` shape.
 * @see {@link ListModelPackageGroupsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListModelPackageGroupsCommand extends $Command
  .classBuilder<
    ListModelPackageGroupsCommandInput,
    ListModelPackageGroupsCommandOutput,
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
  .s("SageMaker", "ListModelPackageGroups", {})
  .n("SageMakerClient", "ListModelPackageGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListModelPackageGroupsCommand)
  .de(de_ListModelPackageGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelPackageGroupsInput;
      output: ListModelPackageGroupsOutput;
    };
    sdk: {
      input: ListModelPackageGroupsCommandInput;
      output: ListModelPackageGroupsCommandOutput;
    };
  };
}
