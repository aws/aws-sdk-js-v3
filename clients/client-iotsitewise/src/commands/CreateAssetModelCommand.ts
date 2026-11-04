// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssetModelRequest, CreateAssetModelResponse } from "../models/models_0";
import { CreateAssetModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssetModelCommand}.
 */
export interface CreateAssetModelCommandInput extends CreateAssetModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssetModelCommand}.
 */
export interface CreateAssetModelCommandOutput extends CreateAssetModelResponse, __MetadataBearer {}

/**
 * Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see [Defining asset models](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html) in the *IoT SiteWise User Guide*.
 *
 * You can create three types of asset models, `ASSET_MODEL`, `COMPONENT_MODEL`, or an `INTERFACE`.
 *
 * - **ASSET_MODEL** – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.
 * - **COMPONENT_MODEL** – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.
 * - **INTERFACE** – An interface is a type of model that defines a standard structure that can be applied to different asset models.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateAssetModelRequest
 *   assetModelName: "STRING_VALUE", // required
 *   assetModelType: "ASSET_MODEL" || "COMPONENT_MODEL" || "INTERFACE",
 *   assetModelId: "STRING_VALUE",
 *   assetModelExternalId: "STRING_VALUE",
 *   assetModelDescription: "STRING_VALUE",
 *   assetModelProperties: [ // AssetModelPropertyDefinitions
 *     { // AssetModelPropertyDefinition
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
 *     },
 *   ],
 *   assetModelHierarchies: [ // AssetModelHierarchyDefinitions
 *     { // AssetModelHierarchyDefinition
 *       id: "STRING_VALUE",
 *       externalId: "STRING_VALUE",
 *       name: "STRING_VALUE", // required
 *       childAssetModelId: "STRING_VALUE", // required
 *     },
 *   ],
 *   assetModelCompositeModels: [ // AssetModelCompositeModelDefinitions
 *     { // AssetModelCompositeModelDefinition
 *       id: "STRING_VALUE",
 *       externalId: "STRING_VALUE",
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       type: "STRING_VALUE", // required
 *       properties: [
 *         {
 *           id: "STRING_VALUE",
 *           externalId: "STRING_VALUE",
 *           name: "STRING_VALUE", // required
 *           dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT" || "VIDEO" || "ANNOTATION" || "JSON", // required
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
 *                     propertyPath: [
 *                       {
 *                         id: "STRING_VALUE",
 *                         name: "STRING_VALUE",
 *                       },
 *                     ],
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
 *               expression: "STRING_VALUE",
 *               variables: [
 *                 {
 *                   name: "STRING_VALUE", // required
 *                   value: {
 *                     propertyId: "STRING_VALUE",
 *                     hierarchyId: "STRING_VALUE",
 *                     propertyPath: [
 *                       {
 *                         id: "STRING_VALUE",
 *                         name: "STRING_VALUE",
 *                       },
 *                     ],
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
 *         },
 *       ],
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAssetModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetModelResponse
 * //   assetModelId: "STRING_VALUE", // required
 * //   assetModelArn: "STRING_VALUE", // required
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
 * @param CreateAssetModelCommandInput - {@link CreateAssetModelCommandInput}
 * @returns {@link CreateAssetModelCommandOutput}
 * @see {@link CreateAssetModelCommandInput} for command's `input` shape.
 * @see {@link CreateAssetModelCommandOutput} for command's `response` shape.
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
export class CreateAssetModelCommand extends command<CreateAssetModelCommandInput, CreateAssetModelCommandOutput>(
  _ep0,
  _mw0,
  "CreateAssetModel",
  CreateAssetModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssetModelRequest;
      output: CreateAssetModelResponse;
    };
    sdk: {
      input: CreateAssetModelCommandInput;
      output: CreateAssetModelCommandOutput;
    };
  };
}
