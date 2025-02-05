// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListClusterSchedulerConfigsRequest, ListClusterSchedulerConfigsResponse } from "../models/models_3";
import { de_ListClusterSchedulerConfigsCommand, se_ListClusterSchedulerConfigsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClusterSchedulerConfigsCommand}.
 */
export interface ListClusterSchedulerConfigsCommandInput extends ListClusterSchedulerConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterSchedulerConfigsCommand}.
 */
export interface ListClusterSchedulerConfigsCommandOutput
  extends ListClusterSchedulerConfigsResponse,
    __MetadataBearer {}

/**
 * <p>List the cluster policy configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListClusterSchedulerConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListClusterSchedulerConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // ListClusterSchedulerConfigsRequest
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   ClusterArn: "STRING_VALUE",
 *   Status: "Creating" || "CreateFailed" || "CreateRollbackFailed" || "Created" || "Updating" || "UpdateFailed" || "UpdateRollbackFailed" || "Updated" || "Deleting" || "DeleteFailed" || "DeleteRollbackFailed" || "Deleted",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListClusterSchedulerConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterSchedulerConfigsResponse
 * //   ClusterSchedulerConfigSummaries: [ // ClusterSchedulerConfigSummaryList
 * //     { // ClusterSchedulerConfigSummary
 * //       ClusterSchedulerConfigArn: "STRING_VALUE", // required
 * //       ClusterSchedulerConfigId: "STRING_VALUE", // required
 * //       ClusterSchedulerConfigVersion: Number("int"),
 * //       Name: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       Status: "Creating" || "CreateFailed" || "CreateRollbackFailed" || "Created" || "Updating" || "UpdateFailed" || "UpdateRollbackFailed" || "Updated" || "Deleting" || "DeleteFailed" || "DeleteRollbackFailed" || "Deleted", // required
 * //       ClusterArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClusterSchedulerConfigsCommandInput - {@link ListClusterSchedulerConfigsCommandInput}
 * @returns {@link ListClusterSchedulerConfigsCommandOutput}
 * @see {@link ListClusterSchedulerConfigsCommandInput} for command's `input` shape.
 * @see {@link ListClusterSchedulerConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListClusterSchedulerConfigsCommand extends $Command
  .classBuilder<
    ListClusterSchedulerConfigsCommandInput,
    ListClusterSchedulerConfigsCommandOutput,
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
  .s("SageMaker", "ListClusterSchedulerConfigs", {})
  .n("SageMakerClient", "ListClusterSchedulerConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListClusterSchedulerConfigsCommand)
  .de(de_ListClusterSchedulerConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClusterSchedulerConfigsRequest;
      output: ListClusterSchedulerConfigsResponse;
    };
    sdk: {
      input: ListClusterSchedulerConfigsCommandInput;
      output: ListClusterSchedulerConfigsCommandOutput;
    };
  };
}
