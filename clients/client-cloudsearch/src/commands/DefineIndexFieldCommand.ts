// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DefineIndexFieldRequest, DefineIndexFieldResponse } from "../models/models_0";
import { DefineIndexField } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DefineIndexFieldCommand}.
 */
export interface DefineIndexFieldCommandInput extends DefineIndexFieldRequest {}
/**
 * @public
 *
 * The output of {@link DefineIndexFieldCommand}.
 */
export interface DefineIndexFieldCommandOutput extends DefineIndexFieldResponse, __MetadataBearer {}

/**
 * <p>Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineIndexFieldCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineIndexFieldCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DefineIndexFieldRequest
 *   DomainName: "STRING_VALUE", // required
 *   IndexField: { // IndexField
 *     IndexFieldName: "STRING_VALUE", // required
 *     IndexFieldType: "int" || "double" || "literal" || "text" || "date" || "latlon" || "int-array" || "double-array" || "literal-array" || "text-array" || "date-array", // required
 *     IntOptions: { // IntOptions
 *       DefaultValue: Number("long"),
 *       SourceField: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *     },
 *     DoubleOptions: { // DoubleOptions
 *       DefaultValue: Number("double"),
 *       SourceField: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *     },
 *     LiteralOptions: { // LiteralOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceField: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *     },
 *     TextOptions: { // TextOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceField: "STRING_VALUE",
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *       HighlightEnabled: true || false,
 *       AnalysisScheme: "STRING_VALUE",
 *     },
 *     DateOptions: { // DateOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceField: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *     },
 *     LatLonOptions: { // LatLonOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceField: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *     },
 *     IntArrayOptions: { // IntArrayOptions
 *       DefaultValue: Number("long"),
 *       SourceFields: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *     },
 *     DoubleArrayOptions: { // DoubleArrayOptions
 *       DefaultValue: Number("double"),
 *       SourceFields: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *     },
 *     LiteralArrayOptions: { // LiteralArrayOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceFields: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *     },
 *     TextArrayOptions: { // TextArrayOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceFields: "STRING_VALUE",
 *       ReturnEnabled: true || false,
 *       HighlightEnabled: true || false,
 *       AnalysisScheme: "STRING_VALUE",
 *     },
 *     DateArrayOptions: { // DateArrayOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceFields: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *     },
 *   },
 * };
 * const command = new DefineIndexFieldCommand(input);
 * const response = await client.send(command);
 * // { // DefineIndexFieldResponse
 * //   IndexField: { // IndexFieldStatus
 * //     Options: { // IndexField
 * //       IndexFieldName: "STRING_VALUE", // required
 * //       IndexFieldType: "int" || "double" || "literal" || "text" || "date" || "latlon" || "int-array" || "double-array" || "literal-array" || "text-array" || "date-array", // required
 * //       IntOptions: { // IntOptions
 * //         DefaultValue: Number("long"),
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       DoubleOptions: { // DoubleOptions
 * //         DefaultValue: Number("double"),
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       LiteralOptions: { // LiteralOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       TextOptions: { // TextOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //         HighlightEnabled: true || false,
 * //         AnalysisScheme: "STRING_VALUE",
 * //       },
 * //       DateOptions: { // DateOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       LatLonOptions: { // LatLonOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       IntArrayOptions: { // IntArrayOptions
 * //         DefaultValue: Number("long"),
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //       DoubleArrayOptions: { // DoubleArrayOptions
 * //         DefaultValue: Number("double"),
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //       LiteralArrayOptions: { // LiteralArrayOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //       TextArrayOptions: { // TextArrayOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceFields: "STRING_VALUE",
 * //         ReturnEnabled: true || false,
 * //         HighlightEnabled: true || false,
 * //         AnalysisScheme: "STRING_VALUE",
 * //       },
 * //       DateArrayOptions: { // DateArrayOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //     },
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DefineIndexFieldCommandInput - {@link DefineIndexFieldCommandInput}
 * @returns {@link DefineIndexFieldCommandOutput}
 * @see {@link DefineIndexFieldCommandInput} for command's `input` shape.
 * @see {@link DefineIndexFieldCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The request was rejected because it specified an invalid type definition.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a resource limit has already been met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was rejected because it has invalid parameters.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 *
 * @public
 */
export class DefineIndexFieldCommand extends $Command
  .classBuilder<
    DefineIndexFieldCommandInput,
    DefineIndexFieldCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("A9SearchCloudConfigService2013", "DefineIndexField", {})
  .n("CloudSearchClient", "DefineIndexFieldCommand")
  .sc(DefineIndexField)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DefineIndexFieldRequest;
      output: DefineIndexFieldResponse;
    };
    sdk: {
      input: DefineIndexFieldCommandInput;
      output: DefineIndexFieldCommandOutput;
    };
  };
}
