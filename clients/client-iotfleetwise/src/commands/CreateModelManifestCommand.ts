// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { CreateModelManifestRequest, CreateModelManifestResponse } from "../models/models_0";
import { de_CreateModelManifestCommand, se_CreateModelManifestCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateModelManifestCommand}.
 */
export interface CreateModelManifestCommandInput extends CreateModelManifestRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelManifestCommand}.
 */
export interface CreateModelManifestCommandOutput extends CreateModelManifestResponse, __MetadataBearer {}

/**
 * <p> Creates a vehicle model (model manifest) that specifies signals (attributes,
 *             branches, sensors, and actuators). </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicle-models.html">Vehicle models</a>
 *             in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateModelManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateModelManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTFleetWiseClient(config);
 * const input = { // CreateModelManifestRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   nodes: [ // listOfStrings // required
 *     "STRING_VALUE",
 *   ],
 *   signalCatalogArn: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateModelManifestCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelManifestCommandInput - {@link CreateModelManifestCommandInput}
 * @returns {@link CreateModelManifestCommandOutput}
 * @see {@link CreateModelManifestCommandInput} for command's `input` shape.
 * @see {@link CreateModelManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *  <p>The request couldn't be completed because it contains signals that aren't
 *             valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 * @public
 */
export class CreateModelManifestCommand extends $Command
  .classBuilder<
    CreateModelManifestCommandInput,
    CreateModelManifestCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "CreateModelManifest", {})
  .n("IoTFleetWiseClient", "CreateModelManifestCommand")
  .f(void 0, void 0)
  .ser(se_CreateModelManifestCommand)
  .de(de_CreateModelManifestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateModelManifestRequest;
      output: CreateModelManifestResponse;
    };
    sdk: {
      input: CreateModelManifestCommandInput;
      output: CreateModelManifestCommandOutput;
    };
  };
}
