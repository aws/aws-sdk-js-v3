// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListHubContentsRequest, ListHubContentsResponse } from "../models/models_3";
import { de_ListHubContentsCommand, se_ListHubContentsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHubContentsCommand}.
 */
export interface ListHubContentsCommandInput extends ListHubContentsRequest {}
/**
 * @public
 *
 * The output of {@link ListHubContentsCommand}.
 */
export interface ListHubContentsCommandOutput extends ListHubContentsResponse, __MetadataBearer {}

/**
 * <p>List the contents of a hub.</p>
 *          <note>
 *             <p>Hub APIs are only callable through SageMaker Studio.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHubContentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHubContentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListHubContentsRequest
 *   HubName: "STRING_VALUE", // required
 *   HubContentType: "Model" || "Notebook", // required
 *   NameContains: "STRING_VALUE",
 *   MaxSchemaVersion: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   SortBy: "HubContentName" || "CreationTime" || "HubContentStatus",
 *   SortOrder: "Ascending" || "Descending",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHubContentsCommand(input);
 * const response = await client.send(command);
 * // { // ListHubContentsResponse
 * //   HubContentSummaries: [ // HubContentInfoList // required
 * //     { // HubContentInfo
 * //       HubContentName: "STRING_VALUE", // required
 * //       HubContentArn: "STRING_VALUE", // required
 * //       HubContentVersion: "STRING_VALUE", // required
 * //       HubContentType: "Model" || "Notebook", // required
 * //       DocumentSchemaVersion: "STRING_VALUE", // required
 * //       HubContentDisplayName: "STRING_VALUE",
 * //       HubContentDescription: "STRING_VALUE",
 * //       HubContentSearchKeywords: [ // HubContentSearchKeywordList
 * //         "STRING_VALUE",
 * //       ],
 * //       HubContentStatus: "Available" || "Importing" || "Deleting" || "ImportFailed" || "DeleteFailed", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHubContentsCommandInput - {@link ListHubContentsCommandInput}
 * @returns {@link ListHubContentsCommandOutput}
 * @see {@link ListHubContentsCommandInput} for command's `input` shape.
 * @see {@link ListHubContentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListHubContentsCommand extends $Command
  .classBuilder<
    ListHubContentsCommandInput,
    ListHubContentsCommandOutput,
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
  .s("SageMaker", "ListHubContents", {})
  .n("SageMakerClient", "ListHubContentsCommand")
  .f(void 0, void 0)
  .ser(se_ListHubContentsCommand)
  .de(de_ListHubContentsCommand)
  .build() {}
