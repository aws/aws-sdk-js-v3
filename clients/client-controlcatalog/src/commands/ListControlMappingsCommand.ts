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
import type { ListControlMappingsRequest, ListControlMappingsResponse } from "../models/models_0";
import { ListControlMappings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListControlMappingsCommand}.
 */
export interface ListControlMappingsCommandInput extends ListControlMappingsRequest {}
/**
 * @public
 *
 * The output of {@link ListControlMappingsCommand}.
 */
export interface ListControlMappingsCommandOutput extends ListControlMappingsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of control mappings from the Control Catalog. Control mappings show relationships between controls and other entities, such as common controls or compliance frameworks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlCatalogClient, ListControlMappingsCommand } from "@aws-sdk/client-controlcatalog"; // ES Modules import
 * // const { ControlCatalogClient, ListControlMappingsCommand } = require("@aws-sdk/client-controlcatalog"); // CommonJS import
 * // import type { ControlCatalogClientConfig } from "@aws-sdk/client-controlcatalog";
 * const config = {}; // type is ControlCatalogClientConfig
 * const client = new ControlCatalogClient(config);
 * const input = { // ListControlMappingsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filter: { // ControlMappingFilter
 *     ControlArns: [ // ControlArnFilterList
 *       "STRING_VALUE",
 *     ],
 *     CommonControlArns: [ // CommonControlArnFilterList
 *       "STRING_VALUE",
 *     ],
 *     MappingTypes: [ // MappingTypeFilterList
 *       "FRAMEWORK" || "COMMON_CONTROL" || "RELATED_CONTROL",
 *     ],
 *   },
 * };
 * const command = new ListControlMappingsCommand(input);
 * const response = await client.send(command);
 * // { // ListControlMappingsResponse
 * //   ControlMappings: [ // ControlMappings // required
 * //     { // ControlMapping
 * //       ControlArn: "STRING_VALUE", // required
 * //       MappingType: "FRAMEWORK" || "COMMON_CONTROL" || "RELATED_CONTROL", // required
 * //       Mapping: { // Mapping Union: only one key present
 * //         Framework: { // FrameworkMappingDetails
 * //           Name: "STRING_VALUE", // required
 * //           Item: "STRING_VALUE", // required
 * //         },
 * //         CommonControl: { // CommonControlMappingDetails
 * //           CommonControlArn: "STRING_VALUE", // required
 * //         },
 * //         RelatedControl: { // RelatedControlMappingDetails
 * //           ControlArn: "STRING_VALUE",
 * //           RelationType: "COMPLEMENTARY" || "ALTERNATIVE" || "MUTUALLY_EXCLUSIVE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListControlMappingsCommandInput - {@link ListControlMappingsCommandInput}
 * @returns {@link ListControlMappingsCommandOutput}
 * @see {@link ListControlMappingsCommandInput} for command's `input` shape.
 * @see {@link ListControlMappingsCommandOutput} for command's `response` shape.
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
export class ListControlMappingsCommand extends $Command
  .classBuilder<
    ListControlMappingsCommandInput,
    ListControlMappingsCommandOutput,
    ControlCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ControlCatalog", "ListControlMappings", {})
  .n("ControlCatalogClient", "ListControlMappingsCommand")
  .sc(ListControlMappings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListControlMappingsRequest;
      output: ListControlMappingsResponse;
    };
    sdk: {
      input: ListControlMappingsCommandInput;
      output: ListControlMappingsCommandOutput;
    };
  };
}
