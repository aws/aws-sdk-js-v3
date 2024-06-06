// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListProjectsInput, ListProjectsOutput } from "../models/models_4";
import { de_ListProjectsCommand, se_ListProjectsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProjectsCommand}.
 */
export interface ListProjectsCommandInput extends ListProjectsInput {}
/**
 * @public
 *
 * The output of {@link ListProjectsCommand}.
 */
export interface ListProjectsCommandOutput extends ListProjectsOutput, __MetadataBearer {}

/**
 * <p>Gets a list of the projects in an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListProjectsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListProjectsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListProjectsInput
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListProjectsOutput
 * //   ProjectSummaryList: [ // ProjectSummaryList // required
 * //     { // ProjectSummary
 * //       ProjectName: "STRING_VALUE", // required
 * //       ProjectDescription: "STRING_VALUE",
 * //       ProjectArn: "STRING_VALUE", // required
 * //       ProjectId: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       ProjectStatus: "Pending" || "CreateInProgress" || "CreateCompleted" || "CreateFailed" || "DeleteInProgress" || "DeleteFailed" || "DeleteCompleted" || "UpdateInProgress" || "UpdateCompleted" || "UpdateFailed", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProjectsCommandInput - {@link ListProjectsCommandInput}
 * @returns {@link ListProjectsCommandOutput}
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListProjectsCommand extends $Command
  .classBuilder<
    ListProjectsCommandInput,
    ListProjectsCommandOutput,
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
  .s("SageMaker", "ListProjects", {})
  .n("SageMakerClient", "ListProjectsCommand")
  .f(void 0, void 0)
  .ser(se_ListProjectsCommand)
  .de(de_ListProjectsCommand)
  .build() {}
