// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAssetModelPropertiesRequest, ListAssetModelPropertiesResponse } from "../models/models_1";
import { de_ListAssetModelPropertiesCommand, se_ListAssetModelPropertiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssetModelPropertiesCommand}.
 */
export interface ListAssetModelPropertiesCommandInput extends ListAssetModelPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetModelPropertiesCommand}.
 */
export interface ListAssetModelPropertiesCommandOutput extends ListAssetModelPropertiesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of properties associated with an asset model.
 *       If you update properties associated with the model before you finish listing all the properties,
 *         you need to start all over again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetModelPropertiesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetModelPropertiesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListAssetModelPropertiesRequest
 *   assetModelId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: "ALL" || "BASE",
 *   assetModelVersion: "STRING_VALUE",
 * };
 * const command = new ListAssetModelPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetModelPropertiesResponse
 * //   assetModelPropertySummaries: [ // AssetModelPropertySummaries // required
 * //     { // AssetModelPropertySummary
 * //       id: "STRING_VALUE",
 * //       externalId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //       dataTypeSpec: "STRING_VALUE",
 * //       unit: "STRING_VALUE",
 * //       type: { // PropertyType
 * //         attribute: { // Attribute
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //         measurement: { // Measurement
 * //           processingConfig: { // MeasurementProcessingConfig
 * //             forwardingConfig: { // ForwardingConfig
 * //               state: "DISABLED" || "ENABLED", // required
 * //             },
 * //           },
 * //         },
 * //         transform: { // Transform
 * //           expression: "STRING_VALUE", // required
 * //           variables: [ // ExpressionVariables // required
 * //             { // ExpressionVariable
 * //               name: "STRING_VALUE", // required
 * //               value: { // VariableValue
 * //                 propertyId: "STRING_VALUE",
 * //                 hierarchyId: "STRING_VALUE",
 * //                 propertyPath: [ // AssetModelPropertyPath
 * //                   { // AssetModelPropertyPathSegment
 * //                     id: "STRING_VALUE",
 * //                     name: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //           processingConfig: { // TransformProcessingConfig
 * //             computeLocation: "EDGE" || "CLOUD", // required
 * //             forwardingConfig: {
 * //               state: "DISABLED" || "ENABLED", // required
 * //             },
 * //           },
 * //         },
 * //         metric: { // Metric
 * //           expression: "STRING_VALUE",
 * //           variables: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               value: {
 * //                 propertyId: "STRING_VALUE",
 * //                 hierarchyId: "STRING_VALUE",
 * //                 propertyPath: [
 * //                   {
 * //                     id: "STRING_VALUE",
 * //                     name: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //           window: { // MetricWindow
 * //             tumbling: { // TumblingWindow
 * //               interval: "STRING_VALUE", // required
 * //               offset: "STRING_VALUE",
 * //             },
 * //           },
 * //           processingConfig: { // MetricProcessingConfig
 * //             computeLocation: "EDGE" || "CLOUD", // required
 * //           },
 * //         },
 * //       },
 * //       assetModelCompositeModelId: "STRING_VALUE",
 * //       path: [
 * //         {
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       interfaceSummaries: [ // InterfaceSummaries
 * //         { // InterfaceSummary
 * //           interfaceAssetModelId: "STRING_VALUE", // required
 * //           interfaceAssetModelPropertyId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetModelPropertiesCommandInput - {@link ListAssetModelPropertiesCommandInput}
 * @returns {@link ListAssetModelPropertiesCommandOutput}
 * @see {@link ListAssetModelPropertiesCommandInput} for command's `input` shape.
 * @see {@link ListAssetModelPropertiesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class ListAssetModelPropertiesCommand extends $Command
  .classBuilder<
    ListAssetModelPropertiesCommandInput,
    ListAssetModelPropertiesCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "ListAssetModelProperties", {})
  .n("IoTSiteWiseClient", "ListAssetModelPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_ListAssetModelPropertiesCommand)
  .de(de_ListAssetModelPropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetModelPropertiesRequest;
      output: ListAssetModelPropertiesResponse;
    };
    sdk: {
      input: ListAssetModelPropertiesCommandInput;
      output: ListAssetModelPropertiesCommandOutput;
    };
  };
}
