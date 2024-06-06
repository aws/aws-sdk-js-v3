// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdateAssetModelRequest, UpdateAssetModelResponse } from "../models/models_1";
import { de_UpdateAssetModelCommand, se_UpdateAssetModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssetModelCommand}.
 */
export interface UpdateAssetModelCommandInput extends UpdateAssetModelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssetModelCommand}.
 */
export interface UpdateAssetModelCommandOutput extends UpdateAssetModelResponse, __MetadataBearer {}

/**
 * <p>Updates an asset model and all of the assets that were created from the model. Each asset
 *       created from the model inherits the updated asset model's property and hierarchy definitions.
 *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
 *          <important>
 *             <p>This operation overwrites the existing model with the provided model. To avoid deleting
 *         your asset model's properties or hierarchies, you must include their IDs and definitions in
 *         the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p>
 *             <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that
 *         property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every
 *         asset associated with that hierarchy. You can't change the type or data type of an existing
 *         property.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdateAssetModelRequest
 *   assetModelId: "STRING_VALUE", // required
 *   assetModelName: "STRING_VALUE", // required
 *   assetModelDescription: "STRING_VALUE",
 *   assetModelProperties: [ // AssetModelProperties
 *     { // AssetModelProperty
 *       id: "STRING_VALUE",
 *       name: "STRING_VALUE", // required
 *       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 *       dataTypeSpec: "STRING_VALUE",
 *       unit: "STRING_VALUE",
 *       type: { // PropertyType
 *         attribute: { // Attribute
 *           defaultValue: "STRING_VALUE",
 *         },
 *         measurement: { // Measurement
 *           processingConfig: { // MeasurementProcessingConfig
 *             forwardingConfig: { // ForwardingConfig
 *               state: "DISABLED" || "ENABLED", // required
 *             },
 *           },
 *         },
 *         transform: { // Transform
 *           expression: "STRING_VALUE", // required
 *           variables: [ // ExpressionVariables // required
 *             { // ExpressionVariable
 *               name: "STRING_VALUE", // required
 *               value: { // VariableValue
 *                 propertyId: "STRING_VALUE",
 *                 hierarchyId: "STRING_VALUE",
 *                 propertyPath: [ // AssetModelPropertyPath
 *                   { // AssetModelPropertyPathSegment
 *                     id: "STRING_VALUE",
 *                     name: "STRING_VALUE",
 *                   },
 *                 ],
 *               },
 *             },
 *           ],
 *           processingConfig: { // TransformProcessingConfig
 *             computeLocation: "EDGE" || "CLOUD", // required
 *             forwardingConfig: {
 *               state: "DISABLED" || "ENABLED", // required
 *             },
 *           },
 *         },
 *         metric: { // Metric
 *           expression: "STRING_VALUE", // required
 *           variables: [ // required
 *             {
 *               name: "STRING_VALUE", // required
 *               value: {
 *                 propertyId: "STRING_VALUE",
 *                 hierarchyId: "STRING_VALUE",
 *                 propertyPath: [
 *                   {
 *                     id: "STRING_VALUE",
 *                     name: "STRING_VALUE",
 *                   },
 *                 ],
 *               },
 *             },
 *           ],
 *           window: { // MetricWindow
 *             tumbling: { // TumblingWindow
 *               interval: "STRING_VALUE", // required
 *               offset: "STRING_VALUE",
 *             },
 *           },
 *           processingConfig: { // MetricProcessingConfig
 *             computeLocation: "EDGE" || "CLOUD", // required
 *           },
 *         },
 *       },
 *       path: [
 *         {
 *           id: "STRING_VALUE",
 *           name: "STRING_VALUE",
 *         },
 *       ],
 *       externalId: "STRING_VALUE",
 *     },
 *   ],
 *   assetModelHierarchies: [ // AssetModelHierarchies
 *     { // AssetModelHierarchy
 *       id: "STRING_VALUE",
 *       name: "STRING_VALUE", // required
 *       childAssetModelId: "STRING_VALUE", // required
 *       externalId: "STRING_VALUE",
 *     },
 *   ],
 *   assetModelCompositeModels: [ // AssetModelCompositeModels
 *     { // AssetModelCompositeModel
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       type: "STRING_VALUE", // required
 *       properties: [
 *         {
 *           id: "STRING_VALUE",
 *           name: "STRING_VALUE", // required
 *           dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 *           dataTypeSpec: "STRING_VALUE",
 *           unit: "STRING_VALUE",
 *           type: {
 *             attribute: {
 *               defaultValue: "STRING_VALUE",
 *             },
 *             measurement: {
 *               processingConfig: {
 *                 forwardingConfig: {
 *                   state: "DISABLED" || "ENABLED", // required
 *                 },
 *               },
 *             },
 *             transform: {
 *               expression: "STRING_VALUE", // required
 *               variables: [ // required
 *                 {
 *                   name: "STRING_VALUE", // required
 *                   value: {
 *                     propertyId: "STRING_VALUE",
 *                     hierarchyId: "STRING_VALUE",
 *                     propertyPath: "<AssetModelPropertyPath>",
 *                   },
 *                 },
 *               ],
 *               processingConfig: {
 *                 computeLocation: "EDGE" || "CLOUD", // required
 *                 forwardingConfig: {
 *                   state: "DISABLED" || "ENABLED", // required
 *                 },
 *               },
 *             },
 *             metric: {
 *               expression: "STRING_VALUE", // required
 *               variables: [ // required
 *                 {
 *                   name: "STRING_VALUE", // required
 *                   value: {
 *                     propertyId: "STRING_VALUE",
 *                     hierarchyId: "STRING_VALUE",
 *                     propertyPath: "<AssetModelPropertyPath>",
 *                   },
 *                 },
 *               ],
 *               window: {
 *                 tumbling: {
 *                   interval: "STRING_VALUE", // required
 *                   offset: "STRING_VALUE",
 *                 },
 *               },
 *               processingConfig: {
 *                 computeLocation: "EDGE" || "CLOUD", // required
 *               },
 *             },
 *           },
 *           path: "<AssetModelPropertyPath>",
 *           externalId: "STRING_VALUE",
 *         },
 *       ],
 *       id: "STRING_VALUE",
 *       externalId: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   assetModelExternalId: "STRING_VALUE",
 * };
 * const command = new UpdateAssetModelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssetModelResponse
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
 * // };
 *
 * ```
 *
 * @param UpdateAssetModelCommandInput - {@link UpdateAssetModelCommandInput}
 * @returns {@link UpdateAssetModelCommandOutput}
 * @see {@link UpdateAssetModelCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the limit for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
 * @public
 */
export class UpdateAssetModelCommand extends $Command
  .classBuilder<
    UpdateAssetModelCommandInput,
    UpdateAssetModelCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "UpdateAssetModel", {})
  .n("IoTSiteWiseClient", "UpdateAssetModelCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAssetModelCommand)
  .de(de_UpdateAssetModelCommand)
  .build() {}
