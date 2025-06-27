// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIndexFieldsRequest, DescribeIndexFieldsResponse } from "../models/models_0";
import { de_DescribeIndexFieldsCommand, se_DescribeIndexFieldsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIndexFieldsCommand}.
 */
export interface DescribeIndexFieldsCommandInput extends DescribeIndexFieldsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIndexFieldsCommand}.
 */
export interface DescribeIndexFieldsCommandOutput extends DescribeIndexFieldsResponse, __MetadataBearer {}

/**
 * <p>Gets information about the index fields configured for the search domain.
 *       Can be limited to specific fields by name.  By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeIndexFieldsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeIndexFieldsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeIndexFieldsRequest
 *   DomainName: "STRING_VALUE", // required
 *   FieldNames: [ // DynamicFieldNameList
 *     "STRING_VALUE",
 *   ],
 *   Deployed: true || false,
 * };
 * const command = new DescribeIndexFieldsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIndexFieldsResponse
 * //   IndexFields: [ // IndexFieldStatusList // required
 * //     { // IndexFieldStatus
 * //       Options: { // IndexField
 * //         IndexFieldName: "STRING_VALUE", // required
 * //         IndexFieldType: "int" || "double" || "literal" || "text" || "date" || "latlon" || "int-array" || "double-array" || "literal-array" || "text-array" || "date-array", // required
 * //         IntOptions: { // IntOptions
 * //           DefaultValue: Number("long"),
 * //           SourceField: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //         },
 * //         DoubleOptions: { // DoubleOptions
 * //           DefaultValue: Number("double"),
 * //           SourceField: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //         },
 * //         LiteralOptions: { // LiteralOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceField: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //         },
 * //         TextOptions: { // TextOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceField: "STRING_VALUE",
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //           HighlightEnabled: true || false,
 * //           AnalysisScheme: "STRING_VALUE",
 * //         },
 * //         DateOptions: { // DateOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceField: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //         },
 * //         LatLonOptions: { // LatLonOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceField: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //         },
 * //         IntArrayOptions: { // IntArrayOptions
 * //           DefaultValue: Number("long"),
 * //           SourceFields: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //         },
 * //         DoubleArrayOptions: { // DoubleArrayOptions
 * //           DefaultValue: Number("double"),
 * //           SourceFields: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //         },
 * //         LiteralArrayOptions: { // LiteralArrayOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceFields: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //         },
 * //         TextArrayOptions: { // TextArrayOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceFields: "STRING_VALUE",
 * //           ReturnEnabled: true || false,
 * //           HighlightEnabled: true || false,
 * //           AnalysisScheme: "STRING_VALUE",
 * //         },
 * //         DateArrayOptions: { // DateArrayOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceFields: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //         },
 * //       },
 * //       Status: { // OptionStatus
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIndexFieldsCommandInput - {@link DescribeIndexFieldsCommandInput}
 * @returns {@link DescribeIndexFieldsCommandOutput}
 * @see {@link DescribeIndexFieldsCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexFieldsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 *
 * @public
 */
export class DescribeIndexFieldsCommand extends $Command
  .classBuilder<
    DescribeIndexFieldsCommandInput,
    DescribeIndexFieldsCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("A9SearchCloudConfigService2013", "DescribeIndexFields", {})
  .n("CloudSearchClient", "DescribeIndexFieldsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIndexFieldsCommand)
  .de(de_DescribeIndexFieldsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIndexFieldsRequest;
      output: DescribeIndexFieldsResponse;
    };
    sdk: {
      input: DescribeIndexFieldsCommandInput;
      output: DescribeIndexFieldsCommandOutput;
    };
  };
}
