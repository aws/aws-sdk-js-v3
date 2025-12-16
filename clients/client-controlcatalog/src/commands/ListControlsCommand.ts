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
import type { ListControlsRequest, ListControlsResponse } from "../models/models_0";
import { ListControls$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListControlsCommand}.
 */
export interface ListControlsCommandInput extends ListControlsRequest {}
/**
 * @public
 *
 * The output of {@link ListControlsCommand}.
 */
export interface ListControlsCommandOutput extends ListControlsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of all available controls in the Control Catalog library. Allows you to discover available controls. The list of controls is given as structures of type <i>controlSummary</i>. The ARN is returned in the global <i>controlcatalog</i> format, as shown in the examples.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlCatalogClient, ListControlsCommand } from "@aws-sdk/client-controlcatalog"; // ES Modules import
 * // const { ControlCatalogClient, ListControlsCommand } = require("@aws-sdk/client-controlcatalog"); // CommonJS import
 * // import type { ControlCatalogClientConfig } from "@aws-sdk/client-controlcatalog";
 * const config = {}; // type is ControlCatalogClientConfig
 * const client = new ControlCatalogClient(config);
 * const input = { // ListControlsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filter: { // ControlFilter
 *     Implementations: { // ImplementationFilter
 *       Types: [ // ImplementationTypeFilterList
 *         "STRING_VALUE",
 *       ],
 *       Identifiers: [ // ImplementationIdentifierFilterList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new ListControlsCommand(input);
 * const response = await client.send(command);
 * // { // ListControlsResponse
 * //   Controls: [ // Controls // required
 * //     { // ControlSummary
 * //       Arn: "STRING_VALUE", // required
 * //       Aliases: [ // ControlAliases
 * //         "STRING_VALUE",
 * //       ],
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       Behavior: "PREVENTIVE" || "PROACTIVE" || "DETECTIVE",
 * //       Severity: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //       Implementation: { // ImplementationSummary
 * //         Type: "STRING_VALUE", // required
 * //         Identifier: "STRING_VALUE",
 * //       },
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       GovernedResources: [ // GovernedResources
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListControlsCommandInput - {@link ListControlsCommandInput}
 * @returns {@link ListControlsCommandOutput}
 * @see {@link ListControlsCommandInput} for command's `input` shape.
 * @see {@link ListControlsCommandOutput} for command's `response` shape.
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
export class ListControlsCommand extends $Command
  .classBuilder<
    ListControlsCommandInput,
    ListControlsCommandOutput,
    ControlCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ControlCatalog", "ListControls", {})
  .n("ControlCatalogClient", "ListControlsCommand")
  .sc(ListControls$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListControlsRequest;
      output: ListControlsResponse;
    };
    sdk: {
      input: ListControlsCommandInput;
      output: ListControlsCommandOutput;
    };
  };
}
