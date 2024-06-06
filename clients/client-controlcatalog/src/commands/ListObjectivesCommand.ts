// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlCatalogClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListObjectivesRequest, ListObjectivesResponse } from "../models/models_0";
import { de_ListObjectivesCommand, se_ListObjectivesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListObjectivesCommand}.
 */
export interface ListObjectivesCommandInput extends ListObjectivesRequest {}
/**
 * @public
 *
 * The output of {@link ListObjectivesCommand}.
 */
export interface ListObjectivesCommandOutput extends ListObjectivesResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of objectives from the Amazon Web Services Control Catalog.</p>
 *          <p>You can apply an optional filter to see the objectives that belong to a specific domain.
 *       If you don’t provide a filter, the operation returns all objectives. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlCatalogClient, ListObjectivesCommand } from "@aws-sdk/client-controlcatalog"; // ES Modules import
 * // const { ControlCatalogClient, ListObjectivesCommand } = require("@aws-sdk/client-controlcatalog"); // CommonJS import
 * const client = new ControlCatalogClient(config);
 * const input = { // ListObjectivesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ObjectiveFilter: { // ObjectiveFilter
 *     Domains: [ // DomainResourceFilterList
 *       { // DomainResourceFilter
 *         Arn: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new ListObjectivesCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectivesResponse
 * //   Objectives: [ // ObjectiveSummaryList // required
 * //     { // ObjectiveSummary
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       Domain: { // AssociatedDomainSummary
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
 * @param ListObjectivesCommandInput - {@link ListObjectivesCommandInput}
 * @returns {@link ListObjectivesCommandOutput}
 * @see {@link ListObjectivesCommandInput} for command's `input` shape.
 * @see {@link ListObjectivesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListObjectivesCommand extends $Command
  .classBuilder<
    ListObjectivesCommandInput,
    ListObjectivesCommandOutput,
    ControlCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ControlCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ControlCatalog", "ListObjectives", {})
  .n("ControlCatalogClient", "ListObjectivesCommand")
  .f(void 0, void 0)
  .ser(se_ListObjectivesCommand)
  .de(de_ListObjectivesCommand)
  .build() {}
