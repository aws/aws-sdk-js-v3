// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssetModelCompositeModelRequest, CreateAssetModelCompositeModelResponse } from "../models/models_0";
import { CreateAssetModelCompositeModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssetModelCompositeModelCommand}.
 */
export interface CreateAssetModelCompositeModelCommandInput extends CreateAssetModelCompositeModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssetModelCompositeModelCommand}.
 */
export interface CreateAssetModelCompositeModelCommandOutput extends CreateAssetModelCompositeModelResponse, __MetadataBearer {}

/**
 * Creates a custom composite model from specified property and hierarchy definitions. There are two types of custom composite models, `inline` and `component-model-based`.
 *
 * Use component-model-based custom composite models to define standard, reusable components. A component-model-based custom composite model consists of a name, a description, and the ID of the component model it references. A component-model-based custom composite model has no properties of its own; its referenced component model provides its associated properties to any created assets. For more information, see [Custom composite models (Components)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/custom-composite-models.html) in the *IoT SiteWise User Guide*.
 *
 * Use inline custom composite models to organize the properties of an asset model. The properties of inline custom composite models are local to the asset model where they are included and can't be used to create multiple assets.
 *
 * To create a component-model-based model, specify the `composedAssetModelId` of an existing asset model with `assetModelType` of `COMPONENT_MODEL`.
 *
 * To create an inline model, specify the `assetModelCompositeModelProperties` and don't include an `composedAssetModelId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAssetModelCompositeModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAssetModelCompositeModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateAssetModelCompositeModelRequest
 *   assetModelId: "STRING_VALUE", // required
 *   assetModelCompositeModelExternalId: "STRING_VALUE",
 *   parentAssetModelCompositeModelId: "STRING_VALUE",
 *   assetModelCompositeModelId: "STRING_VALUE",
 *   assetModelCompositeModelDescription: "STRING_VALUE",
 *   assetModelCompositeModelName: "STRING_VALUE", // required
 *   assetModelCompositeModelType: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   composedAssetModelId: "STRING_VALUE",
 *   assetModelCompositeModelProperties: [ // AssetModelPropertyDefinitions
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
 *   ifMatch: "STRING_VALUE",
 *   ifNoneMatch: "STRING_VALUE",
 *   matchForVersionType: "LATEST" || "ACTIVE",
 * };
 * const command = new CreateAssetModelCompositeModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetModelCompositeModelResponse
 * //   assetModelCompositeModelId: "STRING_VALUE", // required
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
 * @param CreateAssetModelCompositeModelCommandInput - {@link CreateAssetModelCompositeModelCommandInput}
 * @returns {@link CreateAssetModelCompositeModelCommandOutput}
 * @see {@link CreateAssetModelCompositeModelCommandInput} for command's `input` shape.
 * @see {@link CreateAssetModelCompositeModelCommandOutput} for command's `response` shape.
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
export class CreateAssetModelCompositeModelCommand extends command<CreateAssetModelCompositeModelCommandInput, CreateAssetModelCompositeModelCommandOutput>(
  _ep0,
  _mw0,
  "CreateAssetModelCompositeModel",
  CreateAssetModelCompositeModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssetModelCompositeModelRequest;
      output: CreateAssetModelCompositeModelResponse;
    };
    sdk: {
      input: CreateAssetModelCompositeModelCommandInput;
      output: CreateAssetModelCompositeModelCommandOutput;
    };
  };
}
