// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFeatureGroupsRequest, ListFeatureGroupsResponse } from "../models/models_4";
import { de_ListFeatureGroupsCommand, se_ListFeatureGroupsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFeatureGroupsCommand}.
 */
export interface ListFeatureGroupsCommandInput extends ListFeatureGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListFeatureGroupsCommand}.
 */
export interface ListFeatureGroupsCommandOutput extends ListFeatureGroupsResponse, __MetadataBearer {}

/**
 * <p>List <code>FeatureGroup</code>s based on given filter and order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListFeatureGroupsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListFeatureGroupsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListFeatureGroupsRequest
 *   NameContains: "STRING_VALUE",
 *   FeatureGroupStatusEquals: "Creating" || "Created" || "CreateFailed" || "Deleting" || "DeleteFailed",
 *   OfflineStoreStatusEquals: "Active" || "Blocked" || "Disabled",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortOrder: "Ascending" || "Descending",
 *   SortBy: "Name" || "FeatureGroupStatus" || "OfflineStoreStatus" || "CreationTime",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFeatureGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListFeatureGroupsResponse
 * //   FeatureGroupSummaries: [ // FeatureGroupSummaries // required
 * //     { // FeatureGroupSummary
 * //       FeatureGroupName: "STRING_VALUE", // required
 * //       FeatureGroupArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       FeatureGroupStatus: "Creating" || "Created" || "CreateFailed" || "Deleting" || "DeleteFailed",
 * //       OfflineStoreStatus: { // OfflineStoreStatus
 * //         Status: "Active" || "Blocked" || "Disabled", // required
 * //         BlockedReason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFeatureGroupsCommandInput - {@link ListFeatureGroupsCommandInput}
 * @returns {@link ListFeatureGroupsCommandOutput}
 * @see {@link ListFeatureGroupsCommandInput} for command's `input` shape.
 * @see {@link ListFeatureGroupsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListFeatureGroupsCommand extends $Command
  .classBuilder<
    ListFeatureGroupsCommandInput,
    ListFeatureGroupsCommandOutput,
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
  .s("SageMaker", "ListFeatureGroups", {})
  .n("SageMakerClient", "ListFeatureGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListFeatureGroupsCommand)
  .de(de_ListFeatureGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFeatureGroupsRequest;
      output: ListFeatureGroupsResponse;
    };
    sdk: {
      input: ListFeatureGroupsCommandInput;
      output: ListFeatureGroupsCommandOutput;
    };
  };
}
