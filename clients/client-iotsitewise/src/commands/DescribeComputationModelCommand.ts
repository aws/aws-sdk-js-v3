// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { DescribeComputationModelRequest } from "../models/models_0";
import type { DescribeComputationModelResponse } from "../models/models_1";
import { DescribeComputationModel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeComputationModelCommand}.
 */
export interface DescribeComputationModelCommandInput extends DescribeComputationModelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeComputationModelCommand}.
 */
export interface DescribeComputationModelCommandOutput extends DescribeComputationModelResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a computation model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeComputationModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeComputationModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeComputationModelRequest
 *   computationModelId: "STRING_VALUE", // required
 *   computationModelVersion: "STRING_VALUE",
 * };
 * const command = new DescribeComputationModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeComputationModelResponse
 * //   computationModelId: "STRING_VALUE", // required
 * //   computationModelArn: "STRING_VALUE", // required
 * //   computationModelName: "STRING_VALUE", // required
 * //   computationModelDescription: "STRING_VALUE",
 * //   computationModelConfiguration: { // ComputationModelConfiguration
 * //     anomalyDetection: { // ComputationModelAnomalyDetectionConfiguration
 * //       inputProperties: "STRING_VALUE", // required
 * //       resultProperty: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   computationModelDataBinding: { // ComputationModelDataBinding // required
 * //     "<keys>": { // ComputationModelDataBindingValue
 * //       assetModelProperty: { // AssetModelPropertyBindingValue
 * //         assetModelId: "STRING_VALUE", // required
 * //         propertyId: "STRING_VALUE", // required
 * //       },
 * //       assetProperty: { // AssetPropertyBindingValue
 * //         assetId: "STRING_VALUE", // required
 * //         propertyId: "STRING_VALUE", // required
 * //       },
 * //       list: [ // BindingValueList
 * //         {
 * //           assetModelProperty: {
 * //             assetModelId: "STRING_VALUE", // required
 * //             propertyId: "STRING_VALUE", // required
 * //           },
 * //           assetProperty: {
 * //             assetId: "STRING_VALUE", // required
 * //             propertyId: "STRING_VALUE", // required
 * //           },
 * //           list: [
 * //             "<ComputationModelDataBindingValue>",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   computationModelCreationDate: new Date("TIMESTAMP"), // required
 * //   computationModelLastUpdateDate: new Date("TIMESTAMP"), // required
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
 * //   computationModelVersion: "STRING_VALUE", // required
 * //   actionDefinitions: [ // ActionDefinitions // required
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
 * @param DescribeComputationModelCommandInput - {@link DescribeComputationModelCommandInput}
 * @returns {@link DescribeComputationModelCommandOutput}
 * @see {@link DescribeComputationModelCommandInput} for command's `input` shape.
 * @see {@link DescribeComputationModelCommandOutput} for command's `response` shape.
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
export class DescribeComputationModelCommand extends $Command
  .classBuilder<
    DescribeComputationModelCommandInput,
    DescribeComputationModelCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeComputationModel", {})
  .n("IoTSiteWiseClient", "DescribeComputationModelCommand")
  .sc(DescribeComputationModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeComputationModelRequest;
      output: DescribeComputationModelResponse;
    };
    sdk: {
      input: DescribeComputationModelCommandInput;
      output: DescribeComputationModelCommandOutput;
    };
  };
}
