// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListHubsRequest, ListHubsResponse } from "../models/models_4";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListHubs } from "../schemas/schemas_31_Hub";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHubsCommand}.
 */
export interface ListHubsCommandInput extends ListHubsRequest {}
/**
 * @public
 *
 * The output of {@link ListHubsCommand}.
 */
export interface ListHubsCommandOutput extends ListHubsResponse, __MetadataBearer {}

/**
 * <p>List all existing hubs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHubsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHubsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListHubsRequest
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   SortBy: "HubName" || "CreationTime" || "HubStatus" || "AccountIdOwner",
 *   SortOrder: "Ascending" || "Descending",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHubsCommand(input);
 * const response = await client.send(command);
 * // { // ListHubsResponse
 * //   HubSummaries: [ // HubInfoList // required
 * //     { // HubInfo
 * //       HubName: "STRING_VALUE", // required
 * //       HubArn: "STRING_VALUE", // required
 * //       HubDisplayName: "STRING_VALUE",
 * //       HubDescription: "STRING_VALUE",
 * //       HubSearchKeywords: [ // HubSearchKeywordList
 * //         "STRING_VALUE",
 * //       ],
 * //       HubStatus: "InService" || "Creating" || "Updating" || "Deleting" || "CreateFailed" || "UpdateFailed" || "DeleteFailed", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHubsCommandInput - {@link ListHubsCommandInput}
 * @returns {@link ListHubsCommandOutput}
 * @see {@link ListHubsCommandInput} for command's `input` shape.
 * @see {@link ListHubsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListHubsCommand extends $Command
  .classBuilder<
    ListHubsCommandInput,
    ListHubsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListHubs", {})
  .n("SageMakerClient", "ListHubsCommand")
  .sc(ListHubs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHubsRequest;
      output: ListHubsResponse;
    };
    sdk: {
      input: ListHubsCommandInput;
      output: ListHubsCommandOutput;
    };
  };
}
