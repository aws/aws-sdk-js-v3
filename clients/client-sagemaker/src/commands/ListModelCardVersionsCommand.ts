// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListModelCardVersionsRequest, ListModelCardVersionsResponse } from "../models/models_3";
import { de_ListModelCardVersionsCommand, se_ListModelCardVersionsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelCardVersionsCommand}.
 */
export interface ListModelCardVersionsCommandInput extends ListModelCardVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelCardVersionsCommand}.
 */
export interface ListModelCardVersionsCommandOutput extends ListModelCardVersionsResponse, __MetadataBearer {}

/**
 * <p>List existing versions of an Amazon SageMaker Model Card.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelCardVersionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelCardVersionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListModelCardVersionsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   ModelCardName: "STRING_VALUE", // required
 *   ModelCardStatus: "Draft" || "PendingReview" || "Approved" || "Archived",
 *   NextToken: "STRING_VALUE",
 *   SortBy: "Version",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListModelCardVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelCardVersionsResponse
 * //   ModelCardVersionSummaryList: [ // ModelCardVersionSummaryList // required
 * //     { // ModelCardVersionSummary
 * //       ModelCardName: "STRING_VALUE", // required
 * //       ModelCardArn: "STRING_VALUE", // required
 * //       ModelCardStatus: "Draft" || "PendingReview" || "Approved" || "Archived", // required
 * //       ModelCardVersion: Number("int"), // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelCardVersionsCommandInput - {@link ListModelCardVersionsCommandInput}
 * @returns {@link ListModelCardVersionsCommandOutput}
 * @see {@link ListModelCardVersionsCommandInput} for command's `input` shape.
 * @see {@link ListModelCardVersionsCommandOutput} for command's `response` shape.
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
export class ListModelCardVersionsCommand extends $Command
  .classBuilder<
    ListModelCardVersionsCommandInput,
    ListModelCardVersionsCommandOutput,
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
  .s("SageMaker", "ListModelCardVersions", {})
  .n("SageMakerClient", "ListModelCardVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListModelCardVersionsCommand)
  .de(de_ListModelCardVersionsCommand)
  .build() {}
