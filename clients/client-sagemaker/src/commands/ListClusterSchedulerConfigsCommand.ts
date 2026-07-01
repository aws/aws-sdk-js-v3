// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListClusterSchedulerConfigsRequest, ListClusterSchedulerConfigsResponse } from "../models/models_3";
import { ListClusterSchedulerConfigs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListClusterSchedulerConfigsCommandOutput extends ListClusterSchedulerConfigsResponse, __MetadataBearer {}

/**
 * <p>List the cluster policy configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListClusterSchedulerConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListClusterSchedulerConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
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
 *
 * @public
 */
export class ListClusterSchedulerConfigsCommand extends command<ListClusterSchedulerConfigsCommandInput, ListClusterSchedulerConfigsCommandOutput>(
  _ep0,
  _mw0,
  "ListClusterSchedulerConfigs",
  ListClusterSchedulerConfigs$
) {
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
