// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateComputationModelRequest, UpdateComputationModelResponse } from "../models/models_1";
import { UpdateComputationModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the computation model.
 *
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
export class UpdateComputationModelCommand extends command<UpdateComputationModelCommandInput, UpdateComputationModelCommandOutput>(
  _ep0,
  _mw0,
  "UpdateComputationModel",
  UpdateComputationModel$
) {
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
