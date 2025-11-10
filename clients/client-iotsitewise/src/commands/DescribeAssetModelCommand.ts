// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAssetModelRequest, DescribeAssetModelResponse } from "../models/models_0";
import { DescribeAssetModel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetModelCommand}.
 */
export interface DescribeAssetModelCommandInput extends DescribeAssetModelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetModelCommand}.
 */
export interface DescribeAssetModelCommandOutput extends DescribeAssetModelResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an asset model. This includes details about the asset model's
 *       properties, hierarchies, composite models, and any interface relationships if the asset model
 *       implements interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeAssetModelRequest
 *   assetModelId: "STRING_VALUE", // required
 *   excludeProperties: true || false,
 *   assetModelVersion: "STRING_VALUE",
 * };
 * const command = new DescribeAssetModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetModelResponse
 * //   assetModelId: "STRING_VALUE", // required
 * //   assetModelExternalId: "STRING_VALUE",
 * //   assetModelArn: "STRING_VALUE", // required
 * //   assetModelName: "STRING_VALUE", // required
 * //   assetModelType: "ASSET_MODEL" || "COMPONENT_MODEL" || "INTERFACE",
 * //   assetModelDescription: "STRING_VALUE", // required
 * //   assetModelProperties: [ // AssetModelProperties // required
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
 * //   assetModelHierarchies: [ // AssetModelHierarchies // required
 * //     { // AssetModelHierarchy
 * //       id: "STRING_VALUE",
 * //       externalId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       childAssetModelId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   assetModelCompositeModels: [ // AssetModelCompositeModels
 * //     { // AssetModelCompositeModel
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       type: "STRING_VALUE", // required
 * //       properties: [
 * //         {
 * //           id: "STRING_VALUE",
 * //           externalId: "STRING_VALUE",
 * //           name: "STRING_VALUE", // required
 * //           dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //           dataTypeSpec: "STRING_VALUE",
 * //           unit: "STRING_VALUE",
 * //           type: {
 * //             attribute: {
 * //               defaultValue: "STRING_VALUE",
 * //             },
 * //             measurement: {
 * //               processingConfig: {
 * //                 forwardingConfig: {
 * //                   state: "DISABLED" || "ENABLED", // required
 * //                 },
 * //               },
 * //             },
 * //             transform: {
 * //               expression: "STRING_VALUE", // required
 * //               variables: [ // required
 * //                 {
 * //                   name: "STRING_VALUE", // required
 * //                   value: {
 * //                     propertyId: "STRING_VALUE",
 * //                     hierarchyId: "STRING_VALUE",
 * //                     propertyPath: "<AssetModelPropertyPath>",
 * //                   },
 * //                 },
 * //               ],
 * //               processingConfig: {
 * //                 computeLocation: "EDGE" || "CLOUD", // required
 * //                 forwardingConfig: {
 * //                   state: "DISABLED" || "ENABLED", // required
 * //                 },
 * //               },
 * //             },
 * //             metric: {
 * //               expression: "STRING_VALUE",
 * //               variables: [
 * //                 {
 * //                   name: "STRING_VALUE", // required
 * //                   value: {
 * //                     propertyId: "STRING_VALUE",
 * //                     hierarchyId: "STRING_VALUE",
 * //                     propertyPath: "<AssetModelPropertyPath>",
 * //                   },
 * //                 },
 * //               ],
 * //               window: {
 * //                 tumbling: {
 * //                   interval: "STRING_VALUE", // required
 * //                   offset: "STRING_VALUE",
 * //                 },
 * //               },
 * //               processingConfig: {
 * //                 computeLocation: "EDGE" || "CLOUD", // required
 * //               },
 * //             },
 * //           },
 * //           path: "<AssetModelPropertyPath>",
 * //         },
 * //       ],
 * //       id: "STRING_VALUE",
 * //       externalId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   assetModelCompositeModelSummaries: [ // AssetModelCompositeModelSummaries
 * //     { // AssetModelCompositeModelSummary
 * //       id: "STRING_VALUE", // required
 * //       externalId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       path: [ // AssetModelCompositeModelPath
 * //         { // AssetModelCompositeModelPathSegment
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   assetModelCreationDate: new Date("TIMESTAMP"), // required
 * //   assetModelLastUpdateDate: new Date("TIMESTAMP"), // required
 * //   assetModelStatus: { // AssetModelStatus
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "PROPAGATING" || "DELETING" || "FAILED", // required
 * //     error: { // ErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //       details: [ // DetailedErrors
 * //         { // DetailedError
 * //           code: "INCOMPATIBLE_COMPUTE_LOCATION" || "INCOMPATIBLE_FORWARDING_CONFIGURATION", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   assetModelVersion: "STRING_VALUE",
 * //   interfaceDetails: [ // InterfaceDetails
 * //     { // InterfaceRelationship
 * //       id: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   eTag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAssetModelCommandInput - {@link DescribeAssetModelCommandInput}
 * @returns {@link DescribeAssetModelCommandOutput}
 * @see {@link DescribeAssetModelCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetModelCommandOutput} for command's `response` shape.
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
export class DescribeAssetModelCommand extends $Command
  .classBuilder<
    DescribeAssetModelCommandInput,
    DescribeAssetModelCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeAssetModel", {})
  .n("IoTSiteWiseClient", "DescribeAssetModelCommand")
  .sc(DescribeAssetModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssetModelRequest;
      output: DescribeAssetModelResponse;
    };
    sdk: {
      input: DescribeAssetModelCommandInput;
      output: DescribeAssetModelCommandOutput;
    };
  };
}
