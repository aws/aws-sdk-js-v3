// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { GetStateTemplateRequest, GetStateTemplateResponse } from "../models/models_0";
import { GetStateTemplate } from "../schemas/schemas_7_Update";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStateTemplateCommand}.
 */
export interface GetStateTemplateCommandInput extends GetStateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetStateTemplateCommand}.
 */
export interface GetStateTemplateCommandOutput extends GetStateTemplateResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a state template.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetStateTemplateCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetStateTemplateCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetStateTemplateRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetStateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetStateTemplateResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   signalCatalogArn: "STRING_VALUE",
 * //   stateTemplateProperties: [ // StateTemplateProperties
 * //     "STRING_VALUE",
 * //   ],
 * //   dataExtraDimensions: [ // StateTemplateDataExtraDimensionNodePathList
 * //     "STRING_VALUE",
 * //   ],
 * //   metadataExtraDimensions: [ // StateTemplateMetadataExtraDimensionNodePathList
 * //     "STRING_VALUE",
 * //   ],
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModificationTime: new Date("TIMESTAMP"),
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStateTemplateCommandInput - {@link GetStateTemplateCommandInput}
 * @returns {@link GetStateTemplateCommandOutput}
 * @see {@link GetStateTemplateCommandInput} for command's `input` shape.
 * @see {@link GetStateTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
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
export class GetStateTemplateCommand extends $Command
  .classBuilder<
    GetStateTemplateCommandInput,
    GetStateTemplateCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "GetStateTemplate", {})
  .n("IoTFleetWiseClient", "GetStateTemplateCommand")
  .sc(GetStateTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStateTemplateRequest;
      output: GetStateTemplateResponse;
    };
    sdk: {
      input: GetStateTemplateCommandInput;
      output: GetStateTemplateCommandOutput;
    };
  };
}
