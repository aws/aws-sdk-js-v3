// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DefineIndexFieldRequest, DefineIndexFieldResponse } from "../models/models_0";
import { DefineIndexField$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Configures an `IndexField` for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the `IndexFieldType`. If the field exists, the new configuration replaces the old one. For more information, see [Configuring Index Fields](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html) in the *Amazon CloudSearch Developer Guide*.
 *
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
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * An internal error occurred while processing the request. If this problem persists, report an issue from the [Service Health Dashboard](http://status.aws.amazon.com/).
 *
 * @throws {@link InvalidTypeException} (client fault)
 *
 * The request was rejected because it specified an invalid type definition.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because a resource limit has already been met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because it attempted to reference a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was rejected because it has invalid parameters.
 *
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class DefineIndexFieldCommand extends command<DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput>(
  _ep0,
  _mw0,
  "DefineIndexField",
  DefineIndexField$
) {
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
