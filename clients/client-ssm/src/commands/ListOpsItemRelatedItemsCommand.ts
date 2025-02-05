// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOpsItemRelatedItemsRequest, ListOpsItemRelatedItemsResponse } from "../models/models_1";
import { de_ListOpsItemRelatedItemsCommand, se_ListOpsItemRelatedItemsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOpsItemRelatedItemsCommand}.
 */
export interface ListOpsItemRelatedItemsCommandInput extends ListOpsItemRelatedItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListOpsItemRelatedItemsCommand}.
 */
export interface ListOpsItemRelatedItemsCommandOutput extends ListOpsItemRelatedItemsResponse, __MetadataBearer {}

/**
 * <p>Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a
 *    tool in Amazon Web Services Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsItemRelatedItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsItemRelatedItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // ListOpsItemRelatedItemsRequest
 *   OpsItemId: "STRING_VALUE",
 *   Filters: [ // OpsItemRelatedItemsFilters
 *     { // OpsItemRelatedItemsFilter
 *       Key: "ResourceType" || "AssociationId" || "ResourceUri", // required
 *       Values: [ // OpsItemRelatedItemsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "Equal", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOpsItemRelatedItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListOpsItemRelatedItemsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Summaries: [ // OpsItemRelatedItemSummaries
 * //     { // OpsItemRelatedItemSummary
 * //       OpsItemId: "STRING_VALUE",
 * //       AssociationId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       AssociationType: "STRING_VALUE",
 * //       ResourceUri: "STRING_VALUE",
 * //       CreatedBy: { // OpsItemIdentity
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedBy: {
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOpsItemRelatedItemsCommandInput - {@link ListOpsItemRelatedItemsCommandInput}
 * @returns {@link ListOpsItemRelatedItemsCommandOutput}
 * @see {@link ListOpsItemRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link ListOpsItemRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class ListOpsItemRelatedItemsCommand extends $Command
  .classBuilder<
    ListOpsItemRelatedItemsCommandInput,
    ListOpsItemRelatedItemsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "ListOpsItemRelatedItems", {})
  .n("SSMClient", "ListOpsItemRelatedItemsCommand")
  .f(void 0, void 0)
  .ser(se_ListOpsItemRelatedItemsCommand)
  .de(de_ListOpsItemRelatedItemsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOpsItemRelatedItemsRequest;
      output: ListOpsItemRelatedItemsResponse;
    };
    sdk: {
      input: ListOpsItemRelatedItemsCommandInput;
      output: ListOpsItemRelatedItemsCommandOutput;
    };
  };
}
