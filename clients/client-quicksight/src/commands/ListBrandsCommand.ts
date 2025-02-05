// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListBrandsRequest, ListBrandsResponse } from "../models/models_4";
import { de_ListBrandsCommand, se_ListBrandsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBrandsCommand}.
 */
export interface ListBrandsCommandInput extends ListBrandsRequest {}
/**
 * @public
 *
 * The output of {@link ListBrandsCommand}.
 */
export interface ListBrandsCommandOutput extends ListBrandsResponse, __MetadataBearer {}

/**
 * <p>Lists all brands in an Amazon QuickSight account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListBrandsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListBrandsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QuickSightClient(config);
 * const input = { // ListBrandsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBrandsCommand(input);
 * const response = await client.send(command);
 * // { // ListBrandsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Brands: [ // BrandSummaryList
 * //     { // BrandSummary
 * //       Arn: "STRING_VALUE",
 * //       BrandId: "STRING_VALUE",
 * //       BrandName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       BrandStatus: "CREATE_IN_PROGRESS" || "CREATE_SUCCEEDED" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBrandsCommandInput - {@link ListBrandsCommandInput}
 * @returns {@link ListBrandsCommandOutput}
 * @see {@link ListBrandsCommandInput} for command's `input` shape.
 * @see {@link ListBrandsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service exception.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class ListBrandsCommand extends $Command
  .classBuilder<
    ListBrandsCommandInput,
    ListBrandsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "ListBrands", {})
  .n("QuickSightClient", "ListBrandsCommand")
  .f(void 0, void 0)
  .ser(se_ListBrandsCommand)
  .de(de_ListBrandsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBrandsRequest;
      output: ListBrandsResponse;
    };
    sdk: {
      input: ListBrandsCommandInput;
      output: ListBrandsCommandOutput;
    };
  };
}
