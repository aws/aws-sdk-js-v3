// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ControlCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ControlCatalogClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCommonControlsRequest, ListCommonControlsResponse } from "../models/models_0";
import { ListCommonControls } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCommonControlsCommand}.
 */
export interface ListCommonControlsCommandInput extends ListCommonControlsRequest {}
/**
 * @public
 *
 * The output of {@link ListCommonControlsCommand}.
 */
export interface ListCommonControlsCommandOutput extends ListCommonControlsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of common controls from the Amazon Web Services Control Catalog.</p> <p>You can apply an optional filter to see common controls that have a specific objective. If you don’t provide a filter, the operation returns all common controls. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlCatalogClient, ListCommonControlsCommand } from "@aws-sdk/client-controlcatalog"; // ES Modules import
 * // const { ControlCatalogClient, ListCommonControlsCommand } = require("@aws-sdk/client-controlcatalog"); // CommonJS import
 * // import type { ControlCatalogClientConfig } from "@aws-sdk/client-controlcatalog";
 * const config = {}; // type is ControlCatalogClientConfig
 * const client = new ControlCatalogClient(config);
 * const input = { // ListCommonControlsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   CommonControlFilter: { // CommonControlFilter
 *     Objectives: [ // ObjectiveResourceFilterList
 *       { // ObjectiveResourceFilter
 *         Arn: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new ListCommonControlsCommand(input);
 * const response = await client.send(command);
 * // { // ListCommonControlsResponse
 * //   CommonControls: [ // CommonControlSummaryList // required
 * //     { // CommonControlSummary
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       Domain: { // AssociatedDomainSummary
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //       Objective: { // AssociatedObjectiveSummary
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       LastUpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCommonControlsCommandInput - {@link ListCommonControlsCommandInput}
 * @returns {@link ListCommonControlsCommandOutput}
 * @see {@link ListCommonControlsCommandInput} for command's `input` shape.
 * @see {@link ListCommonControlsCommandOutput} for command's `response` shape.
 * @see {@link ControlCatalogClientResolvedConfig | config} for ControlCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link ControlCatalogServiceException}
 * <p>Base exception class for all service exceptions from ControlCatalog service.</p>
 *
 *
 * @public
 */
export class ListCommonControlsCommand extends $Command
  .classBuilder<
    ListCommonControlsCommandInput,
    ListCommonControlsCommandOutput,
    ControlCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ControlCatalog", "ListCommonControls", {})
  .n("ControlCatalogClient", "ListCommonControlsCommand")
  .sc(ListCommonControls)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCommonControlsRequest;
      output: ListCommonControlsResponse;
    };
    sdk: {
      input: ListCommonControlsCommandInput;
      output: ListCommonControlsCommandOutput;
    };
  };
}
