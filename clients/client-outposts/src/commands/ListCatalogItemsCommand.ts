// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCatalogItemsInput, ListCatalogItemsOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { ListCatalogItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCatalogItemsCommand}.
 */
export interface ListCatalogItemsCommandInput extends ListCatalogItemsInput {}
/**
 * @public
 *
 * The output of {@link ListCatalogItemsCommand}.
 */
export interface ListCatalogItemsCommandOutput extends ListCatalogItemsOutput, __MetadataBearer {}

/**
 * <p>Lists the items in the catalog.</p>
 *          <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 *  all of the specified filters. For a filter where you can specify multiple values, the results include
 *  items that match any of the values that you specify for the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListCatalogItemsCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListCatalogItemsCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // ListCatalogItemsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ItemClassFilter: [ // CatalogItemClassList
 *     "RACK" || "SERVER",
 *   ],
 *   SupportedStorageFilter: [ // SupportedStorageList
 *     "EBS" || "S3",
 *   ],
 *   EC2FamilyFilter: [ // EC2FamilyList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListCatalogItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListCatalogItemsOutput
 * //   CatalogItems: [ // CatalogItemListDefinition
 * //     { // CatalogItem
 * //       CatalogItemId: "STRING_VALUE",
 * //       ItemStatus: "AVAILABLE" || "DISCONTINUED",
 * //       EC2Capacities: [ // EC2CapacityListDefinition
 * //         { // EC2Capacity
 * //           Family: "STRING_VALUE",
 * //           MaxSize: "STRING_VALUE",
 * //           Quantity: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PowerKva: Number("float"),
 * //       WeightLbs: Number("int"),
 * //       SupportedUplinkGbps: [ // SupportedUplinkGbpsListDefinition
 * //         Number("int"),
 * //       ],
 * //       SupportedStorage: [ // SupportedStorageList
 * //         "EBS" || "S3",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCatalogItemsCommandInput - {@link ListCatalogItemsCommandInput}
 * @returns {@link ListCatalogItemsCommandOutput}
 * @see {@link ListCatalogItemsCommandInput} for command's `input` shape.
 * @see {@link ListCatalogItemsCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class ListCatalogItemsCommand extends $Command
  .classBuilder<
    ListCatalogItemsCommandInput,
    ListCatalogItemsCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "ListCatalogItems", {})
  .n("OutpostsClient", "ListCatalogItemsCommand")
  .sc(ListCatalogItems$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCatalogItemsInput;
      output: ListCatalogItemsOutput;
    };
    sdk: {
      input: ListCatalogItemsCommandInput;
      output: ListCatalogItemsCommandOutput;
    };
  };
}
