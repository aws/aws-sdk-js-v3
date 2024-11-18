// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreateAssetModelCompositeModelRequest, CreateAssetModelCompositeModelResponse } from "../models/models_0";
import {
  de_CreateAssetModelCompositeModelCommand,
  se_CreateAssetModelCompositeModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateAssetModelCompositeModelCommandOutput
  extends CreateAssetModelCompositeModelResponse,
    __MetadataBearer {}

/**
 * <p>Creates a custom composite model from specified property and hierarchy definitions. There
 *       are two types of custom composite models, <code>inline</code> and
 *         <code>component-model-based</code>. </p>
 *          <p>Use component-model-based custom composite models to define standard, reusable components.
 *       A component-model-based custom composite model consists of a name, a description, and the ID
 *       of the component model it references. A component-model-based custom composite model has no
 *       properties of its own; its referenced component model provides its associated properties to
 *       any created assets. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/custom-composite-models.html">Custom composite models (Components)</a>
 *       in the <i>IoT SiteWise User Guide</i>.</p>
 *          <p>Use inline custom composite models to organize the properties of an asset model. The
 *       properties of inline custom composite models are local to the asset model where they are
 *       included and can't be used to create multiple assets.</p>
 *          <p>To create a component-model-based model, specify the <code>composedAssetModelId</code> of
 *       an existing asset model with <code>assetModelType</code> of
 *       <code>COMPONENT_MODEL</code>.</p>
 *          <p>To create an inline model, specify the <code>assetModelCompositeModelProperties</code> and
 *       don't include an <code>composedAssetModelId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAssetModelCompositeModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAssetModelCompositeModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
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
 * @public
 */
export class CreateAssetModelCompositeModelCommand extends $Command
  .classBuilder<
    CreateAssetModelCompositeModelCommandInput,
    CreateAssetModelCompositeModelCommandOutput,
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
  .s("AWSIoTSiteWise", "CreateAssetModelCompositeModel", {})
  .n("IoTSiteWiseClient", "CreateAssetModelCompositeModelCommand")
  .f(void 0, void 0)
  .ser(se_CreateAssetModelCompositeModelCommand)
  .de(de_CreateAssetModelCompositeModelCommand)
  .build() {
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
