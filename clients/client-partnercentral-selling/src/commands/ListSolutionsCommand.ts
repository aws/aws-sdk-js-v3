// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSolutionsRequest, ListSolutionsResponse } from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { ListSolutions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolutionsCommand}.
 */
export interface ListSolutionsCommandInput extends ListSolutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSolutionsCommand}.
 */
export interface ListSolutionsCommandOutput extends ListSolutionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of Partner Solutions that the partner registered on Partner Central. This API is used to generate a list of solutions that an end user selects from for association with an opportunity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListSolutionsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListSolutionsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListSolutionsRequest
 *   Catalog: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Sort: { // SolutionSort
 *     SortOrder: "ASCENDING" || "DESCENDING", // required
 *     SortBy: "Identifier" || "Name" || "Status" || "Category" || "CreatedDate", // required
 *   },
 *   Status: [ // FilterStatus
 *     "Active" || "Inactive" || "Draft",
 *   ],
 *   Identifier: [ // SolutionIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   Category: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListSolutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSolutionsResponse
 * //   SolutionSummaries: [ // SolutionList // required
 * //     { // SolutionBase
 * //       Catalog: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       Status: "Active" || "Inactive" || "Draft", // required
 * //       Category: "STRING_VALUE", // required
 * //       CreatedDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSolutionsCommandInput - {@link ListSolutionsCommandInput}
 * @returns {@link ListSolutionsCommandOutput}
 * @see {@link ListSolutionsCommandInput} for command's `input` shape.
 * @see {@link ListSolutionsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.</p> <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @public
 */
export class ListSolutionsCommand extends $Command
  .classBuilder<
    ListSolutionsCommandInput,
    ListSolutionsCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPartnerCentralSelling", "ListSolutions", {})
  .n("PartnerCentralSellingClient", "ListSolutionsCommand")
  .sc(ListSolutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolutionsRequest;
      output: ListSolutionsResponse;
    };
    sdk: {
      input: ListSolutionsCommandInput;
      output: ListSolutionsCommandOutput;
    };
  };
}
