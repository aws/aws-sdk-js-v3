// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAssetModelCompositeModelRequest, UpdateAssetModelCompositeModelResponse } from "../models/models_1";
import { UpdateAssetModelCompositeModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateAssetModelCompositeModelCommandOutput extends UpdateAssetModelCompositeModelResponse, __MetadataBearer {}

/**
 * Updates a composite model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see [Updating assets and models](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html) in the *IoT SiteWise User Guide*.
 *
 * > **Important:**
 * >
 * > If you remove a property from a composite asset model, IoT SiteWise deletes all previous data for that property. You can’t change the type or data type of an existing property.
 * >
 * > To replace an existing composite asset model property with a new one with the same `name`, do the following:
 * >
 * > 1. Submit an `UpdateAssetModelCompositeModel` request with the entire existing property removed.
 * > 2. Submit a second `UpdateAssetModelCompositeModel` request that includes the new property. The new asset property will have the same `name` as the previous one and IoT SiteWise will generate a new unique `id`.
 *
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
 *       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT" || "VIDEO" || "ANNOTATION" || "JSON", // required
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
 * //   assetModelId: "STRING_VALUE",
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
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've reached the quota for a resource. For example, this can occur if you're trying to associate more than the allowed number of child assets or attempting to create more than the allowed number of properties for an asset model.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * The precondition in one or more of the request-header fields evaluated to `FALSE`.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class UpdateAssetModelCompositeModelCommand extends command<UpdateAssetModelCompositeModelCommandInput, UpdateAssetModelCompositeModelCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAssetModelCompositeModel",
  UpdateAssetModelCompositeModel$
) {
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
