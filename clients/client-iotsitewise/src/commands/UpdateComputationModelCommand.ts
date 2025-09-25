// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdateComputationModelRequest, UpdateComputationModelResponse } from "../models/models_1";
import { UpdateComputationModel } from "../schemas/schemas_2_Computation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateComputationModelCommand}.
 */
export interface UpdateComputationModelCommandInput extends UpdateComputationModelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateComputationModelCommand}.
 */
export interface UpdateComputationModelCommandOutput extends UpdateComputationModelResponse, __MetadataBearer {}

/**
 * <p>Updates the computation model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateComputationModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateComputationModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdateComputationModelRequest
 *   computationModelId: "STRING_VALUE", // required
 *   computationModelName: "STRING_VALUE", // required
 *   computationModelDescription: "STRING_VALUE",
 *   computationModelConfiguration: { // ComputationModelConfiguration
 *     anomalyDetection: { // ComputationModelAnomalyDetectionConfiguration
 *       inputProperties: "STRING_VALUE", // required
 *       resultProperty: "STRING_VALUE", // required
 *     },
 *   },
 *   computationModelDataBinding: { // ComputationModelDataBinding // required
 *     "<keys>": { // ComputationModelDataBindingValue
 *       assetModelProperty: { // AssetModelPropertyBindingValue
 *         assetModelId: "STRING_VALUE", // required
 *         propertyId: "STRING_VALUE", // required
 *       },
 *       assetProperty: { // AssetPropertyBindingValue
 *         assetId: "STRING_VALUE", // required
 *         propertyId: "STRING_VALUE", // required
 *       },
 *       list: [ // BindingValueList
 *         {
 *           assetModelProperty: {
 *             assetModelId: "STRING_VALUE", // required
 *             propertyId: "STRING_VALUE", // required
 *           },
 *           assetProperty: {
 *             assetId: "STRING_VALUE", // required
 *             propertyId: "STRING_VALUE", // required
 *           },
 *           list: [
 *             "<ComputationModelDataBindingValue>",
 *           ],
 *         },
 *       ],
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateComputationModelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateComputationModelResponse
 * //   computationModelStatus: { // ComputationModelStatus
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
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
 * @param UpdateComputationModelCommandInput - {@link UpdateComputationModelCommandInput}
 * @returns {@link UpdateComputationModelCommandOutput}
 * @see {@link UpdateComputationModelCommandInput} for command's `input` shape.
 * @see {@link UpdateComputationModelCommandOutput} for command's `response` shape.
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
export class UpdateComputationModelCommand extends $Command
  .classBuilder<
    UpdateComputationModelCommandInput,
    UpdateComputationModelCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "UpdateComputationModel", {})
  .n("IoTSiteWiseClient", "UpdateComputationModelCommand")
  .sc(UpdateComputationModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateComputationModelRequest;
      output: UpdateComputationModelResponse;
    };
    sdk: {
      input: UpdateComputationModelCommandInput;
      output: UpdateComputationModelCommandOutput;
    };
  };
}
