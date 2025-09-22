// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIndexFieldRequest, DeleteIndexFieldResponse } from "../models/models_0";
import { DeleteIndexField } from "../schemas/schemas_1_Index";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIndexFieldCommand}.
 */
export interface DeleteIndexFieldCommandInput extends DeleteIndexFieldRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIndexFieldCommand}.
 */
export interface DeleteIndexFieldCommandOutput extends DeleteIndexFieldResponse, __MetadataBearer {}

/**
 * <p>Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteIndexFieldCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteIndexFieldCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DeleteIndexFieldRequest
 *   DomainName: "STRING_VALUE", // required
 *   IndexFieldName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIndexFieldCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIndexFieldResponse
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
 * @param DeleteIndexFieldCommandInput - {@link DeleteIndexFieldCommandInput}
 * @returns {@link DeleteIndexFieldCommandOutput}
 * @see {@link DeleteIndexFieldCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexFieldCommandOutput} for command's `response` shape.
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
export class DeleteIndexFieldCommand extends $Command
  .classBuilder<
    DeleteIndexFieldCommandInput,
    DeleteIndexFieldCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("A9SearchCloudConfigService2013", "DeleteIndexField", {})
  .n("CloudSearchClient", "DeleteIndexFieldCommand")
  .sc(DeleteIndexField)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIndexFieldRequest;
      output: DeleteIndexFieldResponse;
    };
    sdk: {
      input: DeleteIndexFieldCommandInput;
      output: DeleteIndexFieldCommandOutput;
    };
  };
}
