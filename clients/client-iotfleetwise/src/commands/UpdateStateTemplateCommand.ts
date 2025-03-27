// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { UpdateStateTemplateRequest, UpdateStateTemplateResponse } from "../models/models_0";
import { de_UpdateStateTemplateCommand, se_UpdateStateTemplateCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStateTemplateCommand}.
 */
export interface UpdateStateTemplateCommandInput extends UpdateStateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStateTemplateCommand}.
 */
export interface UpdateStateTemplateCommandOutput extends UpdateStateTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates a state template.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, UpdateStateTemplateCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, UpdateStateTemplateCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // UpdateStateTemplateRequest
 *   identifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   stateTemplatePropertiesToAdd: [ // StateTemplateProperties
 *     "STRING_VALUE",
 *   ],
 *   stateTemplatePropertiesToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   dataExtraDimensions: [ // StateTemplateDataExtraDimensionNodePathList
 *     "STRING_VALUE",
 *   ],
 *   metadataExtraDimensions: [ // StateTemplateMetadataExtraDimensionNodePathList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateStateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStateTemplateResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateStateTemplateCommandInput - {@link UpdateStateTemplateCommandInput}
 * @returns {@link UpdateStateTemplateCommandOutput}
 * @see {@link UpdateStateTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateStateTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
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
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class UpdateStateTemplateCommand extends $Command
  .classBuilder<
    UpdateStateTemplateCommandInput,
    UpdateStateTemplateCommandOutput,
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
  .s("IoTAutobahnControlPlane", "UpdateStateTemplate", {})
  .n("IoTFleetWiseClient", "UpdateStateTemplateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateStateTemplateCommand)
  .de(de_UpdateStateTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStateTemplateRequest;
      output: UpdateStateTemplateResponse;
    };
    sdk: {
      input: UpdateStateTemplateCommandInput;
      output: UpdateStateTemplateCommandOutput;
    };
  };
}
