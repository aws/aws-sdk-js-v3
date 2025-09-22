// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAssetModelCompositeModelRequest, DescribeAssetModelCompositeModelResponse } from "../models/models_0";
import { DescribeAssetModelCompositeModel } from "../schemas/schemas_1_Asset";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetModelCompositeModelCommand}.
 */
export interface DescribeAssetModelCompositeModelCommandInput extends DescribeAssetModelCompositeModelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetModelCompositeModelCommand}.
 */
export interface DescribeAssetModelCompositeModelCommandOutput
  extends DescribeAssetModelCompositeModelResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about an asset model composite model (also known as an asset model
 *       component). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/custom-composite-models.html">Custom composite models
 *         (Components)</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetModelCompositeModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetModelCompositeModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeAssetModelCompositeModelRequest
 *   assetModelId: "STRING_VALUE", // required
 *   assetModelCompositeModelId: "STRING_VALUE", // required
 *   assetModelVersion: "STRING_VALUE",
 * };
 * const command = new DescribeAssetModelCompositeModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetModelCompositeModelResponse
 * //   assetModelId: "STRING_VALUE", // required
 * //   assetModelCompositeModelId: "STRING_VALUE", // required
 * //   assetModelCompositeModelExternalId: "STRING_VALUE",
 * //   assetModelCompositeModelPath: [ // AssetModelCompositeModelPath // required
 * //     { // AssetModelCompositeModelPathSegment
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   assetModelCompositeModelName: "STRING_VALUE", // required
 * //   assetModelCompositeModelDescription: "STRING_VALUE", // required
 * //   assetModelCompositeModelType: "STRING_VALUE", // required
 * //   assetModelCompositeModelProperties: [ // AssetModelProperties // required
 * //     { // AssetModelProperty
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
 * //       path: [
 * //         {
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   compositionDetails: { // CompositionDetails
 * //     compositionRelationship: [ // CompositionRelationship
 * //       { // CompositionRelationshipItem
 * //         id: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   assetModelCompositeModelSummaries: [ // AssetModelCompositeModelSummaries // required
 * //     { // AssetModelCompositeModelSummary
 * //       id: "STRING_VALUE", // required
 * //       externalId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       path: [
 * //         {
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   actionDefinitions: [ // ActionDefinitions
 * //     { // ActionDefinition
 * //       actionDefinitionId: "STRING_VALUE", // required
 * //       actionName: "STRING_VALUE", // required
 * //       actionType: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAssetModelCompositeModelCommandInput - {@link DescribeAssetModelCompositeModelCommandInput}
 * @returns {@link DescribeAssetModelCompositeModelCommandOutput}
 * @see {@link DescribeAssetModelCompositeModelCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetModelCompositeModelCommandOutput} for command's `response` shape.
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
export class DescribeAssetModelCompositeModelCommand extends $Command
  .classBuilder<
    DescribeAssetModelCompositeModelCommandInput,
    DescribeAssetModelCompositeModelCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeAssetModelCompositeModel", {})
  .n("IoTSiteWiseClient", "DescribeAssetModelCompositeModelCommand")
  .sc(DescribeAssetModelCompositeModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssetModelCompositeModelRequest;
      output: DescribeAssetModelCompositeModelResponse;
    };
    sdk: {
      input: DescribeAssetModelCompositeModelCommandInput;
      output: DescribeAssetModelCompositeModelCommandOutput;
    };
  };
}
