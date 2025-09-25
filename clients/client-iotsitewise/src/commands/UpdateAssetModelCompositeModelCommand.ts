// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdateAssetModelCompositeModelRequest, UpdateAssetModelCompositeModelResponse } from "../models/models_1";
import { UpdateAssetModelCompositeModel } from "../schemas/schemas_5_Asset";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssetModelCompositeModelCommand}.
 */
export interface UpdateAssetModelCompositeModelCommandInput extends UpdateAssetModelCompositeModelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssetModelCompositeModelCommand}.
 */
export interface UpdateAssetModelCompositeModelCommandOutput
  extends UpdateAssetModelCompositeModelResponse,
    __MetadataBearer {}

/**
 * <p>Updates a composite model and all of the assets that were created from the model. Each
 *       asset created from the model inherits the updated asset model's property and hierarchy
 *       definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
 *          <important>
 *             <p>If you remove a property from a composite asset model, IoT SiteWise deletes all previous data
 *         for that property. You can’t change the type or data type of an existing property.</p>
 *             <p>To replace an existing composite asset model property with a new one with the same
 *           <code>name</code>, do the following:</p>
 *             <ol>
 *                <li>
 *                   <p>Submit an <code>UpdateAssetModelCompositeModel</code> request with the entire
 *             existing property removed.</p>
 *                </li>
 *                <li>
 *                   <p>Submit a second <code>UpdateAssetModelCompositeModel</code> request that includes
 *             the new property. The new asset property will have the same <code>name</code> as the
 *             previous one and IoT SiteWise will generate a new unique <code>id</code>.</p>
 *                </li>
 *             </ol>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAssetModelCompositeModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAssetModelCompositeModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdateAssetModelCompositeModelRequest
 *   assetModelId: "STRING_VALUE", // required
 *   assetModelCompositeModelId: "STRING_VALUE", // required
 *   assetModelCompositeModelExternalId: "STRING_VALUE",
 *   assetModelCompositeModelDescription: "STRING_VALUE",
 *   assetModelCompositeModelName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   assetModelCompositeModelProperties: [ // AssetModelProperties
 *     { // AssetModelProperty
 *       id: "STRING_VALUE",
 *       externalId: "STRING_VALUE",
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
 *           expression: "STRING_VALUE",
 *           variables: [
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
 *     },
 *   ],
 *   ifMatch: "STRING_VALUE",
 *   ifNoneMatch: "STRING_VALUE",
 *   matchForVersionType: "LATEST" || "ACTIVE",
 * };
 * const command = new UpdateAssetModelCompositeModelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssetModelCompositeModelResponse
 * //   assetModelCompositeModelPath: [ // AssetModelCompositeModelPath // required
 * //     { // AssetModelCompositeModelPathSegment
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
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
 * @param UpdateAssetModelCompositeModelCommandInput - {@link UpdateAssetModelCompositeModelCommandInput}
 * @returns {@link UpdateAssetModelCompositeModelCommandOutput}
 * @see {@link UpdateAssetModelCompositeModelCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetModelCompositeModelCommandOutput} for command's `response` shape.
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
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>The precondition in one or more of the request-header fields evaluated to
 *         <code>FALSE</code>.</p>
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
 *
 * @public
 */
export class UpdateAssetModelCompositeModelCommand extends $Command
  .classBuilder<
    UpdateAssetModelCompositeModelCommandInput,
    UpdateAssetModelCompositeModelCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "UpdateAssetModelCompositeModel", {})
  .n("IoTSiteWiseClient", "UpdateAssetModelCompositeModelCommand")
  .sc(UpdateAssetModelCompositeModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssetModelCompositeModelRequest;
      output: UpdateAssetModelCompositeModelResponse;
    };
    sdk: {
      input: UpdateAssetModelCompositeModelCommandInput;
      output: UpdateAssetModelCompositeModelCommandOutput;
    };
  };
}
